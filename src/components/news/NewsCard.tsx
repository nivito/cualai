import Link from "next/link"
import type { NewsItem } from "@/data/news"
import { getDict, type Locale } from "@/i18n"

export default function NewsCard({ item, locale = "es" }: { item: NewsItem; locale?: Locale }) {
  const t = getDict(locale)
  const newsBase = locale === "en" ? "/en/news" : "/noticias"

  const date = new Date(item.date).toLocaleDateString(locale === "en" ? "en-US" : "es-LA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Link
      href={`${newsBase}/${item.slug}`}
      className="group block border border-border rounded bg-bg-card hover:border-accent hover:shadow-[0_0_12px_rgba(88,166,255,0.1)] transition-all"
    >
      <div className="p-4">
        {/* Category + date */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
            {locale === "en" ? (item.categoryLabelEn ?? item.categoryLabel) : item.categoryLabel}
          </span>
          <span className="text-[10px] text-text-muted">·</span>
          <span className="text-[10px] text-text-muted">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {locale === "en" ? (item.titleEn ?? item.title) : item.title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-3">
          {locale === "en" ? (item.summaryEn ?? item.summary) : item.summary}
        </p>

        {/* Read more */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-[10px] text-text-muted">{t.news.reading_time(item.readingTime)}</span>
          <span className="text-[10px] text-text-muted group-hover:text-accent transition-colors">
            {t.news.read_more}
          </span>
        </div>
      </div>
    </Link>
  )
}
