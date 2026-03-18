"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { newsCategories, type NewsCategory } from "@/data/news"

export default function NewsSidebar({
  activeCategory,
}: {
  activeCategory?: NewsCategory
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 lg:hidden bg-accent text-bg w-10 h-10 rounded flex items-center justify-center text-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-12 left-0 z-40 h-[calc(100vh-3rem)] w-60 border-r border-border bg-bg overflow-y-auto transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="py-3">
          {/* Back to tools */}
          <div className="px-4 mb-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-[10px] text-text-muted hover:text-accent transition-colors"
            >
              ← Volver a herramientas
            </Link>
          </div>

          <div className="px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              Noticias
            </span>
          </div>

          {/* All news */}
          <Link
            href="/noticias"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              pathname === "/noticias" && !activeCategory
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>📰</span>
            <span className="flex-1 truncate">Todas</span>
          </Link>

          {/* Category filters */}
          {newsCategories.map((cat) => {
            const isActive = activeCategory === cat.slug
            const icons: Record<NewsCategory, string> = {
              "modelos-ia": "🧠",
              herramientas: "🔧",
              empresas: "🏢",
              sociedad: "👥",
              legislacion: "⚖️",
            }
            return (
              <Link
                key={cat.slug}
                href={`/noticias?categoria=${cat.slug}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
                  isActive
                    ? "bg-bg-hover text-accent border-l-2 border-accent"
                    : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
                }`}
              >
                <span>{icons[cat.slug]}</span>
                <span className="flex-1 truncate">{cat.label}</span>
              </Link>
            )
          })}

          {/* Separator + categories link */}
          <div className="border-t border-border mt-3 pt-3 px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              Herramientas
            </span>
          </div>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
          >
            <span>🔍</span>
            <span className="flex-1 truncate">Explorar herramientas</span>
          </Link>
        </nav>
      </aside>
    </>
  )
}
