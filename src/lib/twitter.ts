import crypto from "crypto";

function oauthSign(
  method: string,
  url: string,
  params: Record<string, string>,
  consumerSecret: string,
  tokenSecret: string
): string {
  const sorted = Object.keys(params)
    .sort()
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
  const base =
    method +
    "&" +
    encodeURIComponent(url) +
    "&" +
    encodeURIComponent(sorted);
  const key =
    encodeURIComponent(consumerSecret) +
    "&" +
    encodeURIComponent(tokenSecret);
  return crypto.createHmac("sha1", key).update(base).digest("base64");
}

export async function postTweet(
  text: string
): Promise<{ id: string; text: string }> {
  const apiKey = process.env.TWITTER_API_KEY!;
  const apiSecret = process.env.TWITTER_API_SECRET!;
  const accessToken = process.env.TWITTER_ACCESS_TOKEN!;
  const accessTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET!;

  const method = "POST";
  const url = "https://api.twitter.com/2/tweets";
  const ts = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomBytes(16).toString("hex");

  const oauthParams: Record<string, string> = {
    oauth_consumer_key: apiKey,
    oauth_nonce: nonce,
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: ts,
    oauth_token: accessToken,
    oauth_version: "1.0",
  };

  oauthParams.oauth_signature = oauthSign(
    method,
    url,
    oauthParams,
    apiSecret,
    accessTokenSecret
  );

  const authHeader =
    "OAuth " +
    Object.keys(oauthParams)
      .sort()
      .map(
        (k) =>
          encodeURIComponent(k) + "=\"" + encodeURIComponent(oauthParams[k]) + "\""
      )
      .join(", ");

  const body = JSON.stringify({ text });

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json() as { data?: { id: string; text: string }; errors?: unknown };

  if (!res.ok) {
    throw new Error(`Twitter API error ${res.status}: ${JSON.stringify(data)}`);
  }

  return {
    id: data.data?.id ?? "unknown",
    text: data.data?.text ?? text,
  };
}
