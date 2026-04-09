import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/layout/Header"
import OpenClawSidebar from "@/components/openclaw/OpenClawSidebar"
import Footer from "@/components/layout/Footer"
import { openclawHero, openclawComparison, openclawFAQs } from "@/data/openclaw-content"

export const metadata: Metadata = {
  title: "The real autonomous AI agent — cual.ai",
  description:
    "OpenClaw is an open source AI operations management platform. Smart automation that never sleeps: crons, WhatsApp, Gmail, persistent memory and more.",
  alternates: {
    canonical: "https://cual.ai/en/openclaw",
    languages: { es: "https://cual.ai/openclaw", en: "https://cual.ai/en/openclaw" },
  },
  openGraph: {
    title: "The real autonomous AI agent — cual.ai",
    description: "Open source AI operations management platform. Automation that never sleeps.",
    url: "https://cual.ai/en/openclaw",
    type: "website",
    siteName: "cual.ai",
  },
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-border rounded-lg overflow-hidden">
      <summary className="flex items-center gap-3 px-4 py-3 text-xs font-medium text-text cursor-pointer list-none hover:bg-bg-card transition-colors">
        <span className="text-accent shrink-0 transition-transform group-open:rotate-90">›</span>
        <span className="flex-1">{q}</span>
      </summary>
      <div className="px-4 pb-4 pt-1 text-xs text-text-muted leading-relaxed border-t border-border bg-bg">
        {a}
      </div>
    </details>
  )
}

