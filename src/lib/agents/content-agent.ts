import { getSupabaseAdmin } from "@/lib/supabase";
import Anthropic from "@anthropic-ai/sdk";

interface RawItem {
  title: string;
  url: string;
  source: string;
  description?: string;
}

// ── Gmail Source ────────────────────────────────────────────

async function fetchGmailNews(): Promise<RawItem[]> {
  const matonKey = process.env.MATON_API_KEY;
  if (!matonKey) {
    console.warn("No MATON_API_KEY, skipping Gmail source");
    return [];
  }

  try {
    // Buscar emails de los últimos 2 días con contenido de IA
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 2);
    const dateStr = yesterday.toISOString().split("T")[0].replace(/-/g, "/");

    const listRes = await fetch(
      `https://gateway.maton.ai/google-mail/gmail/v1/users/me/messages?maxResults=20&q=after:${dateStr}`,
      { headers: { Authorization: `Bearer ${matonKey}` } }
    );
    if (!listRes.ok) return [];
    const listData = await listRes.json();
    const messages = listData.messages || [];

    const items: RawItem[] = [];

    for (const msg of messages.slice(0, 10)) {
      const msgRes = await fetch(
        `https://gateway.maton.ai/google-mail/gmail/v1/users/me/messages/${msg.id}?format=full`,
        { headers: { Authorization: `Bearer ${matonKey}` } }
      );
      if (!msgRes.ok) continue;
      const msgData = await msgRes.json();

      const headers = msgData.payload?.headers || [];
      const subject = headers.find((h: { name: string }) => h.name === "Subject")?.value || "";
      const from = headers.find((h: { name: string }) => h.name === "From")?.value || "";

      // Extraer texto del body
      let bodyText = "";
      const parts = msgData.payload?.parts || [msgData.payload];
      for (const part of parts) {
        if (part?.mimeType === "text/plain" && part?.body?.data) {
          bodyText = Buffer.from(part.body.data, "base64").toString("utf-8").slice(0, 500);
          break;
        }
      }
      if (!bodyText && msgData.payload?.body?.data) {
        bodyText = Buffer.from(msgData.payload.body.data, "base64").toString("utf-8").slice(0, 500);
      }

      if (subject) {
        items.push({
          title: subject,
          url: `https://mail.google.com/mail/u/0/#inbox/${msg.id}`,
          source: `Email de ${from.split("<")[0].trim() || from}`,
          description: bodyText.replace(/\n+/g, " ").trim(),
        });
      }
    }

    return items;
  } catch (err) {
    console.error("Gmail fetch error:", err);
    return [];
  }
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

// ── Claude: Translate articles to English ──────────────────

interface ArticleTranslation {
  title_en: string;
  summary_en: string;
  content_en: string;
  practical_takeaway_en: string;
  category_label_en: string;
}

async function translateArticlesToEnglish(
  articles: Array<{ title: string; summary: string; content: string; practical_takeaway: string; category_label: string }>
): Promise<ArticleTranslation[]> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || articles.length === 0) return articles.map(() => ({ title_en: "", summary_en: "", content_en: "", practical_takeaway_en: "", category_label_en: "" }));

  const client = new Anthropic({ apiKey });

  const payload = articles.map((a, i) => ({
    index: i,
    title: a.title,
    summary: a.summary,
    content: a.content,
    practical_takeaway: a.practical_takeaway,
    category_label: a.category_label,
  }));

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-5-20250514",
      max_tokens: 6000,
      messages: [
        {
          role: "user",
          content: `Translate these Spanish news articles to English. Keep all HTML tags intact. Keep proper nouns (OpenAI, Claude, ChatGPT, etc.) unchanged. Return ONLY a valid JSON array (no markdown).

INPUT:
${JSON.stringify(payload)}

Each object in the output array must have:
- index: same index as input
- title_en: the translated title
- summary_en: the translated summary
- content_en: the translated HTML content
- practical_takeaway_en: the translated practical takeaway
- category_label_en: the translated category label`,
        },
      ],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";
    const jsonStr = text.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
    const translations: Array<{ index: number; title_en: string; summary_en: string; content_en: string; practical_takeaway_en: string; category_label_en: string }> = JSON.parse(jsonStr);

    // Map back by index
    return articles.map((_, i) => {
      const t = translations.find((tr) => tr.index === i);
      return {
        title_en: t?.title_en || "",
        summary_en: t?.summary_en || "",
        content_en: t?.content_en || "",
        practical_takeaway_en: t?.practical_takeaway_en || "",
        category_label_en: t?.category_label_en || "",
      };
    });
  } catch (err) {
    console.error("Failed to translate articles to English:", err);
    return articles.map(() => ({ title_en: "", summary_en: "", content_en: "", practical_takeaway_en: "", category_label_en: "" }));
  }
}

// ── Main Agent ──────────────────────────────────────────────

export async function runContentAgent(): Promise<{
  newsInserted: number;
  errors: string[];
}> {
  const errors: string[] = [];

  const [hnItems, bbItems, trItems, gmailItems] = await Promise.all([
    fetchHackerNewsAI(),
    fetchBensBites(),
    fetchTheRundownAI(),
    fetchGmailNews(),
  ]);

  const allItems = [...hnItems, ...bbItems, ...trItems, ...gmailItems];

  if (allItems.length === 0) {
    return { newsInserted: 0, errors: ["No items found from any source"] };
  }

  const articles = await generateNewsArticles(allItems);

  if (articles.length === 0) {
    return { newsInserted: 0, errors: ["Claude returned no articles"] };
  }

  // Translate articles to English
  const translations = await translateArticlesToEnglish(articles);

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { newsInserted: 0, errors: ["Supabase not configured"] };
  }

  // Insertar evitando duplicados por slug
  let inserted = 0;
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const translation = translations[i];
    const { error } = await supabase.from("news_items").insert({
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
        title_en: translation.title_en,
        summary_en: translation.summary_en,
        content_en: translation.content_en,
        practical_takeaway_en: translation.practical_takeaway_en,
        category_label_en: translation.category_label_en,
      },
    });

    if (error) {
      errors.push(`Insert error for "${article.title}": ${error.message}`);
    } else {
      inserted++;
    }
  }

  return { newsInserted: inserted, errors };
}
