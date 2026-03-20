import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glosario de AI — Los términos que todos fingen entender | cual.ai",
  description:
    "Explicamos en español claro (y con algo de humor) los términos más usados en inteligencia artificial: LLM, token, contexto, agente, RAG y más. Sin tecnicismos innecesarios.",
  openGraph: {
    title: "Glosario de AI | cual.ai",
    description:
      "Los términos de IA que todos usan y nadie explica — definidos en español para humanos normales.",
    url: "https://cual.ai/glosario",
  },
};

const terms = [
  {
    term: "Inteligencia Artificial (AI)",
    emoji: "🤖",
    short: "Software que imita habilidades humanas como entender texto, reconocer imágenes o tomar decisiones.",
    long: "La IA no es un robot con sentimientos ni va a conquistar el mundo (todavía). Es software entrenado con enormes cantidades de datos para hacer tareas que antes solo podían hacer humanos: leer, escribir, analizar, traducir, generar imágenes. Hay IA estrecha (solo hace una cosa bien) e IA general (aún no existe de verdad).",
    example: "ChatGPT escribiendo un email por ti es IA. El corrector de tu celular también es IA, solo que nadie se lo cuenta en conferencias.",
  },
  {
    term: "LLM — Large Language Model",
    emoji: "🧠",
    short: "Un modelo de IA entrenado con texto masivo para entender y generar lenguaje humano.",
    long: "LLM significa 'Modelo de Lenguaje Grande'. Es el motor detrás de ChatGPT, Claude, Gemini y similares. Se entrena leyendo una fracción enorme de internet, libros y textos, y aprende a predecir qué palabra viene después. Simple en teoría, abrumador en práctica.",
    example: "Cuando le preguntas a Claude '¿qué hago si mi jefe me llama los domingos?' y te da una respuesta coherente, eso es un LLM trabajando.",
  },
  {
    term: "Modelo",
    emoji: "📦",
    short: "La versión concreta de una IA — como GPT-4o, Claude 3.5 Sonnet o Gemini 2.5 Pro.",
    long: "Un modelo es el resultado de entrenar una IA con datos y parámetros específicos. Dos modelos de la misma empresa pueden ser muy diferentes en inteligencia, velocidad y precio. Elegir el modelo correcto para tu tarea es el arte de no gastar más de lo necesario.",
    example: "GPT-4o es un modelo de OpenAI. Claude Sonnet es un modelo de Anthropic. Son como versiones de un software, pero cada una tiene su propia personalidad.",
  },
  {
    term: "Token",
    emoji: "🪙",
    short: "La unidad mínima que procesa un LLM — aproximadamente ¾ de una palabra en español.",
    long: "Los modelos no leen palabras completas sino fragmentos llamados tokens. Una palabra corta puede ser 1 token, una larga puede ser 2 o 3. También los espacios y signos de puntuación cuentan. Por eso los precios de las APIs se miden en 'por millón de tokens'. Esta definición tiene aproximadamente 60 tokens.",
    example: "La palabra 'automáticamente' puede ser 4-5 tokens. 'AI' es 1. Así que escribir en español cuesta un poco más de tokens que en inglés (mala suerte).",
  },
  {
    term: "Ventana de Contexto",
    emoji: "🪟",
    short: "La cantidad de texto que un modelo puede 'recordar' dentro de una misma conversación.",
    long: "La ventana de contexto es la memoria de trabajo del modelo — todo lo que puede leer y considerar en un momento dado. Si tu conversación supera ese límite, el modelo literalmente olvida lo que dijiste al principio. Los modelos modernos tienen ventanas de 128K, 200K o hasta 1 millón de tokens, lo que equivale a varios libros completos.",
    example: "Si le pegas una novela entera a Claude con ventana de 200K tokens, la puede leer toda. Si le pegas dos novelas largas a un modelo con 32K, empezará a 'olvidar' el principio.",
  },
  {
    term: "Prompt",
    emoji: "💬",
    short: "El texto que le escribes a una IA para pedirle algo — tu pregunta, instrucción o contexto.",
    long: "El prompt es simplemente lo que le dices al modelo. Puede ser una pregunta corta ('¿qué es un token?') o un bloque de texto largo con instrucciones detalladas, contexto, ejemplos y restricciones. La calidad del prompt determina enormemente la calidad de la respuesta — de ahí nació el oficio del 'prompt engineer'.",
    example: "Decirle a la IA 'resume esto' es un prompt. Decirle 'eres un experto en finanzas, resume esto en 3 puntos para un CEO no técnico, sin jerga' es un buen prompt.",
  },
  {
    term: "Sistema de Instrucciones (System Prompt)",
    emoji: "⚙️",
    short: "Instrucciones ocultas que configuran cómo se comporta la IA antes de que empieces a hablar con ella.",
    long: "Cuando usas ChatGPT, Claude o cualquier app de IA, hay instrucciones que tú no ves que le dicen al modelo cómo comportarse: su personalidad, qué puede o no puede hacer, en qué idioma responder, etc. Las empresas usan esto para crear versiones especializadas de un modelo genérico.",
    example: "Cuando un chatbot de atención al cliente 'solo sabe hablar de productos de la empresa', eso es un system prompt que le dice que no hable de nada más.",
  },
  {
    term: "Agente AI",
    emoji: "🦾",
    short: "Una IA que no solo responde — sino que toma acciones, usa herramientas y completa tareas por su cuenta.",
    long: "Un agente es una IA conectada a herramientas del mundo real: puede buscar en internet, ejecutar código, enviar emails, navegar por sitios web, leer archivos. A diferencia de un chatbot que solo responde, un agente actúa. Manus, Devin, Claude Code y los GPTs con herramientas son ejemplos de agentes.",
    example: "Le dices a un agente 'investiga los 5 mejores fondos de inversión para 2026 y mándame un resumen por email'. Y lo hace. Solo.",
  },
  {
    term: "RAG — Retrieval Augmented Generation",
    emoji: "📚",
    short: "Técnica para darle a la IA acceso a documentos externos antes de que responda.",
    long: "RAG (Generación Aumentada por Recuperación) es la solución a uno de los grandes problemas de los LLMs: que solo saben lo que aprendieron durante su entrenamiento. Con RAG, antes de responder, el modelo busca en una base de documentos propia (tu manual, tu base de conocimiento, tus políticas) y usa esa información para dar respuestas precisas y actualizadas.",
    example: "Un chatbot de soporte que responde preguntas de tu manual de producto usando RAG. Sin RAG, inventaría respuestas. Con RAG, cita el manual.",
  },
  {
    term: "Hallucination (Alucinación)",
    emoji: "🌀",
    short: "Cuando la IA inventa información falsa con total confianza, como si fuera real.",
    long: "Las alucinaciones son el talón de Aquiles de los LLMs. El modelo no 'sabe' cuándo no sabe algo — simplemente genera el texto más probable, que a veces es incorrecto pero suena convincente. Citas inventadas, estadísticas que no existen, fechas equivocadas... todo presentado con la seguridad de un experto.",
    example: "Le preguntas a un LLM por un estudio científico y te da título, autores, revista y año — todo inventado. La referencia no existe. Pero sonaba bien.",
  },
  {
    term: "Fine-tuning",
    emoji: "🎛️",
    short: "Entrenar un modelo existente con tus propios datos para especializarlo en tu dominio.",
    long: "El fine-tuning es como contratar a un profesional general y pagarle un curso intensivo en tu industria. Tomas un modelo base y lo entrenas con ejemplos específicos de tu caso de uso (emails de tu empresa, documentos legales, transcripciones médicas) para que responda mejor en ese contexto.",
    example: "Una clínica que hace fine-tuning de un LLM con miles de historiales médicos anonimizados para que el modelo entienda terminología médica específica de su especialidad.",
  },
  {
    term: "Embedding",
    emoji: "🗺️",
    short: "Una representación matemática del significado de un texto, que permite comparar semánticamente.",
    long: "Un embedding convierte texto en un vector de números (una lista de coordenadas) que captura el significado semántico. Dos textos similares en significado tendrán vectores cercanos, aunque usen palabras diferentes. Es la base de la búsqueda semántica, las recomendaciones y el RAG.",
    example: "'Auto' y 'carro' tienen embeddings muy cercanos aunque sean palabras distintas. 'Auto' y 'pizza' tienen embeddings muy lejanos. Así funciona la búsqueda semántica.",
  },
  {
    term: "API",
    emoji: "🔌",
    short: "Un puente que permite que tu software se comunique con un servicio externo como OpenAI o Anthropic.",
    long: "API significa 'Interfaz de Programación de Aplicaciones'. En el contexto de IA, es la forma en que los desarrolladores conectan sus apps a modelos como GPT o Claude sin tener que correr el modelo ellos mismos. Mandas texto, recibes respuesta. Pagas por tokens usados.",
    example: "Cuando una app de productividad usa Claude para resumir tus notas, está llamando a la API de Anthropic en el fondo. Tú usas la app, la app llama a la API, la API devuelve el resumen.",
  },
  {
    term: "Multimodal",
    emoji: "👁️",
    short: "Un modelo que procesa varios tipos de información: texto, imágenes, audio o video.",
    long: "Los primeros LLMs solo entendían texto. Los modelos multimodales además pueden ver imágenes, escuchar audio y hasta analizar video. GPT-4o, Gemini 2.5 Pro y Claude 3.5 Sonnet son multimodales. Esto los hace mucho más versátiles para tareas del mundo real.",
    example: "Le mandas una foto de tu recibo del supermercado y le dices 'dime cuánto gasté en bebidas'. Un modelo multimodal lo lee y te da el número.",
  },
  {
    term: "Benchmark",
    emoji: "📏",
    short: "Una prueba estandarizada para medir y comparar el rendimiento de diferentes modelos de IA.",
    long: "Como los rankings universitarios, los benchmarks son pruebas que permiten comparar modelos de forma objetiva (o al menos intentarlo). MMLU, HumanEval, SWE-bench, GPQA son algunos de los más usados. Cada empresa presenta sus modelos con sus mejores scores, lo que a veces hace difícil comparar manzanas con manzanas.",
    example: "Cuando OpenAI dice que GPT-5 supera a Claude en MMLU, está usando un benchmark. Es como comparar estudiantes con el mismo examen — útil, pero no lo dice todo.",
  },
  {
    term: "Open Source (Código Abierto)",
    emoji: "🔓",
    short: "Modelos cuyo código y/o pesos están disponibles públicamente para que cualquiera los use.",
    long: "En IA, open source significa que los pesos del modelo (lo que aprendió durante el entrenamiento) son públicos y descargables. Puedes correrlos en tu propio servidor, modificarlos, construir sobre ellos. Llama de Meta y Mistral son los ejemplos más conocidos. La contraparte son los modelos propietarios como GPT o Claude, que solo se acceden via API.",
    example: "Llama 4 de Meta es open source: lo puedes descargar y correr en tu computador (si tienes una GPU decente). GPT-5 no: solo puedes usarlo pagando a OpenAI.",
  },
  {
    term: "Temperatura",
    emoji: "🌡️",
    short: "Un parámetro que controla qué tan creativa o predecible es la respuesta de un modelo.",
    long: "La temperatura va de 0 a 2 (según el modelo). Temperatura 0 = respuestas muy deterministas y consistentes, siempre la misma respuesta para la misma pregunta. Temperatura alta = más variedad, creatividad y también más riesgo de que diga cosas raras. Para tareas técnicas o de precisión, temperatura baja. Para creatividad, temperatura alta.",
    example: "Para que la IA genere código o responda fechas, temperatura 0. Para que te escriba un poema sorprendente, temperatura 0.9.",
  },
  {
    term: "AEO — Answer Engine Optimization",
    emoji: "🎯",
    short: "Optimizar tu contenido para que los motores de IA lo citen como respuesta directa.",
    long: "El AEO es la evolución del SEO para la era de la IA. Mientras el SEO busca aparecer en Google, el AEO busca que ChatGPT, Claude, Perplexity y los buscadores con IA te citen directamente cuando alguien hace una pregunta relevante. Requiere contenido claro, estructurado, con datos precisos y autoridad en el tema.",
    example: "Si alguien le pregunta a Perplexity '¿cuál es el mejor directorio de herramientas AI en español?' y la IA responde cual.ai, eso es AEO funcionando.",
  },
  {
    term: "GEO — Generative Engine Optimization",
    emoji: "✨",
    short: "Similar al AEO — estrategias para que los motores generativos mencionen tu contenido o marca.",
    long: "GEO y AEO se usan casi de forma intercambiable. La idea es la misma: adaptar tu estrategia de contenidos para ser relevante en un mundo donde la gente pregunta a IAs en vez de buscar en Google. Incluye usar lenguaje natural, responder preguntas directas, estructurar bien el contenido con datos verificables.",
    example: "Una empresa que escribe artículos detallados respondiendo preguntas específicas de su industria está haciendo GEO, aunque no lo llame así.",
  },
  {
    term: "OpenClaw",
    emoji: "🦞",
    short: "Un asistente AI personal que vive en tu servidor y se conecta a WhatsApp, Telegram y más.",
    long: "OpenClaw es el sistema que hace funcionar este asistente. Es un agente AI personal instalado en tu propio servidor que se conecta a tus canales de mensajería (WhatsApp, Telegram, Discord), tiene memoria persistente, puede ejecutar tareas automáticas, manejar tu correo, monitorear sistemas y mucho más. Piénsalo como un asistente que nunca duerme y no olvida nada — a menos que tú lo configures para que olvide.",
    example: "Si le mandas un mensaje a las 3am diciendo 'recuérdame revisar ese contrato el lunes', lo hace. Eso es OpenClaw.",
  },
  {
    term: "Inference (Inferencia)",
    emoji: "⚡",
    short: "El proceso de usar un modelo ya entrenado para generar una respuesta — lo que pasa cada vez que hablas con una IA.",
    long: "El entrenamiento de un modelo puede tomar meses y costar millones. La inferencia es el momento en que ese modelo responde tu pregunta — que toma segundos. Cuando pagas por tokens en una API, estás pagando por inferencia, no por el entrenamiento. Las empresas invierten mucho en hacer la inferencia más rápida y barata.",
    example: "Cada vez que le mandas un mensaje a ChatGPT y te responde, eso es una inferencia. Ocurren billones por día a nivel global.",
  },
];

export default function GlosarioPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
            <Link href="/" className="hover:text-accent transition-colors">cual.ai</Link>
            <span>/</span>
            <span>Glosario</span>
          </div>

          <h1 className="text-2xl font-bold text-text mb-4">
            Glosario de AI 📖
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
            {terms.length} términos · Ordenados de lo más general a lo más específico
          </p>
        </div>

        {/* Index */}
        <div className="bg-bg-card border border-border rounded-lg p-4 mb-8">
          <p className="text-xs text-text-muted mb-3 font-medium uppercase tracking-wide">Índice rápido</p>
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

        {/* Terms */}
        <div className="space-y-6">
          {terms.map((t) => (
            <div
              key={t.term}
              id={t.term.toLowerCase().replace(/[^a-z0-9]/g, "-")}
              className="border border-border rounded-lg p-5 bg-bg-card scroll-mt-16"
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
          ))}
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
    </main>
  );
}
