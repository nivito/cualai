import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import OpenClawSidebar from "@/components/openclaw/OpenClawSidebar";
import OpenClawFAQ from "@/components/openclaw/OpenClawFAQ";
import Footer from "@/components/layout/Footer";
import { openclawComparison, openclawFAQs } from "@/data/openclaw-content";

export const metadata: Metadata = {
  title: "OpenClaw: your AI Chief of Staff — cual.ai",
  description:
    "OpenClaw is an open source AI operations management platform. Smart automation that never sleeps: crons, WhatsApp, Gmail, persistent memory and more.",
  alternates: {
    canonical: "https://cual.ai/en/openclaw",
    languages: { es: "https://cual.ai/openclaw", en: "https://cual.ai/en/openclaw" },
  },
  openGraph: {
    title: "OpenClaw: your AI Chief of Staff — cual.ai",
    description:
      "Open source AI operations management platform. Automation that never sleeps.",
    url: "https://cual.ai/en/openclaw",
    type: "website",
    siteName: "cual.ai",
  },
};

export default function OpenClawPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="en" />
      <div className="flex flex-1">
        <OpenClawSidebar locale="en" />
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
                <Link href="/en" className="hover:text-accent transition-colors">cual.ai</Link>
                <span>/</span>
                <span>OpenClaw</span>
              </div>

              <h1 className="text-2xl font-bold text-text mb-4">
                OpenClaw: your AI Chief of Staff ⚡
              </h1>

              <div className="bg-bg-card border border-border rounded-lg p-5 mb-2">
                <span className="inline-block text-[10px] uppercase tracking-widest text-accent font-semibold border border-accent/30 bg-accent/5 px-2 py-0.5 rounded mb-3">
                  AI Operations Management
                </span>
                <p className="text-sm text-text leading-relaxed mb-3">
                  Smart automation that never sleeps. This is how a small company can have the equivalent of a 10-person operations team.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  While you fly a plane, OpenClaw checks if the Construmas stores opened.
                </p>
              </div>

              <p className="text-xs text-text-muted">
                8 sections · Open source · MIT License
              </p>
            </div>

            {/* Sticky section nav */}
            <div className="bg-bg-card border border-border rounded-lg p-4 mb-8 sticky top-12 z-10">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "que-es", label: "What is it" },
                  { id: "como-funciona", label: "How it works" },
                  { id: "para-que-sirve", label: "Use cases" },
                  { id: "vs-claude-code", label: "vs Claude Code" },
                  { id: "instalacion", label: "Install" },
                  { id: "quien-lo-creo", label: "Creators" },
                  { id: "por-que-potente", label: "Why powerful" },
                  { id: "caso-real", label: "Real case" },
                  { id: "faq", label: "FAQ" },
                ].map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-xs font-mono text-accent hover:bg-accent hover:text-bg px-2 py-0.5 rounded transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Section 1 — What is it */}
            <div className="space-y-6">
              <div>
                <div id="que-es" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">⚡</span>
                  <span className="text-sm font-bold text-text">What is OpenClaw?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card">
                  <p className="text-xs text-text leading-relaxed mb-3">
                    OpenClaw is an open source platform that runs on a server (your VPS, your Raspberry Pi, your Mac) and works as an <span className="text-accent font-medium">AI Chief of Staff</span>: an operational assistant that manages your company in the background while you sleep, work, or fly a plane.
                  </p>
                  <p className="text-xs text-text leading-relaxed mb-3">
                    Unlike a chatbot that only answers questions, OpenClaw <span className="text-accent font-medium">acts</span>: it runs crons, sends messages, reads emails, sends alerts, coordinates agents, and maintains persistent memory of everything that happens.
                  </p>
                  <p className="text-xs text-text leading-relaxed mb-3">
                    It&apos;s not just a tool — it&apos;s an operating system for AI-operated companies.
                  </p>
                  <div className="bg-bg rounded p-3 border border-border">
                    <p className="text-xs text-text-muted leading-relaxed">
                      <span className="text-text-muted font-medium">Example:</span>{" "}
                      While you fly a plane, OpenClaw checks if the Construmas stores opened, notifies you via WhatsApp if something is pending, and sends the daily report to the group.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 — How it works */}
              <div>
                <div id="como-funciona" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">🔧</span>
                  <span className="text-sm font-bold text-text">How does it work?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { emoji: "🧠", title: "Gateway", desc: "The central brain that runs 24/7 on a server and connects all channels (WhatsApp, Telegram, Discord, Gmail, Google Chat...)" },
                    { emoji: "🛠️", title: "Skills", desc: "Specialized modules that give it specific abilities: send emails, manage crons, read spreadsheets, execute code." },
                    { emoji: "🤖", title: "Agents", desc: "Autonomous agents that do background tasks — each has its area: emails, reports, calendar, monitoring." },
                    { emoji: "💾", title: "Memory", desc: "File-based memory system (Markdown) that gives it continuity between sessions — it doesn't start from zero every time." },
                    { emoji: "💓", title: "Heartbeats", desc: "Periodic jobs that automatically check things: emails, calendar events, store status." },
                    { emoji: "📡", title: "Channels", desc: "Connects with WhatsApp, Telegram, Discord, Gmail, Google Chat and more." },
                  ].map((item) => (
                    <div key={item.title} className="border border-border rounded-lg p-4 bg-bg-card">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-lg shrink-0">{item.emoji}</span>
                        <h3 className="text-xs font-bold text-text">{item.title}</h3>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3 — Use cases */}
              <div>
                <div id="para-que-sirve" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">🎯</span>
                  <span className="text-sm font-bold text-text">What is it for?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card">
                  {[
                    "Replace operational virtual assistants (not strategic ones)",
                    "Automate daily reports for stores, restaurants, teams",
                    "Monitor GitHub/GitLab pipelines and alert when something fails",
                    "Manage mass communication (WhatsApp groups, Telegram channels)",
                    "Review emails and alert about urgent ones",
                    "Coordinate reminders and calendars",
                    "Chief of Staff for entrepreneurs managing multiple companies",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 py-1.5">
                      <span className="text-accent text-xs mt-0.5">✓</span>
                      <p className="text-xs text-text leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4 — Comparison */}
              <div>
                <div id="vs-claude-code" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">⚔️</span>
                  <span className="text-sm font-bold text-text">OpenClaw vs Claude Code</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card mb-3">
                  <p className="text-xs text-text leading-relaxed mb-3">
                    They are not competitors — they are <span className="text-accent font-medium">complementary</span>. OpenClaw is the director; Claude Code is one of the employees.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="border border-accent/30 rounded-lg p-4 bg-accent/5">
                    <h3 className="text-xs font-bold text-accent mb-2">⚡ OpenClaw</h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-2">
                      <span className="text-accent font-medium">Operational platform.</span> Designed to manage a company.
                    </p>
                    <div className="space-y-1">
                      {openclawComparison.rows.map((row) => (
                        <div key={row.featureEn} className="flex items-center gap-2">
                          <span className="text-xs text-text-muted">{row.featureEn}:</span>
                          <span className="text-xs font-medium text-text">{row.openclawEn}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-border rounded-lg p-4 bg-bg-card">
                    <h3 className="text-xs font-bold text-text mb-2">🖥️ Claude Code</h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-2">
                      <span className="text-text font-medium">Coding agent.</span> Designed for programmers.
                    </p>
                    <div className="space-y-1">
                      {openclawComparison.rows.map((row) => (
                        <div key={row.featureEn} className="flex items-center gap-2">
                          <span className="text-xs text-text-muted">{row.featureEn}:</span>
                          <span className="text-xs font-medium text-text">{row.claudeCodeEn}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5 — Installation */}
              <div>
                <div id="instalacion" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">📦</span>
                  <span className="text-sm font-bold text-text">How to install?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card">
                  <p className="text-xs text-text leading-relaxed mb-3">
                    OpenClaw works wherever you can run Node.js:
                  </p>
                  <pre className="bg-bg border border-border rounded p-4 text-xs font-mono overflow-x-auto mb-3 text-text">
{`# 1. Install Node.js 18+
node --version  # must be >= 18

# 2. Install OpenClaw globally
npm install -g openclaw

# 3. Configure the gateway (first time)
openclaw init
openclaw gateway start

# 4. Connect a channel (e.g. WhatsApp)
openclaw pairing scan whatsapp

# 5. Verify it's running
openclaw status`}
                  </pre>
                  <p className="text-xs text-text-muted leading-relaxed mb-3">
                    The gateway runs in the background (systemd service) and automatically reconnects if the server restarts.
                  </p>
                  <div className="bg-bg rounded p-3 border border-border">
                    <p className="text-xs text-text-muted font-medium mb-1">Minimum requirements:</p>
                    <div className="space-y-0.5">
                      {[
                        "VPS with Ubuntu 20.04+ (or any Linux)",
                        "1GB RAM minimum, 2GB recommended",
                        "Node.js 18+",
                        "For WhatsApp: a dedicated number",
                      ].map((req) => (
                        <div key={req} className="flex items-start gap-2">
                          <span className="text-accent text-xs mt-0.5">›</span>
                          <p className="text-xs text-text-muted leading-relaxed">{req}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6 — Who created it */}
              <div>
                <div id="quien-lo-creo" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">👥</span>
                  <span className="text-sm font-bold text-text">Who created it?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card">
                  <p className="text-xs text-text leading-relaxed mb-3">
                    OpenClaw was created by a small team with experience in AI infrastructure and business automation. The project is open source (MIT license) and is actively maintained on GitHub.
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Unlike companies like OpenAI or Anthropic, OpenClaw is not an AI model company — it&apos;s an <span className="text-accent font-medium">operational AI product company</span>. Its focus is not making smarter models, but making the ones that already exist useful in the day-to-day of a real business.
                  </p>
                </div>
              </div>

              {/* Section 7 — Why powerful */}
              <div>
                <div id="por-que-potente" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">💪</span>
                  <span className="text-sm font-bold text-text">Why is it so powerful?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      num: "1",
                      title: "Persistent memory",
                      desc: "The fundamental problem with all chatbots is that they start from zero every conversation. OpenClaw solves this with Markdown files that serve as its long-term memory.",
                    },
                    {
                      num: "2",
                      title: "It acts, not just responds",
                      desc: "It executes code, sends messages, creates crons, reads APIs, connects tools. It's not a passive advisor — it's an active employee.",
                    },
                    {
                      num: "3",
                      title: "Runs 24/7 in the background",
                      desc: "It doesn't need someone to talk to it to do something. Heartbeats constantly check things. If something happens, it reacts on its own.",
                    },
                  ].map((item) => (
                    <div key={item.num} className="border border-border rounded-lg p-4 bg-bg-card">
                      <span className="inline-block text-lg font-bold text-accent mb-2">{item.num}</span>
                      <h3 className="text-xs font-bold text-text mb-1">{item.title}</h3>
                      <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 8 — Real case */}
              <div>
                <div id="caso-real" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">🏢</span>
                  <span className="text-sm font-bold text-text">How do we use it? (Real case)</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card">
                  <p className="text-xs text-text leading-relaxed mb-3">
                    OpenClaw is running on a VPS and manages multiple companies:
                  </p>
                  {[
                    { title: "Construmas store management", desc: "Automatic crons that send checklists every morning to the stores' WhatsApp groups. Reports if something is pending." },
                    { title: "cual.ai", desc: "Feedback monitoring, weekly model updates, newsletter automation." },
                    { title: "Email management", desc: "Checks Gmail every heartbeat, alerts if there's something urgent." },
                    { title: "Pipeline alerts", desc: "GitLab CI monitors in real time." },
                    { title: "General coordination", desc: "As a virtual Chief of Staff for the entire operation." },
                  ].map((item) => (
                    <div key={item.title} className="mb-2 last:mb-0">
                      <p className="text-xs text-text leading-relaxed">
                        <span className="text-accent font-medium">{item.title}:</span>{" "}
                        <span className="text-text-muted">{item.desc}</span>
                      </p>
                    </div>
                  ))}
                  <div className="bg-bg rounded p-3 border border-border mt-3">
                    <p className="text-xs text-text-muted leading-relaxed">
                      All of this without Nicolas having to open an app or give instructions — the system checks and acts.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <div id="faq" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">❓</span>
                  <span className="text-sm font-bold text-text">Frequently asked questions</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <OpenClawFAQ
                  faqs={openclawFAQs.map((f) => ({
                    question: f.questionEn,
                    answer: f.answerEn,
                  }))}
                />
              </div>
            </div>

            {/* Footer CTA */}
            <div className="mt-10 border border-border rounded-lg p-5 text-center bg-bg-card">
              <p className="text-sm text-text mb-2">Try OpenClaw today</p>
              <p className="text-xs text-text-muted mb-4">
                Open source, free, and ready to run on your server.
              </p>
              <div className="flex gap-3 justify-center">
                <a
                  href="https://github.com/openclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs bg-accent text-bg px-4 py-2 rounded hover:bg-accent-hover transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href="https://openclaw.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs border border-border text-text-muted px-4 py-2 rounded hover:border-accent hover:text-accent transition-colors"
                >
                  openclaw.ai →
                </a>
              </div>
            </div>
          </div>

          <Footer locale="en" />
        </main>
      </div>
    </div>
  );
}
