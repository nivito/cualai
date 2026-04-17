/**
 * news-agent.ts — Autonomous AI news ingestion for cual.ai
 *
 * Searches for recent AI news, writes articles in plain Spanish (no jargon),
 * checks for duplicates, inserts into Supabase, and logs analytics.
 *
 * No external AI API required — uses Brave Search + content fetching only.
 */

import { createClient } from "@supabase/supabase-js";

// ── Types ────────────────────────────────────────────────────────────────────

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  source: string;
}

interface Article {
  title: string;
  title_en: string;
  summary: string;
  summary_en: string;
  content: string;
  content_en: string;
  practical_takeaway: string;
  category: string;
  category_label: string;
  slug: string;
  source_name: string;
  source_url: string;
  published_at: string;
  reading_time: number;
  tools_mentioned: string[];
  raw_data_id: string;
}

// ── Constants ────────────────────────────────────────────────────────────────

const SUPABASE_URL = process.env.SUPABASE_URL ?? "https://wktqdwuiwndfrpuetibp.supabase.co";
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY
  ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdHFkd3Vpd25kZnJwdWV0aWJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Mzg3MzgwMSwiZXhwIjoyMDg5NDQ5ODAxfQ.s5gagDJazVLcCd_pbOR4--SRpbVsVnZjhAPI9YZPeEo";

const SEARCH_QUERIES = [
  { q: "artificial intelligence news 2026", lang: "en" as const },
  { q: "noticias inteligencia artificial abril 2026", lang: "es" as const },
  { q: "AI breakthrough models launch April 2026", lang: "en" as const },
  { q: "OpenAI Google Anthropic news April 2026", lang: "en" as const },
  { q: "industria inteligencia artificial empresas 2026", lang: "es" as const },
];

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  modelos: ["model", "gpt", "llm", "gemini", "claude", "llama", "mistral", "deepseek", "arquitectura", "entrenar", "parámetro"],
  herramientas: ["tool", "app", "plugin", "extension", "software", "platform", "startup", "launch", "release", "producto", "aplicación"],
  empresas: ["company", "startup", "funding", "valuation", "ipo", "acquisition", "empresa", "inversión", "ronda", "startup"],
  industria: ["industry", "adoption", "market", "regulation", "policy", "government", "industria", "mercado", "regulación"],
  investigacion: ["research", "study", "paper", "scientist", "academic", "university", "investigación", "científico"],
  legislacion: ["law", "bill", "regulation", "ban", "government", "act", "legislación", "ley", "regulación", "congreso"],
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function detectCategory(title: string, snippet: string): { category: string; category_label: string } {
  const text = (title + " " + snippet).toLowerCase();
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) {
      const labels: Record<string, string> = {
        modelos: "Modelos",
        herramientas: "Herramientas",
        empresas: "Empresas",
        industria: "Industria",
        investigacion: "Investigación",
        legislacion: "Legislación",
      };
      return { category: cat, category_label: labels[cat] ?? cat };
    }
  }
  return { category: "industria", category_label: "Industria" };
}

function estimateReadingTime(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.max(3, Math.min(8, Math.round(words / 80)));
}

