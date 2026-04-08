import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import OpenClawFAQ from "@/components/openclaw/OpenClawFAQ";
import {
  openclawHero,
  openclawSections,
  openclawComparison,
  openclawFAQs,
} from "@/data/openclaw-content";

export const metadata: Metadata = {
  title: "OpenClaw: tu Chief of Staff AI — cual.ai",
  description:
    "OpenClaw es una plataforma open source de gestión operativa con IA. Automatización inteligente que nunca duerme: crons, WhatsApp, Gmail, memoria persistente y más.",
  alternates: {
    canonical: "https://cual.ai/openclaw",
    languages: { es: "https://cual.ai/openclaw", en: "https://cual.ai/en/openclaw" },
  },
  openGraph: {
    title: "OpenClaw: tu Chief of Staff AI — cual.ai",
    description:
      "Plataforma open source de gestión operativa con IA. Automatización que nunca duerme.",
    url: "https://cual.ai/openclaw",
    type: "website",
    siteName: "cual.ai",
  },
};

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let codeBlock: string[] | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (codeBlock === null) {
        codeBlock = [];
      } else {
        elements.push(
          <pre
            key={`code-${i}`}
            className="bg-bg-card border border-border rounded p-4 text-xs font-mono overflow-x-auto my-3"
          >
            <code>{codeBlock.join("\n")}</code>
          </pre>
        );
        codeBlock = null;
      }
      continue;
    }

    if (codeBlock !== null) {
      codeBlock.push(line);
      continue;
    }

    if (line === "") {
      elements.push(<br key={`br-${i}`} />);
      continue;
    }

    // Bold text
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={j} className="text-accent font-semibold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });

    if (line.startsWith("—")) {
      elements.push(
        <div key={`line-${i}`} className="flex items-start gap-2 py-1">
          <span className="text-accent mt-0.5">›</span>
          <span>{rendered.slice(1)}</span>
        </div>
      );
    } else {
      elements.push(
        <p key={`line-${i}`} className="leading-relaxed">
          {rendered}
        </p>
      );
    }
  }

  return elements;
}

export default function OpenClawPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          {/* Hero */}
          <section className="border-b border-border py-10 px-4">
            <div className="max-w-3xl">
              <span className="inline-block text-[10px] uppercase tracking-widest text-accent font-semibold border border-accent/30 bg-accent/5 px-2 py-0.5 rounded mb-3">
                {openclawHero.badge}
              </span>
              <h1 className="text-2xl font-bold mb-2">{openclawHero.title}</h1>
              <p className="text-text-muted text-sm leading-relaxed">
                {openclawHero.subtitle}
              </p>
            </div>
          </section>

          {/* Sections */}
          {openclawSections.map((section) => (
            <section
              key={section.id}
              className="py-6 px-4 border-b border-border"
            >
              <div className="max-w-3xl">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                  // {section.title}
                </h2>
                <div className="text-sm text-text-muted space-y-1">
                  {renderContent(section.content)}
                </div>
              </div>
            </section>
          ))}

          {/* Comparison table */}
          <section className="py-6 px-4 border-b border-border">
            <div className="max-w-3xl">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // Comparativa
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border text-text-muted text-left">
                      <th className="px-3 py-2 font-semibold">
                        {openclawComparison.headers.feature}
                      </th>
                      <th className="px-3 py-2 font-semibold">
                        {openclawComparison.headers.openclaw}
                      </th>
                      <th className="px-3 py-2 font-semibold">
                        {openclawComparison.headers.claudeCode}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {openclawComparison.rows.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-b border-border hover:bg-bg-hover transition-colors"
                      >
                        <td className="px-3 py-2.5 font-semibold text-text">
                          {row.feature}
                        </td>
                        <td className="px-3 py-2.5 text-text-muted">
                          {row.openclaw}
                        </td>
                        <td className="px-3 py-2.5 text-text-muted">
                          {row.claudeCode}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-6 px-4 border-b border-border">
            <div className="max-w-3xl">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // Preguntas frecuentes
              </h2>
              <OpenClawFAQ
                faqs={openclawFAQs.map((f) => ({
                  question: f.question,
                  answer: f.answer,
                }))}
              />
            </div>
          </section>

          {/* CTA */}
          <section className="py-10 px-4">
            <div className="max-w-3xl text-center">
              <h2 className="text-lg font-bold mb-2">
                Probá OpenClaw hoy
              </h2>
              <p className="text-text-muted text-sm mb-4">
                Open source, gratis, y listo para correr en tu servidor.
              </p>
              <div className="flex gap-3 justify-center">
                <a
                  href="https://github.com/openclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-accent bg-accent/10 text-accent text-xs font-semibold hover:bg-accent/20 transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href="https://openclaw.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border text-text-muted text-xs font-semibold hover:border-accent hover:text-accent transition-colors"
                >
                  openclaw.ai →
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
