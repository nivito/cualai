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
import { getDict, getLocalizedTool, getLocalizedCategory } from "@/i18n";

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
  const t = getDict("en");
  const loc = getLocalizedTool(tool, "en");
  return {
    title: t.tool.meta_title(tool.name),
    description: t.tool.meta_desc(loc.description),
    alternates: {
      canonical: `https://cual.ai/en/tool/${slug}`,
      languages: {
        es: `https://cual.ai/herramienta/${slug}`,
        en: `https://cual.ai/en/tool/${slug}`,
      },
    },
    openGraph: {
      title: `${tool.name} — cual.ai`,
      description: loc.description,
      url: `https://cual.ai/en/tool/${slug}`,
      type: "website",
      siteName: "cual.ai",
    },
    twitter: {
      card: "summary",
      title: t.tool.meta_title(tool.name),
      description: loc.description,
    },
  };
}

export default async function HerramientaPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const similar = getSimilarTools(tool);
  const initial = tool.name.charAt(0).toUpperCase();
  const t = getDict("en");
  const localized = getLocalizedTool(tool, "en");

  const pricingColor =
    tool.pricing === "gratis"
      ? "text-green"
      : tool.pricing === "freemium"
        ? "text-yellow"
        : "text-accent";

  const faqItems = [
    {
      q: t.tool.faq_what_for(tool.name),
      a: localized.description,
    },
    {
      q: t.tool.faq_price(tool.name),
      a: tool.priceLabel,
    },
    {
      q: t.tool.faq_free(tool.name),
      a:
        tool.pricing === "gratis"
          ? t.tool.faq_free_yes(tool.name)
          : tool.pricing === "freemium"
            ? t.tool.faq_freemium(tool.name, tool.priceLabel)
            : t.tool.faq_paid(tool.name, tool.priceLabel),
    },
    ...(similar.length > 0
      ? [
          {
            q: t.tool.faq_alternatives_q(tool.name),
            a: t.tool.faq_alternatives(
              tool.name,
              similar.map((s) => s.name).join(", ")
            ),
          },
        ]
      : []),
  ];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    url: tool.url,
    description: localized.longDescription || localized.description,
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "cual.ai",
        item: "https://cual.ai/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tool.name,
        item: `https://cual.ai/en/tool/${slug}`,
      },
    ],
  };

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
      <Header locale="en" />
      <div className="flex flex-1">
        <Sidebar locale="en" />
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
                          href={`/en/categoria/${catSlug}`}
                          className="text-[10px] text-text-muted hover:text-accent transition-colors"
                        >
                          {cat.icon} {getLocalizedCategory(cat, "en")}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Info card */}
              <div className="border border-border rounded bg-bg-card p-6 mb-6">
                <p className="text-sm leading-relaxed mb-4">
                  {localized.description}
                </p>
                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  {localized.longDescription}
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
                    {t.tool.visit}
                  </a>
                  <CompareButton slug={tool.slug} />
                </div>

                {/* Votes */}
                <div className="pt-4 border-t border-border mt-4">
                  <VoteButtons slug={tool.slug} />
                </div>
              </div>

              {/* Use cases */}
              {tool.useCases.length > 0 && (
                <div className="border border-border rounded bg-bg-card p-6 mb-6">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                    {t.tool.use_cases}
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
                  {t.tool.faq}
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
                    {t.tool.similar}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {similar.map((s) => (
                      <ToolCard key={s.id} tool={s} locale="en" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
          <Footer locale="en" />
        </main>
      </div>
    </div>
  );
}