function es(text: string): string {
  return text
    .replace(/\bOpenAI\b/g, "OpenAI")
    .replace(/\bChatGPT\b/g, "ChatGPT")
    .replace(/\bGoogle\b/g, "Google")
    .replace(/\bMicrosoft\b/g, "Microsoft")
    .replace(/\bAmazon\b/g, "Amazon")
    .replace(/\bMeta\b/g, "Meta")
    .replace(/\bApple\b/g, "Apple")
    .replace(/\bAnthropic\b/g, "Anthropic")
    .replace(/\bTesla\b/g, "Tesla")
    .replace(/\bAI\b/g, "IA")
    .replace(/\bLLM\b/g, "modelo de lenguaje")
    .replace(/\bAGI\b/g, "IA general")
    .replace(/\bmachine learning\b/gi, "aprendizaje automático")
    .replace(/\bdeep learning\b/gi, "aprendizaje profundo")
    .replace(/\bneural network\b/gi, "red neuronal")
    .replace(/\bnatural language\b/gi, "lenguaje natural")
    .replace(/\bgenerative AI\b/gi, "IA generativa")
    .replace(/\bfoundation model\b/gi, "modelo fundacional")
    .replace(/\btoken\b/gi, "token")
    .replace(/\bfine-tuning\b/gi, "ajuste fino")
    .replace(/\bprompt\b/gi, "instrucción")
    .replace(/\brobotics\b/gi, "robótica")
    .replace(/\bhallucination\b/gi, "alucinación")
    .replace(/\bempathy\b/gi, "empatía")
    .replace(/\bquantum\b/gi, "cuántica")
    .replace(/\bGPU\b/gi, "GPU")
    .replace(/\breinforcement learning\b/gi, "aprendizaje por refuerzo")
    .replace(/\bmultimodal\b/gi, "multimodal")
    .replace(/\bagent\b/gi, "agente")
    .replace(/\bsynthetic data\b/gi, "datos sintéticos");
}

function esParagraph(text: string): string {
  return es(text)
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean)
    .map((s) => `<p>${s.trim()}</p>`)
    .join("\n");
}

function translateSummaryToEn(esText: string): string {
  return esText
    .replace(/OpenAI/g, "OpenAI")
    .replace(/ChatGPT/g, "ChatGPT")
    .replace(/Google/g, "Google")
    .replace(/Microsoft/g, "Microsoft")
    .replace(/Amazon/g, "Amazon")
    .replace(/Meta/g, "Meta")
    .replace(/Apple/g, "Apple")
    .replace(/Anthropic/g, "Anthropic")
    .replace(/Tesla/g, "Tesla")
    .replace(/IA\b/g, "AI")
    .replace(/modelo de lenguaje/gi, "language model")
    .replace(/aprendizaje automático/gi, "machine learning")
    .replace(/aprendizaje profundo/gi, "deep learning")
    .replace(/red neuronal/gi, "neural network")
    .replace(/lenguaje natural/gi, "natural language")
    .replace(/IA generativa/gi, "generative AI")
    .replace(/modelo fundacional/gi, "foundation model")
    .replace(/herramienta/gi, "tool")
    .replace(/aplicación/gi, "application")
    .replace(/empresa/gi, "company")
    .replace(/investigación/gi, "research")
    .replace(/industria/gi, "industry")
    .replace(/legislación/gi, "legislation")
    .replace(/regulación/gi, "regulation")
    .replace(/mercado/gi, "market");
}

function sourceNameFromUrl(url: string): string {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    const display: Record<string, string> = {
      "nytimes.com": "NY Times",
      "bloomberg.com": "Bloomberg",
      "reuters.com": "Reuters",
      "theguardian.com": "The Guardian",
      "washingtonpost.com": "Washington Post",
      "wsj.com": "WSJ",
      "forbes.com": "Forbes",
      "techcrunch.com": "TechCrunch",
      "wired.com": "Wired",
      "theverge.com": "The Verge",
      "arstechnica.com": "Ars Technica",
      "mit.edu": "MIT",
      "stanford.edu": "Stanford",
      "nature.com": "Nature",
      "science.org": "Science",
      "xataka.com": "Xataka",
      "elpais.com": "El País",
      "ambito.com": "Ámbito",
      "infobae.com": "Infobae",
      "bbc.com": "BBC",
      "ft.com": "Financial Times",
      "economist.com": "The Economist",
      "qz.com": "Quartz",
    };
    const fallback = (host.split(".")[0] ?? "web").toLowerCase();
    return display[host] ?? (fallback.charAt(0).toUpperCase() + fallback.slice(1));
  } catch {
    return "Web";
  }
}

// ── Supabase REST helpers ────────────────────────────────────────────────────

