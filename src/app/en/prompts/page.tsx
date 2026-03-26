import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import PromptsSidebar from "@/components/prompts/PromptsSidebar";
import Footer from "@/components/layout/Footer";
import PromptExample from "@/components/prompts/PromptExample";
import {
  promptComponents,
  promptLevels,
  promptTips,
  expertTechniques,
  agentConcepts,
  agentExamples,
} from "@/data/prompts";

export const metadata: Metadata = {
  title: "Prompt Guide — How to write better AI prompts — cual.ai",
  description:
    "Learn to write effective prompts for ChatGPT, Claude, and any AI. Complete guide with interactive examples, from basic to expert.",
};

export default function PromptsPageEn() {
  const locale = "en";

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <div className="flex flex-1">
        <PromptsSidebar locale="en" />
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <nav id="intro" className="text-[10px] text-text-muted mb-6">
              <a href="/en" className="hover:text-accent transition-colors">
                cual.ai
              </a>
              <span className="mx-1">/</span>
              <span className="text-text">Prompts</span>
            </nav>

            {/* Hero */}
            <h1 className="text-2xl font-bold text-text mb-2">Prompt Guide</h1>
            <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-2xl">
              A <strong className="text-text">prompt</strong> is the instruction you give to an AI.
              The difference between a mediocre response and a brilliant one is almost always in how
              you phrase your question — not the model you use.
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-2xl">
              This guide teaches you to build effective prompts, from the simplest to advanced
              techniques used by AI engineers. Each example highlights the prompt parts with colors
              so you understand the structure.
            </p>
            <p className="text-xs text-text-muted mb-8 max-w-2xl">
              Works with any model: ChatGPT, Claude, Gemini, Llama, Mistral and more.
            </p>

            {/* ─── The 4 Components ──────────────────────────────────── */}
            <section id="componentes" className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // The 4 components of a good prompt
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {promptComponents.map((comp) => (
                  <div
                    key={comp.type}
                    className={`border rounded p-4 ${comp.bgColor}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span>{comp.emoji}</span>
                      <span className={`text-sm font-semibold ${comp.color}`}>
                        {comp.labelEn}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {comp.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── Levels ────────────────────────────────────────────── */}
            {promptLevels.map((level) => (
              <section key={level.id} id={`nivel-${level.level}`} className="mb-12">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${level.badgeColor}`}
                  >
                    Level {level.level}
                  </span>
                  <h2 className="text-lg font-bold text-text">
                    {level.titleEn}
                  </h2>
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-2xl">
                  {level.descriptionEn}
                </p>

                {/* Generic examples */}
                {level.genericExamples.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                      General examples
                    </h3>
                    <div className="space-y-3">
                      {level.genericExamples.map((ex, i) => (
                        <PromptExample
                          key={i}
                          parts={ex.partsEn || ex.parts}
                          label={ex.labelEn || ex.label}
                          locale={locale}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech examples */}
                {level.techExamples.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-px flex-1 bg-border" />
                      <span className="text-[10px] uppercase tracking-widest text-accent shrink-0">
                        Engineering / Technical
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <div className="space-y-3">
                      {level.techExamples.map((ex, i) => (
                        <PromptExample
                          key={i}
                          parts={ex.partsEn || ex.parts}
                          label={ex.labelEn || ex.label}
                          locale={locale}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* ─── Expert Techniques Detail ──────────────────────────── */}
            <section className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // Advanced techniques in detail
              </h2>
              <div className="space-y-3">
                {expertTechniques.map((tech) => (
                  <div
                    key={tech.id}
                    className="border border-border rounded bg-bg-card p-4"
                  >
                    <h3 className="text-sm font-semibold text-accent mb-1">
                      {tech.nameEn}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-2">
                      {tech.descriptionEn}
                    </p>
                    <p className="text-[10px] text-text-muted">
                      <span className="text-text font-semibold">When to use:</span>{" "}
                      {tech.whenEn}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── Age of Agents ────────────────────────────────────── */}
            <section id="agentes" className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-purple-500/30 text-purple-400 bg-purple-500/10">
                  New era
                </span>
                <h2 className="text-lg font-bold text-text">Prompting for AI Agents</h2>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-2xl">
                Classic prompting assumes you talk to <em>one</em> model. In the age of agents,
                you coordinate systems of multiple models that delegate tasks to each other.
                The rules change: now you design behaviors, not just instructions.
              </p>

              {/* Concepts grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {agentConcepts.map((concept) => (
                  <div key={concept.id} className="border border-border rounded bg-bg-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span>{concept.icon}</span>
                      <span className="text-sm font-semibold text-text">{concept.titleEn}</span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">{concept.descriptionEn}</p>
                  </div>
                ))}
              </div>

              {/* Agent examples */}
              <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // Agent prompt examples
              </h3>
              <div className="space-y-4">
                {agentExamples.map((ex) => (
                  <div key={ex.id} className="border border-border rounded bg-bg-card overflow-hidden">
                    <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                      <div>
                        <span className="text-sm font-semibold text-text">{ex.titleEn}</span>
                        <p className="text-xs text-text-muted mt-0.5">{ex.descriptionEn}</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded border border-purple-500/30 text-purple-400 bg-purple-500/10 shrink-0 ml-3">
                        {ex.conceptEn}
                      </span>
                    </div>
                    <div className="p-4">
                      <PromptExample parts={ex.partsEn || ex.parts} locale={locale} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── Tips ──────────────────────────────────────────────── */}
            <section className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // Quick tips
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {promptTips.map((tip, i) => (
                  <div
                    key={i}
                    className="border border-border rounded bg-bg-card p-3"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span>{tip.emoji}</span>
                      <span className="text-xs font-semibold text-text">
                        {tip.titleEn}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {tip.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="border border-border rounded bg-bg-card p-6 text-center mb-8">
              <p className="text-sm text-text mb-2">
                Ready to test your prompts?
              </p>
              <p className="text-xs text-text-muted mb-4">
                Explore the best AI tools and put them into practice.
              </p>
              <a
                href="/en"
                className="inline-block text-xs bg-accent text-bg px-4 py-2 rounded hover:bg-accent-hover transition-colors font-semibold"
              >
                Explore AI tools →
              </a>
            </div>

            <Footer locale="en" />
          </div>
        </main>
      </div>
    </div>
  );
}
