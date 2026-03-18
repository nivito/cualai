import { getSupabaseAdmin } from "@/lib/supabase";
import Anthropic from "@anthropic-ai/sdk";

interface RawItem {
  title: string;
  url: string;
  source: string;
  description?: string;
}

// ── Source Scrapers ─────────────────────────────────────────

async function fetchHackerNewsAI(): Promise<RawItem[]> {
  try {
    const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
    if (!res.ok) return [];
    const ids: number[] = await res.json();

    const items: RawItem[] = [];
    // Check top 30 stories for AI-related content
    const top30 = ids.slice(0, 30);

    const stories = await Promise.all(
      top30.map(async (id) => {
        const r = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return r.ok ? r.json() : null;
      })
    );

    for (const story of stories) {
      if (!story?.title) continue;
      const titleLower = story.title.toLowerCase();
      if (
        titleLower.includes("ai") ||
        titleLower.includes("llm") ||
        titleLower.includes("gpt") ||
        titleLower.includes("claude") ||
        titleLower.includes("machine learning") ||
        titleLower.includes("artificial intelligence")
      ) {
        items.push({
          title: story.title,
          url: story.url || `https://news.ycombinator.com/item?id=${story.id}`,
          source: "Hacker News",
          description: story.title,
        });
      }
    }

    return items;
  } catch (err) {
    console.error("HN fetch error:", err);
    return [];
  }
}

async function fetchProductHunt(): Promise<RawItem[]> {
  const token = process.env.PRODUCTHUNT_TOKEN;
  if (!token) {
    console.warn("No PRODUCTHUNT_TOKEN, skipping Product Hunt");
    return [];
  }

  try {
    const res = await fetch("https://api.producthunt.com/v2/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `{
          posts(order: VOTES, topic: "artificial-intelligence", first: 10) {
            edges {
              node {
                name
                tagline
                url
                website
              }
            }
          }
        }`,
      }),
    });

    if (!res.ok) return [];
    const data = await res.json();
    const edges = data?.data?.posts?.edges || [];

    return edges.map((e: { node: { name: string; tagline: string; website: string; url: string } }) => ({
      title: e.node.name,
      url: e.node.website || e.node.url,
      source: "Product Hunt",
      description: e.node.tagline,
    }));
  } catch (err) {
    console.error("PH fetch error:", err);
    return [];
  }
}

async function fetchBensBites(): Promise<RawItem[]> {
  try {
    const res = await fetch("https://www.bensbites.com/feed");
    if (!res.ok) return [];
    const text = await res.text();

    const items: RawItem[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(text)) !== null && items.length < 10) {
      const itemXml = match[1];
      const title = itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
                    itemXml.match(/<title>(.*?)<\/title>/)?.[1] || "";
      const link = itemXml.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const desc = itemXml.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] ||
                   itemXml.match(/<description>(.*?)<\/description>/)?.[1] || "";

      if (title && link) {
        items.push({
          title,
          url: link,
          source: "Ben's Bites",
          description: desc.replace(/<[^>]*>/g, "").slice(0, 200),
        });
      }
    }

    return items;
  } catch (err) {
    console.error("Ben's Bites fetch error:", err);
    return [];
  }
}

async function fetchThereIsAnAIForThat(): Promise<RawItem[]> {
  try {
    const res = await fetch("https://theresanaiforthat.com/", {
      headers: { "User-Agent": "cual.ai content bot" },
    });
    if (!res.ok) return [];
    const html = await res.text();

    const items: RawItem[] = [];
    // Simple extraction of tool names and links from the page
    const linkRegex = /<a[^>]*href="(\/[^"]*)"[^>]*>([^<]+)<\/a>/g;
    let match;

    while ((match = linkRegex.exec(html)) !== null && items.length < 10) {
      const path = match[1];
      const name = match[2].trim();
      if (path.startsWith("/ai/") && name.length > 2 && name.length < 100) {
        items.push({
          title: name,
          url: `https://theresanaiforthat.com${path}`,
          source: "There's An AI For That",
          description: name,
        });
      }
    }

    return items;
  } catch (err) {
    console.error("TAAFT fetch error:", err);
    return [];
  }
}

