import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import NewsSidebar from "@/components/news/NewsSidebar"
import NewsCard from "@/components/news/NewsCard"
import { news as staticNews, newsCategories } from "@/data/news"
import type { NewsCategory, NewsItem } from "@/data/news"
import { getSupabaseAdmin } from "@/lib/supabase"

export const metadata = {
  title: "Noticias AI — cual.ai",
  description:
    "Lo que está pasando en inteligencia artificial, explicado para todos. Noticias sin tecnicismos, con ejemplos del mundo real.",
  alternates: {
    canonical: "https://cual.ai/noticias",
    languages: { es: "https://cual.ai/noticias", en: "https://cual.ai/en/news" },
  },
}

export const revalidate = 3600; // revalida cada hora

async function getNews(category?: NewsCategory): Promise<NewsItem[]> {
  let supabaseItems: NewsItem[] = [];

  try {
    const supabase = getSupabaseAdmin();
    if (supabase) {
      let query = supabase
        .from("news_items")
        .select("*")
        .order("published_at", { ascending: false })
        .limit(50);

      if (category) {
        query = query.eq("raw_data->>category", category);
      }

      const { data } = await query;

      if (data?.length) {
        supabaseItems = data.map((row) => ({
          id: row.raw_data?.id || row.id,
          slug: row.raw_data?.slug || row.id,
          title: row.title,
          summary: row.summary || "",
          content: row.raw_data?.content || `<p>${row.summary}</p>`,
          practicalTakeaway: row.raw_data?.practical_takeaway || "",
          category: (row.raw_data?.category || "herramientas") as NewsCategory,
          categoryLabel: row.raw_data?.category_label || "Herramientas",
          date: row.published_at?.split("T")[0] || new Date().toISOString().split("T")[0],
          readingTime: row.raw_data?.reading_time || 3,
          source: row.source_name,
        }));
      }
    }
  } catch {
    // Supabase failed — supabaseItems stays empty, we still merge static below
  }

  // Static articles (optionally filtered by category)
  const staticItems = category
    ? staticNews.filter((n) => n.category === category)
    : staticNews;

  // Merge: Supabase first, then static articles whose slug isn't already present
  const seenSlugs = new Set(supabaseItems.map((n) => n.slug));
  const merged = [
    ...supabaseItems,
    ...staticItems.filter((n) => !seenSlugs.has(n.slug)),
  ];

  // Sort by date descending
  merged.sort((a, b) => b.date.localeCompare(a.date));

  return merged;
}

export default async function NoticiasPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>
}) {
  const params = await searchParams
  const activeCategory = params.categoria as NewsCategory | undefined
  const filteredNews = await getNews(activeCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <NewsSidebar activeCategory={activeCategory} />
        <main className="flex-1 min-w-0">
          {/* Header */}
          <section className="border-b border-border py-8 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl font-bold mb-2">Noticias AI</h1>
              <p className="text-text-muted text-xs">
                Lo que está pasando en inteligencia artificial, explicado para
                todos
              </p>
            </div>
          </section>

          {/* News grid */}
          <section className="py-8 px-4">
            {activeCategory && (
              <div className="flex items-center gap-2 mb-4 px-2">
                <span className="text-xs text-text-muted">Filtrando:</span>
                <span className="text-xs text-accent font-semibold">
                  {newsCategories.find((c) => c.slug === activeCategory)?.label}
                </span>
                <a
                  href="/noticias"
                  className="text-[10px] text-text-muted hover:text-accent transition-colors ml-2"
                >
                  [limpiar filtro]
                </a>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {filteredNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
            {filteredNews.length === 0 && (
              <p className="text-text-muted text-xs text-center py-12">
                No hay noticias en esta categoría todavía.
              </p>
            )}
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
