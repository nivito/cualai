// ============================================================
// cual.ai — AI Models Data
// ============================================================

export interface AIModel {
  id: string
  slug: string
  name: string
  version: string
  company: string
  companySlug: string
  companyEmoji: string
  description: string
  longDescription: string
  type: ("texto" | "multimodal" | "codigo" | "razonamiento" | "imagen" | "voz" | "video")[]
  typeLabels: string[]
  contextWindow: number        // en tokens
  contextWindowLabel: string   // "128K tokens"
  // Precios API (por millón de tokens)
  apiPricing: {
    input: number | null       // USD
    output: number | null      // USD
    label: string              // "Gratis" / "$2.50 / $10.00 por M tokens"
  }
  // Planes de usuario
  userPricing: {
    free: boolean
    paidLabel: string | null   // "$20/mes (ChatGPT Plus)"
    url: string
  }
  speed: "muy-rapido" | "rapido" | "medio" | "lento"
  speedLabel: string
  intelligence: 1 | 2 | 3 | 4 | 5  // 1=básico, 5=frontier
  strengths: string[]
  weaknesses: string[]
  bestFor: string[]
  available: ("api" | "web" | "self-hosted" | "mobile")[]
  availableLabels: string[]
  featured: boolean
  isNew: boolean
  releasedAt: string           // "2024-05"
  tags: string[]
}

export interface AICompany {
  slug: string
  name: string
  emoji: string
  country: string
  description: string
}

// ── Companies ─────────────────────────────────────────────────
export const companies: AICompany[] = [
  { slug: "openai",    name: "OpenAI",    emoji: "🟢", country: "EE. UU.", description: "Creadores de ChatGPT y la serie GPT" },
  { slug: "anthropic", name: "Anthropic", emoji: "🟠", country: "EE. UU.", description: "Creadores de Claude, enfocados en seguridad AI" },
  { slug: "google",    name: "Google",    emoji: "🔵", country: "EE. UU.", description: "Creadores de Gemini y los modelos de DeepMind" },
  { slug: "meta",      name: "Meta",      emoji: "🟣", country: "EE. UU.", description: "Creadores de Llama, open source" },
  { slug: "mistral",   name: "Mistral",   emoji: "⚪", country: "Francia",  description: "Startup europea, modelos eficientes y open source" },
  { slug: "deepseek",  name: "DeepSeek",  emoji: "🔴", country: "China",    description: "Modelos de razonamiento de bajo costo de China" },
  { slug: "xai",       name: "xAI",       emoji: "⚫", country: "EE. UU.", description: "Creadores de Grok, de Elon Musk" },
  { slug: "cohere",    name: "Cohere",    emoji: "🟡", country: "Canadá",   description: "Enfocados en empresas y búsqueda semántica" },
  { slug: "amazon",    name: "Amazon",    emoji: "🟤", country: "EE. UU.", description: "Creadores de Nova y Titan via AWS Bedrock" },
]

