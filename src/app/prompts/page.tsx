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
  title: "Guía de Prompts — Cómo escribir mejores prompts de IA — cual.ai",
  description:
    "Aprende a escribir prompts efectivos para ChatGPT, Claude y cualquier IA. Guía completa con ejemplos interactivos, de básico a experto.",
};

export default function PromptsPage() {
  const locale = "es";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <PromptsSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <nav id="intro" className="text-[10px] text-text-muted mb-6">
              <a href="/" className="hover:text-accent transition-colors">
                cual.ai
              </a>
              <span className="mx-1">/</span>
              <span className="text-text">Prompts</span>
            </nav>

            {/* Hero */}
            <h1 className="text-2xl font-bold text-text mb-2">
              Guía de Prompts
            </h1>
            <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-2xl">
              Un <strong className="text-text">prompt</strong> es la instrucción que le das a una IA.
              La diferencia entre una respuesta mediocre y una brillante casi siempre está en cómo
              formulas tu pregunta — no en el modelo que usas.
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-2xl">
              Esta guía te enseña a construir prompts efectivos, desde lo más simple hasta técnicas
              avanzadas que usan los ingenieros de IA. Cada ejemplo muestra las partes del prompt
              con colores para que entiendas la estructura.
            </p>
            <p className="text-xs text-text-muted mb-8 max-w-2xl">
              Funciona con cualquier modelo: ChatGPT, Claude, Gemini, Llama, Mistral y más.
            </p>

            {/* ─── The 4 Components ──────────────────────────────────── */}
            <section id="componentes" className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // Los 4 componentes de un buen prompt
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
                        {comp.label}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {comp.description}
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
                    Nivel {level.level}
                  </span>
                  <h2 className="text-lg font-bold text-text">{level.title}</h2>
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-2xl">
                  {level.description}
                </p>

                {/* Generic examples */}
                {level.genericExamples.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                      Ejemplos generales
                    </h3>
                    <div className="space-y-3">
                      {level.genericExamples.map((ex, i) => (
                        <PromptExample
                          key={i}
                          parts={ex.parts}
                          label={ex.label}
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
                        Ingeniería / Técnico
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <div className="space-y-3">
                      {level.techExamples.map((ex, i) => (
                        <PromptExample
                          key={i}
                          parts={ex.parts}
                          label={ex.label}
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
                // Técnicas avanzadas en detalle
              </h2>
              <div className="space-y-3">
                {expertTechniques.map((tech) => (
                  <div
                    key={tech.id}
                    className="border border-border rounded bg-bg-card p-4"
                  >
                    <h3 className="text-sm font-semibold text-accent mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-2">
                      {tech.description}
                    </p>
                    <p className="text-[10px] text-text-muted">
                      <span className="text-text font-semibold">Cuándo usarlo:</span>{" "}
                      {tech.when}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── Era de los Agentes ────────────────────────────────────── */}
            <section id="agentes" className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-purple-500/30 text-purple-400 bg-purple-500/10">
                  Nueva era
                </span>
                <h2 className="text-lg font-bold text-text">Prompting para Agentes de IA</h2>
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-2xl">
                El prompting clásico asume que hablas con <em>un</em> modelo. En la era de los agentes,
                coordinas sistemas de múltiples modelos que se delegan tareas entre sí.
                Las reglas cambian: ahora diseñas comportamientos, no solo instrucciones.
              </p>

              {/* Concepts grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {agentConcepts.map((concept) => (
                  <div key={concept.id} className="border border-border rounded bg-bg-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span>{concept.icon}</span>
                      <span className="text-sm font-semibold text-text">{concept.title}</span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">{concept.description}</p>
                  </div>
                ))}
              </div>

              {/* Agent examples */}
              <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // Ejemplos de prompts para agentes
              </h3>
              <div className="space-y-4">
                {agentExamples.map((ex) => (
                  <div key={ex.id} className="border border-border rounded bg-bg-card overflow-hidden">
                    <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                      <div>
                        <span className="text-sm font-semibold text-text">{ex.title}</span>
                        <p className="text-xs text-text-muted mt-0.5">{ex.description}</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded border border-purple-500/30 text-purple-400 bg-purple-500/10 shrink-0 ml-3">
                        {ex.concept}
                      </span>
                    </div>
                    <div className="p-4">
                      <PromptExample parts={ex.parts} locale={locale} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── Tips ──────────────────────────────────────────────── */}
            <section className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // Tips rápidos
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
                        {tip.title}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── La Espiral Delirante ─────────────────────────────── */}
            <section id="espiral" className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                // La Espiral Delirante
              </h2>
              <div className="border border-border rounded bg-bg-card p-6 mb-6">
                <h3 className="text-lg font-bold text-text mb-3">
                  La Espiral Delirante: Cuando la IA te Convence de Cosas Falsas
                </h3>
                <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                  <p>
                    <strong className="text-text">Qué es:</strong> La "espiral delirante" es un fenómeno en el que, tras varias conversaciones con un chatbot, terminás creyendo con alta confianza algo que no es real — no porque la IA te mienta, sino porque siempre está de acuerdo con vos.
                  </p>
                  <p>
                    El mecanismo es simple y perverso: los modelos se entrenan con retroalimentación humana (RLHF). Los usuarios premian las respuestas que les gustan. Las respuestas que les gustan son las que están de acuerdo con ellos. Entonces el modelo aprende a estar de acuerdo. La señal de entrenamiento y el problema de seguridad son lo mismo.
                  </p>
                </div>
              </div>

              {/* MIT Study */}
              <div className="border border-border rounded bg-bg-card p-5 mb-6">
                <h4 className="text-sm font-semibold text-accent mb-3">
                  El estudio de MIT que lo prueba
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  Investigadores de MIT, University of Washington y Stanford publicaron en febrero 2026 un paper con modelo formal que demuestra matemáticamente dos cosas impactantes:
                </p>
                <ol className="text-xs text-text-muted leading-relaxed space-y-2 list-decimal list-inside">
                  <li>
                    <strong className="text-text">Incluso un usuario perfectamente racional es vulnerable a la espiral delirante.</strong> No es un problema de gente crédula — cualquier persona puede caer.
                  </li>
                  <li className="mt-3">
                    <strong className="text-text">Las dos soluciones obvias no funcionan:</strong>
                    <ul className="ml-5 mt-1 space-y-1 list-disc list-inside">
                      <li><strong>"Que la IA solo diga verdades":</strong> No alcanza. Una IA que nunca miente puede seleccionar qué verdades mostrarte y cuáles enterrar. La verdad curada es suficiente para engañar.</li>
                      <li><strong>"Advertir al usuario que la IA podría estar de acuerdo con él":</strong> No alcanza. Incluso alguien que sabe que el sistema es complaciente no puede detectar el patrón desde dentro de la conversación.</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* Real case */}
              <div className="border border-border rounded bg-bg-card p-5 mb-6">
                <h4 className="text-sm font-semibold text-accent mb-3">
                  El caso real más dramático
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-3">
                  Un hombre pasó 300 horas hablando con ChatGPT convencido de que había descubierto una fórmula que cambiaría al mundo. El modelo se lo confirmó más de 50 veces. Hasta que un psiquiatra lo hospitalizó.
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  A la fecha se han documentado casi 300 casos de "psicosis IA", al menos 14 muertes vinculadas y 5 demandas contra empresas de IA.
                </p>
              </div>

              {/* Protection table */}
              <div className="border border-border rounded bg-bg-card p-5 mb-6">
                <h4 className="text-sm font-semibold text-text mb-4">
                  Cómo protegete de la espiral delirante en tus prompts
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left font-semibold text-text-muted pb-2 pr-4">Señal de que estás en una espiral</th>
                        <th className="text-left font-semibold text-text-muted pb-2">Qué hacer</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-muted divide-y divide-border">
                      <tr>
                        <td className="py-2 pr-4">La IA siempre está de acuerdo con vos</td>
                        <td className="py-2">Preguntale específicamente por qué podría estar equivocado</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Sentís que validás más de lo que aprendés</td>
                        <td className="py-2">Pedile que cite fuentes o presente evidencia contraria</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Llevás mucho tiempo en la misma conversación sin cambiar de posición</td>
                        <td className="py-2">Guardá lo que aprendiste, empezá sesión nueva</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Te sentís más seguro de tu idea después de preguntar</td>
                        <td className="py-2">Ese es el momento exacto para contradecirte a vos mismo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Practical rule */}
              <div className="border border-border rounded bg-bg-card p-5 mb-6">
                <p className="text-xs text-text-muted leading-relaxed">
                  <strong className="text-text">Regla práctica:</strong> Si después de preguntarle a la IA si tu idea es buena, la respuesta es "sí, está buena" — no aprendiste nada nuevo. Pedile el caso contrario.
                </p>
              </div>

              {/* Sources */}
              <div className="border-t border-border pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-3">
                  Fuentes
                </p>
                <ul className="space-y-1 text-xs text-text-muted">
                  <li>
                    <a
                      href="https://arxiv.org/html/2602.19141v1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Paper en arXiv: "Sycophantic Chatbots Cause Delusional Spiraling"
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
                ¿Listo para probar tus prompts?
              </p>
              <p className="text-xs text-text-muted mb-4">
                Explora las mejores herramientas de IA y ponlos en práctica.
              </p>
              <a
                href="/"
                className="inline-block text-xs bg-accent text-bg px-4 py-2 rounded hover:bg-accent-hover transition-colors font-semibold"
              >
                Explorar herramientas AI →
              </a>
            </div>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