export default function OpenClawPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <div className="flex flex-1">
        <OpenClawSidebar locale="en" />
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 py-10">

            {/* Breadcrumb + Hero */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
                <Link href="/en" className="hover:text-accent transition-colors">cual.ai</Link>
                <span>/</span>
                <span className="text-accent">OpenClaw</span>
              </div>
              <div className="inline-block text-[10px] uppercase tracking-widest text-accent font-semibold border border-accent/30 bg-accent/5 px-2 py-0.5 rounded mb-3">
                {openclawHero.badgeEn}
              </div>
              <h1 className="text-2xl font-bold text-text mb-3">{openclawHero.titleEn}</h1>
              <p className="text-sm text-text-muted leading-relaxed">{openclawHero.subtitleEn}</p>
            </div>

            {/* Section 1: What is OpenClaw? */}
            <div id="que-es" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">1</span>
                <h2 className="text-base font-bold text-text">What is OpenClaw?</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card space-y-3">
                <p className="text-sm text-text leading-relaxed">
                  OpenClaw is an open source platform that runs on a server (your VPS, your Raspberry Pi, your Mac) and works as an <strong className="text-accent">AI Chief of Staff</strong>: an operational assistant that manages your company in the background while you sleep, work, or fly a plane.
                </p>
                <p className="text-sm text-text leading-relaxed">
                  Unlike a chatbot that only answers questions, OpenClaw <strong className="text-text">acts</strong>: it runs crons, sends messages, reads emails, sends alerts, coordinates agents, and maintains persistent memory of everything that happens.
                </p>
                <p className="text-sm text-text leading-relaxed">
                  It&apos;s not just a tool — it&apos;s an <strong className="text-accent">operating system for AI-operated companies</strong>.
                </p>
                <div className="bg-bg rounded p-3 border border-border mt-3">
                  <p className="text-xs text-text-muted">
                    <span className="text-accent font-medium">Real example:</span> while Nicolas was flying a glider, OpenClaw had already sent the morning checklist to the three Construmas stores, verified there were no urgent feedbacks on cual.ai, and alerted him via WhatsApp about an important email.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: How does it work? */}
            <div id="como-funciona" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">2</span>
                <h2 className="text-base font-bold text-text">How does it work?</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { emoji: "🌐", title: "Gateway", desc: "The central brain that runs 24/7 on a server and connects all channels: WhatsApp, Telegram, Discord, Gmail, Google Chat..." },
                    { emoji: "🧩", title: "Skills", desc: "Specialized modules that give it specific abilities: send emails, manage crons, read spreadsheets, execute code." },
                    { emoji: "🤖", title: "Agents", desc: "Autonomous agents that do background tasks — each has its area: emails, reports, calendar, monitoring." },
                    { emoji: "🧠", title: "Memory", desc: "File-based memory system (Markdown) that gives it continuity between sessions. It doesn't start from zero every time." },
                    { emoji: "💓", title: "Heartbeats", desc: "Periodic jobs that automatically check things: emails, calendar events, store status." },
                    { emoji: "📱", title: "Channels", desc: "Connects with WhatsApp, Telegram, Discord, Gmail, Google Chat and more — all integrated in one place." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-3 border border-border rounded bg-bg">
                      <span className="text-base shrink-0 mt-0.5">{item.emoji}</span>
                      <div>
                        <p className="text-xs font-bold text-text mb-0.5">{item.title}</p>
                        <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: What is it for? */}
            <div id="para-que-sirve" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">3</span>
                <h2 className="text-base font-bold text-text">What is it for?</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card">
                <div className="space-y-0">
                  {[
                    "Automate operational tasks 24/7 without human intervention",
                    "Monitor systems, services and critical metrics — and react when something fails",
                    "Manage team communication and coordination at any scale",
                    "Read emails, extract key information and alert proactively",
                    "Coordinate schedules, reminders and follow-ups automatically",
                    "Run background processes while you sleep — for individuals and teams alike",
                    "Act as an autonomous agent that works while you are away",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
                      <span className="text-accent mt-0.5 shrink-0">✓</span>
                      <p className="text-xs text-text leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4: Comparison */}
            <div id="vs-claude-code" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">4</span>
                <h2 className="text-base font-bold text-text">OpenClaw vs Claude Code</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card mb-4">
                <p className="text-sm text-text leading-relaxed mb-3">
                  <strong className="text-text">Claude Code</strong> is a <strong className="text-accent">coding</strong> agent. Designed for programmers. Excellent at writing code, refactoring, and doing PR reviews. But it has no persistent memory, doesn&apos;t connect to WhatsApp, and doesn&apos;t do operational tasks on its own.
                </p>
                <p className="text-sm text-text leading-relaxed mb-3">
                  <strong className="text-text">OpenClaw</strong> is an <strong className="text-accent">operational platform</strong>. Designed to manage a company. It uses AI agents as its engine, but adds: persistent memory, connections to all channels, crons, scheduling, and orchestration of multiple simultaneous agents.
                </p>
                <p className="text-sm text-text leading-relaxed">
                  In practice: OpenClaw <strong className="text-accent">CAN use Claude Code</strong> as a skill for code tasks. OpenClaw is the director; Claude Code is one of the employees.
                </p>
              </div>
              <div className="border border-border rounded-lg overflow-hidden bg-bg-card">
                <div className="space-y-2 p-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div />
                    <div className="text-xs font-semibold text-accent uppercase tracking-wide px-3 py-2 text-center border border-accent/30 bg-accent/5 rounded">OpenClaw</div>
                    <div className="text-xs font-semibold text-text-muted uppercase tracking-wide px-3 py-2 text-center">Claude Code</div>
                  </div>
                  {openclawComparison.rows.map((row) => (
                    <div key={row.featureEn} className="grid grid-cols-3 gap-2 items-center">
                      <div className="px-3 py-2 text-xs text-text">{row.featureEn}</div>
                      <div className="px-3 py-2 text-xs text-center rounded font-medium text-text">
                        {row.openclawEn}
                      </div>
                      <div className="px-3 py-2 text-xs text-center rounded text-text-muted">
                        {row.claudeCodeEn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 5: Installation */}
            <div id="instalacion" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">5</span>
                <h2 className="text-base font-bold text-text">How to install?</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card">
                <p className="text-xs text-text-muted mb-4">
                  OpenClaw works wherever you can run Node.js. Minimum requirements: Ubuntu 20.04+, 1GB RAM (2GB recommended), Node.js 18+. For WhatsApp you need a dedicated number.
                </p>
                <pre className="bg-bg rounded border border-border p-4 text-xs font-mono text-text overflow-x-auto leading-relaxed space-y-1">
{`# 1. Install Node.js 18+
node --version

# 2. Install OpenClaw globally
npm install -g openclaw

# 3. Configure the gateway
openclaw init
openclaw gateway start

# 4. Connect a channel (e.g. WhatsApp)
openclaw pairing scan whatsapp

# 5. Verify it's running
openclaw status`}
                </pre>
              </div>
            </div>

            {/* Section 6: Who created it? */}
            <div id="quien-lo-creo" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">6</span>
                <h2 className="text-base font-bold text-text">Who created it?</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card">
                <p className="text-sm text-text leading-relaxed mb-3">
                  OpenClaw was created by a small team with experience in AI infrastructure and business automation. The project is <strong className="text-accent">open source (MIT license)</strong> and is actively maintained on GitHub.
                </p>
                <p className="text-sm text-text leading-relaxed">
                  Unlike companies like OpenAI or Anthropic, OpenClaw is not an AI model company — it&apos;s an <strong className="text-accent">operational AI product company</strong>. Its focus is not making smarter models, but making the ones that already exist useful in the day-to-day of a real business.
                </p>
              </div>
            </div>

            {/* Section 7: Why so powerful? */}
            <div id="potencia" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">7</span>
                <h2 className="text-base font-bold text-text">Why is it so powerful?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { n: "1", emoji: "🧠", title: "Persistent memory", desc: "The fundamental problem with all chatbots is that they start from zero every conversation. OpenClaw solves this with Markdown files as long-term memory. It remembers decisions, context, preferences, lessons learned." },
                  { n: "2", emoji: "⚡", title: "It acts, not just responds", desc: "It executes code, sends messages, creates crons, reads APIs, connects tools. It's not a passive advisor — it's an active employee that gets things done." },
                  { n: "3", emoji: "🌙", title: "Runs 24/7 in the background", desc: "Heartbeats constantly check things without anyone talking to it. If something happens — an urgent email, a failed pipeline, a store that didn't open — it reacts on its own." },
                ].map((item) => (
                  <div key={item.n} className="border border-border rounded-lg p-4 bg-bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent font-bold text-sm">{item.n}</span>
                      <span className="text-base">{item.emoji}</span>
                    </div>
                    <h3 className="text-xs font-bold text-text mb-1">{item.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 8: FAQ */}
            <div id="faq" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">8</span>
                <h2 className="text-base font-bold text-text">Frequently asked questions</h2>
              </div>
              <div className="space-y-2">
                {openclawFAQs.map((f) => (
                  <FaqItem key={f.questionEn} q={f.questionEn} a={f.answerEn} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 border border-accent/30 rounded-lg p-6 text-center bg-accent/5">
              <p className="text-sm text-text mb-2 font-medium">Want to try OpenClaw?</p>
              <p className="text-xs text-text-muted mb-5">Open source, free, and ready to run on your server.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-accent text-bg text-xs font-semibold hover:bg-accent-hover transition-colors">
                  GitHub →
                </a>
                <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border text-text text-xs hover:border-accent hover:text-accent transition-colors">
                  Docs →
                </a>
              </div>
            </div>

          </div>
          <Footer locale="en" />
        </main>
      </div>
    </div>
  )
}
