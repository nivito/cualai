import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import NewsSidebar from "@/components/news/NewsSidebar"
import { getAllNewsSlugs, getNewsBySlug, getAdjacentNews } from "@/data/news"
import { getToolBySlug } from "@/data/tools"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getNewsBySlug(slug)
  if (!item) return { title: "Noticia no encontrada — cual.ai" }
  return {
    title: `${item.title} — cual.ai`,
    description: item.summary,
  }
}

export default async function NoticiaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getNewsBySlug(slug)
  if (!item) notFound()

  const { prev, next } = getAdjacentNews(slug)
  const relatedTools = (item.relatedTools ?? [])
    .map((s) => getToolBySlug(s))
    .filter(Boolean)

  const date = new Date(item.date).toLocaleDateString("es-LA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <NewsSidebar />
        <main className="flex-1 min-w-0">
          <article className="max-w-2xl mx-auto py-8 px-4">
            {/* Meta */}
            <div className="flex items-center gap-2 mb-4">
              <Link
                href={`/noticias?categoria=${item.category}`}
                className="text-[10px] uppercase tracking-widest text-accent font-semibold hover:text-accent-hover transition-colors"
              >
                {item.categoryLabel}
              </Link>
              <span className="text-[10px] text-text-muted">·</span>
              <span className="text-[10px] text-text-muted">{date}</span>
              <span className="text-[10px] text-text-muted">·</span>
              <span className="text-[10px] text-text-muted">
                {item.readingTime} min de lectura
              </span>
            </div>

            {/* Title */}
            <h1 className="text-xl font-bold leading-tight mb-6">{item.title}</h1>

            {/* Content */}
            <div
              className="prose-cual text-sm text-text leading-relaxed space-y-4 mb-8"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />

            {/* Source */}
            {item.source && (
              <p className="text-[10px] text-text-muted mb-8">
                Fuente: {item.source}
              </p>
            )}

            {/* Practical takeaway */}
            <div className="border border-accent/30 rounded bg-accent/5 p-4 mb-8">
              <h2 className="text-xs font-semibold text-accent mb-2">
                ¿Qué significa esto para ti?
              </h2>
              <p className="text-xs text-text leading-relaxed">
                {item.practicalTakeaway}
              </p>
            </div>

            {/* Related tools */}
            {relatedTools.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                  // Herramientas relacionadas
                </h2>
                <div className="flex flex-wrap gap-2">
                  {relatedTools.map((tool) => (
                    <Link
                      key={tool!.slug}
                      href={`/herramienta/${tool!.slug}`}
                      className="text-xs border border-border rounded px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
                    >
                      {tool!.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Prev / Next navigation */}
            <div className="flex items-stretch gap-3 border-t border-border pt-6">
              {prev ? (
                <Link
                  href={`/noticias/${prev.slug}`}
                  className="flex-1 border border-border rounded p-3 hover:border-accent transition-colors group"
                >
                  <span className="text-[10px] text-text-muted">← Anterior</span>
                  <p className="text-xs font-semibold mt-1 line-clamp-2 group-hover:text-accent transition-colors">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {next ? (
                <Link
                  href={`/noticias/${next.slug}`}
                  className="flex-1 border border-border rounded p-3 hover:border-accent transition-colors group text-right"
                >
                  <span className="text-[10px] text-text-muted">Siguiente →</span>
                  <p className="text-xs font-semibold mt-1 line-clamp-2 group-hover:text-accent transition-colors">
                    {next.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </article>

          <Footer />
        </main>
      </div>
    </div>
  )
}
