export interface OpenClawSection {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
}

export interface OpenClawFAQ {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

export const openclawHero = {
  badge: "IA de Gestión Operativa",
  badgeEn: "AI Operations Management",
  title: "OpenClaw: tu Chief of Staff AI",
  titleEn: "OpenClaw: your AI Chief of Staff",
  subtitle:
    "Automatización inteligente que nunca duerme. Así es como una empresa pequeña puede tener el equivalente a un equipo operativo de 10 personas.",
  subtitleEn:
    "Smart automation that never sleeps. This is how a small company can have the equivalent of a 10-person operations team.",
};

export const openclawSections: OpenClawSection[] = [
  {
    id: "que-es",
    title: "¿Qué es OpenClaw?",
    titleEn: "What is OpenClaw?",
    content:
      "OpenClaw es una plataforma open source que corre en un servidor (tu VPS, tu Raspberry Pi, tu Mac) y funciona como un Chief of Staff AI: un asistente operativo que gestiona tu empresa en segundo plano mientras tú duermes, trabajas o pilotas un avión.\n\nA diferencia de un chatbot que solo responde preguntas, OpenClaw actúa: ejecuta crons, envía mensajes, lee correos, manda alertas, coordina agentes, y mantiene memoria persistente de todo lo que pasa.\n\nNo es solo una herramienta — es un sistema operativo para empresas operadas por IA.",
    contentEn:
      "OpenClaw is an open source platform that runs on a server (your VPS, your Raspberry Pi, your Mac) and works as an AI Chief of Staff: an operational assistant that manages your company in the background while you sleep, work, or fly a plane.\n\nUnlike a chatbot that only answers questions, OpenClaw acts: it runs crons, sends messages, reads emails, sends alerts, coordinates agents, and maintains persistent memory of everything that happens.\n\nIt's not just a tool — it's an operating system for AI-operated companies.",
  },
  {
    id: "como-funciona",
    title: "¿Cómo funciona?",
    titleEn: "How does it work?",
    content:
      "**Gateway:** el cerebro central que corre 24/7 en un servidor y conecta todos los canales (WhatsApp, Telegram, Discord, Gmail, Google Chat...)\n\n**Skills:** módulos especializados que le dan habilidades específicas (enviar emails, gestionar crons, leer spreadsheets, ejecutar código)\n\n**Agents:** agentes autónomos que pueden hacer tareas de fondo — cada uno tiene su área: emails, reportes, agenda, monitoreo\n\n**Memory:** sistema de archivos de memoria (Markdown) que le da continuidad entre sesiones — no empieza de cero cada vez\n\n**Heartbeats:** trabajos periódicos que revisan cosas automáticamente (emails, eventos de calendario, estado de tiendas)\n\n**Canales:** conecta con WhatsApp, Telegram, Discord, Gmail, Google Chat y más",
    contentEn:
      "**Gateway:** the central brain that runs 24/7 on a server and connects all channels (WhatsApp, Telegram, Discord, Gmail, Google Chat...)\n\n**Skills:** specialized modules that give it specific abilities (send emails, manage crons, read spreadsheets, execute code)\n\n**Agents:** autonomous agents that can do background tasks — each has its area: emails, reports, calendar, monitoring\n\n**Memory:** file-based memory system (Markdown) that gives it continuity between sessions — it doesn't start from zero every time\n\n**Heartbeats:** periodic jobs that automatically check things (emails, calendar events, store status)\n\n**Channels:** connects with WhatsApp, Telegram, Discord, Gmail, Google Chat and more",
  },
  {
    id: "para-que-sirve",
    title: "¿Para qué sirve?",
    titleEn: "What is it for?",
    content:
      "— Reemplazar asistentes virtuales operativos (no estratégicos)\n— Automatizar reportes diarios de tiendas, restaurantes, equipos\n— Monitorear pipelines de GitHub/GitLab y alertar cuando algo falla\n— Gestionar comunicación masiva (grupos de WhatsApp, canales de Telegram)\n— Revisar emails y alertar sobre lo urgente\n— Coordinar recordatorios y agendas\n— Acting as a Chief of Staff para entrepreneurs que manejan múltiples empresas",
    contentEn:
      "— Replace operational virtual assistants (not strategic ones)\n— Automate daily reports for stores, restaurants, teams\n— Monitor GitHub/GitLab pipelines and alert when something fails\n— Manage mass communication (WhatsApp groups, Telegram channels)\n— Review emails and alert about urgent ones\n— Coordinate reminders and calendars\n— Act as a Chief of Staff for entrepreneurs managing multiple companies",
  },
  {
    id: "vs-claude-code",
    title: "OpenClaw vs Claude Code — ¿Cuál es la diferencia?",
    titleEn: "OpenClaw vs Claude Code — What's the difference?",
    content:
      'Esta es la pregunta más común. No son competidores — son complementarios:\n\n**Claude Code** es un agente de CODIFICACIÓN. Diseñado para programadores. Es excellentísimo escribiendo código, refactoreando, haciendo PR reviews. Pero no tiene memoria persistente, no conecta a WhatsApp, y no hace tareas operativas por sí solo.\n\n**OpenClaw** es una PLATAFORMA OPERATIVA. Está diseñado para gestionar una empresa. Usa agentes de IA como motor, pero le suma: memoria persistente, conexiones a todos los canales, crons, scheduling, y orchestration de múltiples agentes simultáneos.\n\nEn la práctica: OpenClaw PUEDE usar Claude Code como skill para tareas de código. Así como puede usar Python, Bash, o cualquier otra herramienta. OpenClaw es el director; Claude Code es uno de los empleados.',
    contentEn:
      "This is the most common question. They are not competitors — they are complementary:\n\n**Claude Code** is a CODING agent. Designed for programmers. It's excellent at writing code, refactoring, doing PR reviews. But it has no persistent memory, doesn't connect to WhatsApp, and doesn't do operational tasks on its own.\n\n**OpenClaw** is an OPERATIONAL PLATFORM. It's designed to manage a company. It uses AI agents as its engine, but adds: persistent memory, connections to all channels, crons, scheduling, and orchestration of multiple simultaneous agents.\n\nIn practice: OpenClaw CAN use Claude Code as a skill for code tasks. Just like it can use Python, Bash, or any other tool. OpenClaw is the director; Claude Code is one of the employees.",
  },
  {
    id: "instalacion",
    title: "¿Cómo se instala?",
    titleEn: "How to install?",
    content:
      "OpenClaw funciona donde sea que puedas correr Node.js:\n\n```bash\n# 1. Instalar Node.js 18+\nnode --version  # debe ser >= 18\n\n# 2. Instalar OpenClaw globalmente\nnpm install -g openclaw\n\n# 3. Configurar el gateway (primera vez)\nopenclaw init\nopenclaw gateway start\n\n# 4. Conectar un canal (ejemplo WhatsApp)\nopenclaw pairing scan whatsapp\n\n# 5. Verificar que está corriendo\nopenclaw status\n```\n\nEl gateway queda corriendo en segundo plano (systemd service) y se reconnecta automáticamente si el servidor se reinicia.\n\n**Requisitos mínimos:**\n— VPS con Ubuntu 20.04+ (o cualquier Linux)\n— 1GB RAM mínimo, 2GB recomendado\n— Node.js 18+\n— Para WhatsApp: un número dedicado (no se puede usar el mismo de tu celular)",
    contentEn:
      "OpenClaw works wherever you can run Node.js:\n\n```bash\n# 1. Install Node.js 18+\nnode --version  # must be >= 18\n\n# 2. Install OpenClaw globally\nnpm install -g openclaw\n\n# 3. Configure the gateway (first time)\nopenclaw init\nopenclaw gateway start\n\n# 4. Connect a channel (e.g. WhatsApp)\nopenclaw pairing scan whatsapp\n\n# 5. Verify it's running\nopenclaw status\n```\n\nThe gateway runs in the background (systemd service) and automatically reconnects if the server restarts.\n\n**Minimum requirements:**\n— VPS with Ubuntu 20.04+ (or any Linux)\n— 1GB RAM minimum, 2GB recommended\n— Node.js 18+\n— For WhatsApp: a dedicated number (you can't use the same one as your phone)",
  },
  {
    id: "quien-lo-creo",
    title: "¿Quién lo creó?",
    titleEn: "Who created it?",
    content:
      "OpenClaw fue creado por un equipo pequeño con experiencia en infraestructura de IA y automatización empresarial. El proyecto es open source (licencia MIT) y se mantiene activamente en GitHub.\n\nA diferencia de empresas como OpenAI o Anthropic, OpenClaw no es una empresa de modelos de IA — es una empresa de productos de IA operativa. Su enfoque no es hacer modelos más inteligentes, sino hacer que los que ya existen sean útiles en el día a día de una empresa real.",
    contentEn:
      "OpenClaw was created by a small team with experience in AI infrastructure and business automation. The project is open source (MIT license) and is actively maintained on GitHub.\n\nUnlike companies like OpenAI or Anthropic, OpenClaw is not an AI model company — it's an operational AI product company. Its focus is not making smarter models, but making the ones that already exist useful in the day-to-day of a real business.",
  },
  {
    id: "por-que-potente",
    title: "¿Por qué es tan potente?",
    titleEn: "Why is it so powerful?",
    content:
      "3 razones:\n\n**1. Memoria persistente** — El problema fundamental de todos los chatbots es que empiezan de cero cada conversación. OpenClaw soluciona esto con archivos Markdown que son su memoria de largo plazo. Puede recordar decisiones, contexto, preferencias, lecciones aprendidas. Así es como se comporta como un verdadero Chief of Staff.\n\n**2. Actúa, no solo responde** — Ejecuta código, manda mensajes, crea crons, lee APIs, conecta herramientas. No es un asesor pasivo — es un empleado activo.\n\n**3. Corre 24/7 en segundo plano** — No necesita que alguien le hable para hacer algo. Los heartbeats revisan cosas constantemente. Si algo pasa (un email urgente, un pipeline que falló, una tienda que no abrió), reacciona solo.",
    contentEn:
      "3 reasons:\n\n**1. Persistent memory** — The fundamental problem with all chatbots is that they start from zero every conversation. OpenClaw solves this with Markdown files that serve as its long-term memory. It can remember decisions, context, preferences, lessons learned. This is how it behaves like a true Chief of Staff.\n\n**2. It acts, not just responds** — It executes code, sends messages, creates crons, reads APIs, connects tools. It's not a passive advisor — it's an active employee.\n\n**3. Runs 24/7 in the background** — It doesn't need someone to talk to it to do something. Heartbeats constantly check things. If something happens (an urgent email, a failed pipeline, a store that didn't open), it reacts on its own.",
  },
  {
    id: "caso-real",
    title: "¿Cómo lo usamos nosotros? (Caso real)",
    titleEn: "How do we use it? (Real case)",
    content:
      "OpenClaw está corriendo en un VPS y manages múltiples empresas con él:\n\n**Gestión de tiendas Construmas:** Crons automáticos que envían checklists cada mañana a los grupos de WhatsApp de las tiendas. Reporta si algo queda pendiente.\n\n**cual.ai:** Monitoreo de feedbacks, actualizaciones semanales de modelos, newsletter automation.\n\n**Email management:** Revisa Gmail cada heartbeat, alerta si hay algo urgente de Andrea o Benjamin.\n\n**Alertas de pipelines:** GitLab CI monitors en tiempo real.\n\n**Coordinación general:** Como Chief of Staff virtual para toda la operación.\n\nTodo esto sin que Nicolas tenga que abrir una app o darle instrucciones — el sistema revisa y actúa.",
    contentEn:
      "OpenClaw is running on a VPS and manages multiple companies with it:\n\n**Construmas store management:** Automatic crons that send checklists every morning to the stores' WhatsApp groups. Reports if something is pending.\n\n**cual.ai:** Feedback monitoring, weekly model updates, newsletter automation.\n\n**Email management:** Checks Gmail every heartbeat, alerts if there's something urgent from Andrea or Benjamin.\n\n**Pipeline alerts:** GitLab CI monitors in real time.\n\n**General coordination:** As a virtual Chief of Staff for the entire operation.\n\nAll of this without Nicolas having to open an app or give instructions — the system checks and acts.",
  },
];

export const openclawComparison = {
  headers: {
    feature: "Característica",
    featureEn: "Feature",
    openclaw: "OpenClaw",
    claudeCode: "Claude Code",
  },
  rows: [
    {
      feature: "Propósito",
      featureEn: "Purpose",
      openclaw: "Gestión operativa de empresa",
      openclawEn: "Business operations management",
      claudeCode: "Codificación",
      claudeCodeEn: "Coding",
    },
    {
      feature: "Memoria persistente",
      featureEn: "Persistent memory",
      openclaw: "✅ Sí",
      openclawEn: "✅ Yes",
      claudeCode: "❌ No",
      claudeCodeEn: "❌ No",
    },
    {
      feature: "Conecta WhatsApp/Gmail/Discord",
      featureEn: "Connects WhatsApp/Gmail/Discord",
      openclaw: "✅ Sí",
      openclawEn: "✅ Yes",
      claudeCode: "❌ No",
      claudeCodeEn: "❌ No",
    },
    {
      feature: "Crons y heartbeats",
      featureEn: "Crons & heartbeats",
      openclaw: "✅ Sí",
      openclawEn: "✅ Yes",
      claudeCode: "❌ No",
      claudeCodeEn: "❌ No",
    },
    {
      feature: "Ejecuta código",
      featureEn: "Executes code",
      openclaw: "✅ (múltiples skills)",
      openclawEn: "✅ (multiple skills)",
      claudeCode: "✅ Sí",
      claudeCodeEn: "✅ Yes",
    },
    {
      feature: "Coordina múltiples agentes",
      featureEn: "Coordinates multiple agents",
      openclaw: "✅ Sí",
      openclawEn: "✅ Yes",
      claudeCode: "❌ No",
      claudeCodeEn: "❌ No",
    },
    {
      feature: "Precio",
      featureEn: "Price",
      openclaw: "Open source / gratis",
      openclawEn: "Open source / free",
      claudeCode: "$20/mes (pro tier)",
      claudeCodeEn: "$20/mo (pro tier)",
    },
  ],
};

export const openclawFAQs: OpenClawFAQ[] = [
  {
    question: "¿OpenClaw usa ChatGPT o Claude?",
    questionEn: "Does OpenClaw use ChatGPT or Claude?",
    answer:
      "Puede usar cualquier modelo: Claude, GPT, MiniMax, Gemini, DeepSeek. Vos elegís.",
    answerEn:
      "It can use any model: Claude, GPT, MiniMax, Gemini, DeepSeek. You choose.",
  },
  {
    question: "¿Necesito programar para usarlo?",
    questionEn: "Do I need to code to use it?",
    answer:
      "No para usarlo como usuario. Sí para crear skills personalizados.",
    answerEn:
      "Not to use it as a user. Yes to create custom skills.",
  },
  {
    question: "¿Es seguro?",
    questionEn: "Is it secure?",
    answer:
      "Toda la información queda en tu servidor. Open source para auditoría.",
    answerEn:
      "All information stays on your server. Open source for auditing.",
  },
  {
    question: "¿Puedo migrar de un servidor a otro?",
    questionEn: "Can I migrate from one server to another?",
    answer:
      "Sí, es configuración en archivos. Un backup y listo.",
    answerEn:
      "Yes, it's file-based configuration. One backup and you're done.",
  },
  {
    question: "¿Cuánto cuesta?",
    questionEn: "How much does it cost?",
    answer: "Open source, gratis. Solo pagás el VPS.",
    answerEn: "Open source, free. You only pay for the VPS.",
  },
];