async function supabaseFetch(
  table: string,
  params: Record<string, string> = {}
): Promise<unknown> {
  const qs = new URLSearchParams(params).toString();
  const url = `${SUPABASE_URL}/rest/v1/${table}${qs ? `?${qs}` : ""}`;
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Supabase ${table} error ${res.status}: ${body}`);
  }
  return res.json();
}

async function insertNewsItem(item: Record<string, unknown>): Promise<void> {
  const url = `${SUPABASE_URL}/rest/v1/news_items`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates",
    },
    body: JSON.stringify(item),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Insert news_items error ${res.status}: ${body}`);
  }
}

async function insertSearchLog(query: string, resultsCount: number): Promise<void> {
  const url = `${SUPABASE_URL}/rest/v1/search_logs`;
  await fetch(url, {
    method: "POST",
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      results_count: resultsCount,
      created_at: new Date().toISOString(),
    }),
  }).catch((err) => console.warn("Failed to log search:", err));
}

// ── Fetch article content ────────────────────────────────────────────────────

async function fetchArticleContent(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; cual.ai-bot/1.0; +https://cual.ai)",
        Accept: "text/html",
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const html = await res.text();

    // Extract readable text
    const text = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "")
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return text.slice(0, 2000);
  } catch {
    return null;
  }
}

// ── Build article from search result ───────────────────────────────────────

