// ─── Prompt Guide Data ───────────────────────────────────────────────

export interface PromptPart {
  type: "persona" | "task" | "context" | "format" | "plain";
  text: string;
}

export interface PromptExample {
  label: string;
  labelEn?: string;
  parts: PromptPart[];
  partsEn?: PromptPart[];
}

export interface PromptLevel {
  id: string;
  level: number;
  title: string;
  titleEn: string;
  badge: string;
  badgeColor: string;
  description: string;
  descriptionEn: string;
  genericExamples: PromptExample[];
  techExamples: PromptExample[];
}

export interface PromptComponent {
  type: "persona" | "task" | "context" | "format";
  label: string;
  labelEn: string;
  description: string;
  descriptionEn: string;
  color: string;
  bgColor: string;
  emoji: string;
}

// ─── 4 Components ────────────────────────────────────────────────────

export const promptComponents: PromptComponent[] = [
  {
    type: "persona",
    label: "Persona",
    labelEn: "Persona",
    description: "Define quién es la IA. Le da un rol, experiencia o perspectiva específica.",
    descriptionEn: "Defines who the AI is. Gives it a role, expertise, or specific perspective.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10 border-purple-500/30",
    emoji: "🟣",
  },
  {
    type: "task",
    label: "Tarea",
    labelEn: "Task",
    description: "Qué quieres que haga. La instrucción principal — el verbo del prompt.",
    descriptionEn: "What you want it to do. The main instruction — the verb of the prompt.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10 border-blue-500/30",
    emoji: "🔵",
  },
  {
    type: "context",
    label: "Contexto",
    labelEn: "Context",
    description: "Información de fondo, restricciones, datos relevantes que la IA necesita.",
    descriptionEn: "Background information, constraints, and relevant data the AI needs.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10 border-yellow-500/30",
    emoji: "🟡",
  },
  {
    type: "format",
    label: "Formato",
    labelEn: "Format",
    description: "Cómo quieres la respuesta: tabla, lista, longitud, estructura, tono.",
    descriptionEn: "How you want the response: table, list, length, structure, tone.",
    color: "text-green-400",
    bgColor: "bg-green-500/10 border-green-500/30",
    emoji: "🟢",
  },
];

// ─── Levels ──────────────────────────────────────────────────────────