// ── Models ────────────────────────────────────────────────────
export const aiModels: AIModel[] = [
  // ── OpenAI ──
  {
    id: "gpt-4o",
    slug: "gpt-4o",
    name: "GPT-4o",
    version: "4o",
    company: "OpenAI",
    companySlug: "openai",
    companyEmoji: "🟢",
    description: "El modelo flagship de OpenAI: multimodal, rápido y con el mejor balance calidad-precio.",
    longDescription: "GPT-4o ('o' de omni) es el modelo principal de OpenAI. Procesa texto, imágenes y audio de forma nativa en un solo modelo, sin necesidad de componentes separados. Ofrece rendimiento a nivel de GPT-4 Turbo pero con velocidad de inferencia mucho mayor y precio reducido. Es el modelo por defecto en ChatGPT Plus y el más usado globalmente para tareas de productividad, programación, análisis y generación de contenido.",
    type: ["texto", "multimodal", "codigo"],
    typeLabels: ["Texto", "Multimodal", "Código"],
    contextWindow: 128000,
    contextWindowLabel: "128K tokens",
    apiPricing: {
      input: 2.50,
      output: 10.00,
      label: "$2.50 / $10.00 por M tokens",
    },
    userPricing: {
      free: true,
      paidLabel: "$20/mes (ChatGPT Plus)",
      url: "https://chat.openai.com",
    },
    speed: "rapido",
    speedLabel: "Rápido",
    intelligence: 4,
    strengths: ["Multimodal nativo", "Balance velocidad/calidad", "Soporte de herramientas", "Amplio ecosistema"],
    weaknesses: ["Razonamiento complejo inferior a o1", "Contexto menor que Gemini 1.5"],
    bestFor: ["Productividad general", "Análisis de imágenes", "Asistentes de voz", "Integración en apps"],
    available: ["api", "web", "mobile"],
    availableLabels: ["API", "Web", "Mobile"],
    featured: true,
    isNew: false,
    releasedAt: "2024-05",
    tags: ["multimodal", "flagship", "openai", "chatgpt", "popular"],
  },
  {
    id: "gpt-4o-mini",
    slug: "gpt-4o-mini",
    name: "GPT-4o mini",
    version: "4o mini",
    company: "OpenAI",
    companySlug: "openai",
    companyEmoji: "🟢",
    description: "La versión económica de GPT-4o: ideal para tareas simples y alto volumen con costo mínimo.",
    longDescription: "GPT-4o mini es la opción de bajo costo de OpenAI, diseñada para casos de uso que requieren alto volumen de llamadas a la API. Ofrece capacidades multimodales similares a GPT-4o pero con menor capacidad de razonamiento. Su precio extremadamente bajo (15 centavos por millón de tokens de entrada) lo hace ideal para chatbots, clasificación de texto, extracción de datos y cualquier tarea que requiera muchas llamadas a la API.",
    type: ["texto", "multimodal", "codigo"],
    typeLabels: ["Texto", "Multimodal", "Código"],
    contextWindow: 128000,
    contextWindowLabel: "128K tokens",
    apiPricing: {
      input: 0.15,
      output: 0.60,
      label: "$0.15 / $0.60 por M tokens",
    },
    userPricing: {
      free: true,
      paidLabel: null,
      url: "https://chat.openai.com",
    },
    speed: "muy-rapido",
    speedLabel: "Muy rápido",
    intelligence: 3,
    strengths: ["Precio muy bajo", "Alta velocidad", "Bueno para tareas simples", "Multimodal"],
    weaknesses: ["Razonamiento limitado", "Menos preciso en tareas complejas"],
    bestFor: ["Chatbots de alto volumen", "Clasificación de texto", "Extracción de datos", "Automatización"],
    available: ["api", "web"],
    availableLabels: ["API", "Web"],
    featured: false,
    isNew: false,
    releasedAt: "2024-07",
    tags: ["economico", "alto-volumen", "openai", "rapido"],
  },
  {
    id: "o3",
    slug: "o3",
    name: "o3",
    version: "o3",
    company: "OpenAI",
    companySlug: "openai",
    companyEmoji: "🟢",
    description: "El modelo de razonamiento más potente de OpenAI: para problemas matemáticos, científicos y de código complejos.",
    longDescription: "o3 es el modelo de razonamiento de OpenAI, diseñado para problemas que requieren pensar paso a paso antes de responder. A diferencia de GPT-4o, o3 toma más tiempo para 'razonar' internamente (chain-of-thought) antes de dar una respuesta, lo que le permite resolver matemáticas avanzadas, ciencias, programación competitiva y análisis lógico complejo con mucha mayor precisión. Es el modelo con mejor rendimiento en benchmarks de razonamiento y ciencias como AIME, GPQA y SWE-bench.",
    type: ["texto", "razonamiento", "codigo"],
    typeLabels: ["Texto", "Razonamiento", "Código"],
    contextWindow: 200000,
    contextWindowLabel: "200K tokens",
    apiPricing: {
      input: 10.00,
      output: 40.00,
      label: "$10.00 / $40.00 por M tokens",
    },
    userPricing: {
      free: false,
      paidLabel: "$200/mes (ChatGPT Pro)",
      url: "https://chat.openai.com",
    },
    speed: "lento",
    speedLabel: "Lento (razona antes de responder)",
    intelligence: 5,
    strengths: ["Razonamiento matemático avanzado", "Código complejo", "Ciencias", "Análisis lógico profundo"],
    weaknesses: ["Lento", "Caro", "Sobredimensionado para tareas simples"],
    bestFor: ["Matemáticas avanzadas", "Research científico", "Programación competitiva", "Análisis de seguridad"],
    available: ["api", "web"],
    availableLabels: ["API", "Web"],
    featured: true,
    isNew: false,
    releasedAt: "2025-04",
    tags: ["razonamiento", "matematicas", "ciencias", "frontier", "openai"],
  },
  {
    id: "o4-mini",
    slug: "o4-mini",
    name: "o4-mini",
    version: "o4-mini",
    company: "OpenAI",
    companySlug: "openai",
    companyEmoji: "🟢",
    description: "Razonamiento avanzado de OpenAI a precio accesible — el punto dulce entre o3 y GPT-4o mini.",
    longDescription: "o4-mini combina las capacidades de razonamiento de la serie 'o' de OpenAI con un costo mucho más bajo que o3. Es multimodal (acepta imágenes), tiene ventana de contexto de 200K tokens y supera a o3 en varios benchmarks de código y matemáticas mientras cuesta 10x menos. Es ideal para developers que necesitan razonamiento avanzado sin el costo del modelo completo.",
    type: ["texto", "razonamiento", "codigo", "multimodal"],
    typeLabels: ["Texto", "Razonamiento", "Código", "Multimodal"],
    contextWindow: 200000,
    contextWindowLabel: "200K tokens",
    apiPricing: {
      input: 1.10,
      output: 4.40,
      label: "$1.10 / $4.40 por M tokens",
    },
    userPricing: {
      free: false,
      paidLabel: "$20/mes (ChatGPT Plus)",
      url: "https://chat.openai.com",
    },
    speed: "medio",
    speedLabel: "Medio",
    intelligence: 5,
    strengths: ["Razonamiento avanzado a bajo costo", "Multimodal", "Código y matemáticas", "200K contexto"],
    weaknesses: ["Más lento que GPT-4o", "No tan rápido como o3 en tareas muy complejas"],
    bestFor: ["Código complejo con presupuesto limitado", "Análisis matemático", "Tareas de razonamiento en producción"],
    available: ["api", "web"],
    availableLabels: ["API", "Web"],
    featured: true,
    isNew: true,
    releasedAt: "2025-04",
    tags: ["razonamiento", "economico", "codigo", "openai", "nuevo"],
  },

  // ── Anthropic ──
  {
    id: "claude-3-5-sonnet",
    slug: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    version: "3.5 Sonnet",
    company: "Anthropic",
    companySlug: "anthropic",
    companyEmoji: "🟠",
    description: "El modelo más popular de Anthropic: el mejor para código, escritura larga y análisis de documentos.",
    longDescription: "Claude 3.5 Sonnet es el modelo estrella de Anthropic para uso diario. Lidera en benchmarks de programación (SWE-bench), tiene contexto de 200K tokens y un 'extended thinking' opcional para razonamiento profundo. Su ventana de contexto grande lo hace ideal para analizar documentos extensos, repositorios de código completos y conversaciones largas. Destaca por seguir instrucciones complejas con precisión y por su capacidad de escritura de alta calidad.",
    type: ["texto", "multimodal", "codigo", "razonamiento"],
    typeLabels: ["Texto", "Multimodal", "Código", "Razonamiento"],
    contextWindow: 200000,
    contextWindowLabel: "200K tokens",
    apiPricing: {
      input: 3.00,
      output: 15.00,
      label: "$3.00 / $15.00 por M tokens",
    },
    userPricing: {
      free: true,
      paidLabel: "$20/mes (Claude Pro)",
      url: "https://claude.ai",
    },
    speed: "rapido",
    speedLabel: "Rápido",
    intelligence: 5,
    strengths: ["Mejor en programación", "Contexto de 200K tokens", "Seguimiento de instrucciones", "Escritura de calidad"],
    weaknesses: ["Sin búsqueda web nativa en API", "Más caro que GPT-4o en output"],
    bestFor: ["Programación", "Análisis de documentos largos", "Escritura profesional", "Agentes de código"],
    available: ["api", "web", "mobile"],
    availableLabels: ["API", "Web", "Mobile"],
    featured: true,
    isNew: false,
    releasedAt: "2024-10",
    tags: ["codigo", "documentos", "flagship", "anthropic", "popular"],
  },
  {
    id: "claude-3-5-haiku",
    slug: "claude-3-5-haiku",
    name: "Claude 3.5 Haiku",
    version: "3.5 Haiku",
    company: "Anthropic",
    companySlug: "anthropic",
    companyEmoji: "🟠",
    description: "El modelo rápido y económico de Anthropic — calidad Claude a velocidad máxima.",
    longDescription: "Claude 3.5 Haiku es la opción de bajo costo de Anthropic, diseñada para velocidad y eficiencia. A pesar de su tamaño reducido, supera en rendimiento a Claude 3 Opus (el anterior flagship de Anthropic) en varios benchmarks. Es ideal para chatbots, clasificación, extracción de datos y cualquier aplicación que requiera respuestas rápidas a bajo costo.",
    type: ["texto", "codigo"],
    typeLabels: ["Texto", "Código"],
    contextWindow: 200000,
    contextWindowLabel: "200K tokens",
    apiPricing: {
      input: 0.80,
      output: 4.00,
      label: "$0.80 / $4.00 por M tokens",
    },
    userPricing: {
      free: true,
      paidLabel: null,
      url: "https://claude.ai",
    },
    speed: "muy-rapido",
    speedLabel: "Muy rápido",
    intelligence: 3,
    strengths: ["Muy rápido", "Bajo costo", "200K contexto", "Mejor Haiku hasta la fecha"],
    weaknesses: ["Menor calidad que Sonnet en tareas complejas"],
    bestFor: ["Chatbots de alto volumen", "Clasificación", "Resúmenes rápidos", "Extracción de datos"],
    available: ["api", "web"],
    availableLabels: ["API", "Web"],
    featured: false,
    isNew: false,
    releasedAt: "2024-11",
    tags: ["economico", "rapido", "anthropic", "alto-volumen"],
  },

  // ── Google ──
  {
    id: "gemini-2-5-pro",
    slug: "gemini-2-5-pro",
    name: "Gemini 2.5 Pro",
    version: "2.5 Pro",
    company: "Google",
    companySlug: "google",
    companyEmoji: "🔵",
    description: "El modelo más inteligente de Google: razonamiento avanzado, 1M de tokens de contexto y multimodal nativo.",
    longDescription: "Gemini 2.5 Pro es el modelo frontier de Google, con la mayor ventana de contexto de cualquier modelo disponible (1 millón de tokens — equivalente a un libro completo). Es nativo multimodal: entiende texto, imágenes, audio, video y código. Tiene capacidades de 'thinking' integradas para razonamiento profundo. Actualmente lidera múltiples benchmarks de razonamiento, matemáticas y código. Ideal para análisis de repositorios completos, libros enteros o videos.",
    type: ["texto", "multimodal", "codigo", "razonamiento", "video"],
    typeLabels: ["Texto", "Multimodal", "Código", "Razonamiento", "Video"],
    contextWindow: 1000000,
    contextWindowLabel: "1M tokens",
    apiPricing: {
      input: 1.25,
      output: 10.00,
      label: "$1.25 / $10.00 por M tokens (hasta 200K)",
    },
    userPricing: {
      free: true,
      paidLabel: "$20/mes (Google One AI Premium)",
      url: "https://gemini.google.com",
    },
    speed: "medio",
    speedLabel: "Medio",
    intelligence: 5,
    strengths: ["1M tokens de contexto", "Multimodal nativo (video, audio)", "Razonamiento avanzado", "Integración Google Workspace"],
    weaknesses: ["Precio sube con contexto largo", "Menor ecosistema de terceros que OpenAI"],
    bestFor: ["Análisis de repositorios grandes", "Video y audio", "Documentos muy largos", "Integración con Google Workspace"],
    available: ["api", "web", "mobile"],
    availableLabels: ["API", "Web", "Mobile"],
    featured: true,
    isNew: true,
    releasedAt: "2025-03",
    tags: ["contexto-largo", "multimodal", "razonamiento", "google", "frontier", "nuevo"],
  },
  {
    id: "gemini-2-0-flash",
    slug: "gemini-2-0-flash",
    name: "Gemini 2.0 Flash",
    version: "2.0 Flash",
    company: "Google",
    companySlug: "google",
    companyEmoji: "🔵",
    description: "Velocidad extrema de Google con capacidades multimodales — ideal para aplicaciones en tiempo real.",
    longDescription: "Gemini 2.0 Flash es el modelo de velocidad de Google. Ofrece respuestas ultrarrápidas con capacidades multimodales (texto, imágenes, audio) y una ventana de contexto de 1M tokens. Incluye funciones únicas como generación de imágenes y texto a voz nativos. Su precio es muy competitivo y su velocidad lo hace ideal para aplicaciones interactivas, chatbots en tiempo real y procesamiento masivo.",
    type: ["texto", "multimodal", "codigo", "imagen", "voz"],
    typeLabels: ["Texto", "Multimodal", "Código", "Imagen", "Voz"],
    contextWindow: 1000000,
    contextWindowLabel: "1M tokens",
    apiPricing: {
      input: 0.10,
      output: 0.40,
      label: "$0.10 / $0.40 por M tokens",
    },
    userPricing: {
      free: true,
      paidLabel: null,
      url: "https://gemini.google.com",
    },
    speed: "muy-rapido",
    speedLabel: "Muy rápido",
    intelligence: 3,
    strengths: ["Precio mínimo", "Velocidad extrema", "1M contexto", "Generación de imagen nativa"],
    weaknesses: ["Menos inteligente que Gemini 2.5 Pro"],
    bestFor: ["Chatbots en tiempo real", "Procesamiento de alto volumen", "Agentes con llamadas frecuentes", "Apps móviles"],
    available: ["api", "web"],
    availableLabels: ["API", "Web"],
    featured: false,
    isNew: false,
    releasedAt: "2025-01",
    tags: ["velocidad", "economico", "multimodal", "google", "tiempo-real"],
  },

  // ── Meta ──
  {
    id: "llama-3-3-70b",
    slug: "llama-3-3-70b",
    name: "Llama 3.3 70B",
    version: "3.3 70B",
    company: "Meta",
    companySlug: "meta",
    companyEmoji: "🟣",
    description: "El modelo open source más potente de Meta: rendimiento de frontier con costo cero si lo corres tú mismo.",
    longDescription: "Llama 3.3 70B es el modelo open source insignia de Meta. Con 70 mil millones de parámetros, ofrece rendimiento comparable a modelos de pago como GPT-4o mini o Claude Haiku, pero puede ejecutarse localmente o en servidores propios sin costos de API. Está disponible bajo licencia permisiva para uso comercial. Los proveedores cloud lo ofrecen a precios muy bajos, y es el favorito de developers que necesitan privacidad total o control completo del modelo.",
    type: ["texto", "codigo"],
    typeLabels: ["Texto", "Código"],
    contextWindow: 128000,
    contextWindowLabel: "128K tokens",
    apiPricing: {
      input: 0.23,
      output: 0.40,
      label: "$0.23 / $0.40 por M tokens (via Groq/Together)",
    },
    userPricing: {
      free: true,
      paidLabel: null,
      url: "https://llama.meta.com",
    },
    speed: "rapido",
    speedLabel: "Rápido",
    intelligence: 3,
    strengths: ["Open source", "Self-hosted sin costo", "Privacidad total", "Sin censura comercial"],
    weaknesses: ["Requiere infraestructura para self-host", "Menor calidad que frontier en tareas complejas"],
    bestFor: ["Privacidad y datos sensibles", "Customización total", "Empresas sin presupuesto API", "Research"],
    available: ["api", "self-hosted"],
    availableLabels: ["API (terceros)", "Self-hosted"],
    featured: false,
    isNew: false,
    releasedAt: "2024-12",
    tags: ["open-source", "self-hosted", "privacidad", "meta", "llama"],
  },
  {
    id: "llama-4-scout",
    slug: "llama-4-scout",
    name: "Llama 4 Scout",
    version: "4 Scout",
    company: "Meta",
    companySlug: "meta",
    companyEmoji: "🟣",
    description: "La nueva generación de Llama: multimodal, 10M de tokens de contexto y arquitectura MoE eficiente.",
    longDescription: "Llama 4 Scout es el primer modelo multimodal de Meta y el open source con la mayor ventana de contexto disponible: 10 millones de tokens. Usa arquitectura Mixture of Experts (MoE) lo que lo hace muy eficiente — activa solo los parámetros necesarios para cada tarea. Acepta texto e imágenes, tiene 17 billones de parámetros activos y es libre de usar incluso comercialmente. Representa el salto de Meta de modelos de texto a modelos multimodales de frontera.",
    type: ["texto", "multimodal", "codigo"],
    typeLabels: ["Texto", "Multimodal", "Código"],
    contextWindow: 10000000,
    contextWindowLabel: "10M tokens",
    apiPricing: {
      input: 0.17,
      output: 0.60,
      label: "$0.17 / $0.60 por M tokens (via Groq)",
    },
    userPricing: {
      free: true,
      paidLabel: null,
      url: "https://llama.meta.com",
    },
    speed: "rapido",
    speedLabel: "Rápido",
    intelligence: 4,
    strengths: ["10M tokens de contexto", "Open source multimodal", "Arquitectura MoE eficiente", "Sin costo de licencia"],
    weaknesses: ["Muy nuevo, ecosistema en desarrollo"],
    bestFor: ["Análisis de repositorios completos", "Documentos masivos", "Investigación open source", "Self-hosted multimodal"],
    available: ["api", "self-hosted"],
    availableLabels: ["API (terceros)", "Self-hosted"],
    featured: true,
    isNew: true,
    releasedAt: "2025-04",
    tags: ["open-source", "multimodal", "contexto-largo", "meta", "nuevo", "moe"],
  },

  // ── Mistral ──
  {
    id: "mistral-large",
    slug: "mistral-large",
    name: "Mistral Large",
    version: "Large 2",
    company: "Mistral",
    companySlug: "mistral",
    companyEmoji: "⚪",
    description: "El modelo premium de Mistral: multilingüe, eficiente en código y con precios competitivos.",
    longDescription: "Mistral Large 2 es el modelo más potente de la startup francesa Mistral AI. Ofrece rendimiento comparable a modelos como GPT-4o o Claude 3.5 Sonnet a un precio significativamente menor. Destaca en múltiples idiomas europeos (especialmente francés, alemán, español, italiano), programación y razonamiento matemático. Está disponible como open source (weights públicos) y via API comercial.",
    type: ["texto", "codigo"],
    typeLabels: ["Texto", "Código"],
    contextWindow: 128000,
    contextWindowLabel: "128K tokens",
    apiPricing: {
      input: 2.00,
      output: 6.00,
      label: "$2.00 / $6.00 por M tokens",
    },
    userPricing: {
      free: false,
      paidLabel: null,
      url: "https://mistral.ai",
    },
    speed: "rapido",
    speedLabel: "Rápido",
    intelligence: 4,
    strengths: ["Multilingüe europeo", "Open source disponible", "Precio competitivo", "Buen en código"],
    weaknesses: ["Sin capacidades de imagen en la API principal", "Menor ecosistema que OpenAI/Anthropic"],
    bestFor: ["Proyectos en Europa (GDPR)", "Multilingüe europeo", "Alternativa costo-efectiva", "Código y análisis"],
    available: ["api", "self-hosted"],
    availableLabels: ["API", "Self-hosted"],
    featured: false,
    isNew: false,
    releasedAt: "2024-07",
    tags: ["europeo", "open-source", "multilingue", "mistral", "codigo"],
  },

  // ── DeepSeek ──
  {
    id: "deepseek-r1",
    slug: "deepseek-r1",
    name: "DeepSeek R1",
    version: "R1",
    company: "DeepSeek",
    companySlug: "deepseek",
    companyEmoji: "🔴",
    description: "El modelo de razonamiento chino que sacudió la industria: rendimiento de o1 a una fracción del precio.",
    longDescription: "DeepSeek R1 fue la bomba de inicio de 2025 en IA: un modelo de razonamiento open source con rendimiento comparable a o1 de OpenAI pero con precios 20-30x más baratos. Fue entrenado con técnicas novedosas de reinforcement learning sin supervisión humana masiva. Está disponible de forma open source (weights públicos) y su API es la más barata del mercado para modelos de razonamiento. Generó debate sobre la viabilidad del dominio de EE. UU. en IA.",
    type: ["texto", "razonamiento", "codigo"],
    typeLabels: ["Texto", "Razonamiento", "Código"],
    contextWindow: 128000,
    contextWindowLabel: "128K tokens",
    apiPricing: {
      input: 0.55,
      output: 2.19,
      label: "$0.55 / $2.19 por M tokens",
    },
    userPricing: {
      free: true,
      paidLabel: null,
      url: "https://chat.deepseek.com",
    },
    speed: "medio",
    speedLabel: "Medio (razona internamente)",
    intelligence: 5,
    strengths: ["Precio muy bajo para razonamiento", "Open source", "Matemáticas y código", "Transparente (muestra razonamiento)"],
    weaknesses: ["Preocupaciones de privacidad (servidor en China)", "Sin multimodal en R1", "Censura en temas políticos"],
    bestFor: ["Matemáticas y ciencias a bajo costo", "Código complejo sin presupuesto alto", "Investigación open source"],
    available: ["api", "web", "self-hosted"],
    availableLabels: ["API", "Web", "Self-hosted"],
    featured: true,
    isNew: false,
    releasedAt: "2025-01",
    tags: ["razonamiento", "economico", "open-source", "deepseek", "matematicas", "china"],
  },
  {
    id: "deepseek-v3",
    slug: "deepseek-v3",
    name: "DeepSeek V3",
    version: "V3",
    company: "DeepSeek",
    companySlug: "deepseek",
    companyEmoji: "🔴",
    description: "El modelo de chat de DeepSeek: GPT-4o level a precio de GPT-4o mini.",
    longDescription: "DeepSeek V3 es el modelo de propósito general de DeepSeek, comparable a GPT-4o y Claude 3.5 Sonnet en benchmarks pero a un costo varias veces menor. Usa arquitectura MoE (Mixture of Experts) con 671B parámetros totales pero solo 37B activos por inferencia. Es open source y puede self-hostearse. Junto con R1, es uno de los modelos más discutidos de 2025 por su relación calidad-precio excepcional.",
    type: ["texto", "codigo"],
    typeLabels: ["Texto", "Código"],
    contextWindow: 128000,
    contextWindowLabel: "128K tokens",
    apiPricing: {
      input: 0.27,
      output: 1.10,
      label: "$0.27 / $1.10 por M tokens",
    },
    userPricing: {
      free: true,
      paidLabel: null,
      url: "https://chat.deepseek.com",
    },
    speed: "rapido",
    speedLabel: "Rápido",
    intelligence: 4,
    strengths: ["Excelente relación precio/calidad", "Open source", "Arquitectura MoE eficiente"],
    weaknesses: ["Privacidad (servidores en China)", "Censura en temas políticos"],
    bestFor: ["Alternativa económica a GPT-4o", "Código y análisis", "Self-hosting a escala"],
    available: ["api", "web", "self-hosted"],
    availableLabels: ["API", "Web", "Self-hosted"],
    featured: false,
    isNew: false,
    releasedAt: "2024-12",
    tags: ["economico", "open-source", "deepseek", "moe", "china"],
  },

  // ── xAI ──
  {
    id: "grok-3",
    slug: "grok-3",
    name: "Grok 3",
    version: "3",
    company: "xAI",
    companySlug: "xai",
    companyEmoji: "⚫",
    description: "El modelo de xAI con acceso a X (Twitter) en tiempo real y capacidades de razonamiento avanzado.",
    longDescription: "Grok 3 es el modelo de inteligencia artificial de xAI, la empresa de Elon Musk. Su mayor diferenciador es el acceso en tiempo real a X (antes Twitter), lo que lo convierte en una herramienta única para monitoreo de tendencias, análisis de redes sociales y noticias de última hora. Grok 3 incluye modos de razonamiento (Think) y Big Brain para tareas muy complejas. Está disponible en los planes premium de X y tiene una API en lanzamiento progresivo.",
    type: ["texto", "razonamiento", "codigo"],
    typeLabels: ["Texto", "Razonamiento", "Código"],
    contextWindow: 131000,
    contextWindowLabel: "131K tokens",
    apiPricing: {
      input: 3.00,
      output: 15.00,
      label: "$3.00 / $15.00 por M tokens",
    },
    userPricing: {
      free: false,
      paidLabel: "$22/mes (X Premium+)",
      url: "https://x.com/i/grok",
    },
    speed: "rapido",
    speedLabel: "Rápido",
    intelligence: 4,
    strengths: ["Acceso a X en tiempo real", "Razonamiento avanzado", "Sin censura política en temas de EE. UU.", "Noticias en tiempo real"],
    weaknesses: ["Solo disponible en X o API limitada", "Ecosistema pequeño", "Costoso en X Premium+"],
    bestFor: ["Análisis de tendencias en redes sociales", "Noticias en tiempo real", "Research de mercado", "Monitoring de X"],
    available: ["api", "web"],
    availableLabels: ["API", "Web (X)"],
    featured: false,
    isNew: false,
    releasedAt: "2025-02",
    tags: ["twitter", "tiempo-real", "razonamiento", "xai", "noticias"],
  },
]

// ── Helper functions ──────────────────────────────────────────
export function getModelBySlug(slug: string): AIModel | undefined {
  return aiModels.find((m) => m.slug === slug)
}

export function getModelsByCompany(companySlug: string): AIModel[] {
  return aiModels.filter((m) => m.companySlug === companySlug)
}

export function getFeaturedModels(): AIModel[] {
  return aiModels.filter((m) => m.featured)
}

export function getNewModels(): AIModel[] {
  return aiModels.filter((m) => m.isNew)
}

export function getModelCount(): number {
  return aiModels.length
}

export function getCompanyBySlug(slug: string): AICompany | undefined {
  return companies.find((c) => c.slug === slug)
}

export function formatContextWindow(tokens: number): string {
  if (tokens >= 1000000) return `${(tokens / 1000000).toFixed(0)}M`
  if (tokens >= 1000) return `${(tokens / 1000).toFixed(0)}K`
  return `${tokens}`
}
