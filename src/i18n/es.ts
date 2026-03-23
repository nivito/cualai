export const es = {
  header: {
    search_placeholder: "Buscar herramientas AI...",
    nav_news: "Noticias",
    nav_courses: "Cursos",
    nav_glossary: "Glosario",
    nav_models: "Modelos",
    tool_count: (n: number) => `${n} herramientas`,
  },
  home: {
    title_prefix: "Directorio de herramientas de",
    title_accent: "Inteligencia Artificial",
    title_suffix: "en español",
    subtitle: "Describe tu problema, encuentra la herramienta AI perfecta",
    tools_indexed: (n: number) =>
      `${n} herramientas indexadas · para profesionales en LATAM`,
    featured: "// Destacadas",
    latest_news: "// Últimas noticias",
    see_all_news: "Ver todas →",
    learn_ai_free: "// Aprende IA gratis",
    see_all_courses: "Ver todos los cursos →",
    all_tools: "// Todas las herramientas",
  },
  news: {
    title: "Noticias AI",
    subtitle:
      "Lo que está pasando en inteligencia artificial, explicado para todos",
    filtering: "Filtrando:",
    clear_filter: "[limpiar filtro]",
    no_news: "No hay noticias en esta categoría todavía.",
    reading_time: (min: number) => `${min} min de lectura`,
    read_more: "Leer más →",
    source: "Fuente:",
    what_means: "¿Qué significa esto para ti?",
    related_tools: "// Herramientas relacionadas",
    prev: "← Anterior",
    next: "Siguiente →",
    not_found: "Noticia no encontrada — cual.ai",
    article_in_spanish: "",
  },
  tool: {
    visit: "Ir a la herramienta →",
    use_cases: "// Casos de uso",
    faq: "// Preguntas frecuentes",
    similar: "// Herramientas similares",
    meta_title: (name: string) =>
      `${name}: qué es, cómo usarlo y precio — cual.ai`,
    meta_desc: (desc: string) =>
      `${desc} Descubre casos de uso, precios y alternativas en cual.ai.`,
    faq_what_for: (name: string) => `¿Para qué sirve ${name}?`,
    faq_price: (name: string) => `¿Cuánto cuesta ${name}?`,
    faq_free: (name: string) => `¿${name} tiene versión gratuita?`,
    faq_free_yes: (name: string) =>
      `Sí, ${name} es completamente gratuito.`,
    faq_freemium: (name: string, label: string) =>
      `Sí, ${name} ofrece un plan gratuito con funciones limitadas. ${label}`,
    faq_paid: (name: string, label: string) =>
      `${name} es de pago. ${label}`,
    faq_alternatives: (name: string, alts: string) =>
      `Las principales alternativas a ${name} son: ${alts}. Puedes compararlas en cual.ai.`,
    faq_alternatives_q: (name: string) =>
      `¿Cuáles son las mejores alternativas a ${name}?`,
  },
  glossary: {
    title: "Glosario de AI y Tecnología",
    breadcrumb: "Glosario",
    intro_1:
      'Bienvenido al único glosario de inteligencia artificial diseñado para personas que asisten a reuniones donde alguien dice',
    intro_quote: '"hay que hacer fine-tuning del LLM con RAG"',
    intro_2: "y todos asienten como si supieran de qué habla.",
    intro_3:
      "Aquí encontrarás los términos más usados del mundo AI explicados en español claro, sin asumir que tienes un doctorado en matemáticas ni que pasas los fines de semana leyendo papers de Arxiv.",
    intro_4: "Prometemos ser precisos. No prometemos ser completamente serios.",
    terms_count: (n: number) =>
      `${n} términos · Orden alfabético · AI, modelos, infraestructura y empresas clave`,
    all_terms: "Todos los términos — A–Z",
    example: "Ejemplo:",
    missing_term: "¿Falta algún término?",
    missing_term_desc:
      "El mundo AI inventa palabras nuevas cada semana. Si hay algo que no entiendes, probablemente no es culpa tuya.",
    explore_tools: "Explorar herramientas AI →",
  },
  sidebar: {
    what_is_ai: "¿Qué es la IA?",
    compare: "Comparar herramientas",
    news: "Noticias AI",
    courses: "Cursos",
    models: "Modelos AI",
    glossary: "Glosario",
    feedback: "Feedback",
    categories: "Categorías",
  },
  news_sidebar: {
    back: "← Volver a herramientas",
    news: "Noticias",
    all: "Todas",
    tools_section: "Herramientas",
    explore: "Explorar herramientas",
  },
  footer: {
    newsletter_title: "Recibe las últimas noticias de AI para no técnicos",
    newsletter_desc:
      "Un email semanal con las mejores herramientas y noticias de inteligencia artificial, explicadas en simple. Sin spam.",
    subscribe_success:
      "✓ ¡Suscrito! Te enviaremos las mejores herramientas cada semana.",
    subscribe_button: "Suscribirse",
    tagline: "cual.ai — Encuentra la herramienta AI perfecta",
  },
};

export type I18n = typeof es;
