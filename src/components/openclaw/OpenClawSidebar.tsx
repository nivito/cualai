"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const SECTIONS = [
  { id: "que-es", label: "¿Qué es OpenClaw?", labelEn: "What is OpenClaw?" },
  { id: "como-funciona", label: "¿Cómo funciona?", labelEn: "How does it work?" },
  { id: "para-que-sirve", label: "¿Para qué sirve?", labelEn: "What is it for?" },
  { id: "vs-claude-code", label: "OpenClaw vs Claude Code", labelEn: "OpenClaw vs Claude Code" },
  { id: "instalacion", label: "¿Cómo se instala?", labelEn: "How to install?" },
  { id: "quien-lo-creo", label: "¿Quién lo creó?", labelEn: "Who created it?" },
  { id: "potencia", label: "¿Por qué es tan potente?", labelEn: "Why is it so powerful?" },
  { id: "faq", label: "Preguntas frecuentes", labelEn: "FAQ" },
]

export default function OpenClawSidebar({ locale = "es" }: { locale?: "es" | "en" }) {
  const pathname = usePathname() || ""
  const cleanPath = pathname.replace(/^\/(en)\/?/, "")
  const isEn = cleanPath.startsWith("en") || locale === "en"

  return (
    <aside className="w-52 shrink-0 border-r border-border bg-bg hidden lg:block">
      <div className="sticky top-16 py-4 px-3">
        <p className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3 px-2">
          Secciones
        </p>
        <nav className="space-y-0.5">
          {SECTIONS.map((s) => {
            const slug = isEn ? `/en/openclaw` : `/openclaw`
            return (
              <a
                key={s.id}
                href={`${slug}#${s.id}`}
                className="flex items-center gap-2 px-2 py-1.5 text-xs rounded transition-colors text-text-muted hover:text-accent hover:bg-bg-card border-l-2 border-transparent data-[active]:border-accent data-[active]:text-accent data-[active]:bg-bg-card"
                style={{ borderLeftWidth: "6px" }}
              >
                {s.label}
              </a>
            )
          })}
        </nav>

        <div className="mt-6 px-2">
          <p className="text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-3">Recursos</p>
          <a
            href="https://docs.openclaw.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-1.5 text-xs rounded text-text-muted hover:text-accent hover:bg-bg-card transition-colors"
          >
            📄 Docs
          </a>
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-1.5 text-xs rounded text-text-muted hover:text-accent hover:bg-bg-card transition-colors"
          >
            ⚙️ GitHub
          </a>
          <a
            href="https://clawhub.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-1.5 text-xs rounded text-text-muted hover:text-accent hover:bg-bg-card transition-colors"
          >
            🧩 ClawHub
          </a>
        </div>
      </div>
    </aside>
  )
}
