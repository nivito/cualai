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
    const top50 = ids.slice(0, 50);

    const stories = await Promise.all(
      top50.map(async (id) => {
        const r = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return r.ok ? r.json() : null;
      })
    );

    const items: RawItem[] = [];
    for (const story of stories) {
      if (!story?.title) continue;
      const t = story.title.toLowerCase();
      if (t.includes("ai") || t.includes("llm") || t.includes("gpt") || t.includes("claude") ||
          t.includes("gemini") || t.includes("openai") || t.includes("anthropic") ||
          t.includes("machine learning") || t.includes("artificial intelligence") ||
          t.includes("deepseek") || t.includes("llama")) {
        items.push({ title: story.title, url: story.url || `https://news.ycombinator.com/item?id=${story.id}`, source: "Hacker News", description: story.title });
      }
    }
    return items;
  } catch { return []; }
}

async function fetchBensBites(): Promise<RawItem[]> {
  try {
    const res = await fetch("https://www.bensbites.com/feed");
    if (!res.ok) return [];
    const text = await res.text();

    const items: RawItem[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(text)) !== null && items.length < 8) {
      const xml = match[1];
      const title = xml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || xml.match(/<title>(.*?)<\/title>/)?.[1] || "";
      const link = xml.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const desc = xml.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] || "";

      if (title && link) {
        items.push({ title, url: link, source: "Ben's Bites", description: desc.replace(/<[^>]*>/g, "").slice(0, 300) });
      }
    }
    return items;
  } catch { return []; }
}

async function fetchTheRundownAI(): Promise<RawItem[]> {
  try {
    const res = await fetch("https://www.therundown.ai/rss");
    if (!res.ok) return [];
    const text = await res.text();

    const items: RawItem[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(text)) !== null && items.length < 8) {
      const xml = match[1];
      const title = xml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || xml.match(/<title>(.*?)<\/title>/)?.[1] || "";
      const link = xml.match(/<link>(.*?)<\/link>/)?.[1] || "";

      if (title && link) {
        items.push({ title, url: link, source: "The Rundown AI", description: title });
      }
    }
    return items;
  } catch { return []; }
}

// ── Claude: Seleccionar + Escribir artículos completos ──────

async function generateNewsArticles(items: RawItem[]): Promise<Array<{
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  practical_takeaway: string;
  category: string;
  category_label: string;
  source_url: string;
  source_name: string;
  reading_time: number;
}>> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || items.length === 0) return [];

  const client = new Anthropic({ apiKey });

  const itemsList = items
    .slice(0, 20)
    .map((item, i) => `${i + 1}. TÍTULO: "${item.title}" | FUENTE: ${item.source} | URL: ${item.url} | DESCRIPCION: ${item.description || ""}`)
    .join("\n");

  const today = new Date().toISOString().split("T")[0];

  const message = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 4000,
    messages: [
      {
        role: "user",
        content: `Eres el editor de cual.ai, un medio de noticias de IA para personas NO técnicas en Latinoamérica.

De esta lista de titulares de hoy, selecciona los 3 MÁS RELEVANTES para profesionales latinoamericanos no técnicos (emprendedores, gerentes, profesionales que usan IA en el trabajo). Prioriza noticias sobre: lanzamientos de herramientas populares, cambios de precio, nuevas capacidades de ChatGPT/Claude/Gemini, tendencias de adopción.

Para cada noticia seleccionada, escribe un artículo completo EN ESPAÑOL siguiendo este estilo:
- Título claro, sin jerga técnica, que explique la relevancia práctica
- Resumen de 2 frases para el usuario no técnico  
- Contenido HTML de 300-400 palabras con párrafos cortos, analogías del mundo real, sin tecnicismos
- Conclusión práctica ("¿Qué significa esto para mí?") de 2-3 líneas

TITULARES DE HOY:
${itemsList}

Responde SOLO con un JSON array válido (sin markdown). Cada objeto debe tener:
- id: slug corto único (ej: "openai-gpt5-lanzamiento")
- slug: slug-para-url (ej: "openai-lanza-gpt5-que-significa-para-ti")
- title: título en español
- summary: resumen de 2 frases en español
- content: HTML del artículo (usa <p>, <strong>, sin h1/h2)
- practical_takeaway: conclusión práctica 2-3 líneas
- category: una de [modelos-ia, herramientas, empresas, sociedad, legislacion]
- category_label: nombre legible de la categoría
- source_url: URL de la noticia original
- source_name: nombre de la fuente
- reading_time: minutos estimados de lectura (número)

Fecha de hoy: ${today}`,
      },
    ],
  });

  try {
    const text = message.content[0].type === "text" ? message.content[0].text : "";
    const jsonStr = text.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
    return JSON.parse(jsonStr);
  } catch {
    console.error("Failed to parse Claude news response");
    return [];
  }
}

// ── Main Agent ──────────────────────────────────────────────

export async function runContentAgent(): Promise<{
  newsInserted: number;
  errors: string[];
}> {
  const errors: string[] = [];

  const [hnItems, bbItems, trItems] = await Promise.all([
    fetchHackerNewsAI(),
    fetchBensBites(),
    fetchTheRundownAI(),
  ]);

  const allItems = [...hnItems, ...bbItems, ...trItems];

  if (allItems.length === 0) {
    return { newsInserted: 0, errors: ["No items found from any source"] };
  }

  const articles = await generateNewsArticles(allItems);

  if (articles.length === 0) {
    return { newsInserted: 0, errors: ["Claude returned no articles"] };
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { newsInserted: 0, errors: ["Supabase not configured"] };
  }

  // Insertar evitando duplicados por slug
  let inserted = 0;
  for (const article of articles) {
    const { error } = await supabase.from("news_items").upsert(
      {
        title: article.title,
        summary: article.summary,
        source_url: article.source_url,
        source_name: article.source_name,
        published_at: new Date().toISOString(),
        raw_data: {
          id: article.id,
          slug: article.slug,
          content: article.content,
          practical_takeaway: article.practical_takeaway,
          category: article.category,
          category_label: article.category_label,
          reading_time: article.reading_time,
        },
      },
      { onConflict: "source_url" }
    );

    if (error) {
      errors.push(`Insert error for "${article.title}": ${error.message}`);
    } else {
      inserted++;
    }
  }

  return { newsInserted: inserted, errors };
}
