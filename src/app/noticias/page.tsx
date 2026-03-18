import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import NewsSidebar from "@/components/news/NewsSidebar"
import NewsCard from "@/components/news/NewsCard"
import { news, newsCategories, getNewsByCategory } from "@/data/news"
import type { NewsCategory } from "@/data/news"

export const metadata = {
  title: "Noticias AI — cual.ai",
  description:
    "Lo que está pasando en inteligencia artificial, explicado para todos. Noticias sin tecnicismos, con ejemplos del mundo real.",
}

export default async function NoticiasPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>
}) {
  const params = await searchParams
  const activeCategory = params.categoria as NewsCategory | undefined
  const filteredNews = activeCategory ? getNewsByCategory(activeCategory) : news

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
