import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/layout/Header"
import OpenClawSidebar from "@/components/openclaw/OpenClawSidebar"
import Footer from "@/components/layout/Footer"
import { openclawHero, openclawSections, openclawComparison, openclawFAQs } from "@/data/openclaw-content"

export const metadata: Metadata = {
  title: "El verdadero agente autónomo de IA — cual.ai",
  description:
    "OpenClaw es una plataforma open source de gestión operativa con IA. Automatización inteligente que nunca duerme: crons, WhatsApp, Gmail, memoria persistente y más.",
  alternates: {
    canonical: "https://cual.ai/openclaw",
    languages: { es: "https://cual.ai/openclaw", en: "https://cual.ai/en/openclaw" },
  },
  openGraph: {
    title: "El verdadero agente autónomo de IA — cual.ai",
    description: "Plataforma open source de gestión operativa con IA. Automatización que nunca duerme.",
    url: "https://cual.ai/openclaw",
    type: "website",
    siteName: "cual.ai",
  },
}

function ComparisonTable() {
  const rows = openclawComparison.rows
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2">
        <div />
        <div className="text-xs font-semibold text-accent uppercase tracking-wide px-3 py-2 text-center border border-accent/30 bg-accent/5 rounded">OpenClaw</div>
        <div className="text-xs font-semibold text-text-muted uppercase tracking-wide px-3 py-2 text-center">Claude Code</div>
      </div>
      {rows.map((row) => (
        <div key={row.feature} className="grid grid-cols-3 gap-2 items-center">
          <div className="px-3 py-2 text-xs text-text">{row.feature}</div>
          <div className={`px-3 py-2 text-xs text-center rounded font-medium ${row.openclaw === "✅ Sí" || row.openclaw === "✅ Sí — Open source / gratis" ? "text-green-400" : row.openclaw.startsWith("❌") ? "text-red-400" : "text-text"}`}>
            {row.openclaw}
          </div>
          <div className={`px-3 py-2 text-xs text-center rounded ${row.claudeCode === "✅ Sí" || row.claudeCode === "$20/mes (pro tier)" ? "text-green-400" : row.claudeCode.startsWith("❌") ? "text-red-400" : "text-text-muted"}`}>
            {row.claudeCode}
          </div>
        </div>
      ))}
    </div>
  )
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

