export interface Tool {
  slug: string;
  name: string;
  description: string;
  url: string;
  categories: string[];
  pricing: string;
  pricingType: "free" | "freemium" | "paid";
  highlight?: string;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  { slug: "presentaciones", name: "Presentaciones", icon: "▦", description: "Crea slides y presentaciones con IA" },
  { slug: "video", name: "Video", icon: "▶", description: "Genera, edita y mejora videos" },
  { slug: "imagenes", name: "Imágenes", icon: "◲", description: "Genera y edita imágenes y fotos" },
  { slug: "voz", name: "Voz & Audio", icon: "♫", description: "Síntesis de voz, transcripción y audio" },
  { slug: "marketing", name: "Marketing", icon: "◎", description: "Automatiza campañas, copy y estrategia" },
  { slug: "desarrollo", name: "Desarrollo", icon: ">_", description: "Asistentes de código y desarrollo" },
  { slug: "finanzas", name: "Finanzas", icon: "$", description: "Análisis financiero y contabilidad" },
  { slug: "texto", name: "Texto & Escritura", icon: "¶", description: "Redacción, resúmenes y traducción" },
  { slug: "diseno", name: "Diseño", icon: "◆", description: "Diseño gráfico, UI/UX y branding" },
  { slug: "productividad", name: "Productividad", icon: "⚡", description: "Automatización y gestión de tareas" },
  { slug: "educacion", name: "Educación", icon: "▣", description: "Aprendizaje, tutorías y cursos" },
  { slug: "datos", name: "Datos & Analytics", icon: "◈", description: "Análisis de datos y visualización" },
  { slug: "musica", name: "Música", icon: "♪", description: "Composición y producción musical" },
  { slug: "3d", name: "3D & Modelado", icon: "◇", description: "Modelado 3D y realidad aumentada" },
];

