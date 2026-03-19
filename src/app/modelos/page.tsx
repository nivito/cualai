import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { aiModels, companies, formatContextWindow } from "@/data/models";

export const metadata: Metadata = {
  title: "Comparativa de modelos de IA (2026) — cual.ai",
  description:
    "Compara los mejores modelos de inteligencia artificial: GPT-4o, Claude 3.5, Gemini 2.5, Llama 4, DeepSeek R1 y más. Precios, contexto, capacidades y casos de uso.",
  alternates: { canonical: "https://cual.ai/modelos" },
  openGraph: {
    title: "Comparativa de modelos de IA — cual.ai",
    description:
      "GPT-4o, Claude, Gemini, Llama, DeepSeek y más. Precios de API, contexto y casos de uso.",
    url: "https://cual.ai/modelos",
    type: "website",
    siteName: "cual.ai",
  },
};

const speedOrder = { "muy-rapido": 4, rapido: 3, medio: 2, lento: 1 };

export default function ModelosPage() {
  const featured = aiModels.filter((m) => m.featured);
  const newModels = aiModels.filter((m) => m.isNew);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <section className="border-b border-border py-8 px-4">
            <div className="max-w-3xl">
              <h1 className="text-xl font-bold mb-1">
                Comparativa de modelos de IA
              </h1>
              <p className="text-text-muted text-xs">
                {aiModels.length} modelos de {companies.length} empresas · precios de API y planes de usuario
              </p>
            </div>
          </section>

          {/* Nuevos */}
          {newModels.length > 0 && (
            <section className="py-6 px-4 border-b border-border">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 px-2">
                // Recién lanzados
              </h2>
              <div className="flex flex-wrap gap-2 px-2">
                {newModels.map((m) => (
                  <Link
                    key={m.id}
                    href={`/modelos/${m.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-accent/40 bg-accent/5 text-xs text-accent hover:bg-accent/10 transition-colors"
                  >
                    <span>{m.companyEmoji}</span>
                    <span className="font-semibold">{m.name}</span>
                    <span className="text-[10px] text-text-muted">NUEVO</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Tabla comparativa */}
          <section className="py-6 px-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 px-2">
              // Todos los modelos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-border text-text-muted text-left">
                    <th className="px-3 py-2 font-semibold">Modelo</th>
                    <th className="px-3 py-2 font-semibold">Empresa</th>
                    <th className="px-3 py-2 font-semibold">Tipo</th>
                    <th className="px-3 py-2 font-semibold">Contexto</th>
                    <th className="px-3 py-2 font-semibold">Precio API (in/out)</th>
                    <th className="px-3 py-2 font-semibold">Velocidad</th>
                    <th className="px-3 py-2 font-semibold">Inteligencia</th>
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
                              {t}
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
                          {model.speedLabel}
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
                          href={`/modelos/${model.slug}`}
                          className="text-accent hover:text-accent-hover transition-colors text-[10px] font-semibold"
                        >
                          Ver →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Por empresa */}
          <section className="py-6 px-4 border-t border-border">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 px-2">
              // Por empresa
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
                        {count} modelo{count !== 1 ? "s" : ""} · {company.country}
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
