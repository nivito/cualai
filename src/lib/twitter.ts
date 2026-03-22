import { Scraper } from "agent-twitter-client";

let _scraper: Scraper | null = null;

async function getScraper(): Promise<Scraper> {
  if (_scraper) return _scraper;
  const scraper = new Scraper();
  await scraper.login(
    process.env.TWITTER_USERNAME!,
    process.env.TWITTER_PASSWORD!
  );
  _scraper = scraper;
  return scraper;
}

export async function postTweet(text: string): Promise<{ id: string; text: string }> {
  const scraper = await getScraper();
  const result = await scraper.sendTweet(text);
  // agent-twitter-client sendTweet retorna Response — parsear el json
  const data = await result.json();
  const id = data?.data?.create_tweet?.tweet_results?.result?.rest_id || "unknown";
  return { id, text };
}
