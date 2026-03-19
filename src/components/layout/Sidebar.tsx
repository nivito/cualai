"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories, getToolCountByCategory } from "@/data/tools";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
          {/* Noticias link */}
          <Link
            href="/noticias"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              pathname.startsWith("/noticias")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>📰</span>
            <span className="flex-1 truncate">Noticias AI</span>
          </Link>

          {/* Cursos link */}
          <Link
            href="/cursos"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              pathname.startsWith("/cursos")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>📚</span>
            <span className="flex-1 truncate">Cursos</span>
          </Link>

          {/* Modelos link */}
          <Link
            href="/modelos"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors mb-2 ${
              pathname.startsWith("/modelos")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>🧠</span>
            <span className="flex-1 truncate">Modelos AI</span>
          </Link>

          <div className="px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              Categorías
            </span>
          </div>
          {categories.map((cat) => {
            const isActive = pathname === `/categoria/${cat.slug}`;
            const count = getToolCountByCategory(cat.slug);
            return (
              <Link
                key={cat.slug}
                href={`/categoria/${cat.slug}`}
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
