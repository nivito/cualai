import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "¿Qué es la Inteligencia Artificial? — cual.ai",
  description:
    "Entiende qué es la IA, cómo funciona, cómo llegamos aquí y cómo se ve el futuro. Explicado simple, sin tecnicismos.",
  openGraph: {
    title: "¿Qué es la Inteligencia Artificial? — cual.ai",
    description:
      "Entiende qué es la IA, cómo funciona, cómo llegamos aquí y cómo se ve el futuro. Explicado simple, sin tecnicismos.",
    url: "https://cual.ai/que-es-ia",
  },
};

const timeline = [
  {
    year: "1950",
    title: "La pregunta que lo empezó todo",
    description:
      "Alan Turing publica su famoso artículo y lanza la pregunta: \"¿pueden las máquinas pensar?\". Nace la idea de que una máquina podría, algún día, imitar la inteligencia humana. Todavía no existían los computadores personales.",
  },
  {
    year: "1997",
    title: "Una máquina vence al campeón de ajedrez",
    description:
      "Deep Blue, una computadora de IBM del tamaño de un armario, derrota al campeón mundial de ajedrez Garry Kasparov. El mundo se sorprende: una máquina puede superar a un humano en una tarea intelectual compleja. Pero solo sabía jugar ajedrez — nada más.",
  },
  {
    year: "2007",
    title: "El iPhone y la explosión de datos",
    description:
      "Apple lanza el iPhone y arranca la era de los smartphones. De repente, miles de millones de personas generan fotos, textos, búsquedas y datos todos los días. Esos océanos de datos serán el combustible que la IA necesitará para aprender.",
  },
  {
    year: "2012",
    title: "Las redes neuronales despiertan",
    description:
      "Las redes neuronales profundas (deep learning) empiezan a ganar competencias de reconocimiento de imágenes con una precisión que nadie esperaba. Los investigadores se dan cuenta de que con suficientes datos y poder de cómputo, estas redes pueden aprender casi cualquier cosa.",
  },
  {
    year: "2017",
    title: "Google inventa el Transformer",
    description:
      "Google publica un artículo titulado \"Attention Is All You Need\" y presenta la arquitectura Transformer. Este diseño revolucionario es la base de todo lo que vino después: GPT, Claude, Gemini, Llama. Sin este invento, nada de lo que ves hoy existiría.",
  },
  {
    year: "2022",
    title: "ChatGPT cambia todo",
    description:
      "OpenAI lanza ChatGPT en noviembre y en cinco días tiene un millón de usuarios. Por primera vez, cualquier persona puede conversar con una IA avanzada desde su navegador. El mundo nunca vuelve a ser igual. Empresas, gobiernos y escuelas se preguntan qué hacer.",
  },
  {
    year: "2024–hoy",
    title: "La IA ya razona, crea y construye",
    description:
      "Los modelos ya no solo responden preguntas: razonan paso a paso, generan imágenes fotorrealistas, escriben código funcional, componen música y mantienen conversaciones por voz. Los agentes de IA empiezan a ejecutar tareas completas de forma autónoma. Estamos aquí.",
  },
];