// ── Claude Analysis ─────────────────────────────────────────

async function analyzeWithClaude(
  items: RawItem[]
): Promise<Array<{
  title: string;
  summary: string;
  source_url: string;
  source_name: string;
  is_tool: boolean;
  tool_name?: string;
  tool_description?: string;
  tool_category?: string;
  tool_pricing?: string;
}>> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || items.length === 0) return [];

  const client = new Anthropic({ apiKey });

  const itemsList = items
    .map((item, i) => `${i + 1}. "${item.title}" — ${item.description || "Sin descripción"} (fuente: ${item.source}, url: ${item.url})`)
    .join("\n");

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content: `Analiza estos items sobre AI y para cada uno determina:
1. Si es una herramienta AI nueva/relevante (is_tool: true/false)
2. Un resumen en español de 2 líneas
3. Si es herramienta: nombre, descripción corta en español, categoría (una de: imagenes-diseno, video, voz-audio, texto-escritura, desarrollo, datos-analisis, marketing, finanzas, educacion, musica, agentes-productividad, ecommerce), pricing estimado (gratis/freemium/pago)

Items:
${itemsList}

Responde SOLO con un JSON array válido, sin markdown. Cada objeto con: title, summary, source_url, source_name, is_tool, tool_name, tool_description, tool_category, tool_pricing.`,
      },
    ],
  });

  try {
    const text = message.content[0].type === "text" ? message.content[0].text : "";
    // Extract JSON from response (handle possible markdown wrapping)
    const jsonStr = text.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
    return JSON.parse(jsonStr);
  } catch {
    console.error("Failed to parse Claude response");
    return [];
  }
}

// ── Main Agent Function ─────────────────────────────────────

export async function runContentAgent(): Promise<{
  newsInserted: number;
  suggestionsInserted: number;
  errors: string[];
}> {
  const errors: string[] = [];
  let newsInserted = 0;
  let suggestionsInserted = 0;

  // Fetch from all sources in parallel
  const [hnItems, phItems, bbItems, taaftItems] = await Promise.all([
    fetchHackerNewsAI(),
    fetchProductHunt(),
    fetchBensBites(),
    fetchThereIsAnAIForThat(),
  ]);

  const allItems = [...hnItems, ...phItems, ...bbItems, ...taaftItems];

  if (allItems.length === 0) {
    return { newsInserted: 0, suggestionsInserted: 0, errors: ["No items found from any source"] };
  }

  // Analyze with Claude
  const analyzed = await analyzeWithClaude(allItems);

  if (analyzed.length === 0) {
    return { newsInserted: 0, suggestionsInserted: 0, errors: ["Claude analysis returned no results"] };
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { newsInserted: 0, suggestionsInserted: 0, errors: ["Supabase not configured — missing env vars"] };
  }

  // Insert news items
  const newsRows = analyzed.map((item) => ({
    title: item.title,
    summary: item.summary,
    source_url: item.source_url,
    source_name: item.source_name,
    tools_mentioned: item.is_tool && item.tool_name ? [item.tool_name] : [],
    raw_data: item,
  }));

  const { error: newsError } = await supabase.from("news_items").insert(newsRows);
  if (newsError) {
    errors.push(`News insert error: ${newsError.message}`);
  } else {
    newsInserted = newsRows.length;
  }

  // Insert tool suggestions for items identified as tools
  const toolSuggestions = analyzed
    .filter((item) => item.is_tool && item.tool_name)
    .map((item) => ({
      name: item.tool_name!,
      url: item.source_url,
      description: item.tool_description || item.summary,
      status: "pending",
    }));

  if (toolSuggestions.length > 0) {
    const { error: sugError } = await supabase.from("tool_suggestions").insert(toolSuggestions);
    if (sugError) {
      errors.push(`Suggestions insert error: ${sugError.message}`);
    } else {
      suggestionsInserted = toolSuggestions.length;
    }
  }

  return { newsInserted, suggestionsInserted, errors };
}
