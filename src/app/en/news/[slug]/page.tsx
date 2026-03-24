import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import NewsSidebar from "@/components/news/NewsSidebar"
import { getAllNewsSlugs, getNewsBySlug, getAdjacentNews, type NewsItem } from "@/data/news"
import { getToolBySlug } from "@/data/tools"
import { getSupabaseAdmin } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { linkGlossaryTerms } from "@/lib/glossary-links"
import { getDict } from "@/i18n"

export const revalidate = 3600

export async function generateStaticParams() {
  const staticSlugs = getAllNewsSlugs().map((slug) => ({ slug }))

  const supabase = getSupabaseAdmin()
  if (!supabase) return staticSlugs

  const { data } = await supabase
    .from("news_items")
    .select("raw_data")
    .order("published_at", { ascending: false })
    .limit(50)

  const dbSlugs = (data ?? [])
    .map((row: any) => row.raw_data?.slug)
    .filter((s: any): s is string => !!s)
    .map((slug: string) => ({ slug }))

  const seen = new Set(staticSlugs.map((p) => p.slug))
  for (const p of dbSlugs) {
    if (!seen.has(p.slug)) {
      staticSlugs.push(p)
      seen.add(p.slug)
    }
  }

  return staticSlugs
}

async function getNewsItem(slug: string): Promise<{ item: NewsItem; contentEn?: string; takeawayEn?: string } | undefined> {
  // Try static data first
  const staticItem = getNewsBySlug(slug)
  if (staticItem) return { item: staticItem, contentEn: staticItem.contentEn, takeawayEn: staticItem.practicalTakeawayEn }

  // Fallback to Supabase
  const supabase = getSupabaseAdmin()
  if (!supabase) return undefined

  const { data: row } = await supabase
    .from("news_items")
    .select("*")
    .filter("raw_data->>slug", "eq", slug)
    .single()

  if (!row) return undefined

  return {
    item: {
      id: row.raw_data?.id || row.id,
      slug: row.raw_data?.slug || row.id,
      title: row.title,
      titleEn: row.raw_data?.title_en,
      summary: row.summary || "",
      summaryEn: row.raw_data?.summary_en,
      content: row.raw_data?.content || `<p>${row.summary}</p>`,
      practicalTakeaway: row.raw_data?.practical_takeaway || "",
      category: row.raw_data?.category || "herramientas",
      categoryLabel: row.raw_data?.category_label || "Herramientas",
      date: row.published_at?.split("T")[0] || new Date().toISOString().split("T")[0],
      readingTime: row.raw_data?.reading_time || 3,
      source: row.source_name,
      sourceUrl: row.source_url,
    },
    contentEn: row.raw_data?.content_en,
    takeawayEn: row.raw_data?.practical_takeaway_en,
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = await getNewsItem(slug)
  if (!result) return { title: "Article not found — cual.ai" }
  return {
    title: `${result.item.titleEn ?? result.item.title} — cual.ai`,
    description: result.item.summaryEn ?? result.item.summary,
    alternates: {
      canonical: `https://cual.ai/en/news/${slug}`,
      languages: {
        es: `https://cual.ai/noticias/${slug}`,
        en: `https://cual.ai/en/news/${slug}`,
      },
    },
  }
}

export default async function NoticiaDetailPageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = await getNewsItem(slug)
  if (!result) notFound()

  const { item, contentEn, takeawayEn } = result
  const { prev, next } = getAdjacentNews(slug)
  const relatedTools = (item.relatedTools ?? [])
    .map((s) => getToolBySlug(s))
    .filter(Boolean)

  const t = getDict("en")

  const displayContent = contentEn || item.content
  const displayTakeaway = takeawayEn || item.practicalTakeaway
  const isSpanishOnly = !contentEn

  const date = new Date(item.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <div className="flex flex-1">
        <NewsSidebar locale="en" />
        <main className="flex-1 min-w-0">
          <article className="max-w-2xl mx-auto py-8 px-4">
            {/* Spanish-only banner */}
            {isSpanishOnly && (
              <div className="border border-yellow/30 rounded bg-yellow/5 p-3 mb-4">
                <p className="text-xs text-yellow">{t.news.article_in_spanish}</p>
              </div>
            )}

            {/* Meta */}
            <div className="flex items-center gap-2 mb-4">
              <Link
                href={`/en/news?categoria=${item.category}`}
                className="text-[10px] uppercase tracking-widest text-accent font-semibold hover:text-accent-hover transition-colors"
              >
                {item.categoryLabelEn ?? item.categoryLabel}
              </Link>
              <span className="text-[10px] text-text-muted">·</span>
              <span className="text-[10px] text-text-muted">{date}</span>
              <span className="text-[10px] text-text-muted">·</span>
              <span className="text-[10px] text-text-muted">
                {t.news.reading_time(item.readingTime)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-xl font-bold leading-tight mb-6">{item.titleEn ?? item.title}</h1>

            {/* Content */}
            <div
              className="prose-cual text-sm text-text leading-relaxed space-y-4 mb-8"
              dangerouslySetInnerHTML={{ __html: linkGlossaryTerms(displayContent) }}
            />

            {/* Source */}
            {item.source && (
              <p className="text-[10px] text-text-muted mb-8">
                {t.news.source}{" "}
                {item.sourceUrl ? (
                  <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">
                    {item.source}
                  </a>
                ) : (
                  item.source
                )}
              </p>
            )}

            {/* Practical takeaway */}
            <div className="border border-accent/30 rounded bg-accent/5 p-4 mb-8">
              <h2 className="text-xs font-semibold text-accent mb-2">
                {t.news.what_means}
              </h2>
              <p className="text-xs text-text leading-relaxed">
                {displayTakeaway}
              </p>
            </div>

            {/* Related tools */}
            {relatedTools.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                  {t.news.related_tools}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {relatedTools.map((tool) => (
                    <Link
                      key={tool!.slug}
                      href={`/en/tool/${tool!.slug}`}
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
                  href={`/en/news/${prev.slug}`}
                  className="flex-1 border border-border rounded p-3 hover:border-accent transition-colors group"
                >
                  <span className="text-[10px] text-text-muted">{t.news.prev}</span>
                  <p className="text-xs font-semibold mt-1 line-clamp-2 group-hover:text-accent transition-colors">
                    {prev.titleEn ?? prev.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {next ? (
                <Link
                  href={`/en/news/${next.slug}`}
                  className="flex-1 border border-border rounded p-3 hover:border-accent transition-colors group text-right"
                >
                  <span className="text-[10px] text-text-muted">{t.news.next}</span>
                  <p className="text-xs font-semibold mt-1 line-clamp-2 group-hover:text-accent transition-colors">
                    {next.titleEn ?? next.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </article>

          <Footer locale="en" />
        </main>
      </div>
    </div>
  )
}
