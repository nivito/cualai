import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import GlosarioSidebar from "@/components/glosario/GlosarioSidebar";
import Footer from "@/components/layout/Footer";
import { glossaryTerms } from "@/data/glossary";
import { getDict } from "@/i18n";

export const metadata: Metadata = {
  title: "AI & Technology Glossary — Terms everyone pretends to understand | cual.ai",
  description:
    "We explain in plain English the most common AI and tech terms: LLM, token, GPU, VPS, API, OpenAI, Anthropic, Perplexity and more. No unnecessary jargon.",
  alternates: {
    canonical: "https://cual.ai/en/glossary",
    languages: { es: "https://cual.ai/glosario", en: "https://cual.ai/en/glossary" },
  },
  openGraph: {
    title: "AI & Technology Glossary | cual.ai",
    description:
      "AI and tech terms everyone uses and nobody explains — defined in plain language for normal humans.",
    url: "https://cual.ai/en/glossary",
  },
};

const terms = glossaryTerms;

export default function GlosarioPageEn() {
  const t = getDict("en");

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <div className="flex flex-1">
        <GlosarioSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
                <Link href="/en" className="hover:text-accent transition-colors">cual.ai</Link>
                <span>/</span>
                <span>{t.glossary.breadcrumb}</span>
              </div>

              <h1 className="text-2xl font-bold text-text mb-4">
                {t.glossary.title} 📖
              </h1>

              <div className="bg-bg-card border border-border rounded-lg p-5 mb-2">
                <p className="text-sm text-text leading-relaxed mb-3">
                  {t.glossary.intro_1}{" "}
                  <span className="text-accent font-medium">{t.glossary.intro_quote}</span>{" "}
                  {t.glossary.intro_2}
                </p>
                <p className="text-sm text-text leading-relaxed mb-3">
                  {t.glossary.intro_3}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {t.glossary.intro_4}
                </p>
              </div>

              <p className="text-xs text-text-muted">
                {t.glossary.terms_count(terms.length)}
              </p>
            </div>

            {/* Alphabetic nav */}
            <div className="bg-bg-card border border-border rounded-lg p-4 mb-6 sticky top-12 z-10">
              <div className="flex flex-wrap gap-1">
                {Array.from(new Set(terms.map((term) => term.term[0].toUpperCase()))).map((letter) => (
                  <a
                    key={letter}
                    href={`#letra-${letter}`}
                    className="text-xs font-mono text-accent hover:bg-accent hover:text-bg px-2 py-0.5 rounded transition-colors"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>

            {/* Full index */}
            <div className="bg-bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs text-text-muted mb-3 font-medium uppercase tracking-wide">{t.glossary.all_terms}</p>
              <div className="flex flex-wrap gap-2">
                {terms.map((term) => (
                  <a
                    key={term.term}
                    href={`#${term.term.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="text-xs text-accent hover:underline"
                  >
                    {term.term.split(" (")[0].split(" —")[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Terms with letter separators */}
            <div className="space-y-6">
              {terms.map((term, i) => {
                const letter = term.term[0].toUpperCase();
                const prevLetter = i > 0 ? terms[i - 1].term[0].toUpperCase() : null;
                const showLetterHeader = letter !== prevLetter;
                return (
                  <div key={term.term}>
                    {showLetterHeader && (
                      <div id={`letra-${letter}`} className="scroll-mt-24 flex items-center gap-3 mb-2 mt-2">
                        <span className="text-lg font-bold text-accent">{letter}</span>
                        <div className="flex-1 h-px bg-border" />
                      </div>
                    )}
                    <div
                      id={term.term.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                      className="border border-border rounded-lg p-5 bg-bg-card scroll-mt-24"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl shrink-0">{term.emoji}</span>
                        <div>
                          <h2 className="text-sm font-bold text-text">{term.term}</h2>
                          <p className="text-xs text-accent mt-0.5">{term.short}</p>
                        </div>
                      </div>
                      <p className="text-xs text-text leading-relaxed mb-3">{term.long}</p>
                      <div className="bg-bg rounded p-3 border border-border">
                        <p className="text-xs text-text-muted leading-relaxed">
                          <span className="text-text-muted font-medium">{t.glossary.example}</span>{" "}
                          {term.example}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer CTA */}
            <div className="mt-10 border border-border rounded-lg p-5 text-center bg-bg-card">
              <p className="text-sm text-text mb-2">{t.glossary.missing_term}</p>
              <p className="text-xs text-text-muted mb-4">
                {t.glossary.missing_term_desc}
              </p>
              <Link
                href="/en"
                className="inline-block text-xs bg-accent text-bg px-4 py-2 rounded hover:bg-accent-hover transition-colors"
              >
                {t.glossary.explore_tools}
              </Link>
            </div>
          </div>

          <Footer locale="en" />
        </main>
      </div>
    </div>
  );
}
