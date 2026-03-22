import { getSupabaseAdmin } from "@/lib/supabase";
import { postTweet } from "@/lib/twitter";
import Anthropic from "@anthropic-ai/sdk";

// ── Helpers ─────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateTweet(
  client: Anthropic,
  title: string,
  summary: string,
  slug: string
): Promise<string> {
  const url = `https://cual.ai/noticias/${slug}`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-5-20250514",
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: `Eres el community manager de cual.ai, un directorio de herramientas de IA en español para Latinoamérica.

Genera UN tweet en español sobre esta noticia:
- Título: ${title}
- Resumen: ${summary}

Reglas:
- Máximo 260 caracteres (sin contar la URL que se agrega después)
- Tono informativo pero cercano, sin emojis excesivos
- Incluye los hashtags #AI #IA
- NO incluyas la URL, se agrega automáticamente
- Responde SOLO con el texto del tweet, nada más`,
      },
    ],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";
  const tweet = text.trim();

  // Asegurar que cabe con la URL (tweet + espacio + URL ≈ 280 max)
  const maxLen = 260;
  return tweet.length > maxLen ? tweet.slice(0, maxLen - 1) + "…" : tweet;
}

// ── Main Agent ──────────────────────────────────────────────

export async function runTwitterAgent(): Promise<{
  tweeted: number;
  tweets: string[];
}> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    throw new Error("Supabase not configured");
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY not configured");
  }

  const client = new Anthropic({ apiKey });

  // Noticias de las últimas 24h que no se han tuiteado
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const { data: newsItems, error: fetchError } = await supabase
    .from("news_items")
    .select("id, title, summary, raw_data, published_at")
    .gte("published_at", since)
    .is("tweeted_at", null)
    .order("published_at", { ascending: false })
    .limit(3);

  if (fetchError) {
    throw new Error(`Failed to fetch news: ${fetchError.message}`);
  }

  if (!newsItems || newsItems.length === 0) {
    return { tweeted: 0, tweets: [] };
  }

  const tweets: string[] = [];
  let tweeted = 0;

  for (const item of newsItems) {
    const slug = item.raw_data?.slug || item.id;

    try {
      const tweetText = await generateTweet(client, item.title, item.summary, slug);
      const fullTweet = `${tweetText}\n\nhttps://cual.ai/noticias/${slug}`;

      await postTweet(fullTweet);

      // Marcar como tuiteado
      const { error: updateError } = await supabase
        .from("news_items")
        .update({ tweeted_at: new Date().toISOString() })
        .eq("id", item.id);

      if (updateError) {
        console.error(`Failed to update tweeted_at for ${item.id}:`, updateError.message);
      }

      tweets.push(fullTweet);
      tweeted++;

      // Esperar 30s entre tweets (excepto el último)
      if (tweeted < newsItems.length) {
        await sleep(30_000);
      }
    } catch (err) {
      console.error(`Failed to tweet "${item.title}":`, err);
    }
  }

  return { tweeted, tweets };
}
