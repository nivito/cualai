"use client"

import Link from "next/link"
import { useState } from "react"

const LETTERS = ["A", "B", "C", "E", "F", "G", "H", "I", "L", "M", "O", "P", "R", "S", "T", "V"]

export default function GlosarioSidebar({ activeLetter }: { activeLetter?: string }) {
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
          {/* Back */}
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
              Glosario — A–Z
            </span>
          </div>

          {/* All terms */}
          <Link
            href="/glosario"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              !activeLetter
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>📖</span>
            <span className="flex-1 truncate">Todos los términos</span>
          </Link>

          {/* Letter links */}
          {LETTERS.map((letter) => (
            <a
              key={letter}
              href={`/glosario#letra-${letter}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
                activeLetter === letter
                  ? "bg-bg-hover text-accent border-l-2 border-accent"
                  : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
              }`}
            >
              <span className="font-mono font-bold text-accent/70">{letter}</span>
              <span className="flex-1 truncate">{getTermsForLetter(letter)}</span>
            </a>
          ))}

          {/* Separator */}
          <div className="border-t border-border mt-3 pt-3 px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              Más secciones
            </span>
          </div>
          <Link
            href="/modelos"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 text-xs text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent transition-colors"
          >
            <span>🧠</span>
            <span className="flex-1 truncate">Modelos AI</span>
          </Link>
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

// Primeros términos de cada letra para mostrar como preview
function getTermsForLetter(letter: string): string {
  const map: Record<string, string> = {
    A: "AEO, Agente AI, Anthropic, API",
    B: "Benchmark",
    C: "CLI",
    E: "Embedding",
    F: "Fine-tuning",
    G: "GEO, GPU",
    H: "Hallucination",
    I: "Inference, Inteligencia Artificial",
    L: "Linux, LLM",
    M: "MCP, Modelo, Multimodal",
    O: "Open Source, OpenAI, OpenClaw",
    P: "Perplexity, Prompt",
    R: "RAG, RAM",
    S: "Servidor, Sistema de Instrucciones, Skill",
    T: "Temperatura, Terminal, Token",
    V: "Ventana de Contexto, VPN, VPS",
  }
  return map[letter] || letter
}
