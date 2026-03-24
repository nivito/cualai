import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import {
  aiModels,
  getModelBySlug,
  getModelsByCompany,
  getCompanyBySlug,
  formatContextWindow,
} from "@/data/models";

export function generateStaticParams() {
  return aiModels.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) return {};
  return {
    title: `${model.name} (${model.company}): pricing, context & use cases — cual.ai`,
    description: `${model.description} Context: ${model.contextWindowLabel}. API pricing: ${model.apiPricing.label}.`,
    alternates: {
      canonical: `https://cual.ai/en/models/${slug}`,
      languages: {
        es: `https://cual.ai/modelos/${slug}`,
        en: `https://cual.ai/en/models/${slug}`,
      },
    },
    openGraph: {
      title: `${model.name} — ${model.company} · cual.ai`,
      description: model.description,
      url: `https://cual.ai/en/models/${slug}`,
      type: "website",
      siteName: "cual.ai",
    },
  };
}

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

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) notFound();

  const company = getCompanyBySlug(model.companySlug);
  const sameCompany = getModelsByCompany(model.companySlug).filter(
    (m) => m.id !== model.id
  );

  // JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "cual.ai", item: "https://cual.ai/en" },
      { "@type": "ListItem", position: 2, name: "Models", item: "https://cual.ai/en/models" },
      { "@type": "ListItem", position: 3, name: model.name, item: `https://cual.ai/en/models/${slug}` },
    ],
  };

  const faqItems = [
    { q: `How much does ${model.name} cost?`, a: `API: ${model.apiPricing.label}. ${model.userPricing.paidLabel ? `User plan: ${model.userPricing.paidLabel}.` : model.userPricing.free ? "Available for free via web." : ""}` },
    { q: `How many context tokens does ${model.name} have?`, a: `${model.name} has a context window of ${model.contextWindowLabel} (~${Math.round(model.contextWindow * 0.75).toLocaleString()} words).` },
    { q: `What is ${model.name} best for?`, a: model.bestFor.join(", ") + "." },
    { q: `Is ${model.name} open source?`, a: model.available.includes("self-hosted") ? `Yes, ${model.name} is available for self-hosting.` : `No, ${model.name} is only available via API or web interface.` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header locale="en" />
      <div className="flex flex-1">
        <Sidebar locale="en" />
        <main className="flex-1 min-w-0">
          <section className="py-8 px-4">
            <div className="max-w-3xl mx-auto">

              {/* Breadcrumb */}
              <nav className="text-[10px] text-text-muted mb-4 flex items-center gap-1">
                <Link href="/en" className="hover:text-accent transition-colors">cual.ai</Link>
                <span>/</span>
                <Link href="/en/models" className="hover:text-accent transition-colors">Models</Link>
                <span>/</span>
                <span className="text-text">{model.name}</span>
              </nav>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded bg-bg-card flex items-center justify-center text-3xl shrink-0 border border-border">
                  {model.companyEmoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-xl font-bold">{model.name}</h1>
                    {model.isNew && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-accent/20 text-accent font-bold">NEW</span>
                    )}
                  </div>
                  <p className="text-text-muted text-xs mt-0.5">
                    {model.company} · Released {model.releasedAt}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {model.typeLabels.map((t) => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded border border-border text-text-muted">
                        {TYPE_LABEL_EN[t] ?? t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border border-border rounded bg-bg-card p-6 mb-4">
                <p className="text-sm leading-relaxed mb-3">{model.description}</p>
                <p className="text-xs text-text-muted leading-relaxed">{model.longDescription}</p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="border border-border rounded bg-bg-card p-4">
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Context</p>
                  <p className="text-sm font-bold font-mono">{model.contextWindowLabel}</p>
                </div>
                <div className="border border-border rounded bg-bg-card p-4">
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Speed</p>
                  <p className={`text-sm font-bold ${
                    model.speed === "muy-rapido" ? "text-green" :
                    model.speed === "rapido" ? "text-yellow" :
                    model.speed === "medio" ? "text-accent" : "text-red-400"
                  }`}>
                    {SPEED_LABEL_EN[model.speedLabel] ?? model.speedLabel}
                  </p>
                </div>
                <div className="border border-border rounded bg-bg-card p-4">
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Intelligence</p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className={`w-3 h-3 rounded-sm ${i < model.intelligence ? "bg-accent" : "bg-border"}`} />
                    ))}
                  </div>
                </div>
                <div className="border border-border rounded bg-bg-card p-4">
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Available on</p>
                  <p className="text-xs text-text">{model.availableLabels.join(", ")}</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="border border-border rounded bg-bg-card p-6 mb-4">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">// Pricing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">API (per M tokens)</p>
                    <p className="text-sm font-bold">{model.apiPricing.label}</p>
                    <p className="text-[10px] text-text-muted mt-1">input / output</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">User plan</p>
                    {model.userPricing.free ? (
                      <p className="text-sm font-bold text-green">Free available</p>
                    ) : (
                      <p className="text-sm font-bold">{model.userPricing.paidLabel ?? "API only"}</p>
                    )}
                    {model.userPricing.paidLabel && (
                      <p className="text-[10px] text-text-muted mt-1">{model.userPricing.paidLabel}</p>
                    )}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href={model.userPricing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-bg px-4 py-2 rounded text-xs font-semibold hover:bg-accent-hover transition-colors"
                  >
                    Use {model.name} →
                  </a>
                </div>
              </div>

              {/* Strengths & Limitations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="border border-border rounded bg-bg-card p-5">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">// Strengths</h2>
                  <ul className="space-y-1.5">
                    {model.strengths.map((s) => (
                      <li key={s} className="text-xs flex items-start gap-2">
                        <span className="text-green mt-0.5">▸</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-border rounded bg-bg-card p-5">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">// Limitations</h2>
                  <ul className="space-y-1.5">
                    {model.weaknesses.map((w) => (
                      <li key={w} className="text-xs flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">▸</span>
                        <span className="text-text-muted">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best for */}
              <div className="border border-border rounded bg-bg-card p-5 mb-4">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">// Best for</h2>
                <div className="flex flex-wrap gap-2">
                  {model.bestFor.map((use) => (
                    <span key={use} className="text-[10px] px-2 py-1 rounded border border-border text-text-muted bg-bg-hover">
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="border border-border rounded bg-bg-card p-5 mb-6">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">// Frequently Asked Questions</h2>
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
              {model.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {model.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded border border-border text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Other models from the same company */}
              {sameCompany.length > 0 && (
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                    // Other {model.company} models
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {sameCompany.map((m) => (
                      <Link
                        key={m.id}
                        href={`/en/models/${m.slug}`}
                        className="border border-border rounded bg-bg-card p-4 hover:border-accent transition-colors group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span>{m.companyEmoji}</span>
                          <span className="text-xs font-semibold group-hover:text-accent transition-colors">{m.name}</span>
                          {m.isNew && <span className="text-[9px] px-1 rounded bg-accent/20 text-accent font-bold">NEW</span>}
                        </div>
                        <p className="text-[10px] text-text-muted">{m.description.slice(0, 80)}…</p>
                        <p className="text-[10px] text-text-muted mt-1">{m.apiPricing.label}</p>
                      </Link>
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
