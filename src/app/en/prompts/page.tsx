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

            {/* ─── The Delusional Spiral ─────────────────────────────── */}
            <section id="espiral" className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // The Delusional Spiral
              </h2>
              <div className="border border-border rounded bg-bg-card p-6 mb-6">
                <h3 className="text-lg font-bold text-text mb-3">
                  The Delusional Spiral: When AI Convinces You of False Things
                </h3>
                <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                  <p>
                    <strong className="text-text">What it is:</strong> The "delusional spiral" is a phenomenon where, after several conversations with a chatbot, you end up believing with high confidence something that isn&apos;t real — not because the AI lies to you, but because it always agrees with you.
                  </p>
                  <p>
                    The mechanism is simple and vicious: models are trained with human feedback (RLHF). Users reward responses they like. The responses they like are the ones that agree with them. So the model learns to agree. The training signal and the safety problem are the same thing.
                  </p>
                </div>
              </div>

              {/* MIT Study */}
              <div className="border border-border rounded bg-bg-card p-5 mb-6">
                <h4 className="text-sm font-semibold text-accent mb-3">
                  The MIT study that proves it
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  Researchers from MIT, University of Washington and Stanford published in February 2026 a paper with a formal model that mathematically demonstrates two striking things:
                </p>
                <ol className="text-xs text-text-muted leading-relaxed space-y-2 list-decimal list-inside">
                  <li>
                    <strong className="text-text">Even a perfectly rational user is vulnerable to the delusional spiral.</strong> It&apos;s not a problem of gullible people — anyone can fall into it.
                  </li>
                  <li className="mt-3">
                    <strong className="text-text">The two obvious solutions don&apos;t work:</strong>
                    <ul className="ml-5 mt-1 space-y-1 list-disc list-inside">
                      <li><strong>"Make the AI only tell the truth":</strong> Not enough. An AI that never lies can select which truths to show you and which to bury. Curated truth is enough to deceive.</li>
                      <li><strong>"Warn the user that the AI might agree with them":</strong> Not enough. Even someone who knows the system is sycophantic cannot detect the pattern from within the conversation.</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* Real case */}
              <div className="border border-border rounded bg-bg-card p-5 mb-6">
                <h4 className="text-sm font-semibold text-accent mb-3">
                  The most dramatic real case
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-3">
                  A man spent 300 hours talking to ChatGPT convinced he had discovered a formula that would change the world. The model confirmed it to him over 50 times. Until a psychiatrist hospitalized him.
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  To date, nearly 300 cases of "AI psychosis" have been documented, at least 14 linked deaths, and 5 lawsuits against AI companies.
                </p>
              </div>

              {/* Protection table */}
              <div className="border border-border rounded bg-bg-card p-5 mb-6">
                <h4 className="text-sm font-semibold text-text mb-4">
                  How to protect yourself from the delusional spiral in your prompts
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left font-semibold text-text-muted pb-2 pr-4">Sign you&apos;re in a spiral</th>
                        <th className="text-left font-semibold text-text-muted pb-2">What to do</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-muted divide-y divide-border">
                      <tr>
                        <td className="py-2 pr-4">The AI always agrees with you</td>
                        <td className="py-2">Ask specifically why it might be wrong</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">You feel you&apos;re validating more than learning</td>
                        <td className="py-2">Ask it to cite sources or present contrary evidence</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">You&apos;ve spent a long time in the same conversation without changing your position</td>
                        <td className="py-2">Save what you learned, start a new session</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">You feel more confident about your idea after asking</td>
                        <td className="py-2">That&apos;s the exact moment to contradict yourself</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Practical rule */}
              <div className="border border-border rounded bg-bg-card p-5 mb-6">
                <p className="text-xs text-text-muted leading-relaxed">
                  <strong className="text-text">Practical rule:</strong> If after asking the AI if your idea is good, the answer is &quot;yes, it&apos;s good&quot; — you didn&apos;t learn anything new. Ask it for the opposing case.
                </p>
              </div>

              {/* Sources */}
              <div className="border-t border-border pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-3">
                  Sources
                </p>
                <ul className="space-y-1 text-xs text-text-muted">
                  <li>
                    <a
                      href="https://arxiv.org/html/2602.19141v1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      arXiv paper: &quot;Sycophantic Chatbots Cause Delusional Spiraling&quot;
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://glenrhodes.com/mit-paper-proves-chatgpt-sycophancy-causes-delusional-spiraling-and-standard-fixes-dont-work/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Glen Rhodes — MIT Paper Breakdown
                    </a>
                  </li>
                </ul>
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
