import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import ToolCard from "@/components/tools/ToolCard";
import VoteButtons from "@/components/tools/VoteButtons";
import CompareButton from "@/components/comparator/CompareButton";
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
    alternates: {
      canonical: `https://cual.ai/herramienta/${slug}`,
      languages: {
        es: `https://cual.ai/herramienta/${slug}`,
        en: `https://cual.ai/en/tool/${slug}`,
      },
    },
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

  // JSON-LD: SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    url: tool.url,
    description: tool.longDescription || tool.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: tool.pricing === "gratis" ? "0" : undefined,
      priceCurrency: "USD",
      description: tool.priceLabel,
    },
    aggregateRating: undefined,
  };

  // JSON-LD: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "cual.ai",
        item: "https://cual.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tool.name,
        item: `https://cual.ai/herramienta/${slug}`,
      },
    ],
  };

  // JSON-LD: FAQPage
  const faqItems = [
    {
      q: `¿Para qué sirve ${tool.name}?`,
      a: tool.description,
    },
    {
      q: `¿Cuánto cuesta ${tool.name}?`,
      a: tool.priceLabel,
    },
    {
      q: `¿${tool.name} tiene versión gratuita?`,
      a:
        tool.pricing === "gratis"
          ? `Sí, ${tool.name} es completamente gratuito.`
          : tool.pricing === "freemium"
            ? `Sí, ${tool.name} ofrece un plan gratuito con funciones limitadas. ${tool.priceLabel}`
            : `${tool.name} es de pago. ${tool.priceLabel}`,
    },
    ...(similar.length > 0
      ? [
          {
            q: `¿Cuáles son las mejores alternativas a ${tool.name}?`,
            a: `Las principales alternativas a ${tool.name} son: ${similar.map((t) => t.name).join(", ")}. Puedes compararlas en cual.ai.`,
          },
        ]
      : []),
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
                  <CompareButton slug={tool.slug} />
                </div>

                {/* Votos */}
                <div className="pt-4 border-t border-border mt-4">
                  <VoteButtons slug={tool.slug} />
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

              {/* FAQ visible */}
              <div className="border border-border rounded bg-bg-card p-6 mb-6">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                  // Preguntas frecuentes
                </h2>
                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <div key={item.q}>
                      <p className="text-xs font-semibold mb-1">{item.q}</p>
                      <p className="text-xs text-text-muted">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

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
