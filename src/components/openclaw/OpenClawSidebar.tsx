"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const SECTIONS = [
  { id: "que-es", label: "¿Qué es OpenClaw?", labelEn: "What is OpenClaw?", emoji: "⚡" },
  { id: "como-funciona", label: "¿Cómo funciona?", labelEn: "How does it work?", emoji: "⚙️" },
  { id: "para-que-sirve", label: "¿Para qué sirve?", labelEn: "What is it for?", emoji: "🎯" },
  { id: "vs-claude-code", label: "OpenClaw vs Claude Code", labelEn: "OpenClaw vs Claude Code", emoji: "⚖️" },
  { id: "instalacion", label: "¿Cómo se instala?", labelEn: "How to install?", emoji: "📦" },
  { id: "quien-lo-creo", label: "¿Quién lo creó?", labelEn: "Who created it?", emoji: "👤" },
  { id: "potencia", label: "¿Por qué es tan potente?", labelEn: "Why is it so powerful?", emoji: "🚀" },
  { id: "faq", label: "Preguntas frecuentes", labelEn: "FAQ", emoji: "❓" },
]

export default function OpenClawSidebar({ locale = "es" }: { locale?: "es" | "en" }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() || ""
  const isEn = pathname.startsWith("/en")

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
        <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={() => setOpen(false)} />
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

          <div className="px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              {isEn ? "OpenClaw" : "OpenClaw"}
            </span>
          </div>

          {/* Section links */}
          {SECTIONS.map((s) => {
            const href = `${isEn ? "/en/openclaw" : "/openclaw"}#${s.id}`
            return (
              <a
                key={s.id}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
              >
                <span>{s.emoji}</span>
                <span className="flex-1 truncate">{isEn ? s.labelEn : s.label}</span>
              </a>
            )
          })}

          {/* Separator + Resources */}
          <div className="border-t border-border mt-3 pt-3 px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              {isEn ? "Resources" : "Recursos"}
            </span>
          </div>

          <a
            href="https://docs.openclaw.ai"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
          >
            <span>📄</span>
            <span className="flex-1 truncate">{isEn ? "Documentation" : "Documentación"}</span>
          </a>
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
          >
            <span>⚙️</span>
            <span className="flex-1 truncate">GitHub</span>
          </a>
          <a
            href="https://clawhub.ai"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
          >
            <span>🧩</span>
            <span className="flex-1 truncate">ClawHub</span>
          </a>

          {/* Separator + More sections */}
          <div className="border-t border-border mt-3 pt-3 px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              {isEn ? "More sections" : "Más secciones"}
            </span>
          </div>
          <Link
            href={isEn ? "/en/glossary" : "/glosario"}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
          >
            <span>📖</span>
            <span className="flex-1 truncate">{isEn ? "Glossary" : "Glosario"}</span>
          </Link>
          <Link
            href={isEn ? "/en/models" : "/modelos"}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
          >
            <span>🧠</span>
            <span className="flex-1 truncate">{isEn ? "AI Models" : "Modelos AI"}</span>
          </Link>

        </nav>
      </aside>
    </>
  )
}