export const tools: Tool[] = [
  // --- Presentaciones ---
  {
    slug: "gamma",
    name: "Gamma",
    description: "Crea presentaciones, documentos y páginas web con IA. Solo describe tu idea y Gamma genera slides profesionales al instante.",
    url: "https://gamma.app",
    categories: ["presentaciones", "diseno"],
    pricing: "Gratis / Pro $10/mes",
    pricingType: "freemium",
    highlight: "Genera presentaciones completas desde un prompt",
  },
  {
    slug: "tome",
    name: "Tome",
    description: "Genera presentaciones narrativas con IA. Ideal para pitch decks y storytelling visual.",
    url: "https://tome.app",
    categories: ["presentaciones"],
    pricing: "Gratis / Pro $16/mes",
    pricingType: "freemium",
  },
  {
    slug: "beautiful-ai",
    name: "Beautiful.ai",
    description: "Presentaciones con diseño automático inteligente. La IA ajusta layout y diseño en tiempo real.",
    url: "https://www.beautiful.ai",
    categories: ["presentaciones", "diseno"],
    pricing: "Desde $12/mes",
    pricingType: "paid",
  },
  // --- Video ---
  {
    slug: "runway",
    name: "Runway",
    description: "Suite creativa de IA para video. Gen-3 Alpha genera videos desde texto o imágenes con calidad cinematográfica.",
    url: "https://runwayml.com",
    categories: ["video", "imagenes"],
    pricing: "Gratis / Pro $12/mes",
    pricingType: "freemium",
    highlight: "Líder en generación de video con IA",
  },
  {
    slug: "heygen",
    name: "HeyGen",
    description: "Crea videos con avatares realistas que hablan en cualquier idioma. Perfecto para marketing y capacitación.",
    url: "https://www.heygen.com",
    categories: ["video", "marketing"],
    pricing: "Gratis / Pro $24/mes",
    pricingType: "freemium",
  },
  {
    slug: "synthesia",
    name: "Synthesia",
    description: "Genera videos profesionales con presentadores IA. Usado por empresas Fortune 500 para training y comunicación.",
    url: "https://www.synthesia.io",
    categories: ["video", "educacion"],
    pricing: "Desde $22/mes",
    pricingType: "paid",
  },
  {
    slug: "descript",
    name: "Descript",
    description: "Edita video y audio como si editaras texto. Transcripción automática y edición basada en texto.",
    url: "https://www.descript.com",
    categories: ["video", "voz"],
    pricing: "Gratis / Pro $24/mes",
    pricingType: "freemium",
  },
  {
    slug: "capcut",
    name: "CapCut",
    description: "Editor de video gratuito con funciones de IA: subtítulos automáticos, efectos y templates virales.",
    url: "https://www.capcut.com",
    categories: ["video"],
    pricing: "Gratis / Pro $8/mes",
    pricingType: "freemium",
  },
  // --- Imágenes ---
  {
    slug: "midjourney",
    name: "Midjourney",
    description: "Genera imágenes artísticas de alta calidad desde descripciones de texto. El estándar para arte con IA.",
    url: "https://www.midjourney.com",
    categories: ["imagenes", "diseno"],
    pricing: "Desde $10/mes",
    pricingType: "paid",
    highlight: "La mejor calidad artística en generación de imágenes",
  },
  {
    slug: "dall-e",
    name: "DALL·E 3",
    description: "Generador de imágenes de OpenAI integrado en ChatGPT. Excelente para seguir instrucciones precisas.",
    url: "https://openai.com/dall-e-3",
    categories: ["imagenes"],
    pricing: "Incluido en ChatGPT Plus $20/mes",
    pricingType: "paid",
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo.ai",
    description: "Genera imágenes y assets para juegos, marketing y diseño. Gran control sobre estilos y consistencia.",
    url: "https://leonardo.ai",
    categories: ["imagenes", "diseno"],
    pricing: "Gratis / Pro $12/mes",
    pricingType: "freemium",
  },
  {
    slug: "remove-bg",
    name: "Remove.bg",
    description: "Elimina fondos de imágenes automáticamente en segundos con IA.",
    url: "https://www.remove.bg",
    categories: ["imagenes"],
    pricing: "Gratis (baja res) / Desde $9/mes",
    pricingType: "freemium",
  },
  {
    slug: "photoroom",
    name: "PhotoRoom",
    description: "Editor de fotos con IA para e-commerce. Elimina fondos, genera escenas y edita productos.",
    url: "https://www.photoroom.com",
    categories: ["imagenes", "marketing"],
    pricing: "Gratis / Pro $10/mes",
    pricingType: "freemium",
  },
  // --- Voz & Audio ---
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    description: "Síntesis de voz ultrarrealista en múltiples idiomas. Clona voces y genera audio natural.",
    url: "https://elevenlabs.io",
    categories: ["voz"],
    pricing: "Gratis / Pro $5/mes",
    pricingType: "freemium",
    highlight: "Las voces más realistas del mercado",
  },
  {
    slug: "whisper",
    name: "Whisper (OpenAI)",
    description: "Transcripción de audio a texto de código abierto. Soporta 99 idiomas con alta precisión.",
    url: "https://openai.com/research/whisper",
    categories: ["voz"],
    pricing: "Gratis (open source)",
    pricingType: "free",
  },
  {
    slug: "murf-ai",
    name: "Murf AI",
    description: "Genera voces profesionales para videos, podcasts y presentaciones. +120 voces en 20 idiomas.",
    url: "https://murf.ai",
    categories: ["voz"],
    pricing: "Gratis / Pro $23/mes",
    pricingType: "freemium",
  },
  {
    slug: "otter-ai",
    name: "Otter.ai",
    description: "Transcribe reuniones en tiempo real con notas y resúmenes automáticos. Integra con Zoom y Teams.",
    url: "https://otter.ai",
    categories: ["voz", "productividad"],
    pricing: "Gratis / Pro $17/mes",
    pricingType: "freemium",
  },
  // --- Marketing ---
  {
    slug: "jasper",
    name: "Jasper",
    description: "Plataforma de IA para marketing. Genera copy, emails, ads y contenido de marca consistente.",
    url: "https://www.jasper.ai",
    categories: ["marketing", "texto"],
    pricing: "Desde $39/mes",
    pricingType: "paid",
    highlight: "La plataforma #1 de IA para equipos de marketing",
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    description: "Genera copy de marketing, emails y contenido para redes sociales con IA.",
    url: "https://www.copy.ai",
    categories: ["marketing", "texto"],
    pricing: "Gratis / Pro $36/mes",
    pricingType: "freemium",
  },
  {
    slug: "surfer-seo",
    name: "Surfer SEO",
    description: "Optimiza contenido para SEO con IA. Analiza competencia y sugiere mejoras para rankear.",
    url: "https://surferseo.com",
    categories: ["marketing"],
    pricing: "Desde $69/mes",
    pricingType: "paid",
  },
  {
    slug: "manychat",
    name: "ManyChat",
    description: "Automatiza conversaciones en Instagram, WhatsApp y Messenger con chatbots de IA.",
    url: "https://manychat.com",
    categories: ["marketing"],
    pricing: "Gratis / Pro $15/mes",
    pricingType: "freemium",
  },
  // --- Desarrollo ---
  {
    slug: "cursor",
    name: "Cursor",
    description: "Editor de código con IA integrada. Autocompleta, refactoriza y genera código con contexto completo del proyecto.",
    url: "https://cursor.sh",
    categories: ["desarrollo"],
    pricing: "Gratis / Pro $20/mes",
    pricingType: "freemium",
    highlight: "El IDE con IA más popular para desarrolladores",
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    description: "Asistente de código de GitHub/OpenAI. Autocompleta código en tu IDE favorito.",
    url: "https://github.com/features/copilot",
    categories: ["desarrollo"],
    pricing: "Gratis / Pro $10/mes",
    pricingType: "freemium",
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    description: "CLI de Anthropic para desarrollo con IA. Agente autónomo que lee, edita y ejecuta código en tu terminal.",
    url: "https://docs.anthropic.com/en/docs/claude-code",
    categories: ["desarrollo"],
    pricing: "Incluido con API de Claude",
    pricingType: "paid",
  },
  {
    slug: "v0",
    name: "v0 by Vercel",
    description: "Genera componentes UI de React/Next.js desde descripciones en texto. Genera código listo para producción.",
    url: "https://v0.dev",
    categories: ["desarrollo", "diseno"],
    pricing: "Gratis / Pro $20/mes",
    pricingType: "freemium",
  },
  {
    slug: "replit",
    name: "Replit",
    description: "IDE en la nube con agente IA que construye aplicaciones completas desde una descripción.",
    url: "https://replit.com",
    categories: ["desarrollo"],
    pricing: "Gratis / Pro $25/mes",
    pricingType: "freemium",
  },
  // --- Finanzas ---
  {
    slug: "fintool",
    name: "FinChat",
    description: "ChatGPT para finanzas. Analiza estados financieros, earnings calls y datos de empresas públicas.",
    url: "https://finchat.io",
    categories: ["finanzas", "datos"],
    pricing: "Gratis / Pro $25/mes",
    pricingType: "freemium",
    highlight: "Análisis financiero conversacional con datos reales",
  },
  {
    slug: "compose-ai-finance",
    name: "Datarails",
    description: "FP&A potenciado con IA. Automatiza reportes financieros, forecasting y consolidación desde Excel.",
    url: "https://www.datarails.com",
    categories: ["finanzas"],
    pricing: "Contactar ventas",
    pricingType: "paid",
  },
  {
    slug: "truewind",
    name: "Truewind",
    description: "Contabilidad y finanzas automatizadas con IA para startups. Bookkeeping, reportes y tax prep.",
    url: "https://www.truewind.ai",
    categories: ["finanzas"],
    pricing: "Desde $500/mes",
    pricingType: "paid",
  },
  // --- Texto & Escritura ---
  {
    slug: "chatgpt",
    name: "ChatGPT",
    description: "El chatbot de IA más popular del mundo. Escribe, analiza, programa y responde cualquier pregunta.",
    url: "https://chat.openai.com",
    categories: ["texto", "productividad", "desarrollo"],
    pricing: "Gratis / Plus $20/mes",
    pricingType: "freemium",
    highlight: "El asistente de IA más versátil y conocido",
  },
  {
    slug: "claude",
    name: "Claude",
    description: "Asistente IA de Anthropic. Excelente para análisis largo, escritura y razonamiento complejo.",
    url: "https://claude.ai",
    categories: ["texto", "productividad", "desarrollo"],
    pricing: "Gratis / Pro $20/mes",
    pricingType: "freemium",
    highlight: "El mejor para documentos largos y razonamiento",
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    description: "Corrector gramatical y asistente de escritura con IA. Mejora tono, claridad y estilo.",
    url: "https://www.grammarly.com",
    categories: ["texto"],
    pricing: "Gratis / Pro $12/mes",
    pricingType: "freemium",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    description: "IA integrada en Notion para escribir, resumir, traducir y organizar información dentro de tu workspace.",
    url: "https://www.notion.so/product/ai",
    categories: ["texto", "productividad"],
    pricing: "Add-on $10/mes",
    pricingType: "paid",
  },
  {
    slug: "deepl",
    name: "DeepL",
    description: "Traductor con IA de altísima calidad. Traducciones naturales en 30+ idiomas, superior a Google Translate.",
    url: "https://www.deepl.com",
    categories: ["texto"],
    pricing: "Gratis / Pro $9/mes",
    pricingType: "freemium",
  },
  // --- Diseño ---
  {
    slug: "canva-ai",
    name: "Canva AI",
    description: "Diseño gráfico para todos con IA integrada. Magic Design genera diseños completos desde una idea.",
    url: "https://www.canva.com",
    categories: ["diseno", "presentaciones", "marketing"],
    pricing: "Gratis / Pro $13/mes",
    pricingType: "freemium",
    highlight: "Diseño accesible para todos con IA",
  },
  {
    slug: "figma-ai",
    name: "Figma AI",
    description: "Funciones de IA dentro de Figma: genera diseños, renombra capas y crea prototipos automáticamente.",
    url: "https://www.figma.com",
    categories: ["diseno"],
    pricing: "Gratis / Pro $15/mes",
    pricingType: "freemium",
  },
  {
    slug: "looka",
    name: "Looka",
    description: "Genera logos y branding completo con IA. Crea tu identidad visual en minutos.",
    url: "https://looka.com",
    categories: ["diseno", "marketing"],
    pricing: "Desde $20 (único pago)",
    pricingType: "paid",
  },
  // --- Productividad ---
  {
    slug: "zapier-ai",
    name: "Zapier",
    description: "Automatiza flujos de trabajo entre +6000 apps. Ahora con IA para crear automations desde lenguaje natural.",
    url: "https://zapier.com",
    categories: ["productividad"],
    pricing: "Gratis / Pro $20/mes",
    pricingType: "freemium",
    highlight: "Conecta cualquier app sin código",
  },
  {
    slug: "reclaim-ai",
    name: "Reclaim.ai",
    description: "Gestiona tu calendario con IA. Programa tareas, hábitos y reuniones automáticamente.",
    url: "https://reclaim.ai",
    categories: ["productividad"],
    pricing: "Gratis / Pro $8/mes",
    pricingType: "freemium",
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    description: "Buscador con IA que da respuestas directas con fuentes citadas. Reemplaza búsquedas de Google.",
    url: "https://www.perplexity.ai",
    categories: ["productividad", "texto"],
    pricing: "Gratis / Pro $20/mes",
    pricingType: "freemium",
  },
  // --- Educación ---
  {
    slug: "khan-academy-ai",
    name: "Khanmigo",
    description: "Tutor personal de IA de Khan Academy. Guía el aprendizaje con preguntas socráticas.",
    url: "https://www.khanacademy.org/khan-labs",
    categories: ["educacion"],
    pricing: "Desde $4/mes",
    pricingType: "paid",
  },
  {
    slug: "duolingo-max",
    name: "Duolingo Max",
    description: "Aprende idiomas con práctica conversacional de IA y explicaciones personalizadas.",
    url: "https://www.duolingo.com",
    categories: ["educacion"],
    pricing: "Gratis / Max $30/mes",
    pricingType: "freemium",
  },
  // --- Datos & Analytics ---
  {
    slug: "julius-ai",
    name: "Julius AI",
    description: "Analiza datos con lenguaje natural. Sube tu CSV/Excel y haz preguntas, genera gráficos y reportes.",
    url: "https://julius.ai",
    categories: ["datos", "finanzas"],
    pricing: "Gratis / Pro $20/mes",
    pricingType: "freemium",
    highlight: "Análisis de datos sin escribir código",
  },
  {
    slug: "obviously-ai",
    name: "Obviously AI",
    description: "Machine learning sin código. Predice resultados de negocio arrastrando tu dataset.",
    url: "https://www.obviously.ai",
    categories: ["datos"],
    pricing: "Desde $75/mes",
    pricingType: "paid",
  },
  // --- Música ---
  {
    slug: "suno",
    name: "Suno",
    description: "Genera canciones completas con voz, letra y música desde una descripción de texto.",
    url: "https://suno.com",
    categories: ["musica"],
    pricing: "Gratis / Pro $10/mes",
    pricingType: "freemium",
    highlight: "Crea canciones completas con un prompt",
  },
  {
    slug: "udio",
    name: "Udio",
    description: "Genera música de alta calidad con IA. Múltiples géneros y estilos con control creativo.",
    url: "https://www.udio.com",
    categories: ["musica"],
    pricing: "Gratis / Pro $10/mes",
    pricingType: "freemium",
  },
  // --- 3D ---
  {
    slug: "meshy",
    name: "Meshy",
    description: "Genera modelos 3D desde texto o imágenes. Perfecto para juegos, diseño de producto y VR.",
    url: "https://www.meshy.ai",
    categories: ["3d"],
    pricing: "Gratis / Pro $20/mes",
    pricingType: "freemium",
    highlight: "Texto a 3D en minutos",
  },
  {
    slug: "luma-ai",
    name: "Luma AI",
    description: "Captura 3D desde video con NeRF. Escanea objetos reales y conviértelos en modelos 3D.",
    url: "https://lumalabs.ai",
    categories: ["3d", "video"],
    pricing: "Gratis / Pro disponible",
    pricingType: "freemium",
  },
];

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase().trim();
  if (!q) return tools;
  return tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.categories.some((c) => c.includes(q))
  );
}

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter((t) => t.categories.includes(categorySlug));
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
