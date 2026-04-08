import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import OpenClawSidebar from "@/components/openclaw/OpenClawSidebar";
import OpenClawFAQ from "@/components/openclaw/OpenClawFAQ";
import Footer from "@/components/layout/Footer";
import { openclawComparison, openclawFAQs } from "@/data/openclaw-content";

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

export default function OpenClawPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <OpenClawSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
                <Link href="/" className="hover:text-accent transition-colors">cual.ai</Link>
                <span>/</span>
                <span>OpenClaw</span>
              </div>

              <h1 className="text-2xl font-bold text-text mb-4">
                OpenClaw: tu Chief of Staff AI ⚡
              </h1>

              <div className="bg-bg-card border border-border rounded-lg p-5 mb-2">
                <span className="inline-block text-[10px] uppercase tracking-widest text-accent font-semibold border border-accent/30 bg-accent/5 px-2 py-0.5 rounded mb-3">
                  IA de Gestión Operativa
                </span>
                <p className="text-sm text-text leading-relaxed mb-3">
                  Automatización inteligente que nunca duerme. Así es como una empresa pequeña puede tener el equivalente a un equipo operativo de 10 personas.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Mientras vos pilotás un avión, OpenClaw revisa si las tiendas de Construmas abrieron.
                </p>
              </div>

              <p className="text-xs text-text-muted">
                8 secciones · Open source · MIT License
              </p>
            </div>

            {/* Nav de secciones sticky */}
            <div className="bg-bg-card border border-border rounded-lg p-4 mb-8 sticky top-12 z-10">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "que-es", label: "Qué es" },
                  { id: "como-funciona", label: "Cómo funciona" },
                  { id: "para-que-sirve", label: "Para qué sirve" },
                  { id: "vs-claude-code", label: "vs Claude Code" },
                  { id: "instalacion", label: "Instalación" },
                  { id: "quien-lo-creo", label: "Creadores" },
                  { id: "por-que-potente", label: "Por qué potente" },
                  { id: "caso-real", label: "Caso real" },
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

            {/* Sección 1 — Qué es */}
            <div className="space-y-6">
              <div>
                <div id="que-es" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">⚡</span>
                  <span className="text-sm font-bold text-text">¿Qué es OpenClaw?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card">
                  <p className="text-xs text-text leading-relaxed mb-3">
                    OpenClaw es una plataforma open source que corre en un servidor (tu VPS, tu Raspberry Pi, tu Mac) y funciona como un <span className="text-accent font-medium">Chief of Staff AI</span>: un asistente operativo que gestiona tu empresa en segundo plano mientras tú duermes, trabajas o pilotas un avión.
                  </p>
                  <p className="text-xs text-text leading-relaxed mb-3">
                    A diferencia de un chatbot que solo responde preguntas, OpenClaw <span className="text-accent font-medium">actúa</span>: ejecuta crons, envía mensajes, lee correos, manda alertas, coordina agentes, y mantiene memoria persistente de todo lo que pasa.
                  </p>
                  <p className="text-xs text-text leading-relaxed mb-3">
                    No es solo una herramienta — es un sistema operativo para empresas operadas por IA.
                  </p>
                  <div className="bg-bg rounded p-3 border border-border">
                    <p className="text-xs text-text-muted leading-relaxed">
                      <span className="text-text-muted font-medium">Ejemplo:</span>{" "}
                      Mientras vos pilotás un avión, OpenClaw revisa si las tiendas de Construmas abrieron, te avisa por WhatsApp si algo quedó pendiente, y manda el reporte diario al grupo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección 2 — Cómo funciona */}
              <div>
                <div id="como-funciona" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">🔧</span>
                  <span className="text-sm font-bold text-text">¿Cómo funciona?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { emoji: "🧠", title: "Gateway", desc: "El cerebro central que corre 24/7 en un servidor y conecta todos los canales (WhatsApp, Telegram, Discord, Gmail, Google Chat...)" },
                    { emoji: "🛠️", title: "Skills", desc: "Módulos especializados que le dan habilidades específicas: enviar emails, gestionar crons, leer spreadsheets, ejecutar código." },
                    { emoji: "🤖", title: "Agents", desc: "Agentes autónomos que hacen tareas de fondo — cada uno tiene su área: emails, reportes, agenda, monitoreo." },
                    { emoji: "💾", title: "Memory", desc: "Sistema de archivos de memoria (Markdown) que le da continuidad entre sesiones — no empieza de cero cada vez." },
                    { emoji: "💓", title: "Heartbeats", desc: "Trabajos periódicos que revisan cosas automáticamente: emails, eventos de calendario, estado de tiendas." },
                    { emoji: "📡", title: "Canales", desc: "Conecta con WhatsApp, Telegram, Discord, Gmail, Google Chat y más." },
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

              {/* Sección 3 — Para qué sirve */}
              <div>
                <div id="para-que-sirve" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">🎯</span>
                  <span className="text-sm font-bold text-text">¿Para qué sirve?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card">
                  {[
                    "Reemplazar asistentes virtuales operativos (no estratégicos)",
                    "Automatizar reportes diarios de tiendas, restaurantes, equipos",
                    "Monitorear pipelines de GitHub/GitLab y alertar cuando algo falla",
                    "Gestionar comunicación masiva (grupos de WhatsApp, canales de Telegram)",
                    "Revisar emails y alertar sobre lo urgente",
                    "Coordinar recordatorios y agendas",
                    "Chief of Staff para entrepreneurs que manejan múltiples empresas",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 py-1.5">
                      <span className="text-accent text-xs mt-0.5">✓</span>
                      <p className="text-xs text-text leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sección 4 — Comparativa */}
              <div>
                <div id="vs-claude-code" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">⚔️</span>
                  <span className="text-sm font-bold text-text">OpenClaw vs Claude Code</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card mb-3">
                  <p className="text-xs text-text leading-relaxed mb-3">
                    No son competidores — son <span className="text-accent font-medium">complementarios</span>. OpenClaw es el director; Claude Code es uno de los empleados.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="border border-accent/30 rounded-lg p-4 bg-accent/5">
                    <h3 className="text-xs font-bold text-accent mb-2">⚡ OpenClaw</h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-2">
                      <span className="text-accent font-medium">Plataforma operativa.</span> Diseñado para gestionar una empresa.
                    </p>
                    <div className="space-y-1">
                      {openclawComparison.rows.map((row) => (
                        <div key={row.feature} className="flex items-center gap-2">
                          <span className="text-xs text-text-muted">{row.feature}:</span>
                          <span className="text-xs font-medium text-text">{row.openclaw}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-border rounded-lg p-4 bg-bg-card">
                    <h3 className="text-xs font-bold text-text mb-2">🖥️ Claude Code</h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-2">
                      <span className="text-text font-medium">Agente de codificación.</span> Diseñado para programadores.
                    </p>
                    <div className="space-y-1">
                      {openclawComparison.rows.map((row) => (
                        <div key={row.feature} className="flex items-center gap-2">
                          <span className="text-xs text-text-muted">{row.feature}:</span>
                          <span className="text-xs font-medium text-text">{row.claudeCode}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección 5 — Instalación */}
              <div>
                <div id="instalacion" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">📦</span>
                  <span className="text-sm font-bold text-text">¿Cómo se instala?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card">
                  <p className="text-xs text-text leading-relaxed mb-3">
                    OpenClaw funciona donde sea que puedas correr Node.js:
                  </p>
                  <pre className="bg-bg border border-border rounded p-4 text-xs font-mono overflow-x-auto mb-3 text-text">
{`# 1. Instalar Node.js 18+
node --version  # debe ser >= 18

# 2. Instalar OpenClaw globalmente
npm install -g openclaw

# 3. Configurar el gateway (primera vez)
openclaw init
openclaw gateway start

# 4. Conectar un canal (ejemplo WhatsApp)
openclaw pairing scan whatsapp

# 5. Verificar que está corriendo
openclaw status`}
                  </pre>
                  <p className="text-xs text-text-muted leading-relaxed mb-3">
                    El gateway queda corriendo en segundo plano (systemd service) y se reconnecta automáticamente si el servidor se reinicia.
                  </p>
                  <div className="bg-bg rounded p-3 border border-border">
                    <p className="text-xs text-text-muted font-medium mb-1">Requisitos mínimos:</p>
                    <div className="space-y-0.5">
                      {[
                        "VPS con Ubuntu 20.04+ (o cualquier Linux)",
                        "1GB RAM mínimo, 2GB recomendado",
                        "Node.js 18+",
                        "Para WhatsApp: un número dedicado",
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

              {/* Sección 6 — Quién lo creó */}
              <div>
                <div id="quien-lo-creo" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">👥</span>
                  <span className="text-sm font-bold text-text">¿Quién lo creó?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card">
                  <p className="text-xs text-text leading-relaxed mb-3">
                    OpenClaw fue creado por un equipo pequeño con experiencia en infraestructura de IA y automatización empresarial. El proyecto es open source (licencia MIT) y se mantiene activamente en GitHub.
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    A diferencia de empresas como OpenAI o Anthropic, OpenClaw no es una empresa de modelos de IA — es una empresa de <span className="text-accent font-medium">productos de IA operativa</span>. Su enfoque no es hacer modelos más inteligentes, sino hacer que los que ya existen sean útiles en el día a día de una empresa real.
                  </p>
                </div>
              </div>

              {/* Sección 7 — Por qué potente */}
              <div>
                <div id="por-que-potente" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">💪</span>
                  <span className="text-sm font-bold text-text">¿Por qué es tan potente?</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      num: "1",
                      title: "Memoria persistente",
                      desc: "El problema fundamental de todos los chatbots es que empiezan de cero cada conversación. OpenClaw soluciona esto con archivos Markdown que son su memoria de largo plazo.",
                    },
                    {
                      num: "2",
                      title: "Actúa, no solo responde",
                      desc: "Ejecuta código, manda mensajes, crea crons, lee APIs, conecta herramientas. No es un asesor pasivo — es un empleado activo.",
                    },
                    {
                      num: "3",
                      title: "Corre 24/7 en segundo plano",
                      desc: "No necesita que alguien le hable para hacer algo. Los heartbeats revisan cosas constantemente. Si algo pasa, reacciona solo.",
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

              {/* Sección 8 — Caso real */}
              <div>
                <div id="caso-real" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">🏢</span>
                  <span className="text-sm font-bold text-text">¿Cómo lo usamos nosotros? (Caso real)</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border rounded-lg p-5 bg-bg-card">
                  <p className="text-xs text-text leading-relaxed mb-3">
                    OpenClaw está corriendo en un VPS y gestiona múltiples empresas:
                  </p>
                  {[
                    { title: "Gestión de tiendas Construmas", desc: "Crons automáticos que envían checklists cada mañana a los grupos de WhatsApp de las tiendas. Reporta si algo queda pendiente." },
                    { title: "cual.ai", desc: "Monitoreo de feedbacks, actualizaciones semanales de modelos, newsletter automation." },
                    { title: "Email management", desc: "Revisa Gmail cada heartbeat, alerta si hay algo urgente." },
                    { title: "Alertas de pipelines", desc: "GitLab CI monitors en tiempo real." },
                    { title: "Coordinación general", desc: "Como Chief of Staff virtual para toda la operación." },
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
                      Todo esto sin que Nicolas tenga que abrir una app o darle instrucciones — el sistema revisa y actúa.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <div id="faq" className="scroll-mt-24 flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-accent">❓</span>
                  <span className="text-sm font-bold text-text">Preguntas frecuentes</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <OpenClawFAQ
                  faqs={openclawFAQs.map((f) => ({
                    question: f.question,
                    answer: f.answer,
                  }))}
                />
              </div>
            </div>

            {/* Footer CTA */}
            <div className="mt-10 border border-border rounded-lg p-5 text-center bg-bg-card">
              <p className="text-sm text-text mb-2">Probá OpenClaw hoy</p>
              <p className="text-xs text-text-muted mb-4">
                Open source, gratis, y listo para correr en tu servidor.
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

          <Footer />
        </main>
      </div>
    </div>
  );
}
