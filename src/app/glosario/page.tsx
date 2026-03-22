import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import GlosarioSidebar from "@/components/glosario/GlosarioSidebar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Glosario de AI y Tecnología — Los términos que todos fingen entender | cual.ai",
  description:
    "Explicamos en español claro (y con algo de humor) los términos más usados en IA y tecnología: LLM, token, GPU, VPS, API, OpenAI, Anthropic, Perplexity y más. Sin tecnicismos innecesarios.",
  openGraph: {
    title: "Glosario de AI y Tecnología | cual.ai",
    description:
      "Los términos de IA y tech que todos usan y nadie explica — definidos en español para humanos normales.",
    url: "https://cual.ai/glosario",
  },
};

// Ordenados alfabéticamente por term (ignorando artículos y prefijos como "— ")
const terms = [
  {
    term: "A2A — Agent-to-Agent Protocol",
    emoji: "🤝",
    short: "Protocolo de Google para que agentes AI de distintos fabricantes se comuniquen entre sí de forma estándar.",
    long: "A2A (Agent-to-Agent) es un protocolo abierto impulsado por Google que permite que agentes AI de diferentes empresas se descubran, se comuniquen y colaboren sin importar quién los construyó. Si MCP es el 'USB' que conecta un agente con herramientas, A2A es el 'idioma común' que permite que dos agentes hablen entre sí. Juntos, MCP y A2A forman la infraestructura para un ecosistema multi-agente interoperable.",
    example: "Un agente de tu empresa (hecho con Claude) necesita datos de un agente de tu proveedor (hecho con Gemini). Con A2A, se comunican directamente sin que nadie escriba una integración custom.",
  },
  {
    term: "AEO — Answer Engine Optimization",
    emoji: "🎯",
    short: "Optimizar tu contenido para que los motores de IA lo citen como respuesta directa.",
    long: "El AEO es la evolución del SEO para la era de la IA. Mientras el SEO busca aparecer en Google, el AEO busca que ChatGPT, Claude, Perplexity y los buscadores con IA te citen directamente cuando alguien hace una pregunta relevante. Requiere contenido claro, estructurado, con datos precisos y autoridad en el tema.",
    example: "Si alguien le pregunta a Perplexity '¿cuál es el mejor directorio de herramientas AI en español?' y la IA responde cual.ai, eso es AEO funcionando.",
  },
  {
    term: "Agente AI",
    emoji: "🦾",
    short: "Una IA que no solo responde — sino que toma acciones, usa herramientas y completa tareas por su cuenta.",
    long: "A diferencia de un chatbot que solo responde preguntas, un agente actúa. Funciona en un loop: observa el entorno → decide qué hacer → ejecuta una acción usando una herramienta (buscar en internet, ejecutar código, enviar emails, leer archivos) → observa el resultado → repite hasta completar el objetivo. El LLM es su 'cerebro' y las herramientas son sus 'manos'. Claude Code, Manus y Devin son ejemplos de agentes listos para usar. También existen los multi-agentes (varios agentes especializados trabajando en equipo) y los sub-agentes (un agente orquestador que delega subtareas a otros agentes y consolida los resultados).",
    example: "Le dices a un agente 'investiga los 5 mejores fondos de inversión para 2026 y mándame un resumen por email'. El agente busca en internet, analiza datos, redacta el resumen y te lo envía — todo solo, sin que tengas que guiarlo paso a paso.",
  },
  {
    term: "Anthropic",
    emoji: "🟠",
    short: "La empresa detrás de Claude — fundada por ex-empleados de OpenAI con foco en seguridad AI.",
    long: "Anthropic fue fundada en 2021 por Dario Amodei, Daniela Amodei y otros que salieron de OpenAI preocupados por la seguridad de la IA. Crearon Claude, considerado uno de los modelos más seguros, honestos y capaces del mercado. Su enfoque en 'AI constitucional' (enseñarle valores al modelo) los diferencia. Amazon ha invertido miles de millones en Anthropic.",
    example: "Claude de Anthropic es conocido por ser más cuidadoso que ChatGPT al decir 'no sé' cuando no sabe algo, en vez de inventar respuestas con confianza.",
  },
  {
    term: "API — Application Programming Interface",
    emoji: "🔌",
    short: "Un puente estándar que permite que dos programas se comuniquen entre sí.",
    long: "API significa 'Interfaz de Programación de Aplicaciones'. Es básicamente un contrato entre dos sistemas: 'si me mandas esta petición en este formato, yo te respondo con estos datos'. No necesitas saber cómo funciona el sistema del otro lado — solo cómo hablarle. Casi todo el internet funciona con APIs: el clima en tu celular, los pagos con tarjeta, los mapas en apps de delivery. En IA, es la forma en que los desarrolladores conectan sus apps a modelos como GPT o Claude.",
    example: "Cuando una app de clima te muestra la temperatura, no tiene sus propios satélites — le pregunta a una API meteorológica. Tú usas la app, la app usa la API.",
  },
  {
    term: "Benchmark",
    emoji: "📏",
    short: "Una prueba estandarizada para medir y comparar el rendimiento de diferentes modelos de IA.",
    long: "Como los rankings universitarios, los benchmarks son pruebas que permiten comparar modelos de forma objetiva (o al menos intentarlo). MMLU, HumanEval, SWE-bench, GPQA son algunos de los más usados. Cada empresa presenta sus modelos con sus mejores scores, lo que a veces hace difícil comparar manzanas con manzanas.",
    example: "Cuando OpenAI dice que GPT-5 supera a Claude en MMLU, está usando un benchmark. Es como comparar estudiantes con el mismo examen — útil, pero no lo dice todo.",
  },
  {
    term: "CLI — Command Line Interface",
    emoji: "⌨️",
    short: "Una herramienta que se controla escribiendo comandos de texto en la terminal, sin interfaz gráfica.",
    long: "CLI (Interfaz de Línea de Comandos) es cualquier programa que se usa desde la terminal escribiendo comandos, sin botones ni ventanas. La mayoría de herramientas para desarrolladores son CLIs: Git, Docker, npm, la CLI de AWS, la de Vercel, etc. Son más rápidas de usar que una interfaz visual una vez que las conoces, y se pueden encadenar y automatizar fácilmente en scripts. Lo opuesto es una GUI (Graphical User Interface) — lo que usa la mayoría de personas en su día a día.",
    example: "En vez de abrir la app de GitHub y hacer clic en 'Commit', en la terminal escribes `git commit -m 'mensaje'`. Eso es usar el CLI de Git.",
  },
  {
    term: "Embedding",
    emoji: "🗺️",
    short: "Una representación matemática del significado de un texto, que permite comparar semánticamente.",
    long: "Un embedding convierte texto en un vector de números (una lista de coordenadas) que captura el significado semántico. Dos textos similares en significado tendrán vectores cercanos, aunque usen palabras diferentes. Es la base de la búsqueda semántica, las recomendaciones y el RAG.",
    example: "'Auto' y 'carro' tienen embeddings muy cercanos aunque sean palabras distintas. 'Auto' y 'pizza' tienen embeddings muy lejanos. Así funciona la búsqueda semántica.",
  },
  {
    term: "Fine-tuning",
    emoji: "🎛️",
    short: "Entrenar un modelo existente con tus propios datos para especializarlo en tu dominio.",
    long: "El fine-tuning es como contratar a un profesional general y pagarle un curso intensivo en tu industria. Tomas un modelo base y lo entrenas con ejemplos específicos de tu caso de uso (emails de tu empresa, documentos legales, transcripciones médicas) para que responda mejor en ese contexto.",
    example: "Una clínica que hace fine-tuning de un LLM con miles de historiales médicos anonimizados para que el modelo entienda terminología médica específica de su especialidad.",
  },
  {
    term: "GEO — Generative Engine Optimization",
    emoji: "✨",
    short: "Estrategias para que los motores de IA generativa mencionen tu contenido o marca.",
    long: "GEO y AEO se usan casi de forma intercambiable. La idea es la misma: adaptar tu estrategia de contenidos para ser relevante en un mundo donde la gente pregunta a IAs en vez de buscar en Google. Incluye usar lenguaje natural, responder preguntas directas, estructurar bien el contenido con datos verificables.",
    example: "Una empresa que escribe artículos detallados respondiendo preguntas específicas de su industria está haciendo GEO, aunque no lo llame así.",
  },
  {
    term: "GPU — Unidad de Procesamiento Gráfico",
    emoji: "🎮",
    short: "El chip diseñado para gráficos que resultó ser perfecto para entrenar modelos de IA.",
    long: "La GPU fue creada para videojuegos — procesar millones de píxeles en paralelo. Resulta que entrenar modelos de IA requiere exactamente el mismo tipo de matemática masiva y paralela. Por eso NVIDIA domina el mercado AI: sus GPUs (H100, A100) se convirtieron en el 'oro' de la era AI. Sin suficientes GPUs, no puedes entrenar modelos grandes.",
    example: "Entrenar GPT-4 requirió miles de GPUs NVIDIA corriendo durante semanas. Correr un modelo pequeño como Llama 7B localmente necesita una GPU de ~8GB VRAM.",
  },
  {
    term: "Hallucination (Alucinación)",
    emoji: "🌀",
    short: "Cuando la IA inventa información falsa con total confianza, como si fuera real.",
    long: "Las alucinaciones son el talón de Aquiles de los LLMs. El modelo no 'sabe' cuándo no sabe algo — simplemente genera el texto más probable, que a veces es incorrecto pero suena convincente. Citas inventadas, estadísticas que no existen, fechas equivocadas... todo presentado con la seguridad de un experto.",
    example: "Le preguntas a un LLM por un estudio científico y te da título, autores, revista y año — todo inventado. La referencia no existe. Pero sonaba bien.",
  },
  {
    term: "Inference (Inferencia)",
    emoji: "⚡",
    short: "El proceso de usar un modelo ya entrenado para generar una respuesta.",
    long: "El entrenamiento de un modelo puede tomar meses y costar millones. La inferencia es el momento en que ese modelo responde tu pregunta — que toma segundos. Cuando pagas por tokens en una API, estás pagando por inferencia, no por el entrenamiento. Las empresas invierten mucho en hacer la inferencia más rápida y barata.",
    example: "Cada vez que le mandas un mensaje a ChatGPT y te responde, eso es una inferencia. Ocurren billones por día a nivel global.",
  },
  {
    term: "Inteligencia Artificial (AI / IA)",
    emoji: "🤖",
    short: "Software que imita habilidades humanas como entender texto, reconocer imágenes o tomar decisiones.",
    long: "La IA no es un robot con sentimientos ni va a conquistar el mundo (todavía). Es software entrenado con enormes cantidades de datos para hacer tareas que antes solo podían hacer humanos: leer, escribir, analizar, traducir, generar imágenes. Hay IA estrecha (solo hace una cosa bien) e IA general (aún no existe de verdad).",
    example: "ChatGPT escribiendo un email por ti es IA. El corrector de tu celular también es IA, solo que nadie se lo cuenta en conferencias.",
  },
  {
    term: "Linux",
    emoji: "🐧",
    short: "El sistema operativo gratuito y open source que corre en la mayoría de servidores del mundo.",
    long: "Linux es un sistema operativo (como Windows o macOS) creado en 1991 por Linus Torvalds y mantenido por miles de voluntarios. Es gratuito, open source y brutalmente eficiente. No es muy popular en escritorios personales, pero domina servidores, smartphones (Android es Linux) y supercomputadores. Si usas internet, estás dependiendo de Linux aunque no lo sepas.",
    example: "Tu banco, Netflix, Google, Amazon — todos corren en servidores Linux. El robot de tu fábrica probablemente también.",
  },
  {
    term: "LLM — Large Language Model",
    emoji: "🧠",
    short: "Un modelo de IA entrenado con texto masivo para entender y generar lenguaje humano.",
    long: "LLM significa 'Modelo de Lenguaje Grande'. Es el motor detrás de ChatGPT, Claude, Gemini y similares. Se entrena leyendo una fracción enorme de internet, libros y textos, y aprende a predecir qué palabra viene después. Simple en teoría, abrumador en práctica.",
    example: "Cuando le preguntas a Claude '¿qué hago si mi jefe me llama los domingos?' y te da una respuesta coherente, eso es un LLM trabajando.",
  },
  {
    term: "Loop de razonamiento / ReAct",
    emoji: "🔄",
    short: "El patrón donde un agente AI alterna entre pensar y actuar hasta resolver la tarea — su forma de 'razonar en voz alta'.",
    long: "ReAct (Reason + Act) es el patrón fundamental de los agentes AI: el modelo razona sobre qué hacer (Reason), ejecuta una acción como buscar en internet o leer un archivo (Act), observa el resultado, y repite el ciclo hasta completar el objetivo. Es literalmente cómo 'piensa' un agente. Variantes populares incluyen Chain-of-Thought (razonar paso a paso en línea recta), Tree-of-Thought (explorar múltiples caminos de razonamiento como ramas de un árbol) y Reflexion (el agente evalúa sus propios errores para mejorar).",
    example: "Le pides al agente 'encuentra vuelos baratos a Madrid para junio'. El agente piensa: 'necesito buscar vuelos' → busca en internet → piensa: 'estos precios son altos, busco fechas flexibles' → busca de nuevo → te presenta opciones. Cada ciclo pensar→actuar es un loop ReAct.",
  },
  {
    term: "MCP — Model Context Protocol",
    emoji: "🔗",
    short: "Un estándar abierto creado por Anthropic para conectar modelos AI con herramientas y fuentes de datos externas.",
    long: "MCP (Model Context Protocol) es como un USB universal para la IA — un protocolo estándar que permite que cualquier modelo AI se conecte a cualquier herramienta o fuente de datos de forma uniforme. Antes de MCP, cada integración era un trabajo custom. Con MCP, si construyes un 'servidor MCP' para tu base de datos o tu CRM, cualquier modelo compatible puede usarlo automáticamente. Fue creado por Anthropic y adoptado rápidamente por OpenAI, Google y la mayoría del ecosistema.",
    example: "Con un servidor MCP para Google Drive, puedes decirle a Claude 'revisa los documentos de mi Drive y resume los contratos del mes pasado' — y lo hace, sin configuración especial.",
  },
  {
    term: "Modelo",
    emoji: "📦",
    short: "La versión concreta de una IA — como GPT-4o, Claude 3.5 Sonnet o Gemini 2.5 Pro.",
    long: "Un modelo es el resultado de entrenar una IA con datos y parámetros específicos. Dos modelos de la misma empresa pueden ser muy diferentes en inteligencia, velocidad y precio. Elegir el modelo correcto para tu tarea es el arte de no gastar más de lo necesario.",
    example: "GPT-4o es un modelo de OpenAI. Claude Sonnet es un modelo de Anthropic. Son como versiones de un software, pero cada una tiene su propia personalidad.",
  },
  {
    term: "Multi-agente",
    emoji: "👥",
    short: "Sistema donde varios agentes AI trabajan en equipo — cada uno especializado en lo suyo, coordinados para resolver tareas complejas.",
    long: "Un sistema multi-agente es como una empresa donde cada empleado tiene un rol específico, pero en vez de personas son agentes AI. Uno puede investigar, otro redactar, otro revisar calidad, otro publicar — trabajando en paralelo o en secuencia. Es más potente que un solo agente porque cada uno se especializa y el resultado final es mejor que lo que cualquiera lograría solo. Un agente orquestador suele coordinar al equipo, delegando subtareas y consolidando resultados.",
    example: "Para crear un informe de mercado: un agente busca datos en internet, otro analiza competidores, otro redacta el informe y otro genera los gráficos. Cuatro agentes, una hora. Un humano solo: dos días.",
  },
  {
    term: "Multimodal",
    emoji: "👁️",
    short: "Un modelo que procesa varios tipos de información: texto, imágenes, audio o video.",
    long: "Los primeros LLMs solo entendían texto. Los modelos multimodales además pueden ver imágenes, escuchar audio y hasta analizar video. GPT-4o, Gemini 2.5 Pro y Claude 3.5 Sonnet son multimodales. Esto los hace mucho más versátiles para tareas del mundo real.",
    example: "Le mandas una foto de tu recibo del supermercado y le dices 'dime cuánto gasté en bebidas'. Un modelo multimodal lo lee y te da el número.",
  },
  {
    term: "Open Source (Código Abierto)",
    emoji: "🔓",
    short: "Modelos cuyo código y/o pesos están disponibles públicamente para que cualquiera los use.",
    long: "En IA, open source significa que los pesos del modelo (lo que aprendió durante el entrenamiento) son públicos y descargables. Puedes correrlos en tu propio servidor, modificarlos, construir sobre ellos. Llama de Meta y Mistral son los ejemplos más conocidos. La contraparte son los modelos propietarios como GPT o Claude, que solo se acceden via API.",
    example: "Llama 4 de Meta es open source: lo puedes descargar y correr en tu computador (si tienes una GPU decente). GPT-5 no: solo puedes usarlo pagando a OpenAI.",
  },
  {
    term: "OpenAI",
    emoji: "🟢",
    short: "La empresa detrás de ChatGPT y GPT — la que puso la IA generativa en el mapa para el público general.",
    long: "OpenAI fue fundada en 2015 como organización sin ánimo de lucro por Sam Altman, Elon Musk y otros. Luego se convirtió en empresa con fines de lucro parcial. Creó los modelos GPT, el asistente ChatGPT y DALL-E para imágenes. En noviembre de 2022, lanzó ChatGPT y cambió para siempre la percepción pública de la IA. Hoy es la empresa más influyente del ecosistema AI, con Microsoft como principal inversor.",
    example: "Cuando alguien dice 'le pregunté a la IA' y no especifica cuál, probablemente usó ChatGPT de OpenAI.",
  },
  {
    term: "OpenClaw",
    emoji: "🦞",
    short: "Un asistente AI personal que vive en tu servidor y se conecta a WhatsApp, Telegram y más.",
    long: "OpenClaw es el sistema que hace funcionar este asistente. Es un agente AI personal instalado en tu propio servidor que se conecta a tus canales de mensajería (WhatsApp, Telegram, Discord), tiene memoria persistente, puede ejecutar tareas automáticas, manejar tu correo, monitorear sistemas y mucho más. Piénsalo como un asistente que nunca duerme y no olvida nada — a menos que tú lo configures para que olvide.",
    example: "Si le mandas un mensaje a las 3am diciendo 'recuérdame revisar ese contrato el lunes', lo hace. Eso es OpenClaw.",
  },
  {
    term: "Orquestador",
    emoji: "🎼",
    short: "El agente principal que coordina a otros agentes — como un director de orquesta que decide quién toca qué y cuándo.",
    long: "En un sistema multi-agente, el orquestador es el agente que tiene la visión completa de la tarea. Recibe el objetivo, lo descompone en subtareas, decide qué sub-agente se encarga de cada una, les envía instrucciones, monitorea su progreso y consolida los resultados finales. No hace el trabajo pesado directamente — su valor está en la coordinación inteligente. Es la pieza clave del patrón multi-agente.",
    example: "Le dices al orquestador: 'prepara el lanzamiento del producto'. Él delega: al agente de contenido escribir el blog post, al de diseño crear las imágenes, al de email preparar la campaña, y al de redes programar los posts. Al final, consolida todo en un timeline.",
  },
  {
    term: "Perplexity",
    emoji: "🔍",
    short: "Un buscador potenciado por IA que responde preguntas con fuentes citadas — la alternativa a Google.",
    long: "Perplexity AI es un motor de búsqueda que en vez de darte una lista de links, te da una respuesta directa generada por IA con las fuentes citadas al lado. Combina búsqueda web en tiempo real con modelos de lenguaje. Es especialmente útil para preguntas que requieren sintetizar información de varias fuentes. Muchos lo usan como sustituto de Google para investigación rápida.",
    example: "En Google buscas 'mejores herramientas AI para marketing 2026' y obtienes 10 links para revisar. En Perplexity obtienes una lista organizada con explicaciones y fuentes, listo para leer.",
  },
  {
    term: "Prompt",
    emoji: "💬",
    short: "El texto que le escribes a una IA para pedirle algo — tu pregunta, instrucción o contexto.",
    long: "El prompt es simplemente lo que le dices al modelo. Puede ser una pregunta corta ('¿qué es un token?') o un bloque de texto largo con instrucciones detalladas, contexto, ejemplos y restricciones. La calidad del prompt determina enormemente la calidad de la respuesta — de ahí nació el oficio del 'prompt engineer'.",
    example: "Decirle a la IA 'resume esto' es un prompt. Decirle 'eres un experto en finanzas, resume esto en 3 puntos para un CEO no técnico, sin jerga' es un buen prompt.",
  },
  {
    term: "RAG — Retrieval Augmented Generation",
    emoji: "📚",
    short: "Técnica para darle a la IA acceso a documentos externos antes de que responda.",
    long: "RAG (Generación Aumentada por Recuperación) es la solución a uno de los grandes problemas de los LLMs: que solo saben lo que aprendieron durante su entrenamiento. Con RAG, antes de responder, el modelo busca en una base de documentos propia (tu manual, tu base de conocimiento, tus políticas) y usa esa información para dar respuestas precisas y actualizadas.",
    example: "Un chatbot de soporte que responde preguntas de tu manual de producto usando RAG. Sin RAG, inventaría respuestas. Con RAG, cita el manual.",
  },
  {
    term: "RAM — Memoria de Acceso Aleatorio",
    emoji: "🧩",
    short: "La memoria de trabajo de tu computador — lo que está activo ahora mismo.",
    long: "La RAM es donde el computador guarda todo lo que está usando en este momento: las apps abiertas, los archivos cargados, el estado de los programas. Es diferente al disco duro (almacenamiento permanente): la RAM es rápida pero temporal — al apagar el equipo, se borra. En IA, la RAM (y especialmente la VRAM de la GPU) determina qué tan grandes son los modelos que puedes correr localmente.",
    example: "Si tienes muchas pestañas abiertas y el computador se pone lento, es porque la RAM está llena. Cerrar pestañas libera RAM. El disco duro no tiene nada que ver.",
  },
  {
    term: "Servidor",
    emoji: "🗄️",
    short: "Una computadora que responde solicitudes de otras — como la cocina de un restaurante.",
    long: "Un servidor es simplemente un computador configurado para recibir y responder solicitudes de otros dispositivos. Puede ser físico (una máquina en un datacenter) o virtual (una porción de una máquina más grande). Los servidores web sirven páginas, los de base de datos guardan información, los de correo mandan emails. Cuando abres cual.ai, un servidor en algún lugar del mundo responde tu petición en milisegundos.",
    example: "Cuando escribes cual.ai en tu navegador, tu celular hace una petición a un servidor de Vercel en algún datacenter, que responde con el HTML de la página.",
  },
  {
    term: "Sistema de Instrucciones (System Prompt)",
    emoji: "⚙️",
    short: "Instrucciones ocultas que configuran cómo se comporta la IA antes de que empieces a hablar con ella.",
    long: "Cuando usas ChatGPT, Claude o cualquier app de IA, hay instrucciones que tú no ves que le dicen al modelo cómo comportarse: su personalidad, qué puede o no puede hacer, en qué idioma responder, etc. Las empresas usan esto para crear versiones especializadas de un modelo genérico.",
    example: "Cuando un chatbot de atención al cliente 'solo sabe hablar de productos de la empresa', eso es un system prompt que le dice que no hable de nada más.",
  },
  {
    term: "Skill (Habilidad de Agente)",
    emoji: "🧩",
    short: "Un módulo que le agrega capacidades específicas a un agente AI — como un plugin especializado.",
    long: "En el contexto de agentes AI como OpenClaw, un skill es un conjunto de instrucciones y herramientas empaquetadas para que el agente sepa cómo realizar una tarea específica: consultar el clima, manejar emails, buscar en GitHub, transcribir audio, etc. Es como instalarle una habilidad nueva al agente. Los skills se pueden compartir, actualizar y combinar — convirtiendo un agente genérico en un especialista para tu flujo de trabajo.",
    example: "OpenClaw tiene un skill de Gmail que le enseña cómo leer, buscar y enviar correos. Sin ese skill, el agente no sabría cómo conectarse a tu bandeja de entrada.",
  },
  {
    term: "Sub-agente",
    emoji: "🐝",
    short: "Un agente especializado que recibe instrucciones de un orquestador y ejecuta una subtarea concreta — el obrero del equipo.",
    long: "En un sistema multi-agente, los sub-agentes son los que hacen el trabajo de campo. Cada uno está especializado en algo: buscar información, escribir texto, analizar datos, generar código, etc. Reciben instrucciones del orquestador, ejecutan su tarea, y devuelven el resultado. Operan bajo supervisión — no deciden qué hacer, sino cómo hacer bien lo que les pidieron. Son como los músicos de la orquesta: cada uno domina su instrumento.",
    example: "El orquestador dice: 'necesito un resumen de este PDF de 200 páginas'. El sub-agente de lectura lo procesa, extrae los puntos clave, y devuelve el resumen al orquestador — que lo combina con el trabajo de otros sub-agentes.",
  },
  {
    term: "Temperatura",
    emoji: "🌡️",
    short: "Un parámetro que controla qué tan creativa o predecible es la respuesta de un modelo.",
    long: "La temperatura va de 0 a 2 (según el modelo). Temperatura 0 = respuestas muy deterministas y consistentes, siempre la misma respuesta para la misma pregunta. Temperatura alta = más variedad, creatividad y también más riesgo de que diga cosas raras. Para tareas técnicas o de precisión, temperatura baja. Para creatividad, temperatura alta.",
    example: "Para que la IA genere código o responda fechas, temperatura 0. Para que te escriba un poema sorprendente, temperatura 0.9.",
  },
  {
    term: "Terminal / Línea de comandos",
    emoji: "🖥️",
    short: "Una interfaz de texto para controlar tu computador escribiendo comandos, sin botones ni menús.",
    long: "La terminal (también llamada consola, shell o línea de comandos) es la forma de hablarle directamente al sistema operativo en texto puro. Parece intimidante, pero es simplemente un idioma diferente. Los desarrolladores la usan porque es más rápida y poderosa que hacer clic en menús. En Linux y Mac se llama Terminal; en Windows, PowerShell o CMD.",
    example: "En vez de abrir el explorador de archivos, hacer clic en una carpeta y buscar un archivo, en terminal escribes: `ls -la /carpeta`. Mismo resultado, 3 segundos.",
  },
  {
    term: "Token",
    emoji: "🪙",
    short: "La unidad mínima que procesa un LLM — aproximadamente ¾ de una palabra en español.",
    long: "Los modelos no leen palabras completas sino fragmentos llamados tokens. Una palabra corta puede ser 1 token, una larga puede ser 2 o 3. También los espacios y signos de puntuación cuentan. Por eso los precios de las APIs se miden en 'por millón de tokens'. Esta definición tiene aproximadamente 60 tokens.",
    example: "La palabra 'automáticamente' puede ser 4-5 tokens. 'AI' es 1. Así que escribir en español cuesta un poco más de tokens que en inglés (mala suerte).",
  },
  {
    term: "Tool / Herramienta (AI)",
    emoji: "🔧",
    short: "Una función que un agente AI puede llamar para interactuar con el mundo real — sus 'manos' para hacer cosas.",
    long: "Sin herramientas, un modelo de IA solo puede generar texto. Con tools, puede actuar: buscar en Google, ejecutar código, leer PDFs, enviar emails, consultar bases de datos, hacer llamadas a APIs, crear archivos, publicar en redes sociales — básicamente cualquier cosa que se pueda hacer por software. Las tools son lo que convierte a un chatbot en un agente. El protocolo MCP estandariza cómo se conectan estas herramientas a los modelos, y cada tool define qué parámetros necesita y qué devuelve.",
    example: "Le dices a Claude 'busca el clima en Madrid'. Sin tools, te diría 'no puedo acceder a internet'. Con una tool de búsqueda web, realmente busca el clima y te da el dato actualizado.",
  },
  {
    term: "Ventana de Contexto",
    emoji: "🪟",
    short: "La cantidad de texto que un modelo puede 'recordar' dentro de una misma conversación.",
    long: "La ventana de contexto es la memoria de trabajo del modelo — todo lo que puede leer y considerar en un momento dado. Si tu conversación supera ese límite, el modelo literalmente olvida lo que dijiste al principio. Los modelos modernos tienen ventanas de 128K, 200K o hasta 1 millón de tokens, lo que equivale a varios libros completos.",
    example: "Si le pegas una novela entera a Claude con ventana de 200K tokens, la puede leer toda. Si le pegas dos novelas largas a un modelo con 32K, empezará a 'olvidar' el principio.",
  },
  {
    term: "VPN — Red Privada Virtual",
    emoji: "🔒",
    short: "Un túnel cifrado que protege tu conexión a internet y puede cambiar tu ubicación virtual.",
    long: "Una VPN (Virtual Private Network) encripta todo tu tráfico de internet y lo redirige por un servidor en otro lugar. Esto hace dos cosas: protege tus datos en redes WiFi públicas (cafeterías, aeropuertos), y oculta tu ubicación real (puedes 'aparecer' en otro país). Lo usan por privacidad, seguridad corporativa, y sí — para ver Netflix de otros países.",
    example: "En un aeropuerto conectado al WiFi público, sin VPN cualquiera en la red podría interceptar tu tráfico. Con VPN, ven ruido cifrado inútil.",
  },
  {
    term: "VPS — Servidor Privado Virtual",
    emoji: "☁️",
    short: "Un servidor en la nube que puedes alquilar por horas o meses — tu propio espacio en un datacenter.",
    long: "Un VPS (Virtual Private Server) es una fracción virtual de un servidor físico grande. Le alquilas a una empresa como DigitalOcean, Hetzner o AWS una porción de sus máquinas y tienes control total: instalar lo que quieras, configurar como necesites, acceder 24/7 por terminal. Ideal para correr apps, bots, bases de datos o sitios web sin pagar por hardware propio.",
    example: "Este asistente AI corre en un VPS. En vez de tener un servidor físico en casa, alquilamos espacio en un datacenter en algún lugar del mundo por ~$5-20/mes.",
  },
];

