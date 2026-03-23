import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import GlosarioSidebar from "@/components/glosario/GlosarioSidebar";
import Footer from "@/components/layout/Footer";
import { glossaryTerms } from "@/data/glossary";

export const metadata: Metadata = {
  title: "Glosario de AI y Tecnología — Los términos que todos fingen entender | cual.ai",
  description:
    "Explicamos en español claro (y con algo de humor) los términos más usados en IA y tecnología: LLM, token, GPU, VPS, API, OpenAI, Anthropic, Perplexity y más. Sin tecnicismos innecesarios.",
  alternates: {
    canonical: "https://cual.ai/glosario",
    languages: { es: "https://cual.ai/glosario", en: "https://cual.ai/en/glosario" },
  },
  openGraph: {
    title: "Glosario de AI y Tecnología | cual.ai",
    description:
      "Los términos de IA y tech que todos usan y nadie explica — definidos en español para humanos normales.",
    url: "https://cual.ai/glosario",
  },
};

const terms = glossaryTerms;

export default function GlosarioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <GlosarioSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
                <Link href="/" className="hover:text-accent transition-colors">cual.ai</Link>
                <span>/</span>
                <span>Glosario</span>
              </div>

              <h1 className="text-2xl font-bold text-text mb-4">
                Glosario de AI y Tecnología 📖
              </h1>

              <div className="bg-bg-card border border-border rounded-lg p-5 mb-2">
                <p className="text-sm text-text leading-relaxed mb-3">
                  Bienvenido al único glosario de inteligencia artificial diseñado para personas que asisten a reuniones donde alguien dice{" "}
                  <span className="text-accent font-medium">"hay que hacer fine-tuning del LLM con RAG"</span>{" "}
                  y todos asienten como si supieran de qué habla.
                </p>
                <p className="text-sm text-text leading-relaxed mb-3">
                  Aquí encontrarás los términos más usados del mundo AI explicados en español claro, sin asumir que tienes un doctorado en matemáticas ni que pasas los fines de semana leyendo papers de Arxiv.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Prometemos ser precisos. No prometemos ser completamente serios.
                </p>
              </div>

              <p className="text-xs text-text-muted">
                {terms.length} términos · Orden alfabético · AI, modelos, infraestructura y empresas clave
              </p>
            </div>

            {/* Nav alfabético de letras */}
            <div className="bg-bg-card border border-border rounded-lg p-4 mb-6 sticky top-12 z-10">
              <div className="flex flex-wrap gap-1">
                {Array.from(new Set(terms.map((t) => t.term[0].toUpperCase()))).map((letter) => (
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

            {/* Índice completo */}
            <div className="bg-bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs text-text-muted mb-3 font-medium uppercase tracking-wide">Todos los términos — A–Z</p>
              <div className="flex flex-wrap gap-2">
                {terms.map((t) => (
                  <a
                    key={t.term}
                    href={`#${t.term.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="text-xs text-accent hover:underline"
                  >
                    {t.term.split(" (")[0].split(" —")[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Terms con separadores de letra */}
            <div className="space-y-6">
              {terms.map((t, i) => {
                const letter = t.term[0].toUpperCase();
                const prevLetter = i > 0 ? terms[i - 1].term[0].toUpperCase() : null;
                const showLetterHeader = letter !== prevLetter;
                return (
                  <div key={t.term}>
                    {showLetterHeader && (
                      <div id={`letra-${letter}`} className="scroll-mt-24 flex items-center gap-3 mb-2 mt-2">
                        <span className="text-lg font-bold text-accent">{letter}</span>
                        <div className="flex-1 h-px bg-border" />
                      </div>
                    )}
                <div
                  id={t.term.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                  className="border border-border rounded-lg p-5 bg-bg-card scroll-mt-24"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl shrink-0">{t.emoji}</span>
                    <div>
                      <h2 className="text-sm font-bold text-text">{t.term}</h2>
                      <p className="text-xs text-accent mt-0.5">{t.short}</p>
                    </div>
                  </div>
                  <p className="text-xs text-text leading-relaxed mb-3">{t.long}</p>
                  <div className="bg-bg rounded p-3 border border-border">
                    <p className="text-xs text-text-muted leading-relaxed">
                      <span className="text-text-muted font-medium">Ejemplo:</span>{" "}
                      {t.example}
                    </p>
                  </div>
                </div>
                  </div>
                );
              })}
            </div>

            {/* Footer CTA */}
            <div className="mt-10 border border-border rounded-lg p-5 text-center bg-bg-card">
              <p className="text-sm text-text mb-2">¿Falta algún término?</p>
              <p className="text-xs text-text-muted mb-4">
                El mundo AI inventa palabras nuevas cada semana. Si hay algo que no entiendes, probablemente no es culpa tuya.
              </p>
              <Link
                href="/"
                className="inline-block text-xs bg-accent text-bg px-4 py-2 rounded hover:bg-accent-hover transition-colors"
              >
                Explorar herramientas AI →
              </Link>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}
