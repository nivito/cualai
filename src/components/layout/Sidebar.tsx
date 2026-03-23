"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories, getToolCountByCategory } from "@/data/tools";
import { getDict, type Locale } from "@/i18n";

export default function Sidebar({ locale = "es" }: { locale?: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = getDict(locale);

  const prefix = locale === "en" ? "/en" : "";

  // For active state detection, strip the /en prefix from pathname
  const cleanPath = locale === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 lg:hidden bg-accent text-bg w-10 h-10 rounded flex items-center justify-center text-lg shadow-lg"
        aria-label="Toggle categories"
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
          {/* ¿Qué es la IA? link */}
          <Link
            href={prefix + "/que-es-ia"}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith("/que-es-ia")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>🤖</span>
            <span className="flex-1 truncate">{t.sidebar.what_is_ai}</span>
          </Link>

          {/* Comparar link */}
          <Link
            href={prefix + "/comparar"}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith("/comparar")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>⚖️</span>
            <span className="flex-1 truncate">{t.sidebar.compare}</span>
          </Link>

          {/* Noticias link */}
          <Link
            href={prefix + "/noticias"}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith("/noticias")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>📰</span>
            <span className="flex-1 truncate">{t.sidebar.news}</span>
          </Link>

          {/* Cursos link */}
          <Link
            href={prefix + "/cursos"}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith("/cursos")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>📚</span>
            <span className="flex-1 truncate">{t.sidebar.courses}</span>
          </Link>

          {/* Modelos link */}
          <Link
            href={prefix + "/modelos"}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith("/modelos")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>🧠</span>
            <span className="flex-1 truncate">{t.sidebar.models}</span>
          </Link>

          {/* Glosario link */}
          <Link
            href={prefix + "/glosario"}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith("/glosario")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>📖</span>
            <span className="flex-1 truncate">{t.sidebar.glossary}</span>
          </Link>

          {/* Feedback link */}
          <Link
            href={prefix + "/feedback"}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors mb-2 ${
              cleanPath.startsWith("/feedback")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>💬</span>
            <span className="flex-1 truncate">{t.sidebar.feedback}</span>
          </Link>

          <div className="px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              {t.sidebar.categories}
            </span>
          </div>
          {categories.map((cat) => {
            const isActive = cleanPath === `/categoria/${cat.slug}`;
            const count = getToolCountByCategory(cat.slug);
            return (
              <Link
                key={cat.slug}
                href={`${prefix}/categoria/${cat.slug}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
                  isActive
                    ? "bg-bg-hover text-accent border-l-2 border-accent"
                    : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
                }`}
              >
                <span>{cat.icon}</span>
                <span className="flex-1 truncate">{cat.name}</span>
                <span className="text-[10px] text-text-muted">{count}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