export default function QueEsIAPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 min-w-0">
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-text-muted text-xs mb-6">
            <Link href="/" className="hover:text-accent transition-colors">
              cual.ai
            </Link>
            <span>/</span>
            <span>¿Qué es la IA?</span>
          </div>

          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-text mb-4">
              ¿Qué es la Inteligencia Artificial?
            </h1>
            <p className="text-sm text-text-muted leading-relaxed">
              Todo lo que necesitas saber sobre la tecnología que está
              transformando el mundo — explicado para humanos normales, sin
              tecnicismos ni exageraciones.
            </p>
          </div>

          {/* ¿Qué es la IA? */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">
              ¿Qué es la IA?
            </h2>
            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4">
              <p className="text-sm text-text leading-relaxed">
                La inteligencia artificial es software que puede hacer cosas que
                antes solo podían hacer los humanos: entender texto, reconocer
                imágenes, tomar decisiones, mantener conversaciones y hasta
                escribir código. No es magia, no es un robot con sentimientos, y
                no es ciencia ficción. Es matemáticas + datos + mucho poder de
                cómputo.
              </p>
              <p className="text-sm text-text leading-relaxed">
                Imagina que le enseñas a un niño a reconocer perros. No le das
                una definición de diccionario con la taxonomía completa. Le
                muestras miles de fotos de perros: grandes, chiquitos, peludos,
                con manchas, sin manchas. Después de ver suficientes ejemplos, el
                niño puede reconocer un perro que nunca había visto antes. La IA
                funciona de manera similar: aprende de ejemplos, no de reglas
                escritas a mano.
              </p>
              <p className="text-sm text-text leading-relaxed">
                La diferencia es que mientras un niño necesita ver unos cientos de
                perros, la IA puede procesar millones de ejemplos en horas. Y no
                se limita a perros: puede aprender a reconocer enfermedades en
                radiografías, traducir idiomas, predecir el clima o escribir un
                email profesional por ti.
              </p>
            </div>
          </section>

          {/* ¿Cómo funciona? */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">
              ¿Cómo funciona?
            </h2>
            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4">
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Paso 1: Datos de entrenamiento.
                </span>{" "}
                Todo empieza con datos. Muchos datos. Los modelos de lenguaje como
                ChatGPT o Claude se entrenaron leyendo una fracción enorme de
                internet: artículos, libros, conversaciones, código, Wikipedia,
                foros. Es como si alguien leyera la biblioteca más grande del
                mundo en unas semanas.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Paso 2: Encontrar patrones.
                </span>{" "}
                La IA no memoriza todo lo que lee. Lo que hace es encontrar
                patrones: qué palabras tienden a ir juntas, qué sigue después de
                una pregunta, cómo se estructura una explicación clara. Es como
                cuando después de leer muchos emails profesionales, ya sabes
                instintivamente cómo empezar uno sin pensar. La IA hace eso, pero
                a una escala incomprensible.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Paso 3: Predicción.
                </span>{" "}
                Cuando le haces una pregunta a la IA, lo que realmente hace es
                predecir cuál es la respuesta más probable basándose en todos los
                patrones que aprendió. Palabra por palabra, va generando la
                respuesta que tiene mayor probabilidad de ser útil y correcta. Es
                como un autocompletado extremadamente sofisticado.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  ¿Y las redes neuronales?
                </span>{" "}
                El motor interno de la IA se llama red neuronal, inspirada
                (vagamente) en cómo funciona el cerebro. Imagina capas de filtros:
                la primera capa reconoce cosas simples (letras, formas básicas),
                la siguiente combina esas piezas en conceptos más complejos
                (palabras, frases), y las capas más profundas entienden ideas
                abstractas (intención, tono, contexto). Cada capa construye sobre
                la anterior, como un edificio de comprensión.
              </p>
            </div>
          </section>

          {/* ¿Cómo llegamos aquí? */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">
              ¿Cómo llegamos aquí?
            </h2>
            <p className="text-sm text-text-muted mb-6">
              La IA no apareció de la nada en 2022. Es el resultado de más de 70
              años de investigación, fracasos, avances inesperados y mucha
              paciencia.
            </p>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className="bg-bg-card border border-border rounded-lg p-5 flex gap-4"
                >
                  <div className="shrink-0 w-20 text-right">
                    <span className="text-sm font-bold text-accent">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-text mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ¿Cómo se ve el futuro? */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">
              ¿Cómo se ve el futuro?
            </h2>
            <div className="bg-bg-card border border-border rounded-lg p-5 space-y-4">
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Las oportunidades son enormes.
                </span>{" "}
                En salud, la IA ya ayuda a detectar cánceres en etapas tempranas y
                a diseñar medicamentos más rápido. En educación, permite tutores
                personalizados que se adaptan al ritmo de cada estudiante. En
                productividad, las tareas repetitivas que antes tomaban horas
                ahora toman minutos. Un médico rural con acceso a IA tiene a su
                disposición el conocimiento de miles de especialistas. Un
                emprendedor puede lanzar un producto con un equipo de tres
                personas que antes habría necesitado treinta.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Pero los desafíos son reales.
                </span>{" "}
                La automatización va a transformar el mercado laboral: algunos
                trabajos desaparecerán, otros se transformarán y aparecerán nuevos
                que hoy ni imaginamos. La transición no será fácil para todos, y
                los países que no inviertan en educación y adaptación se van a
                quedar atrás. No es alarmismo — es lo que pasa con cada revolución
                tecnológica, solo que esta va más rápido.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  La privacidad y la desinformación son preocupaciones legítimas.
                </span>{" "}
                Los modelos de IA pueden generar textos, imágenes y videos
                indistinguibles de los reales. Esto abre la puerta a
                desinformación a escala industrial, deepfakes convincentes y
                manipulación. Al mismo tiempo, los sistemas de IA procesan
                cantidades enormes de datos personales, lo que plantea preguntas
                serias sobre quién tiene acceso a tu información y cómo la usa.
              </p>
              <p className="text-sm text-text leading-relaxed">
                <span className="text-accent font-medium">
                  Lo que está claro es que la IA no se va.
                </span>{" "}
                Ignorarla no es una estrategia. Lo más inteligente es entenderla:
                qué puede hacer, qué no puede hacer, dónde es útil y dónde hay
                que ser escéptico. No necesitas ser ingeniero para usar la IA a tu
                favor — solo necesitas curiosidad y un poco de criterio. Por eso
                existe cual.ai: para que explores las herramientas disponibles y
                decidas cuáles te sirven.
              </p>
            </div>
          </section>

          {/* CTA Final */}
          <div className="border border-border rounded-lg p-5 text-center bg-bg-card">
            <p className="text-sm text-text mb-2">
              ¿Listo para explorar lo que la IA puede hacer por ti?
            </p>
            <p className="text-xs text-text-muted mb-4">
              Descubre las herramientas de IA más útiles, explicadas en español y
              organizadas por categoría.
            </p>
            <Link
              href="/"
              className="inline-block text-xs bg-accent text-bg px-4 py-2 rounded hover:bg-accent-hover transition-colors"
            >
              Explora las herramientas de IA más útiles en cual.ai →
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