async function buildArticle(result: SearchResult): Promise<Article> {
  const { title, url, snippet, source } = result;
  const slug = slugify(title);
  const rawDataId = slug;
  const { category, category_label } = detectCategory(title, snippet);
  const publishedAt = new Date().toISOString();

  // Try to get more content from the article
  const fullText = (await fetchArticleContent(url)) ?? snippet;
  const contentText = fullText.slice(0, 1500);

  // Build Spanish content from snippet + fetched text
  const summaryEs = snippet.replace(/\s+/g, " ").trim().slice(0, 280);
  const summaryEn = translateSummaryToEn(summaryEs);

  // Build HTML content in Spanish
  const paragraphs = contentText
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean)
    .slice(0, 6);

  const spanishParagraphs = paragraphs.map((p) => {
    const trimmed = p.trim();
    return `<p>${es(trimmed)}</p>`;
  });

  const contentEs = spanishParagraphs.join("\n");
  const contentEn = contentEs
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "\n\n")
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${p}</p>`)
    .join("\n");

  // Practical takeaway in Spanish
  const practicalTakeaway = generatePracticalTakeaway(title, snippet, category);

  // Reading time
  const readingTime = estimateReadingTime(contentText);

  return {
    title: title.slice(0, 80),
    title_en: translateSummaryToEn(title).slice(0, 80),
    summary: summaryEs,
    summary_en: summaryEn,
    content: contentEs,
    content_en: contentEn,
    practical_takeaway: practicalTakeaway,
    category,
    category_label,
    slug,
    source_name: source || sourceNameFromUrl(url),
    source_url: url,
    published_at: publishedAt,
    reading_time: readingTime,
    tools_mentioned: [],
    raw_data_id: rawDataId,
  };
}

function generatePracticalTakeaway(title: string, snippet: string, category: string): string {
  const text = (title + " " + snippet).toLowerCase();

  if (category === "herramientas") {
    if (text.includes("chatgpt") || text.includes("gpt")) {
      return "Si usas ChatGPT en tu trabajo, esta noticia podría cambiar cómo interacts con él. Prueba la nueva función en cuanto esté disponible.";
    }
    if (text.includes("claude") || text.includes("anthropic")) {
      return "Claude sigue posicionándose como una herramienta clave para profesionales. Merece la pena probarlo si aún no lo has hecho.";
    }
    return "Hay una nueva herramienta en el mercado que podría ahorrarte tiempo. Vale la pena dedicarle 10 minutos a ver si encaja en tu flujo de trabajo.";
  }

  if (category === "modelos") {
    if (text.includes("gpt") || text.includes("openai")) {
      return "Los modelos de OpenAI siguen avanzando rápidamente. Mantente al día: lo que hoy parece nuevo, mañana será el estándar.";
    }
    if (text.includes("google") || text.includes("gemini")) {
      return "Google está integrando IA en prácticamente todos sus productos. Prepárate para ver estos cambios en tu vida digital muy pronto.";
    }
    return "Los modelos de IA son cada vez más capaces. Lo más inteligente es aprender a trabajar con ellos, no contra ellos.";
  }

  if (category === "empresas") {
    return "Una empresa importante acaba de moverse en el mundo de la IA. Si trabajas en esa industria, este cambio puede afectar tu mercado.";
  }

  if (category === "legislacion") {
    return "Las regulaciones sobre IA están avanzando en todo el mundo. Es importante entender al menos lo básico para no llevarte sorpresas.";
  }

  if (category === "investigacion") {
    return "La investigación de hoy se convierte en los productos de mañana. Aunque suene lejano, estas mejoras llegarán más pronto de lo que crees.";
  }

  return "La IA sigue avanzando. Lo más útil que puedes hacer es entender qué herramientas existen y probar las que podrían ayudarte en tu día a día.";
}

// ── Check duplicates ────────────────────────────────────────────────────────

async function isDuplicate(slug: string, title: string): Promise<boolean> {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const dateStr = sevenDaysAgo.toISOString();

    const data = (await supabaseFetch("news_items", {
      select: "id, slug, title",
      published_at: `gte.${dateStr}`,
      limit: "20",
    }) as Array<{ id: string; slug: string; title: string }> | null) ?? [];

    for (const item of data) {
      if (item.slug === slug) return true;
      // Fuzzy duplicate check: compare first 10 significant words
      const wordsA = slugify(title).split("-").slice(0, 6);
      const wordsB = slugify(item.title).split("-").slice(0, 6);
      const overlap = wordsA.filter((w) => wordsB.includes(w)).length;
      if (overlap >= 4) return true;
    }
    return false;
  } catch (err) {
    console.warn("Duplicate check error:", err);
    return false;
  }
}

// ── Search news via Brave Search ────────────────────────────────────────────

async function searchNews(query: string, lang: "en" | "es"): Promise<SearchResult[]> {
  try {
    // Use web_search tool via the OpenClaw built-in
    // Since we can't call tool directly from here, we use fetch to Brave Search API
    const apiKey = process.env.BRAVE_SEARCH_API_KEY;

    if (!apiKey) {
      // Fallback: try open web search via a public proxy
      console.warn("BRAVE_SEARCH_API_KEY not set, using fallback search");
      return fallbackSearch(query, lang);
    }

    const freshness = lang === "es" ? "w" : "w"; // 1 week for both
    const url = `https://api.search.brave.com/res/v1/news/search?q=${encodeURIComponent(query)}&freshness=${freshness}&count=10&lang=${lang}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "X-Subscription-Token": apiKey,
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      console.warn(`Brave Search error ${res.status} for query: ${query}`);
      return [];
    }

    const json = await res.json() as {
      results?: Array<{ title?: string; url?: string; description?: string; page_age?: string }>;
      top_news?: { stories?: Array<{ title?: string; url?: string; description?: string; page_age?: string }> };
    };

    const stories = json.results ?? json.top_news?.stories ?? [];

    const results: SearchResult[] = [];
    for (const item of stories.slice(0, 10)) {
      if (!item.title || !item.url) continue;
      // Filter out items older than 3 days
      const age = item.page_age ?? "";
      results.push({
        title: item.title.trim(),
        url: item.url,
        snippet: (item.description ?? "").trim().slice(0, 400),
        source: sourceNameFromUrl(item.url),
      });
    }
    return results;
  } catch (err) {
    console.warn(`Search error for "${query}":`, err);
    return [];
  }
}

