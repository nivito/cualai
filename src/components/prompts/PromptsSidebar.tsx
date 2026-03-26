"use client"

import Link from "next/link"
import { useState } from "react"

const SECTIONS_ES = [
  { id: "intro", label: "📝 Introducción", href: "/prompts#intro" },
  { id: "componentes", label: "🧩 Los 4 componentes", href: "/prompts#componentes" },
]

const LEVELS_ES = [
  { id: "nivel-1", label: "🟢 Nivel 1 — Básico", href: "/prompts#nivel-1" },
  { id: "nivel-2", label: "🟡 Nivel 2 — Intermedio", href: "/prompts#nivel-2" },
  { id: "nivel-3", label: "🔴 Nivel 3 — Avanzado", href: "/prompts#nivel-3" },
  { id: "nivel-4", label: "⚡ Nivel 4 — Expert", href: "/prompts#nivel-4" },
  { id: "agentes", label: "🤖 Era de los Agentes", href: "/prompts#agentes" },
]

const SECTIONS_EN = [
  { id: "intro", label: "📝 Introduction", href: "/en/prompts#intro" },
  { id: "componentes", label: "🧩 The 4 Components", href: "/en/prompts#componentes" },
]

const LEVELS_EN = [
  { id: "nivel-1", label: "🟢 Level 1 — Basic", href: "/en/prompts#nivel-1" },
  { id: "nivel-2", label: "🟡 Level 2 — Intermediate", href: "/en/prompts#nivel-2" },
  { id: "nivel-3", label: "🔴 Level 3 — Advanced", href: "/en/prompts#nivel-3" },
  { id: "nivel-4", label: "⚡ Level 4 — Expert", href: "/en/prompts#nivel-4" },
  { id: "agentes", label: "🤖 Age of Agents", href: "/en/prompts#agentes" },
]

export default function PromptsSidebar({ activeSection, locale = "es" }: { activeSection?: string; locale?: "es" | "en" }) {
  const [open, setOpen] = useState(false)
  const isEn = locale === "en"
  const sections = isEn ? SECTIONS_EN : SECTIONS_ES
  const levels = isEn ? LEVELS_EN : LEVELS_ES

  const linkClass = (id: string) =>
    `flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
      activeSection === id
        ? "bg-bg-hover text-accent border-l-2 border-accent"
        : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
    }`

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
          {/* Back */}
          <div className="px-4 mb-3">
            <Link
              href={isEn ? "/en" : "/"}
              onClick={() => setOpen(false)}
              className="text-[10px] text-text-muted hover:text-accent transition-colors"
            >
              {isEn ? "← Back to tools" : "← Volver a herramientas"}
            </Link>
          </div>

          {/* Guide heading */}
          <div className="px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              {isEn ? "// Prompt Guide" : "// Guía de Prompts"}
            </span>
          </div>

          {sections.map((s) => (
            <a
              key={s.id}
              href={s.href}
              onClick={() => setOpen(false)}
              className={linkClass(s.id)}
            >
              <span className="flex-1 truncate">{s.label}</span>
            </a>
          ))}

          {/* Levels heading */}
          <div className="px-4 mt-3 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              {isEn ? "// Levels" : "// Niveles"}
            </span>
          </div>

          {levels.map((l) => (
            <a
              key={l.id}
              href={l.href}
              onClick={() => setOpen(false)}
              className={linkClass(l.id)}
            >
              <span className="flex-1 truncate">{l.label}</span>
            </a>
          ))}

          {/* Separator + More sections */}
          <div className="border-t border-border mt-3 pt-3 px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              {isEn ? "More sections" : "Más secciones"}
            </span>
          </div>
          <Link
            href={isEn ? "/en/modelos" : "/modelos"}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
          >
            <span>🧠</span>
            <span className="flex-1 truncate">{isEn ? "AI Models" : "Modelos AI"}</span>
          </Link>
          <Link
            href={isEn ? "/en/glossary" : "/glosario"}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
          >
            <span>📖</span>
            <span className="flex-1 truncate">{isEn ? "Glossary" : "Glosario"}</span>
          </Link>
          <Link
            href={isEn ? "/en" : "/"}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
          >
            <span>🔍</span>
            <span className="flex-1 truncate">{isEn ? "Explore tools" : "Explorar herramientas"}</span>
          </Link>
        </nav>
      </aside>
    </>
  )
}