export default function GlosarioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <GlosarioSidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
                <Link href="/" className="hover:text-accent transition-colors">cual.ai</Link>
                <span>/</span>
                <span>Glosario</span>
              </div>

              <h1 className="text-2xl font-bold text-text mb-4">
                Glosario de AI y Tecnología 📖
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
                {terms.length} términos · Orden alfabético · AI, modelos, infraestructura y empresas clave
              </p>
            </div>

            {/* Nav alfabético de letras */}
            <div className="bg-bg-card border border-border rounded-lg p-4 mb-6 sticky top-12 z-10">
              <div className="flex flex-wrap gap-1">
                {Array.from(new Set(terms.map((t) => t.term[0].toUpperCase()))).map((letter) => (
                  <a
                    key={letter}
                    href={`#letra-${letter}`}
                    className="text-xs font-mono text-accent hover:bg-accent hover:text-bg px-2 py-0.5 rounded transition-colors"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>

            {/* Índice completo */}
            <div className="bg-bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs text-text-muted mb-3 font-medium uppercase tracking-wide">Todos los términos — A–Z</p>
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

            {/* Terms con separadores de letra */}
            <div className="space-y-6">
              {terms.map((t, i) => {
                const letter = t.term[0].toUpperCase();
                const prevLetter = i > 0 ? terms[i - 1].term[0].toUpperCase() : null;
                const showLetterHeader = letter !== prevLetter;
                return (
                  <div key={t.term}>
                    {showLetterHeader && (
                      <div id={`letra-${letter}`} className="scroll-mt-24 flex items-center gap-3 mb-2 mt-2">
                        <span className="text-lg font-bold text-accent">{letter}</span>
                        <div className="flex-1 h-px bg-border" />
                      </div>
                    )}
                <div
                  id={t.term.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                  className="border border-border rounded-lg p-5 bg-bg-card scroll-mt-24"
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
                  </div>
                );
              })}
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

          <Footer />
        </main>
      </div>
    </div>
  );
}