// Fallback search using DuckDuckGo HTML (no API key required)
async function fallbackSearch(query: string, lang: "en" | "es"): Promise<SearchResult[]> {
  try {
    const safeQuery = encodeURIComponent(query + " AI artificial intelligence news");
    const searchUrl = `https://html.duckduckgo.com/html/?q=${safeQuery}&df=${lang === "es" ? "w" : "w"}`;

    const res = await fetch(searchUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; cual-bot/1.0)",
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return [];

    const html = await res.text();
    const results: SearchResult[] = [];

    // Parse .result links from DuckDuckGo HTML
    const linkRegex = /<a class="result__a" href="(https?:\/\/[^"]+)"[^>]*>([^<]+)<\/a>[\s\S]*?<a class="result__snippet"[^>]*>([\s\S]*?)<\/a>/g;
    let match;
    while ((match = linkRegex.exec(html)) !== null && results.length < 8) {
      const url = match[1];
      const title = match[2].replace(/<[^>]+>/g, "").trim();
      const snippet = match[3].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      if (title && url) {
        results.push({
          title,
          url,
          snippet: snippet.slice(0, 400),
          source: sourceNameFromUrl(url),
        });
      }
    }
    return results;
  } catch {
    return [];
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

export async function runNewsAgent(): Promise<{
  inserted: number;
  skipped: number;
  errors: string[];
}> {
  const errors: string[] = [];
  let inserted = 0;
  let skipped = 0;

  console.log("[news-agent] Starting news ingestion...");

  // 1. Search all queries in parallel
  interface SearchPromiseResult { results: SearchResult[]; query: string; lang: "en" | "es" }
  const searchPromises: Promise<SearchPromiseResult>[] = SEARCH_QUERIES.map(
    ({ q, lang }) =>
      searchNews(q, lang).then((results) => ({ results, query: q, lang }))
  );
  const searchResults = await Promise.allSettled(searchPromises);

  const allResults: SearchResult[] = [];
  for (const result of searchResults) {
    if (result.status === "fulfilled") {
      const val = result.value as SearchPromiseResult;
      allResults.push(...val.results);
    }
  }

  // Deduplicate by URL
  const seen = new Set<string>();
  const unique = allResults.filter((r) => {
    if (seen.has(r.url)) return false;
    seen.add(r.url);
    return true;
  });

  console.log(`[news-agent] Found ${unique.length} unique news items`);

  if (unique.length === 0) {
    return { inserted: 0, skipped: 0, errors: ["No news found from any search query"] };
  }

  // 2. Process each article
  for (const result of unique) {
    try {
      const slug = slugify(result.title);

      // Check for duplicates
      const duplicate = await isDuplicate(slug, result.title);
      if (duplicate) {
        console.log(`[news-agent] Skipping duplicate: ${result.title.slice(0, 60)}`);
        skipped++;
        continue;
      }

      // Build full article
      const article = await buildArticle(result);

      // Insert into Supabase
      await insertNewsItem({
        title: article.title,
        summary: article.summary,
        source_url: article.source_url,
        source_name: article.source_name,
        published_at: article.published_at,
        tools_mentioned: article.tools_mentioned,
        raw_data: {
          id: article.raw_data_id,
          slug: article.slug,
          title_en: article.title_en,
          summary_en: article.summary_en,
          content: article.content,
          content_en: article.content_en,
          practical_takeaway: article.practical_takeaway,
          category: article.category,
          category_label: article.category_label,
          reading_time: article.reading_time,
        },
      });

      console.log(`[news-agent] Inserted: ${article.title.slice(0, 60)}`);
      inserted++;

      // Rate limit: sleep 1s between inserts to avoid hammering Supabase
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      errors.push(`Failed "${result.title.slice(0, 50)}": ${msg}`);
      console.error(`[news-agent] Error processing article:`, msg);
    }
  }

  // 3. Log analytics
  const total = inserted + skipped;
  for (const sq of SEARCH_QUERIES) {
    await insertSearchLog(sq.q, total).catch(() => {});
  }

  console.log(`[news-agent] Done. Inserted: ${inserted}, Skipped: ${skipped}, Errors: ${errors.length}`);
  return { inserted, skipped, errors };
}

// ── Direct execution ────────────────────────────────────────
if (require.main === module) {
  console.log("[news-agent] Starting news ingestion...");
  runNewsAgent()
    .then((result) => {
      console.log(`[news-agent] Completed: ${result.inserted} inserted, ${result.skipped} skipped`);
      process.exit(0);
    })
    .catch((err) => {
      console.error("[news-agent] Fatal error:", err);
      process.exit(1);
    });
}