export const promptLevels: PromptLevel[] = [
  {
    id: "basic",
    level: 1,
    title: "Básico — Zero-shot",
    titleEn: "Basic — Zero-shot",
    badge: "Básico",
    badgeColor: "bg-green/20 text-green border-green/40",
    description:
      "Prompt de 1 parte: solo la tarea. Sin estructura ni contexto adicional. Funciona para preguntas simples y directas.",
    descriptionEn:
      "Single-part prompt: just the task. No structure or additional context. Works for simple, direct questions.",
    genericExamples: [
      {
        label: "Resumen",
        labelEn: "Summary",
        parts: [{ type: "task", text: "Resume este texto: [texto]" }],
        partsEn: [{ type: "task", text: "Summarize this text: [text]" }],
      },
      {
        label: "Traducción",
        labelEn: "Translation",
        parts: [{ type: "task", text: "Traduce al inglés: [texto]" }],
        partsEn: [{ type: "task", text: "Translate to Spanish: [text]" }],
      },
      {
        label: "Explicación",
        labelEn: "Explanation",
        parts: [{ type: "task", text: "Explica qué es el machine learning" }],
        partsEn: [{ type: "task", text: "Explain what machine learning is" }],
      },
    ],
    techExamples: [
      {
        label: "Debug rápido",
        labelEn: "Quick debug",
        parts: [{ type: "task", text: "¿Por qué este código da error? [código]" }],
        partsEn: [{ type: "task", text: "Why does this code throw an error? [code]" }],
      },
      {
        label: "Concepto",
        labelEn: "Concept",
        parts: [{ type: "task", text: "Explica qué es una API REST" }],
        partsEn: [{ type: "task", text: "Explain what a REST API is" }],
      },
    ],
  },
  {
    id: "intermediate",
    level: 2,
    title: "Intermedio — Tarea + Contexto",
    titleEn: "Intermediate — Task + Context",
    badge: "Intermedio",
    badgeColor: "bg-yellow/20 text-yellow border-yellow/40",
    description:
      "2-3 partes. Agregar contexto o formato mejora dramáticamente los resultados. La IA entiende mejor qué necesitas.",
    descriptionEn:
      "2-3 parts. Adding context or format dramatically improves results. The AI understands better what you need.",
    genericExamples: [
      {
        label: "Tarea + Contexto",
        labelEn: "Task + Context",
        parts: [
          { type: "task", text: "Escribe un email de seguimiento" },
          { type: "plain", text: " " },
          { type: "context", text: "para un cliente que pidió una demo hace 3 días y no respondió" },
        ],
        partsEn: [
          { type: "task", text: "Write a follow-up email" },
          { type: "plain", text: " " },
          { type: "context", text: "for a client who requested a demo 3 days ago and hasn't responded" },
        ],
      },
      {
        label: "Tarea + Formato",
        labelEn: "Task + Format",
        parts: [
          { type: "task", text: "Lista los 5 principales beneficios de la meditación" },
          { type: "plain", text: " " },
          { type: "format", text: "en formato de bullets con máximo 10 palabras cada uno" },
        ],
        partsEn: [
          { type: "task", text: "List the 5 main benefits of meditation" },
          { type: "plain", text: " " },
          { type: "format", text: "in bullet format with a maximum of 10 words each" },
        ],
      },
    ],
    techExamples: [
      {
        label: "Code review",
        parts: [
          { type: "task", text: "Revisa este código Python" },
          { type: "plain", text: " " },
          { type: "format", text: "y explica qué hace cada función" },
          { type: "plain", text: ": [código]" },
        ],
        partsEn: [
          { type: "task", text: "Review this Python code" },
          { type: "plain", text: " " },
          { type: "format", text: "and explain what each function does" },
          { type: "plain", text: ": [code]" },
        ],
      },
      {
        label: "Regex",
        parts: [
          { type: "task", text: "Genera un regex" },
          { type: "plain", text: " " },
          { type: "context", text: "que valide emails con dominios .com y .co" },
        ],
        partsEn: [
          { type: "task", text: "Generate a regex" },
          { type: "plain", text: " " },
          { type: "context", text: "that validates emails with .com and .co domains" },
        ],
      },
    ],
  },
  {
    id: "advanced",
    level: 3,
    title: "Avanzado — Los 4 componentes",
    titleEn: "Advanced — All 4 components",
    badge: "Avanzado",
    badgeColor: "bg-red/20 text-red border-red/40",
    description:
      "Persona + Tarea + Contexto + Formato. El prompt completo. Maximiza la calidad de la respuesta dándole a la IA toda la información necesaria.",
    descriptionEn:
      "Persona + Task + Context + Format. The complete prompt. Maximizes response quality by giving the AI all the necessary information.",
    genericExamples: [
      {
        label: "Marketing digital",
        labelEn: "Digital marketing",
        parts: [
          { type: "persona", text: "Eres un experto en marketing digital." },
          { type: "plain", text: " " },
          { type: "task", text: "Crea una estrategia de contenido para redes sociales" },
          { type: "plain", text: " " },
          { type: "context", text: "para una startup de fintech en Colombia con presupuesto limitado." },
          { type: "plain", text: " " },
          { type: "format", text: "Presenta el plan en una tabla con columnas: Canal, Frecuencia, Tipo de contenido, KPI." },
        ],
        partsEn: [
          { type: "persona", text: "You are a digital marketing expert." },
          { type: "plain", text: " " },
          { type: "task", text: "Create a social media content strategy" },
          { type: "plain", text: " " },
          { type: "context", text: "for a fintech startup in Colombia with a limited budget." },
          { type: "plain", text: " " },
          { type: "format", text: "Present the plan in a table with columns: Channel, Frequency, Content Type, KPI." },
        ],
      },
      {
        label: "Análisis FODA",
        labelEn: "SWOT Analysis",
        parts: [
          { type: "persona", text: "Actúa como un consultor de negocios senior." },
          { type: "plain", text: " " },
          { type: "task", text: "Analiza las fortalezas y debilidades" },
          { type: "plain", text: " " },
          { type: "context", text: "de este modelo de negocio: marketplace de servicios B2B." },
          { type: "plain", text: " " },
          { type: "format", text: "Usa el framework FODA y limita a 3 puntos por cuadrante." },
        ],
        partsEn: [
          { type: "persona", text: "Act as a senior business consultant." },
          { type: "plain", text: " " },
          { type: "task", text: "Analyze the strengths and weaknesses" },
          { type: "plain", text: " " },
          { type: "context", text: "of this business model: B2B services marketplace." },
          { type: "plain", text: " " },
          { type: "format", text: "Use the SWOT framework and limit to 3 points per quadrant." },
        ],
      },
    ],
    techExamples: [
      {
        label: "Arquitectura de sistema",
        labelEn: "System architecture",
        parts: [
          { type: "persona", text: "Eres un senior engineer con experiencia en sistemas distribuidos." },
          { type: "plain", text: " " },
          { type: "task", text: "Diseña la arquitectura" },
          { type: "plain", text: " " },
          { type: "context", text: "para un sistema de notificaciones en tiempo real que soporte 100k usuarios concurrentes." },
          { type: "plain", text: " " },
          { type: "format", text: "Presenta las opciones con pros/contras en una tabla, incluye diagrama ASCII." },
        ],
        partsEn: [
          { type: "persona", text: "You are a senior engineer experienced in distributed systems." },
          { type: "plain", text: " " },
          { type: "task", text: "Design the architecture" },
          { type: "plain", text: " " },
          { type: "context", text: "for a real-time notification system supporting 100k concurrent users." },
          { type: "plain", text: " " },
          { type: "format", text: "Present the options with pros/cons in a table, include ASCII diagram." },
        ],
      },
      {
        label: "Auditoría de seguridad",
        labelEn: "Security audit",
        parts: [
          { type: "persona", text: "Actúa como un revisor de código experto en seguridad." },
          { type: "plain", text: " " },
          { type: "task", text: "Audita el siguiente endpoint REST" },
          { type: "plain", text: " " },
          { type: "context", text: "buscando vulnerabilidades OWASP top 10." },
          { type: "plain", text: " " },
          { type: "format", text: "Lista cada hallazgo con severidad (Alta/Media/Baja) y el fix recomendado." },
        ],
        partsEn: [
          { type: "persona", text: "Act as a code reviewer with security expertise." },
          { type: "plain", text: " " },
          { type: "task", text: "Audit the following REST endpoint" },
          { type: "plain", text: " " },
          { type: "context", text: "looking for OWASP top 10 vulnerabilities." },
          { type: "plain", text: " " },
          { type: "format", text: "List each finding with severity (High/Medium/Low) and the recommended fix." },
        ],
      },
    ],
  },
  {
    id: "expert",
    level: 4,
    title: "Expert — Técnicas avanzadas",
    titleEn: "Expert — Advanced techniques",
    badge: "Expert",
    badgeColor: "bg-accent/20 text-accent border-accent/40",
    description:
      "Chain of Thought, Few-shot, Self-consistency y Prompt chaining. Técnicas que desbloquean el máximo potencial de la IA para tareas complejas.",
    descriptionEn:
      "Chain of Thought, Few-shot, Self-consistency and Prompt chaining. Techniques that unlock the AI's maximum potential for complex tasks.",
    genericExamples: [
      {
        label: "Chain of Thought",
        parts: [
          { type: "task", text: "Piensa paso a paso:" },
          { type: "plain", text: " " },
          { type: "context", text: "Si una tienda vende 150 productos al día con un margen promedio de $8, pero los costos fijos son $25,000/mes, ¿cuántos días necesita operar para cubrir costos?" },
        ],
        partsEn: [
          { type: "task", text: "Think step by step:" },
          { type: "plain", text: " " },
          { type: "context", text: "If a store sells 150 products per day with an average margin of $8, but fixed costs are $25,000/month, how many days does it need to operate to break even?" },
        ],
      },
      {
        label: "Few-shot",
        parts: [
          { type: "context", text: 'Clasifica el sentimiento de estos textos.\n\n"El servicio fue excelente" → Positivo\n"Tardaron 2 horas" → Negativo\n"El producto es normal" → Neutro' },
          { type: "plain", text: "\n\n" },
          { type: "task", text: 'Ahora clasifica: "Me encantó el empaque pero la calidad es regular"' },
        ],
        partsEn: [
          { type: "context", text: 'Classify the sentiment of these texts.\n\n"The service was excellent" → Positive\n"They took 2 hours" → Negative\n"The product is average" → Neutral' },
          { type: "plain", text: "\n\n" },
          { type: "task", text: 'Now classify: "I loved the packaging but the quality is mediocre"' },
        ],
      },
    ],
    techExamples: [
      {
        label: "Chain of Thought técnico",
        labelEn: "Technical Chain of Thought",
        parts: [
          { type: "task", text: "Piensa paso a paso:" },
          { type: "plain", text: " " },
          { type: "context", text: "¿Cuántos servidores necesito para soportar 1M de requests por hora si cada request toma 50ms y cada servidor tiene 8 cores?" },
          { type: "plain", text: " " },
          { type: "format", text: "Muestra cada cálculo intermedio." },
        ],
        partsEn: [
          { type: "task", text: "Think step by step:" },
          { type: "plain", text: " " },
          { type: "context", text: "How many servers do I need to handle 1M requests per hour if each request takes 50ms and each server has 8 cores?" },
          { type: "plain", text: " " },
          { type: "format", text: "Show each intermediate calculation." },
        ],
      },
      {
        label: "Prompt chaining",
        parts: [
          { type: "persona", text: "Eres un tech lead." },
          { type: "plain", text: " " },
          { type: "task", text: "Vamos a diseñar un sistema paso a paso." },
          { type: "plain", text: " " },
          { type: "context", text: "Paso 1: Define los requisitos funcionales para un sistema de pagos. Cuando termines, te daré el paso 2." },
          { type: "plain", text: " " },
          { type: "format", text: "Responde solo el paso actual en bullets concisos." },
        ],
        partsEn: [
          { type: "persona", text: "You are a tech lead." },
          { type: "plain", text: " " },
          { type: "task", text: "Let's design a system step by step." },
          { type: "plain", text: " " },
          { type: "context", text: "Step 1: Define the functional requirements for a payment system. When you're done, I'll give you step 2." },
          { type: "plain", text: " " },
          { type: "format", text: "Only answer the current step in concise bullets." },
        ],
      },
    ],
  },
];

