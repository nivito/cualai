// ============================================================
// cual.ai — Newsletter Edición #1 (23 de marzo de 2026)
// ============================================================

export const edition1 = {
  number: 1,
  date: "2026-03-23",
  subject: "🔧 Tu primera dosis semanal de IA — Edición #1",

  // ── Herramienta de la semana ─────────────────────────────
  toolOfTheWeek: {
    id: "canva-ai",
    name: "Canva AI",
    url: "https://canva.com",
    pricing: "Gratis / Pro $13/mes",
    headline: "Esta semana descubrimos que diseñar ya no requiere ser diseñador",
    description:
      "Canva le metió inteligencia artificial a TODO. Ahora puedes generar imágenes de la nada escribiendo lo que necesitas, quitar fondos con un clic, crear presentaciones completas diciéndole el tema, y hasta traducir tus diseños a otros idiomas sin perder el formato. Si manejas redes sociales para tu negocio o necesitas crear contenido visual, esto te ahorra horas cada semana. Lo mejor: la mayoría de funciones están en el plan gratuito.",
    useCases: [
      "Crear posts para redes sociales sin saber diseño",
      "Quitar fondos de fotos de productos en 2 segundos",
      "Generar presentaciones completas con un solo clic",
      "Traducir diseños a otros idiomas automáticamente",
    ],
  },

  // ── Top 5 de la semana ───────────────────────────────────
  top5: [
    {
      id: "chatgpt",
      name: "ChatGPT",
      url: "https://chat.openai.com",
      pricing: "Gratis / Plus $30/mes",
      oneLiner: "El asistente que responde preguntas, redacta textos y resuelve tareas como si fuera tu empleado más rápido.",
    },
    {
      id: "perplexity",
      name: "Perplexity",
      url: "https://perplexity.ai",
      pricing: "Gratis / Pro $20/mes",
      oneLiner: "Google con esteroides: buscas algo y te da la respuesta directa con las fuentes, sin tener que abrir 10 páginas.",
    },
    {
      id: "gamma",
      name: "Gamma",
      url: "https://gamma.app",
      pricing: "Gratis con créditos / Pro $8/mes",
      oneLiner: "Le describes tu presentación y te la arma completa con diseño, textos e imágenes. Adiós PowerPoint desde cero.",
    },
    {
      id: "deepl",
      name: "DeepL",
      url: "https://deepl.com",
      pricing: "Gratis / Pro $9/mes",
      oneLiner: "El mejor traductor del mundo. Traduce documentos enteros (Word, PDF) y suena natural, no como robot.",
    },
    {
      id: "remove-bg",
      name: "Remove.bg",
      url: "https://remove.bg",
      pricing: "1 gratis / Desde $9/mes",
      oneLiner: "Sube una foto y el fondo desaparece. Perfecto para fotos de productos o para poner tu foto en cualquier fondo.",
    },
  ],

  // ── Noticias de la semana ────────────────────────────────
  news: [
    {
      title: "Meta lanzó un programa de IA gratuito que compite con ChatGPT",
      summary:
        "Meta (Facebook) publicó Llama 4, un programa de inteligencia artificial que cualquier empresa puede usar sin pagar. Esto significa que pronto van a aparecer más herramientas de IA gratuitas y en español para negocios en Latinoamérica.",
      source: "Meta AI Blog",
    },
    {
      title: "ChatGPT ahora cuesta $30 al mes — ¿vale la pena pagar?",
      summary:
        "OpenAI subió el precio de su plan de pago. Antes de sacar la tarjeta, prueba las alternativas gratuitas como Claude o Gemini durante una semana. Muchas personas descubren que cubren el 90% de lo que necesitan sin costo.",
      source: "OpenAI Blog",
    },
    {
      title: "Ya pueden clonar tu voz con 3 segundos de audio — cómo protegerte",
      summary:
        "Nuevas herramientas crean copias casi perfectas de cualquier voz. Los estafadores ya las usan para llamadas falsas. El consejo: acuerda una palabra clave secreta con tu familia para verificar identidad por teléfono.",
      source: "MIT Technology Review",
    },
  ],

  // ── Tip de la semana ─────────────────────────────────────
  tip: {
    headline: "El truco que te ahorra 30 minutos al día escribiendo emails",
    content:
      'Abre ChatGPT (gratis) o Claude (gratis) y escribe: "Redacta un email profesional para [situación]. El tono debe ser [amable/formal/directo]. Máximo 3 párrafos." Ejemplo: "Redacta un email profesional para pedirle a un proveedor que adelante la entrega de un pedido. Tono amable pero firme. Máximo 3 párrafos." En 10 segundos tienes un email listo para enviar. Solo revisa, ajusta tu nombre y dale enviar.',
  },
}
