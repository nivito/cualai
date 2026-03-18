import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { getToolBySlug, categories, tools } from "@/data/tools";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export default async function HerramientaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 py-6">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="text-[10px] text-text-muted mb-4">
              <Link href="/" className="hover:text-accent">
                inicio
              </Link>
              <span className="mx-1">/</span>
              <span className="text-text">{tool.name}</span>
            </div>

            {/* Header */}
            <div className="border border-border rounded bg-bg-card p-6 mb-4">
              <div className="flex items-start justify-between mb-3">
                <h1 className="text-xl font-bold">{tool.name}</h1>
                <span
                  className={`text-[10px] px-2 py-1 rounded ${
                    tool.pricingType === "free"
                      ? "bg-green/10 text-green"
                      : tool.pricingType === "freemium"
                      ? "bg-yellow/10 text-yellow"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {tool.pricingType}
                </span>
              </div>

              {tool.highlight && (
                <div className="text-xs text-accent bg-accent/5 border border-accent/20 rounded px-3 py-2 mb-3">
                  ★ {tool.highlight}
                </div>
              )}

              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-4 text-xs">
                <div>
                  <span className="text-text-muted">precio: </span>
                  <span className="text-text">{tool.pricing}</span>
                </div>
                <div>
                  <span className="text-text-muted">url: </span>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {tool.url.replace("https://", "")}
                  </a>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="border border-border rounded bg-bg-card p-4 mb-4">
              <h2 className="text-[10px] uppercase tracking-wider text-text-muted mb-2">
                categorías
              </h2>
              <div className="flex flex-wrap gap-2">
                {tool.categories.map((catSlug) => {
                  const cat = categories.find((c) => c.slug === catSlug);
                  if (!cat) return null;
                  return (
                    <Link
                      key={catSlug}
                      href={`/categoria/${catSlug}`}
                      className="text-xs text-text-muted bg-bg px-2 py-1 rounded hover:text-accent hover:border-accent/50 border border-border transition-colors"
                    >
                      {cat.icon} {cat.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-accent text-bg py-3 rounded text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              Ir a {tool.name} →
            </a>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}
