import Link from "next/link"
import type { NewsItem } from "@/data/news"

export default function NewsCard({ item }: { item: NewsItem }) {
  const date = new Date(item.date).toLocaleDateString("es-LA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Link
      href={`/noticias/${item.slug}`}
      className="group block border border-border rounded bg-bg-card hover:border-accent hover:shadow-[0_0_12px_rgba(88,166,255,0.1)] transition-all"
    >
      <div className="p-4">
        {/* Category + date */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">
            {item.categoryLabel}
          </span>
          <span className="text-[10px] text-text-muted">·</span>
          <span className="text-[10px] text-text-muted">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-3">
          {item.summary}
        </p>

        {/* Read more */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-[10px] text-text-muted">{item.readingTime} min de lectura</span>
          <span className="text-[10px] text-text-muted group-hover:text-accent transition-colors">
            Leer más →
          </span>
        </div>
      </div>
    </Link>
  )
}
