import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { getToolBySlug, getCategoryBySlug } from "@/data/tools";
import type { Tool } from "@/data/tools";
import ComparatorActions from "./ComparatorActions";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ tools?: string }>;
}): Promise<Metadata> {
  const { tools: toolsParam } = await searchParams;
  const slugs = toolsParam?.split(",").filter(Boolean) ?? [];
  const names = slugs
    .map((s) => getToolBySlug(s)?.name)
    .filter(Boolean)
    .join(" vs ");

  const title = names
    ? `Comparar ${names} — cual.ai`
    : "Comparar herramientas AI — cual.ai";

  return {
    title,
    description: names
      ? `Compara ${names}: precios, funciones y casos de uso lado a lado.`
      : "Compara herramientas de inteligencia artificial lado a lado.",
    alternates: {
      canonical: `https://cual.ai/comparar${toolsParam ? `?tools=${toolsParam}` : ""}`,
    },
  };
}

function PricingColor({ pricing }: { pricing: Tool["pricing"] }) {
  const color =
    pricing === "gratis"
      ? "text-green"
      : pricing === "freemium"
        ? "text-yellow"
        : "text-accent";
  return <span className={`text-xs font-semibold ${color}`} />;
}

export default async function CompararPage({
  searchParams,
}: {
  searchParams: Promise<{ tools?: string }>;
}) {
  const { tools: toolsParam } = await searchParams;
  const slugs = toolsParam?.split(",").filter(Boolean) ?? [];
  const toolEntries = slugs.map((slug) => ({
    slug,
    tool: getToolBySlug(slug),
  }));
  const invalidSlugs = toolEntries
    .filter((e) => !e.tool)
    .map((e) => e.slug);
  const validTools = toolEntries
    .filter((e): e is { slug: string; tool: Tool } => !!e.tool)
    .map((e) => e.tool);

  const pricingColor = (p: Tool["pricing"]) =>
    p === "gratis" ? "text-green" : p === "freemium" ? "text-yellow" : "text-accent";

  const hasFree = (p: Tool["pricing"]) => p === "gratis" || p === "freemium";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <section className="py-8 px-4">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-xl font-bold">⚖️ Comparar herramientas</h1>
                  {validTools.length >= 2 && (
                    <p className="text-xs text-text-muted mt-1">
                      {validTools.map((t) => t.name).join(" vs ")}
                    </p>
                  )}
                </div>
                <ComparatorActions />
              </div>

              {/* Invalid slugs warning */}
              {invalidSlugs.length > 0 && (
                <div className="border border-red rounded bg-red/10 p-4 mb-6">
                  <p className="text-xs text-red">
                    No se encontraron herramientas para:{" "}
                    {invalidSlugs.map((s) => `"${s}"`).join(", ")}
                  </p>
                </div>
              )}

              {/* Empty state — guía */}
              {validTools.length === 0 && (
                <div className="space-y-6">
                  <div className="border border-border rounded bg-bg-card p-8 text-center">
                    <div className="text-4xl mb-3">⚖️</div>
                    <h2 className="text-sm font-semibold text-text mb-1">
                      Aún no has seleccionado herramientas
                    </h2>
                    <p className="text-xs text-text-muted mb-6 max-w-sm mx-auto">
                      Selecciona entre 2 y 4 herramientas del directorio para
                      ver una comparación lado a lado de precio, features y casos
                      de uso.
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 bg-accent text-bg px-4 py-2 rounded text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                      Explorar herramientas →
                    </Link>
                  </div>

                  {/* Pasos */}
                  <div className="border border-border rounded bg-bg-card p-6">
                    <p className="text-[10px] uppercase tracking-widest text-text-muted mb-4">
                      Cómo usar el comparador
                    </p>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-bg text-[10px] font-bold flex items-center justify-center">1</span>
                        <div>
                          <p className="text-xs font-medium text-text">Busca o explora herramientas</p>
                          <p className="text-xs text-text-muted mt-0.5">Ve al directorio principal o usa el buscador para encontrar las herramientas que te interesan.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-bg text-[10px] font-bold flex items-center justify-center">2</span>
                        <div>
                          <p className="text-xs font-medium text-text">Haz clic en "Agregar a comparar"</p>
                          <p className="text-xs text-text-muted mt-0.5">En cada tarjeta o ficha de herramienta verás un botón para agregarla. Puedes seleccionar hasta 4.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-bg text-[10px] font-bold flex items-center justify-center">3</span>
                        <div>
                          <p className="text-xs font-medium text-text">Usa el widget flotante</p>
                          <p className="text-xs text-text-muted mt-0.5">En la parte inferior de la pantalla aparece un panel con tus herramientas seleccionadas. Cuando tengas 2 o más, haz clic en "Comparar".</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-bg text-[10px] font-bold flex items-center justify-center">4</span>
                        <div>
                          <p className="text-xs font-medium text-text">Comparte la comparación</p>
                          <p className="text-xs text-text-muted mt-0.5">La URL de la comparación es compartible — puedes enviarla a tu equipo para decidir juntos.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Single tool */}
              {validTools.length === 1 && (
                <div className="border border-border rounded bg-bg-card p-8 text-center">
                  <div className="text-3xl mb-3">👆</div>
                  <p className="text-sm font-medium text-text mb-1">
                    Falta una herramienta más
                  </p>
                  <p className="text-xs text-text-muted mb-6 max-w-xs mx-auto">
                    Ya tienes <span className="text-accent font-semibold">{validTools[0].name}</span> seleccionada.
                    Agrega al menos una herramienta más para iniciar la comparación.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-accent text-bg px-4 py-2 rounded text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    Agregar otra herramienta →
                  </Link>
                </div>
              )}

              {/* Comparison table */}
              {validTools.length >= 2 && (
                <div className="border border-border rounded bg-bg-card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border sticky top-0 bg-bg-card z-10">
                          <th className="sticky left-0 bg-bg-card text-left p-3 text-text-muted uppercase tracking-widest text-[10px] min-w-[140px] border-r border-border">
                            Atributo
                          </th>
                          {validTools.map((tool) => (
                            <th
                              key={tool.id}
                              className="text-left p-3 min-w-[180px]"
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-7 h-7 rounded bg-bg flex items-center justify-center text-accent text-xs font-bold border border-border">
                                  {tool.name.charAt(0).toUpperCase()}
                                </span>
                                <span className="font-semibold text-sm">
                                  {tool.name}
                                </span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {/* Categorias */}
                        <tr className="border-b border-border">
                          <td className="sticky left-0 bg-bg-card p-3 text-text-muted border-r border-border">
                            Categorías
                          </td>
                          {validTools.map((tool) => (
                            <td key={tool.id} className="p-3">
                              <div className="flex flex-wrap gap-1">
                                {tool.categories.map((catSlug) => {
                                  const cat = getCategoryBySlug(catSlug);
                                  return cat ? (
                                    <span
                                      key={catSlug}
                                      className="text-[10px] px-1.5 py-0.5 rounded border border-border text-text-muted"
                                    >
                                      {cat.icon} {cat.name}
                                    </span>
                                  ) : null;
                                })}
                              </div>
                            </td>
                          ))}
                        </tr>

                        {/* Precio */}
                        <tr className="border-b border-border">
                          <td className="sticky left-0 bg-bg-card p-3 text-text-muted border-r border-border">
                            Precio
                          </td>
                          {validTools.map((tool) => (
                            <td key={tool.id} className="p-3">
                              <span
                                className={`font-semibold ${pricingColor(tool.pricing)}`}
                              >
                                {tool.priceLabel}
                              </span>
                            </td>
                          ))}
                        </tr>

                        {/* Plan gratuito */}
                        <tr className="border-b border-border">
                          <td className="sticky left-0 bg-bg-card p-3 text-text-muted border-r border-border">
                            Plan gratuito
                          </td>
                          {validTools.map((tool) => (
                            <td key={tool.id} className="p-3">
                              {hasFree(tool.pricing) ? (
                                <span className="text-green">✅ Sí</span>
                              ) : (
                                <span className="text-red">❌ No</span>
                              )}
                            </td>
                          ))}
                        </tr>

                        {/* Casos de uso */}
                        <tr className="border-b border-border">
                          <td className="sticky left-0 bg-bg-card p-3 text-text-muted border-r border-border align-top">
                            Casos de uso
                          </td>
                          {validTools.map((tool) => (
                            <td key={tool.id} className="p-3">
                              <ul className="space-y-1">
                                {tool.useCases.map((uc) => (
                                  <li key={uc} className="flex items-start gap-1.5">
                                    <span className="text-green mt-0.5">▸</span>
                                    <span className="text-text-muted">{uc}</span>
                                  </li>
                                ))}
                              </ul>
                            </td>
                          ))}
                        </tr>

                        {/* Tags */}
                        <tr className="border-b border-border">
                          <td className="sticky left-0 bg-bg-card p-3 text-text-muted border-r border-border align-top">
                            Tags
                          </td>
                          {validTools.map((tool) => (
                            <td key={tool.id} className="p-3">
                              <div className="flex flex-wrap gap-1">
                                {tool.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[10px] px-1.5 py-0.5 rounded border border-border text-text-muted"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </td>
                          ))}
                        </tr>

                        {/* Links */}
                        <tr>
                          <td className="sticky left-0 bg-bg-card p-3 text-text-muted border-r border-border">
                            Enlaces
                          </td>
                          {validTools.map((tool) => (
                            <td key={tool.id} className="p-3">
                              <div className="flex flex-col gap-2">
                                <a
                                  href={tool.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-accent hover:text-accent-hover transition-colors"
                                >
                                  Ver herramienta →
                                </a>
                                <Link
                                  href={`/herramienta/${tool.slug}`}
                                  className="text-text-muted hover:text-accent transition-colors"
                                >
                                  Ver ficha →
                                </Link>
                              </div>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}
