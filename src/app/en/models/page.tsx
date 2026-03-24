import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { aiModels, companies, formatContextWindow } from "@/data/models";

export const metadata: Metadata = {
  title: "AI Model Comparison (2026) — cual.ai",
  description:
    "Compare the best AI models: GPT-4o, Claude 3.5, Gemini 2.5, Llama 4, DeepSeek R1 and more. API pricing, context, capabilities and use cases.",
  alternates: {
    canonical: "https://cual.ai/en/models",
    languages: { es: "https://cual.ai/modelos", en: "https://cual.ai/en/models" },
  },
  openGraph: {
    title: "AI Model Comparison — cual.ai",
    description:
      "GPT-4o, Claude, Gemini, Llama, DeepSeek and more. API pricing, context and use cases.",
    url: "https://cual.ai/en/models",
    type: "website",
    siteName: "cual.ai",
  },
};

const TYPE_LABEL_EN: Record<string, string> = {
  Texto: "Text",
  Código: "Code",
  Razonamiento: "Reasoning",
  Multimodal: "Multimodal",
  Video: "Video",
  Imagen: "Image",
  Audio: "Audio",
};

const SPEED_LABEL_EN: Record<string, string> = {
  Rápido: "Fast",
  "Muy rápido": "Very fast",
  Medio: "Medium",
  "Lento (razona antes de responder)": "Slow (reasons before answering)",
  "Medio (razona internamente)": "Medium (reasons internally)",
  Lento: "Slow",
};

export default function ModelsPage() {
  const newModels = aiModels.filter((m) => m.isNew);

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <div className="flex flex-1">
        <Sidebar locale="en" />
        <main className="flex-1 min-w-0">
          <section className="border-b border-border py-8 px-4">
            <div className="max-w-3xl">
              <h1 className="text-xl font-bold mb-1">
                AI Model Comparison
              </h1>
              <p className="text-text-muted text-xs">
                {aiModels.length} models from {companies.length} companies · API pricing and user plans · Sources: official pages of each model and{" "}
                  <a href="https://llm-stats.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors">llm-stats.com</a>
              </p>
            </div>
          </section>

          {/* New */}
          {newModels.length > 0 && (
            <section className="py-6 px-4 border-b border-border">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 px-2">
                // Recently launched
              </h2>
              <div className="flex flex-wrap gap-2 px-2">
                {newModels.map((m) => (
                  <Link
                    key={m.id}
                    href={`/en/models/${m.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-accent/40 bg-accent/5 text-xs text-accent hover:bg-accent/10 transition-colors"
                  >
                    <span>{m.companyEmoji}</span>
                    <span className="font-semibold">{m.name}</span>
                    <span className="text-[10px] text-text-muted">NEW</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Comparison table */}
          <section className="py-6 px-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 px-2">
              // All models
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-border text-text-muted text-left">
                    <th className="px-3 py-2 font-semibold">Model</th>
                    <th className="px-3 py-2 font-semibold">Company</th>
                    <th className="px-3 py-2 font-semibold">Type</th>
                    <th className="px-3 py-2 font-semibold">Context</th>
                    <th className="px-3 py-2 font-semibold">API Price (in/out)</th>
                    <th className="px-3 py-2 font-semibold">Speed</th>
                    <th className="px-3 py-2 font-semibold">Intelligence</th>
                    <th className="px-3 py-2 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {aiModels.map((model) => (
                    <tr
                      key={model.id}
                      className="border-b border-border hover:bg-bg-hover transition-colors"
                    >
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <span>{model.companyEmoji}</span>
                          <span className="font-semibold text-text">{model.name}</span>
                          {model.isNew && (
                            <span className="text-[9px] px-1 py-0.5 rounded bg-accent/20 text-accent font-bold">
                              NEW
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-text-muted">{model.company}</td>
                      <td className="px-3 py-2.5">
                        <div className="flex flex-wrap gap-1">
                          {model.typeLabels.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-1.5 py-0.5 rounded border border-border text-text-muted"
                            >
                              {TYPE_LABEL_EN[t] ?? t}
                            </span>
                          ))}
                          {model.typeLabels.length > 2 && (
                            <span className="text-[10px] text-text-muted">+{model.typeLabels.length - 2}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-text-muted font-mono">
                        {formatContextWindow(model.contextWindow)}
                      </td>
                      <td className="px-3 py-2.5 text-text-muted">
                        {model.apiPricing.input === null
                          ? "—"
                          : `$${model.apiPricing.input} / $${model.apiPricing.output}`}
                      </td>
                      <td className="px-3 py-2.5">
                        <span
                          className={`text-[10px] font-semibold ${
                            model.speed === "muy-rapido"
                              ? "text-green"
                              : model.speed === "rapido"
                              ? "text-yellow"
                              : model.speed === "medio"
                              ? "text-accent"
                              : "text-red-400"
                          }`}
                        >
                          {SPEED_LABEL_EN[model.speedLabel] ?? model.speedLabel}
                        </span>
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-sm ${
                                i < model.intelligence ? "bg-accent" : "bg-border"
                              }`}
                            />
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        <Link
                          href={`/en/models/${model.slug}`}
                          className="text-accent hover:text-accent-hover transition-colors text-[10px] font-semibold"
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* By company */}
          <section className="py-6 px-4 border-t border-border">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 px-2">
              // By company
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {companies
                .filter((c) => aiModels.some((m) => m.companySlug === c.slug))
                .map((company) => {
                  const count = aiModels.filter((m) => m.companySlug === company.slug).length;
                  return (
                    <div
                      key={company.slug}
                      className="border border-border rounded bg-bg-card p-4"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{company.emoji}</span>
                        <span className="font-semibold text-xs">{company.name}</span>
                      </div>
                      <p className="text-[10px] text-text-muted mb-2">{company.description}</p>
                      <p className="text-[10px] text-text-muted">
                        {count} model{count !== 1 ? "s" : ""} · {company.country}
                      </p>
                    </div>
                  );
                })}
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