export default function OpenClawPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <OpenClawSidebar />
        <main className="flex-1 min-w-0 lg:ml-0">
          <div className="max-w-3xl mx-auto px-4 py-10">

            {/* Breadcrumb + Hero */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
                <Link href="/" className="hover:text-accent transition-colors">cual.ai</Link>
                <span>/</span>
                <span className="text-accent">OpenClaw</span>
              </div>
              <div className="inline-block text-[10px] uppercase tracking-widest text-accent font-semibold border border-accent/30 bg-accent/5 px-2 py-0.5 rounded mb-3">
                {openclawHero.badge}
              </div>
              <h1 className="text-2xl font-bold text-text mb-3">{openclawHero.title}</h1>
              <p className="text-sm text-text-muted leading-relaxed">{openclawHero.subtitle}</p>
            </div>

            {/* Section 1: ¿Qué es OpenClaw? */}
            <div id="que-es" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">1</span>
                <h2 className="text-base font-bold text-text">¿Qué es OpenClaw?</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card space-y-3">
                <p className="text-sm text-text leading-relaxed">
                  OpenClaw es una plataforma open source que corre en un servidor (tu VPS, tu Raspberry Pi, tu Mac) y funciona como un <strong className="text-accent">Chief of Staff AI</strong>: un asistente operativo que gestiona tu empresa en segundo plano mientras vos duermes, trabajas o pilotas un avión.
                </p>
                <p className="text-sm text-text leading-relaxed">
                  A diferencia de un chatbot que solo responde preguntas, OpenClaw <strong className="text-text">actúa</strong>: ejecuta crons, envía mensajes, lee correos, manda alertas, coordina agentes, y mantiene memoria persistente de todo lo que pasa.
                </p>
                <p className="text-sm text-text leading-relaxed">
                  No es solo una herramienta — es un <strong className="text-accent">sistema operativo para empresas operadas por IA</strong>.
                </p>
                <div className="bg-bg rounded p-3 border border-border mt-3">
                  <p className="text-xs text-text-muted">
                    <span className="text-accent font-medium">Ejemplo real:</span> mientras Nicolas pilotaba un planeador, OpenClaw ya le había enviado el checklist de la mañana a las tres tiendas de Construmas, había verificado que no hubiera feedbacks urgentes en cual.ai, y le había alertado por WhatsApp de un correo importante.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: ¿Cómo funciona? */}
            <div id="como-funciona" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">2</span>
                <h2 className="text-base font-bold text-text">¿Cómo funciona?</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { emoji: "🌐", title: "Gateway", desc: "El cerebro central que corre 24/7 en un servidor y conecta todos los canales: WhatsApp, Telegram, Discord, Gmail, Google Chat..." },
                    { emoji: "🧩", title: "Skills", desc: "Módulos especializados que le dan habilidades específicas: enviar emails, gestionar crons, leer spreadsheets, ejecutar código." },
                    { emoji: "🤖", title: "Agents", desc: "Agentes autónomos que hacen tareas de fondo — cada uno tiene su área: emails, reportes, agenda, monitoreo." },
                    { emoji: "🧠", title: "Memory", desc: "Sistema de archivos de memoria (Markdown) que le da continuidad entre sesiones. No empieza de cero cada vez." },
                    { emoji: "💓", title: "Heartbeats", desc: "Trabajos periódicos que revisan cosas automáticamente: emails, eventos de calendario, estado de tiendas." },
                    { emoji: "📱", title: "Canales", desc: "Conecta con WhatsApp, Telegram, Discord, Gmail, Google Chat y más — todo integrado en un solo lugar." },
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

            {/* Section 3: ¿Para qué sirve? */}
            <div id="para-que-sirve" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">3</span>
                <h2 className="text-base font-bold text-text">¿Para qué sirve?</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card">
                <div className="space-y-0">
                  {[
                    "Automatizar tareas operativas 24/7 sin intervención humana",
                    "Monitorear sistemas, servicios y métricas críticas y reaccionar cuando algo falla",
                    "Gestionar comunicación y coordinación de equipos a cualquier escala",
                    "Revisar correos, extraer información clave y alertar proactivamente",
                    "Coordinar agendas, recordatorios y seguimientos automáticamente",
                    "Ejecutar procesos de fondo mientras dormís — ideal para individuos y equipos",
                    "Ser el agente autónomo que trabaja mientras vos no estás",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
                      <span className="text-accent mt-0.5 shrink-0">✓</span>
                      <p className="text-xs text-text leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4: Comparativa */}
            <div id="vs-claude-code" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">4</span>
                <h2 className="text-base font-bold text-text">OpenClaw vs Claude Code</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card mb-4">
                <p className="text-sm text-text leading-relaxed mb-3">
                  <strong className="text-text">Claude Code</strong> es un agente de <strong className="text-accent">codificación</strong>. Diseñado para programadores. Excelente escribiendo código, refactoreando y haciendo PR reviews. Pero no tiene memoria persistente, no conecta a WhatsApp y no hace tareas operativas por sí solo.
                </p>
                <p className="text-sm text-text leading-relaxed mb-3">
                  <strong className="text-text">OpenClaw</strong> es una <strong className="text-accent">plataforma operativa</strong>. Diseñado para gestionar una empresa. Usa agentes de IA como motor, pero le suma: memoria persistente, conexiones a todos los canales, crons, scheduling y orchestration de múltiples agentes simultáneos.
                </p>
                <p className="text-sm text-text leading-relaxed">
                  En la práctica: OpenClaw <strong className="text-accent">PUEDE usar Claude Code</strong> como skill para tareas de código. OpenClaw es el director; Claude Code es uno de los empleados.
                </p>
              </div>
              <div className="border border-border rounded-lg overflow-hidden bg-bg-card">
                <ComparisonTable />
              </div>
            </div>

            {/* Section 5: Instalación */}
            <div id="instalacion" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">5</span>
                <h2 className="text-base font-bold text-text">¿Cómo se instala?</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card">
                <p className="text-xs text-text-muted mb-4">
                  OpenClaw funciona donde sea que puedas correr Node.js. Requisitos mínimos: Ubuntu 20.04+, 1GB RAM (2GB recomendado), Node.js 18+. Para WhatsApp se necesita un número dedicado.
                </p>
                <pre className="bg-bg rounded border border-border p-4 text-xs font-mono text-text overflow-x-auto leading-relaxed space-y-1">
{`# 1. Instalar Node.js 18+
node --version

# 2. Instalar OpenClaw globalmente
npm install -g openclaw

# 3. Configurar el gateway
openclaw init
openclaw gateway start

# 4. Conectar un canal (ej. WhatsApp)
openclaw pairing scan whatsapp

# 5. Verificar que funciona
openclaw status`}
                </pre>
              </div>
            </div>

            {/* Section 6: ¿Quién lo creó? */}
            <div id="quien-lo-creo" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">6</span>
                <h2 className="text-base font-bold text-text">¿Quién lo creó?</h2>
              </div>
              <div className="border border-border rounded-lg p-5 bg-bg-card">
                <p className="text-sm text-text leading-relaxed mb-3">
                  OpenClaw fue creado por un equipo pequeño con experiencia en infraestructura de IA y automatización empresarial. El proyecto es <strong className="text-accent">open source (licencia MIT)</strong> y se mantiene activamente en GitHub.
                </p>
                <p className="text-sm text-text leading-relaxed">
                  A diferencia de empresas como OpenAI o Anthropic, OpenClaw no es una empresa de modelos de IA — es una empresa de <strong className="text-accent">productos de IA operativa</strong>. Su enfoque no es hacer modelos más inteligentes, sino hacer que los que ya existen sean útiles en el día a día de una empresa real.
                </p>
              </div>
            </div>

            {/* Section 7: ¿Por qué es tan potente? */}
            <div id="potencia" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-accent">7</span>
                <h2 className="text-base font-bold text-text">¿Por qué es tan potente?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { n: "1", emoji: "🧠", title: "Memoria persistente", desc: "El problema de todos los chatbots es que empiezan de cero cada vez. OpenClaw usa archivos Markdown como memoria de largo plazo. Recuerda decisiones, contexto, preferencias, lecciones aprendidas." },
                  { n: "2", emoji: "⚡", title: "Actúa, no solo responde", desc: "Ejecuta código, manda mensajes, crea crons, lee APIs, conecta herramientas. No es un asesor pasivo — es un empleado activo que hace cosas." },
                  { n: "3", emoji: "🌙", title: "Corre 24/7 en segundo plano", desc: "Los heartbeats revisan cosas constantemente sin que nadie les hable. Si algo pasa — un email urgente, un pipeline que falló, una tienda que no abrió — reacciona solo." },
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
                <h2 className="text-base font-bold text-text">Preguntas frecuentes</h2>
              </div>
              <div className="space-y-2">
                {openclawFAQs.map((f) => (
                  <FaqItem key={f.question} q={f.question} a={f.answer} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 border border-accent/30 rounded-lg p-6 text-center bg-accent/5">
              <p className="text-sm text-text mb-2 font-medium">¿Querés probar OpenClaw?</p>
              <p className="text-xs text-text-muted mb-5">Open source, gratis, y listo para correr en tu servidor.</p>
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
          <Footer />
        </main>
      </div>
    </div>
  )
}
