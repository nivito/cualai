import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import ToolCard from "@/components/tools/ToolCard";
import {
  tools,
  getToolBySlug,
  getCategoryBySlug,
  getSimilarTools,
} from "@/data/tools";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name}: qué es, cómo usarlo y precio — cual.ai`,
    description: `${tool.description} Descubre casos de uso, precios y alternativas en cual.ai.`,
    alternates: { canonical: `https://cual.ai/herramienta/${slug}` },
    openGraph: {
      title: `${tool.name} — cual.ai`,
      description: tool.description,
      url: `https://cual.ai/herramienta/${slug}`,
      type: "website",
      siteName: "cual.ai",
    },
    twitter: {
      card: "summary",
      title: `${tool.name}: qué es, cómo usarlo y precio — cual.ai`,
      description: tool.description,
    },
  };
}

export default async function HerramientaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const similar = getSimilarTools(tool);
  const initial = tool.name.charAt(0).toUpperCase();

  const pricingColor =
    tool.pricing === "gratis"
      ? "text-green"
      : tool.pricing === "freemium"
        ? "text-yellow"
        : "text-accent";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <section className="py-8 px-4">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded bg-bg-card flex items-center justify-center text-accent text-2xl font-bold shrink-0 border border-border">
                  {initial}
                </div>
                <div>
                  <h1 className="text-xl font-bold">{tool.name}</h1>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {tool.categories.map((catSlug) => {
                      const cat = getCategoryBySlug(catSlug);
                      if (!cat) return null;
                      return (
                        <Link
                          key={catSlug}
                          href={`/categoria/${catSlug}`}
                          className="text-[10px] text-text-muted hover:text-accent transition-colors"
                        >
                          {cat.icon} {cat.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Info card */}
              <div className="border border-border rounded bg-bg-card p-6 mb-6">
                <p className="text-sm leading-relaxed mb-4">
                  {tool.description}
                </p>
                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  {tool.longDescription}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                  <span className={`text-xs font-semibold ${pricingColor}`}>
                    {tool.priceLabel}
                  </span>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-bg px-4 py-2 rounded text-xs font-semibold hover:bg-accent-hover transition-colors"
                  >
                    Ir a la herramienta →
                  </a>
                </div>
              </div>

              {/* Use cases */}
              {tool.useCases.length > 0 && (
                <div className="border border-border rounded bg-bg-card p-6 mb-6">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                    // Casos de uso
                  </h2>
                  <ul className="space-y-2">
                    {tool.useCases.map((uc) => (
                      <li key={uc} className="text-xs text-text-muted flex items-start gap-2">
                        <span className="text-green mt-0.5">▸</span>
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              {tool.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded border border-border text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Similar tools */}
              {similar.length > 0 && (
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                    // Herramientas similares
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {similar.map((t) => (
                      <ToolCard key={t.id} tool={t} />
                    ))}
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