// ─── Tips ────────────────────────────────────────────────────────────

export interface PromptTip {
  emoji: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export const promptTips: PromptTip[] = [
  {
    emoji: "🎯",
    title: "Sé específico",
    titleEn: "Be specific",
    description: 'En lugar de "escribe algo sobre marketing", di "escribe 3 subject lines para un email de Black Friday dirigido a mujeres de 25-35 años".',
    descriptionEn: 'Instead of "write something about marketing", say "write 3 subject lines for a Black Friday email targeting women aged 25-35".',
  },
  {
    emoji: "🔄",
    title: "Itera",
    titleEn: "Iterate",
    description: "Tu primer prompt rara vez es perfecto. Refina basándote en la respuesta: pide más detalle, cambia el tono, agrega restricciones.",
    descriptionEn: "Your first prompt is rarely perfect. Refine based on the response: ask for more detail, change the tone, add constraints.",
  },
  {
    emoji: "📐",
    title: "Define restricciones",
    titleEn: "Define constraints",
    description: '"Máximo 200 palabras", "en formato tabla", "sin usar jerga técnica". Las restricciones evitan respuestas genéricas.',
    descriptionEn: '"Maximum 200 words", "in table format", "without technical jargon". Constraints prevent generic responses.',
  },
  {
    emoji: "🧪",
    title: "Usa ejemplos",
    titleEn: "Use examples",
    description: "Si puedes, incluye un ejemplo del resultado que esperas. La IA replica patrones mejor que interpreta descripciones abstractas.",
    descriptionEn: "If you can, include an example of the expected result. AI replicates patterns better than it interprets abstract descriptions.",
  },
  {
    emoji: "🪜",
    title: "Divide tareas complejas",
    titleEn: "Break down complex tasks",
    description: "En lugar de pedir todo de una vez, divide en pasos. Primero investiga, luego analiza, luego genera. Mejores resultados.",
    descriptionEn: "Instead of asking for everything at once, break it into steps. First research, then analyze, then generate. Better results.",
  },
  {
    emoji: "🌡️",
    title: "Controla la creatividad",
    titleEn: "Control creativity",
    description: 'Para datos/análisis, pide ser "preciso y factual". Para contenido creativo, pide ser "creativo y original". El tono importa.',
    descriptionEn: 'For data/analysis, ask to be "precise and factual". For creative content, ask to be "creative and original". Tone matters.',
  },
];

// ─── Expert techniques ──────────────────────────────────────────────

export interface ExpertTechnique {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  when: string;
  whenEn: string;
}

export const expertTechniques: ExpertTechnique[] = [
  {
    id: "cot",
    name: "Chain of Thought (CoT)",
    nameEn: "Chain of Thought (CoT)",
    description: 'Pide a la IA que "piense paso a paso". Mejora drásticamente el razonamiento en matemáticas, lógica y problemas complejos.',
    descriptionEn: 'Ask the AI to "think step by step". Dramatically improves reasoning in math, logic, and complex problems.',
    when: "Problemas matemáticos, lógica, decisiones con múltiples variables.",
    whenEn: "Math problems, logic, decisions with multiple variables.",
  },
  {
    id: "fewshot",
    name: "Few-shot prompting",
    nameEn: "Few-shot prompting",
    description: "Proporciona 2-3 ejemplos del input y output esperado antes de tu pregunta real. La IA aprende el patrón.",
    descriptionEn: "Provide 2-3 examples of expected input and output before your actual question. The AI learns the pattern.",
    when: "Clasificación, formateo consistente, tareas repetitivas con formato específico.",
    whenEn: "Classification, consistent formatting, repetitive tasks with specific format.",
  },
  {
    id: "selfconsistency",
    name: "Self-consistency",
    nameEn: "Self-consistency",
    description: "Pide múltiples razonamientos para el mismo problema y compara resultados. Ideal para preguntas donde la IA puede ser inconsistente.",
    descriptionEn: "Request multiple reasoning paths for the same problem and compare results. Ideal for questions where the AI may be inconsistent.",
    when: "Cálculos importantes, decisiones críticas, validación de análisis.",
    whenEn: "Important calculations, critical decisions, analysis validation.",
  },
  {
    id: "chaining",
    name: "Prompt chaining",
    nameEn: "Prompt chaining",
    description: "Divide una tarea compleja en una secuencia de prompts conectados. La salida de uno alimenta al siguiente.",
    descriptionEn: "Break a complex task into a sequence of connected prompts. The output of one feeds the next.",
    when: "Proyectos grandes, documentos largos, flujos de trabajo multi-etapa.",
    whenEn: "Large projects, long documents, multi-stage workflows.",
  },
];
