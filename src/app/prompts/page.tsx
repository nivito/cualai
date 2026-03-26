import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import PromptExample from "@/components/prompts/PromptExample";
import {
  promptComponents,
  promptLevels,
  promptTips,
  expertTechniques,
} from "@/data/prompts";

export const metadata: Metadata = {
  title: "Guía de Prompts — Cómo escribir mejores prompts de IA — cual.ai",
  description:
    "Aprende a escribir prompts efectivos para ChatGPT, Claude y cualquier IA. Guía completa con ejemplos interactivos, de básico a experto.",
};

export default function PromptsPage() {
  const locale = "es";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 py-6 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-[10px] text-text-muted mb-6">
            <a href="/" className="hover:text-accent transition-colors">
              cual.ai
            </a>
            <span className="mx-1">/</span>
            <span className="text-text">Prompts</span>
          </nav>

          {/* Hero */}
          <h1 className="text-2xl font-bold text-text mb-2">
            Guía de Prompts
          </h1>
          <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-2xl">
            Un <strong className="text-text">prompt</strong> es la instrucción que le das a una IA.
            La diferencia entre una respuesta mediocre y una brillante casi siempre está en cómo
            formulas tu pregunta — no en el modelo que usas.
          </p>
          <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-2xl">
            Esta guía te enseña a construir prompts efectivos, desde lo más simple hasta técnicas
            avanzadas que usan los ingenieros de IA. Cada ejemplo muestra las partes del prompt
            con colores para que entiendas la estructura.
          </p>
          <p className="text-xs text-text-muted mb-8 max-w-2xl">
            Funciona con cualquier modelo: ChatGPT, Claude, Gemini, Llama, Mistral y más.
          </p>

          {/* ─── The 4 Components ──────────────────────────────────── */}
          <section className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              // Los 4 componentes de un buen prompt
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {promptComponents.map((comp) => (
                <div
                  key={comp.type}
                  className={`border rounded p-4 ${comp.bgColor}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span>{comp.emoji}</span>
                    <span className={`text-sm font-semibold ${comp.color}`}>
                      {comp.label}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Levels ────────────────────────────────────────────── */}
          {promptLevels.map((level) => (
            <section key={level.id} className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${level.badgeColor}`}
                >
                  Nivel {level.level}
                </span>
                <h2 className="text-lg font-bold text-text">{level.title}</h2>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-2xl">
                {level.description}
              </p>

              {/* Generic examples */}
              {level.genericExamples.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                    Ejemplos generales
                  </h3>
                  <div className="space-y-3">
                    {level.genericExamples.map((ex, i) => (
                      <PromptExample
                        key={i}
                        parts={ex.parts}
                        label={ex.label}
                        locale={locale}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Tech examples */}
              {level.techExamples.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-[10px] uppercase tracking-widest text-accent shrink-0">
                      Ingeniería / Técnico
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="space-y-3">
                    {level.techExamples.map((ex, i) => (
                      <PromptExample
                        key={i}
                        parts={ex.parts}
                        label={ex.label}
                        locale={locale}
                      />
                    ))}
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* ─── Expert Techniques Detail ──────────────────────────── */}
          <section className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              // Técnicas avanzadas en detalle
            </h2>
            <div className="space-y-3">
              {expertTechniques.map((tech) => (
                <div
                  key={tech.id}
                  className="border border-border rounded bg-bg-card p-4"
                >
                  <h3 className="text-sm font-semibold text-accent mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-2">
                    {tech.description}
                  </p>
                  <p className="text-[10px] text-text-muted">
                    <span className="text-text font-semibold">Cuándo usarlo:</span>{" "}
                    {tech.when}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Tips ──────────────────────────────────────────────── */}
          <section className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              // Tips rápidos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {promptTips.map((tip, i) => (
                <div
                  key={i}
                  className="border border-border rounded bg-bg-card p-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span>{tip.emoji}</span>
                    <span className="text-xs font-semibold text-text">
                      {tip.title}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="border border-border rounded bg-bg-card p-6 text-center mb-8">
            <p className="text-sm text-text mb-2">
              ¿Listo para probar tus prompts?
            </p>
            <p className="text-xs text-text-muted mb-4">
              Explora las mejores herramientas de IA y ponlos en práctica.
            </p>
            <a
              href="/"
              className="inline-block text-xs bg-accent text-bg px-4 py-2 rounded hover:bg-accent-hover transition-colors font-semibold"
            >
              Explorar herramientas AI →
            </a>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}
