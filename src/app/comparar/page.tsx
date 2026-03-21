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

              {/* Empty state */}
              {validTools.length === 0 && (
                <div className="border border-border rounded bg-bg-card p-8 text-center">
                  <p className="text-sm text-text-muted mb-4">
                    No hay herramientas para comparar. Agrega herramientas desde
                    el directorio.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-accent text-bg px-4 py-2 rounded text-xs font-semibold hover:bg-accent-hover transition-colors"
                  >
                    Explorar herramientas
                  </Link>
                </div>
              )}

              {/* Single tool */}
              {validTools.length === 1 && (
                <div className="border border-border rounded bg-bg-card p-8 text-center">
                  <p className="text-sm text-text-muted mb-4">
                    Necesitas al menos 2 herramientas para comparar. Agrega otra
                    desde el directorio.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-accent text-bg px-4 py-2 rounded text-xs font-semibold hover:bg-accent-hover transition-colors"
                  >
                    Agregar otra herramienta
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
