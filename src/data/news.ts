// ============================================================
// cual.ai — Noticias Seed Data
// ============================================================

export type NewsCategory = "modelos-ia" | "herramientas" | "empresas" | "sociedad" | "legislacion" | "agentes-ia" | "casos-de-uso"

export interface NewsItem {
  id: string
  slug: string
  title: string
  summary: string
  content: string
  practicalTakeaway: string
  category: NewsCategory
  categoryLabel: string
  date: string
  readingTime: number
  relatedTools?: string[]
  source?: string
  sourceUrl?: string
  titleEn?: string
  summaryEn?: string
  contentEn?: string
  practicalTakeawayEn?: string
  categoryLabelEn?: string
}

export const newsCategories: { slug: NewsCategory; label: string; labelEn: string }[] = [
  { slug: "modelos-ia", label: "Modelos de IA", labelEn: "AI Models" },
  { slug: "herramientas", label: "Herramientas", labelEn: "Tools" },
  { slug: "empresas", label: "Empresas", labelEn: "Companies" },
  { slug: "sociedad", label: "Sociedad", labelEn: "Society" },
  { slug: "legislacion", label: "Legislación", labelEn: "Regulation" },
  { slug: "agentes-ia", label: "Agentes de IA", labelEn: "AI Agents" },
  { slug: "casos-de-uso", label: "Casos de Uso", labelEn: "Use Cases" },
]

export const news: NewsItem[] = [
  {
    id: "gpt-54-ia-usa-computador-mejor-humanos",
    slug: "gpt-54-la-ia-que-ya-usa-tu-computador-mejor-que-tu",
    title: "GPT-5.4: la IA que ya usa tu computador mejor que tú",
    summary: "OpenAI lanzó GPT-5.4 en marzo de 2026 y logró algo que parecía ciencia ficción: en pruebas estandarizadas, la IA usa un computador con más precisión que el humano promedio. Puede navegar sitios web, llenar formularios, buscar información y completar tareas en tu pantalla — solo.",
    content: `<p>El 5 de marzo de 2026, <a href="/glosario#openai">OpenAI</a> lanzó GPT-5.4 y publicó un dato que paró el mundo tech por unos días: en la prueba estándar que mide qué tan bien una IA puede operar un computador, <strong>GPT-5.4 obtuvo 75%. Los humanos expertos obtienen 72.4%.</strong></p>

<p>Por primera vez, una IA supera al humano promedio manejando un computador de escritorio. No hablamos de responder preguntas — hablamos de abrir programas, navegar sitios web, buscar información, llenar formularios y completar tareas reales en la pantalla.</p>

<p><strong>¿Qué puede hacer en concreto?</strong></p>
<p>Imagina que le dices: <em>"Entra a los 30 sitios web de estos proveedores, busca el precio de este producto en cada uno, y crea una tabla comparativa ordenada de menor a mayor precio."</em> GPT-5.4 lo hace. Navega cada sitio, extrae el dato, construye la tabla. Mientras tú haces otra cosa.</p>

<p>Antes, para automatizar ese tipo de tarea necesitabas contratar un programador que escribiera un script personalizado. Ahora le das la instrucción en español normal.</p>

<p><strong>¿Qué más trae GPT-5.4?</strong></p>
<ul>
<li><strong>Ventana de contexto de 1 millón de tokens:</strong> Puede leer y recordar documentos enormes en una sola conversación. Un contrato de 500 páginas, una base de código completa, miles de correos — todo en memoria al mismo tiempo.</li>
<li><strong>33% menos errores</strong> comparado con la versión anterior. Las respuestas son más precisas y confiables.</li>
<li><strong>Mejor con hojas de cálculo y presentaciones:</strong> Entiende y trabaja con documentos de Office de forma más fluida.</li>
</ul>

<p><strong>¿Qué tan grande es el salto?</strong></p>
<p>Para ponerlo en perspectiva: la versión anterior (GPT-5.2) obtenía 47% en esa misma prueba de uso del computador. En una sola versión, OpenAI pasó de 47% a 75%. Superó a los humanos. Eso no había pasado antes con esta capacidad.</p>

<p>El <a href="/glosario#benchmark">benchmark</a> que usaron se llama OSWorld y fue diseñado específicamente para medir si una IA puede completar tareas reales en un sistema operativo: abrir apps, buscar archivos, interactuar con páginas web, copiar datos entre programas. Es el tipo de trabajo que hace un asistente administrativo.</p>

<p><strong>¿Está disponible para todos?</strong></p>
<p>Computer Use de GPT-5.4 está disponible principalmente vía <a href="/glosario#api---application-programming-interface">API</a> para desarrolladores. La versión de ChatGPT para usuarios normales está incorporando estas capacidades de forma gradual. Si eres usuario de ChatGPT Plus o Pro, lo irás viendo en los próximos meses.</p>`,
    practicalTakeaway: "Si tienes tareas repetitivas que implican navegar sitios web, copiar datos entre sistemas o completar formularios, este es el momento de explorar automatización con IA. GPT-5.4 puede hacer ese trabajo — no necesitas saber programar para empezar. Describe la tarea en lenguaje normal y la IA la ejecuta.",
    category: "modelos-ia",
    categoryLabel: "Modelos de IA",
    date: "2026-03-05",
    readingTime: 4,
    relatedTools: ["chatgpt"],
    source: "OpenAI / TechCrunch",
    sourceUrl: "https://techcrunch.com/2026/03/05/openai-launches-gpt-5-4-with-pro-and-thinking-versions/",
    titleEn: "GPT-5.4: the AI that now uses your computer better than you",
    summaryEn: "OpenAI launched GPT-5.4 in March 2026 and achieved something that seemed like science fiction: in standardized tests, the AI operates a computer with more accuracy than the average human. It can browse websites, fill out forms, search for information, and complete tasks on your screen — on its own.",
    contentEn: `<p>On March 5, 2026, <a href="/en/glossary#openai">OpenAI</a> launched GPT-5.4 and published a number that stopped the tech world for a few days: on the standard test measuring how well an AI can operate a computer, <strong>GPT-5.4 scored 75%. Expert humans score 72.4%.</strong></p>

<p>For the first time, an AI surpasses the average human at operating a desktop computer. We're not talking about answering questions — we're talking about opening programs, navigating websites, searching for information, filling out forms, and completing real tasks on screen.</p>

<p><strong>What can it actually do?</strong></p>
<p>Imagine telling it: <em>"Go to the 30 websites of these suppliers, find the price for this product on each one, and create a comparison table sorted from lowest to highest price."</em> GPT-5.4 does it. It navigates each site, extracts the data, builds the table. While you do something else.</p>

<p>Before, automating that kind of task required hiring a programmer to write a custom script. Now you give the instruction in plain English.</p>

<p><strong>What else does GPT-5.4 bring?</strong></p>
<ul>
<li><strong>1-million-token context window:</strong> It can read and remember huge documents in a single conversation. A 500-page contract, a complete codebase, thousands of emails — all in memory at the same time.</li>
<li><strong>33% fewer errors</strong> compared to the previous version. Responses are more accurate and reliable.</li>
<li><strong>Better with spreadsheets and presentations:</strong> Understands and works with Office documents more fluidly.</li>
</ul>

<p><strong>How big is the leap?</strong></p>
<p>To put it in perspective: the previous version (GPT-5.2) scored 47% on that same computer-use test. In a single version, OpenAI went from 47% to 75%. It surpassed humans. That had never happened before with this capability.</p>

<p>The <a href="/en/glossary#benchmark">benchmark</a> they used is called OSWorld and was specifically designed to measure whether an AI can complete real tasks on an operating system: opening apps, finding files, interacting with web pages, copying data between programs. It's the kind of work an administrative assistant does.</p>

<p><strong>Is it available for everyone?</strong></p>
<p>GPT-5.4's Computer Use is available primarily via <a href="/en/glossary#api---application-programming-interface">API</a> for developers. The ChatGPT version for regular users is incorporating these capabilities gradually. If you're a ChatGPT Plus or Pro user, you'll see it in the coming months.</p>`,
    practicalTakeawayEn: "If you have repetitive tasks involving navigating websites, copying data between systems, or filling out forms, now is the time to explore AI automation. GPT-5.4 can do that work — you don't need to know how to program to start. Describe the task in plain language and the AI executes it.",
    categoryLabelEn: "AI Models",
  },
  {
    id: "meta-compra-manus-2000-millones",
    slug: "meta-compra-manus-2000-millones-startup-agentes-ia-8-meses",
    title: "Meta pagó $2,000 millones por un startup de agentes AI que tenía solo 8 meses de vida",
    summary: "A finales de diciembre de 2025, Meta cerró la compra de Manus, una empresa de Singapur que construye agentes AI autónomos. El precio: más de $2,000 millones. El startup tenía 8 meses operando y ya facturaba $100 millones al año. Es la señal más clara de que la batalla por los agentes AI ya empezó.",
    content: `<p>El 30 de diciembre de 2025, Meta —la empresa detrás de Facebook, Instagram y WhatsApp— anunció que compró <strong>Manus AI por más de $2,000 millones de dólares</strong>. Para entender lo que eso significa, hay que saber qué hace Manus y por qué Meta pagó tanto.</p>

<p><strong>¿Qué es Manus?</strong></p>
<p>Manus es una empresa de Singapur que construye <a href="/glosario#agente-ai">agentes AI</a> de propósito general. Un agente no es un chatbot que responde preguntas — es un sistema que <em>actúa</em>. Le das un objetivo complejo ("investiga los 10 principales competidores de mi empresa, analiza sus precios y dame un informe") y el agente lo divide en pasos, busca información, analiza datos, redacta el resultado y te lo entrega. Todo sin que tú tengas que guiarlo paso a paso.</p>

<p>Manus puede hacer investigaciones, automatizar procesos repetitivos, operar sistemas informáticos y manejar flujos de trabajo complejos con poca supervisión humana. Básicamente, es un asistente ejecutivo que trabaja 24/7 sin descanso.</p>

<p><strong>Los números que justifican el precio</strong></p>
<p>Manus lanzó su producto al público en abril de 2025. En solo 8 meses alcanzó <strong>$100 millones en ingresos anualizados</strong>. Para una empresa de tecnología, ese ritmo de crecimiento es extraordinario. Pocos startups en la historia llegaron a esa cifra tan rápido.</p>

<p><strong>¿Por qué lo quiere Meta?</strong></p>
<p>Meta tiene 3,000 millones de personas en sus plataformas. WhatsApp, Instagram, Facebook Messenger. La apuesta es integrar agentes Manus directamente en esas apps. En lugar de solo chatear con amigos, podrías decirle a WhatsApp Business: <em>"gestiona mi agenda, responde consultas de clientes y haz seguimiento a mis pedidos"</em> — y el agente lo haría.</p>

<p>La empresa ya anunció que habrá funciones "powered by Manus" en WhatsApp Business e Instagram Direct en 2026, empezando por servicio al cliente automatizado y programación de citas.</p>

<p><strong>El detalle político que complica todo</strong></p>
<p>Manus fue fundada por ingenieros chinos, y tiene conexiones con el ecosistema tecnológico de China. Como condición de la adquisición, Meta exigió que no quedara ninguna participación china en la empresa. Eso desencadenó una investigación del gobierno chino por posible violación de las leyes de exportación de tecnología. El asunto aún está en curso.</p>

<p><strong>¿Qué dice esto sobre el futuro?</strong></p>
<p>Que Meta pagó $2,000 millones por un startup de 8 meses dice una cosa muy clara: la carrera por los <a href="/glosario#agente-ai">agentes AI</a> ya empezó y las grandes empresas no quieren quedarse atrás. Antes se compraban redes sociales. Ahora se compran equipos que saben construir sistemas que actúan de forma autónoma. El dinero sigue a donde va el próximo gran cambio tecnológico.</p>`,
    practicalTakeaway: "La compra de Manus por Meta significa que los agentes AI van a llegar a WhatsApp e Instagram en 2026. Si tienes un negocio en esas plataformas, empieza a pensar cómo podrías automatizar atención al cliente o seguimiento de ventas con IA — porque pronto esa infraestructura estará disponible para cualquiera, no solo para empresas grandes.",
    category: "agentes-ia",
    categoryLabel: "Agentes de IA",
    date: "2025-12-30",
    readingTime: 5,
    relatedTools: [],
    source: "CNBC / TechRadar",
    sourceUrl: "https://www.techradar.com/pro/meta-buys-manus-for-usd2-billion-to-power-high-stakes-ai-agent-race",
    titleEn: "Meta paid $2 billion for an AI agent startup that was only 8 months old",
    summaryEn: "At the end of December 2025, Meta closed the acquisition of Manus, a Singapore company that builds autonomous AI agents. The price: more than $2 billion. The startup had been operating for 8 months and was already generating $100 million per year. It's the clearest signal yet that the battle for AI agents has begun.",
    contentEn: `<p>On December 30, 2025, Meta — the company behind Facebook, Instagram, and WhatsApp — announced it acquired <strong>Manus AI for more than $2 billion</strong>. To understand what that means, you need to know what Manus does and why Meta paid so much.</p>

<p><strong>What is Manus?</strong></p>
<p>Manus is a Singapore company that builds general-purpose <a href="/en/glossary#agente-ai">AI agents</a>. An agent is not a chatbot that answers questions — it's a system that <em>acts</em>. You give it a complex goal ("research the 10 main competitors of my company, analyze their prices, and give me a report") and the agent breaks it into steps, searches for information, analyzes data, drafts the result, and delivers it to you. All without you having to guide it step by step.</p>

<p>Manus can conduct research, automate repetitive processes, operate computer systems, and handle complex workflows with little human oversight. Essentially, it's an executive assistant that works 24/7 without rest.</p>

<p><strong>The numbers that justify the price</strong></p>
<p>Manus launched its product publicly in April 2025. In just 8 months it reached <strong>$100 million in annualized revenue</strong>. For a tech company, that growth rate is extraordinary. Few startups in history reached that figure so quickly.</p>

<p><strong>Why does Meta want it?</strong></p>
<p>Meta has 3 billion people on its platforms. WhatsApp, Instagram, Facebook Messenger. The bet is to integrate Manus agents directly into those apps. Instead of just chatting with friends, you could tell WhatsApp Business: <em>"manage my calendar, answer customer inquiries, and follow up on my orders"</em> — and the agent would do it.</p>

<p>The company already announced that "powered by Manus" features will appear in WhatsApp Business and Instagram Direct in 2026, starting with automated customer service and appointment scheduling.</p>

<p><strong>The political detail that complicates everything</strong></p>
<p>Manus was founded by Chinese engineers and has connections to China's tech ecosystem. As a condition of the acquisition, Meta required that no Chinese ownership remain in the company. That triggered a Chinese government investigation for possible violation of technology export laws. The matter is still ongoing.</p>

<p><strong>What does this say about the future?</strong></p>
<p>That Meta paid $2 billion for an 8-month-old startup says one very clear thing: the race for <a href="/en/glossary#agente-ai">AI agents</a> has already begun and big companies don't want to fall behind. Before, social networks were acquired. Now, teams that know how to build autonomous systems are being acquired. Money follows where the next major technological shift is going.</p>`,
    practicalTakeawayEn: "Meta's acquisition of Manus means AI agents are coming to WhatsApp and Instagram in 2026. If you have a business on those platforms, start thinking about how you could automate customer service or sales follow-up with AI — because soon that infrastructure will be available to anyone, not just big companies.",
    categoryLabelEn: "AI Agents",
  },
  {
    id: "anthropic-elimina-recargo-contexto-largo",
    slug: "anthropic-elimina-recargo-contexto-largo-1-millon-tokens-precio-estandar",
    title: "Anthropic elimina el recargo por contexto largo: 1 millón de tokens al precio normal",
    summary: "Hasta ahora, usar ventanas de contexto de más de 200,000 tokens en Claude podía duplicar el costo. Anthropic acaba de eliminar ese recargo para Opus 4.6 y Sonnet 4.6. Un cambio que abarata radicalmente el procesamiento de documentos largos, bases de código enormes y RAG avanzado.",
    content: `<p>Anthropic acaba de hacer un movimiento importante en la guerra de precios de la IA: <strong>eliminó el recargo que cobraba por usar ventanas de contexto largas</strong>. A partir del 13 de marzo de 2026, los desarrolladores que usen Claude Opus 4.6 y Sonnet 4.6 pagan exactamente lo mismo por token, sin importar si su prompt tiene 9,000 o 900,000 tokens.</p>

<p><strong>¿Qué era el recargo por contexto largo?</strong></p>
<p>Hasta esta semana, si enviabas un prompt que superara los 200,000 tokens, Anthropic aplicaba un cargo adicional que podía <strong>doblar el costo por token</strong>. Era básicamente un impuesto por usar la ventana de contexto completa del modelo. Muchos equipos de desarrollo lo evitaban o lo absorbían como un costo operativo inevitable.</p>

<p><strong>¿Qué cambia exactamente?</strong></p>
<ul>
<li><strong>Opus 4.6:</strong> $5 por millón de tokens de entrada / $25 por millón de tokens de salida — sin importar el tamaño del prompt</li>
<li><strong>Sonnet 4.6:</strong> $3 por millón de tokens de entrada / $15 por millón de tokens de salida — precio plano</li>
<li><strong>Límite de medios:</strong> El límite de imágenes y páginas PDF por solicitud subió 6x, de 100 a 600</li>
</ul>

<p>Traducción práctica: una solicitud de 900,000 tokens se cobra igual que una de 9,000 tokens (en tasa por token). Antes, esa diferencia podía significar el doble del costo.</p>

<p><strong>¿Por qué importa esto?</strong></p>
<p>Hay tres casos de uso donde esto cambia las reglas del juego:</p>

<p><strong>1. RAG avanzado y bases de conocimiento.</strong> Los sistemas de Retrieval-Augmented Generation que inyectan muchos documentos en el contexto dejan de tener un penalizador de precio. Puedes pasar más contexto sin preocuparte por el costo extra.</p>

<p><strong>2. Análisis de código completo.</strong> Repositorios grandes que antes requerían estrategias complejas de chunking para evitar el recargo ahora pueden pasarse completos al modelo sin penalización económica.</p>

<p><strong>3. Procesamiento de documentos legales, financieros o técnicos.</strong> Contratos largos, reportes de auditoría, manuales técnicos — todo entra en una sola llamada al mismo precio de siempre.</p>

<p><strong>El contexto competitivo</strong></p>
<p>Este movimiento llega después de que Google eliminara restricciones similares en Gemini. Anthropic está respondiendo directamente a la presión competitiva. La ventana de contexto de 1 millón de tokens ya existía técnicamente, pero el recargo la hacía cara para uso intensivo. Ahora es accesible a precio estándar.</p>

<p>Para equipos que construyen productos con Claude, esto puede significar una reducción significativa en la factura mensual de API, especialmente en aplicaciones donde el tamaño promedio de prompt es alto.</p>`,
    practicalTakeaway: "Si estás usando Claude con prompts largos (análisis de documentos, bases de código, RAG con mucho contexto), revisa tu estrategia de costos. El recargo que quizás estabas pagando o evitando ya no existe. Puedes simplificar tu arquitectura y pasar más contexto directamente sin el truco de dividir prompts para ahorrar dinero.",
    category: "herramientas",
    categoryLabel: "Herramientas",
    date: "2026-03-13",
    readingTime: 4,
    relatedTools: ["claude"],
    source: "The Decoder",
    sourceUrl: "https://the-decoder.com/anthropic-drops-the-surcharge-for-million-token-context-windows-making-opus-4-6-and-sonnet-4-6-far-cheaper/",
    titleEn: "Anthropic eliminates long-context surcharge: 1 million tokens at standard pricing",
    summaryEn: "Using context windows larger than 200,000 tokens in Claude used to nearly double costs. Anthropic just eliminated that surcharge for Opus 4.6 and Sonnet 4.6 — a change that dramatically reduces the cost of processing long documents, large codebases, and advanced RAG.",
    contentEn: `<p>Anthropic just made a significant move in the AI pricing war: <strong>it eliminated the surcharge it charged for using long context windows</strong>. Starting March 13, 2026, developers using Claude Opus 4.6 and Sonnet 4.6 pay exactly the same per token, regardless of whether their prompt has 9,000 or 900,000 tokens.</p>

<p><strong>What was the long-context surcharge?</strong></p>
<p>Until this week, if you sent a prompt exceeding 200,000 tokens, Anthropic applied an additional charge that could <strong>double the cost per token</strong>. It was essentially a tax for using the model's full context window. Many development teams avoided it or absorbed it as an inevitable operational cost.</p>

<p><strong>What exactly changes?</strong></p>
<ul>
<li><strong>Opus 4.6:</strong> $5 per million input tokens / $25 per million output tokens — regardless of prompt size</li>
<li><strong>Sonnet 4.6:</strong> $3 per million input tokens / $15 per million output tokens — flat rate</li>
<li><strong>Media limit:</strong> The image and PDF page limit per request increased 6x, from 100 to 600</li>
</ul>

<p>Practical translation: a 900,000-token request is billed at the same per-token rate as a 9,000-token one. Previously, that difference could mean double the cost.</p>

<p><strong>Why does this matter?</strong></p>
<p>There are three use cases where this changes the rules:</p>

<p><strong>1. Advanced RAG and knowledge bases.</strong> Retrieval-Augmented Generation systems that inject many documents into context no longer have a price penalizer. You can pass more context without worrying about extra costs.</p>

<p><strong>2. Full codebase analysis.</strong> Large repositories that previously required complex chunking strategies to avoid the surcharge can now be passed to the model entirely without economic penalty.</p>

<p><strong>3. Processing legal, financial, or technical documents.</strong> Long contracts, audit reports, technical manuals — everything fits in a single API call at the usual price.</p>

<p><strong>The competitive context</strong></p>
<p>This move comes after Google removed similar restrictions on Gemini. Anthropic is responding directly to competitive pressure. The 1-million-token context window already existed technically, but the surcharge made it expensive for intensive use. Now it's accessible at standard pricing.</p>

<p>For teams building products with Claude, this could mean a significant reduction in the monthly API bill, especially in applications where the average prompt size is high.</p>`,
    practicalTakeawayEn: "If you're using Claude with long prompts (document analysis, codebases, RAG with lots of context), review your cost strategy. The surcharge you may have been paying or avoiding no longer exists. You can simplify your architecture and pass more context directly without the trick of splitting prompts to save money.",
    categoryLabelEn: "Tools",
  },
  {
    id: "anthropic-limites-semanales-claude-code",
    slug: "anthropic-impone-limites-semanales-claude-code-usuarios-intensivos",
    title: "Anthropic impone límites semanales a Claude Code: qué cambia para los usuarios Pro y Max",
    summary: "Anthropic anunció nuevos límites de uso semanal para Claude Code que afectan a los planes Pro ($20/mes), Max $100 y Max $200. Menos del 5% de los usuarios los sentirán, pero quienes usan Claude Code intensivamente ahora tienen un techo de horas de uso que se reinicia cada 7 días.",
    content: `<p>Si usas Claude Code de forma intensiva, hay un cambio importante que debes conocer: <strong>Anthropic introdujo límites semanales de uso</strong> que entraron en vigor a finales de julio de 2025. No son los típicos límites por minuto o por hora que tienen casi todas las APIs — son límites que se reinician cada 7 días y aplican a los planes de suscripción.</p>

<p><strong>¿Por qué lo hizo Anthropic?</strong></p>
<p>La empresa fue directa: el objetivo es prevenir picos de costo y distribuir mejor la carga de infraestructura. Algunos usuarios de Claude Code estaban usando el servicio durante decenas de horas seguidas, lo que generaba un impacto desproporcionado en los servidores y en la economía del plan de suscripción.</p>

<p><strong>¿Cuánto puedo usar cada semana?</strong></p>
<p>Los límites varían según el plan:</p>

<p><strong>Plan Pro ($20/mes):</strong></p>
<ul>
<li>Entre 40 y 80 horas semanales de Claude Sonnet 4 a través de Claude Code</li>
</ul>

<p><strong>Plan Max $100/mes:</strong></p>
<ul>
<li>Entre 140 y 280 horas semanales de Claude Sonnet 4</li>
<li>Entre 15 y 35 horas semanales de Claude Opus 4</li>
</ul>

<p><strong>Plan Max $200/mes:</strong></p>
<ul>
<li>Entre 240 y 480 horas semanales de Claude Sonnet 4</li>
<li>Entre 24 y 40 horas semanales de Claude Opus 4</li>
</ul>

<p>Son rangos, no números exactos, porque el uso real depende de la complejidad de las tareas. Una tarea de análisis de código pesado consume más que generar texto simple.</p>

<p><strong>¿Qué pasa si llego al límite?</strong></p>
<p>Los suscriptores Max pueden comprar uso adicional una vez alcanzado el límite, a las tarifas estándar de la API. Los usuarios Pro tendrán que esperar que se reinicie su ciclo semanal o actualizar su plan.</p>

<p><strong>¿A cuántos usuarios afecta?</strong></p>
<p>Anthropic estima que <strong>menos del 5% de los suscriptores</strong> alcanzarán estos límites con su patrón de uso actual. Si usas Claude Code para proyectos ocasionales o desarrollo cotidiano, es muy probable que no lo notes. El límite está diseñado para los casos extremos de uso continuo de muchas horas al día.</p>

<p><strong>La señal de fondo</strong></p>
<p>Este cambio revela algo importante: Claude Code se está convirtiendo en una herramienta de trabajo a tiempo completo para un segmento de usuarios, no solo en un asistente ocasional. Que Anthropic necesite poner límites semanales (no diarios ni por minuto) habla de sesiones de trabajo de muchas horas que antes simplemente no eran posibles con herramientas de IA.</p>`,
    practicalTakeaway: "Si eres desarrollador que usa Claude Code varias horas al día, verifica en cuál plan estás. Con el plan Pro ($20), tienes entre 40 y 80 horas semanales — suficiente para uso normal. Si llegas al límite regularmente, el plan Max $100 te da 3-4 veces más capacidad. Y si usas Claude Code como tu herramienta principal de trabajo todo el día, considera que los límites se reinician semanalmente.",
    category: "herramientas",
    categoryLabel: "Herramientas",
    date: "2025-07-28",
    readingTime: 4,
    relatedTools: ["claude"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/",
    titleEn: "Anthropic imposes weekly limits on Claude Code: what changes for Pro and Max users",
    summaryEn: "Anthropic announced new weekly usage limits for Claude Code affecting Pro ($20/month), Max $100, and Max $200 plans. Less than 5% of users will feel them, but those who use Claude Code intensively now have a ceiling of weekly usage hours that resets every 7 days.",
    contentEn: `<p>If you use Claude Code intensively, there's an important change you need to know about: <strong>Anthropic introduced weekly usage limits</strong> that went into effect in late July 2025. These aren't the typical per-minute or per-hour limits that almost all APIs have — they're limits that reset every 7 days and apply to subscription plans.</p>

<p><strong>Why did Anthropic do this?</strong></p>
<p>The company was direct: the goal is to prevent cost spikes and better distribute infrastructure load. Some Claude Code users were using the service for tens of hours straight, creating a disproportionate impact on servers and the economics of the subscription plan.</p>

<p><strong>How much can I use each week?</strong></p>
<p>Limits vary by plan:</p>

<p><strong>Pro Plan ($20/month):</strong></p>
<ul>
<li>Between 40 and 80 weekly hours of Claude Sonnet 4 through Claude Code</li>
</ul>

<p><strong>Max Plan $100/month:</strong></p>
<ul>
<li>Between 140 and 280 weekly hours of Claude Sonnet 4</li>
<li>Between 15 and 35 weekly hours of Claude Opus 4</li>
</ul>

<p><strong>Max Plan $200/month:</strong></p>
<ul>
<li>Between 240 and 480 weekly hours of Claude Sonnet 4</li>
<li>Between 24 and 40 weekly hours of Claude Opus 4</li>
</ul>

<p>These are ranges, not exact numbers, because actual usage depends on task complexity. A heavy code analysis task consumes more than generating simple text.</p>

<p><strong>What happens if I hit the limit?</strong></p>
<p>Max subscribers can purchase additional usage once the limit is reached, at standard API rates. Pro users will need to wait for their weekly cycle to reset or upgrade their plan.</p>

<p><strong>How many users does this affect?</strong></p>
<p>Anthropic estimates that <strong>less than 5% of subscribers</strong> will hit these limits with their current usage patterns. If you use Claude Code for occasional projects or everyday development, you most likely won't notice it. The limit is designed for extreme cases of continuous use for many hours a day.</p>

<p><strong>The underlying signal</strong></p>
<p>This change reveals something important: Claude Code is becoming a full-time work tool for a segment of users, not just an occasional assistant. The fact that Anthropic needs to set weekly limits (not daily or per-minute) speaks to work sessions of many hours that simply weren't previously possible with AI tools.</p>`,
    practicalTakeawayEn: "If you're a developer using Claude Code for several hours a day, check which plan you're on. With the Pro plan ($20), you have between 40 and 80 weekly hours — enough for normal use. If you regularly hit the limit, the Max $100 plan gives you 3-4x more capacity. And if you use Claude Code as your main all-day work tool, keep in mind that limits reset weekly.",
    categoryLabelEn: "Tools",
  },
  {
    id: "medvi-ai-billion-dollar-company",
    slug: "medvi-como-la-ia-ayudo-a-un-hombre-a-construir-una-empresa-de-1800-millones",
    title: "Medvi: cómo la IA ayudó a un hombre a construir una empresa de $1,800 millones desde su sala",
    summary: "Matthew Gallagher invirtió $20,000 y usó ChatGPT, Claude, Midjourney y ElevenLabs para crear Medvi, una empresa de telehealth que vende medicamentos GLP-1 online. Sin oficinas, sin equipo grande — solo él y su hermano. Primer año: $401 millones. Proyección 2026: $1.8 billones. Es la primera prueba real de que la IA puede crear una empresa unicornio prácticamente sin equipo.",
    content: `<p>En 2024, Sam Altman hizo una predicción que sonaba ridícula: la IA iba a hacer posible que <strong>una sola persona creara una empresa de mil millones de dólares</strong>. La gente se rió. Dos años después, un tipo de 41 años en Los Angeles lo demostró — y lo más loco es que no creó ningún producto de IA. Vende pastillas para bajar de peso desde su casa.</p>

<p><strong>¿Qué es Medvi?</strong></p>
<p>Medvi es una plataforma de telehealth que vende medicamentos GLP-1 online — los mismos compuestos que están detrás de Ozempic y Wegovy, los fármacos para pérdida de peso que están arrasando en el mercado. Matthew Gallagher la construyó con <strong>$20,000 dólares de inversión inicial y dos meses de trabajo</strong>. Sin oficina, sin call center, sin departamento de nada.</p>

<p><strong>Los números que no tienen sentido</strong></p>
<ul>
<li><strong>Inversión inicial:</strong> $20,000 USD</li>
<li><strong>Equipo full-time:</strong> 2 personas (Gallagher y su hermano)</li>
<li><strong>Clientes:</strong> 250,000</li>
<li><strong>Ingresos 2025 (primer año):</strong> $401 millones</li>
<li><strong>Proyección 2026:</strong> $1.8 billones en ventas anuales</li>
<li><strong>Margen neto:</strong> 16.2%</li>
</ul>
<p>Dos personas. $1.8 billones. Eso es como si un puesto de tacos facturara más que toda una cadena de restaurantes con miles de empleados. El New York Times verificó los financieros directamente.</p>

<p><strong>¿Cómo funciona sin equipo?</strong></p>
<p>El truco de Medvi es que no hace casi nada internamente. Todo está tercerizado:</p>
<ul>
<li><strong>Médicos y prescripciones:</strong> subcontratados a través de CareValidate y OpenLoop</li>
<li><strong>Envíos:</strong> 100% tercerizado</li>
<li><strong>Atención al cliente:</strong> agentes de IA custom + voces generadas con ElevenLabs</li>
<li><strong>Marketing:</strong> imágenes con Midjourney, videos con Runway — cero equipo de producción</li>
<li><strong>Código, copy y estrategia:</strong> ChatGPT, Claude y Grok</li>
</ul>
<p>Gallagher no es programador. Es un emprendedor que descubrió que la IA le permite hacer el trabajo de docenas de empleados. Tiene algunos contratistas part-time para ingeniería y gestión de cuentas, pero el núcleo operativo son literalmente dos personas.</p>

<p><strong>Las herramientas de IA detrás de Medvi</strong></p>
<ul>
<li><strong>ChatGPT + Claude + Grok:</strong> escriben el código, generan el copy de marketing, definen la estrategia de negocio</li>
<li><strong>Midjourney:</strong> crea todas las imágenes y creativos para publicidad</li>
<li><strong>Runway:</strong> produce los videos de ads sin necesidad de cámaras ni editores</li>
<li><strong>ElevenLabs:</strong> genera las voces de IA para atención al cliente</li>
<li><strong>Agentes AI custom:</strong> automatizan el servicio al cliente de principio a fin</li>
</ul>

<p><strong>Por qué este caso importa más que cualquier demo de IA</strong></p>
<p>Medvi no es una startup de inteligencia artificial. No inventó un modelo, no compite con OpenAI ni con Anthropic. Es una empresa de salud que vende medicamentos desde una sala de estar. La IA no es el producto — es la infraestructura operativa que permite que dos personas hagan el trabajo de cientos.</p>

<p>Y eso es exactamente lo que lo hace tan relevante. No necesitas construir IA para transformar tu negocio con ella. La revolución no es solo para los que crean los modelos — es para los que los usan para operar negocios enteros con una fracción del equipo que antes se necesitaba.</p>

<p><strong>La conexión con Sam Altman</strong></p>
<p>Altman predijo en 2024 que veríamos la primera "empresa unicornio de una persona" gracias a la IA. Medvi es la primera prueba real de esa predicción. Si un emprendedor sin background técnico puede generar $1.8 billones con $20K de inversión y un stack de herramientas de IA, la pregunta incómoda es obvia: ¿qué pasa con las empresas tradicionales que tienen cientos de empleados haciendo lo que la IA ya puede automatizar?</p>`,
    practicalTakeaway: "La estrategia de Medvi es más replicable de lo que parece: encuentra un mercado con demanda masiva (en este caso, GLP-1), terceriza toda la operación (médicos, envíos, soporte), y usa IA para reemplazar las contrataciones que antes eran obligatorias — ChatGPT/Claude para código y estrategia, Midjourney/Runway para marketing, ElevenLabs para atención al cliente. No se trata de 'crear IA', sino de usarla para operar con el mínimo equipo posible.",
    category: "casos-de-uso",
    categoryLabel: "Casos de Uso",
    date: "2026-04-02",
    readingTime: 4,
    relatedTools: [],
    source: "The New York Times",
    sourceUrl: "https://www.nytimes.com/2026/04/02/technology/ai-billion-dollar-company-medvi.html",
    titleEn: "Medvi: How AI Helped One Man Build a $1.8 Billion Company From His Living Room",
    summaryEn: "Matthew Gallagher invested $20,000 and used ChatGPT, Claude, Midjourney, and ElevenLabs to create Medvi, a telehealth company selling GLP-1 weight loss medications online. No offices, no big team — just him and his brother. First year: $401 million. 2026 projection: $1.8 billion. It's the first real proof that AI can create a unicorn company with virtually no team.",
    contentEn: `<p>In 2024, Sam Altman made a prediction that sounded absurd: AI would make it possible for <strong>a single person to build a billion-dollar company</strong>. People laughed. Two years later, a 41-year-old man in Los Angeles proved him right — and the wildest part is he didn't create any AI product. He sells weight loss pills from his house.</p>

<p><strong>What is Medvi?</strong></p>
<p>Medvi is a telehealth platform that sells GLP-1 medications online — the same compounds behind Ozempic and Wegovy, the weight loss drugs that are taking the market by storm. Matthew Gallagher built it with <strong>$20,000 in initial investment and two months of work</strong>. No office, no call center, no department of anything.</p>

<p><strong>The numbers that don't make sense</strong></p>
<ul>
<li><strong>Initial investment:</strong> $20,000 USD</li>
<li><strong>Full-time team:</strong> 2 people (Gallagher and his brother)</li>
<li><strong>Customers:</strong> 250,000</li>
<li><strong>2025 revenue (first year):</strong> $401 million</li>
<li><strong>2026 projection:</strong> $1.8 billion in annual sales</li>
<li><strong>Net margin:</strong> 16.2%</li>
</ul>
<p>Two people. $1.8 billion. That's like a taco stand billing more than an entire restaurant chain with thousands of employees. The New York Times verified the financials directly.</p>

<p><strong>How does it work without a team?</strong></p>
<p>Medvi's trick is that it does almost nothing internally. Everything is outsourced:</p>
<ul>
<li><strong>Doctors and prescriptions:</strong> subcontracted through CareValidate and OpenLoop</li>
<li><strong>Shipping:</strong> 100% outsourced</li>
<li><strong>Customer support:</strong> custom AI agents + voices generated with ElevenLabs</li>
<li><strong>Marketing:</strong> images with Midjourney, videos with Runway — zero production team</li>
<li><strong>Code, copy, and strategy:</strong> ChatGPT, Claude, and Grok</li>
</ul>
<p>Gallagher isn't a programmer. He's an entrepreneur who figured out that AI lets him do the work of dozens of employees. He has some part-time contractors for engineering and account management, but the operational core is literally two people.</p>

<p><strong>The AI tools behind Medvi</strong></p>
<ul>
<li><strong>ChatGPT + Claude + Grok:</strong> write the code, generate marketing copy, define business strategy</li>
<li><strong>Midjourney:</strong> creates all images and ad creatives</li>
<li><strong>Runway:</strong> produces ad videos with no cameras or editors needed</li>
<li><strong>ElevenLabs:</strong> generates AI voices for customer support</li>
<li><strong>Custom AI agents:</strong> automate customer service end-to-end</li>
</ul>

<p><strong>Why this case matters more than any AI demo</strong></p>
<p>Medvi is not an AI startup. It didn't invent a model, doesn't compete with OpenAI or Anthropic. It's a healthcare company selling medication from a living room. AI isn't the product — it's the operational infrastructure that lets two people do the work of hundreds.</p>

<p>And that's exactly what makes it so relevant. You don't need to build AI to transform your business with it. The revolution isn't just for those who create the models — it's for those who use them to run entire businesses with a fraction of the team that used to be required.</p>

<p><strong>The Sam Altman connection</strong></p>
<p>Altman predicted in 2024 that we'd see the first "one-person unicorn company" thanks to AI. Medvi is the first real proof of that prediction. If an entrepreneur with no technical background can generate $1.8 billion with a $20K investment and a stack of AI tools, the uncomfortable question is obvious: what happens to traditional companies with hundreds of employees doing what AI can already automate?</p>`,
    practicalTakeawayEn: "Medvi's strategy is more replicable than it seems: find a market with massive demand (in this case, GLP-1), outsource the entire operation (doctors, shipping, support), and use AI to replace the hires that used to be mandatory — ChatGPT/Claude for code and strategy, Midjourney/Runway for marketing, ElevenLabs for customer support. It's not about 'building AI', but about using it to operate with the smallest team possible.",
    categoryLabelEn: "Use Cases",
  },
  {
    id: "gemma-4-launch",
    slug: "google-lanza-gemma-4-el-modelo-open-source-mas-capaz-que-supera-rivales-20-veces-mas-grandes",
    title: "Google lanzó Gemma 4: el modelo open source que le pega a rivales 20 veces más grandes",
    summary: "Google DeepMind presentó Gemma 4, su nueva familia de modelos de IA de código abierto. El modelo de 31B parámetros es el #3 del mundo entre modelos abiertos, superando a competidores que son 20 veces más grandes. Lo mejor: es gratis para uso comercial con licencia Apache 2.0.",
    content: `<p>Google DeepMind acaba de soltar lo que muchos consideran un antes y un después en el mundo de los modelos open source: <strong>Gemma 4</strong>, construida sobre la misma tecnología que Gemini 3 (la IA más poderosa de Google), pero disponible para que cualquiera la descargue, modifique y use — incluso para hacer dinero.</p>

<p><strong>¿Qué tamaños vienen?</strong></p>
<p>Gemma 4 llega en 4 versiones pensadas para distintos usos:</p>
<ul>
<li><strong>E2B (Effective 2B):</strong> El más chiquito. Corre en tu celular Android o laptop sin GPU dedicada. Ideal para apps que necesitan IA local sin depender de internet.</li>
<li><strong>E4B (Effective 4B):</strong> Un poco más potente, también pensado para dispositivos. Perfecto para asistentes on-device que necesitan más capacidad de razonamiento.</li>
<li><strong>26B MoE (Mixture of Experts):</strong> Un modelo inteligente que no usa todos sus parámetros a la vez — solo activa los "expertos" que necesita para cada tarea. Es el #6 del mundo en modelos abiertos.</li>
<li><strong>31B Dense:</strong> La bestia del grupo. <strong>#3 global en el Arena AI leaderboard</strong> entre modelos open source, superando a modelos que tienen 20 veces más parámetros. Es como un auto compacto que le gana a un camión en una carrera.</li>
</ul>

<p><strong>¿Qué puede hacer?</strong></p>
<p>Gemma 4 no es solo para chatear. Estas son sus capacidades principales:</p>
<ul>
<li><strong>Razonamiento avanzado:</strong> Puede resolver problemas complejos paso a paso, como un tutor que te explica matemáticas desmenuzando cada parte.</li>
<li><strong>Agentes autónomos:</strong> Soporta function-calling y JSON output, lo que significa que puede ejecutar acciones reales — buscar información, llamar APIs, completar formularios — no solo generar texto.</li>
<li><strong>Código:</strong> Genera y entiende código en múltiples lenguajes, ideal para automatizar tareas de desarrollo.</li>
<li><strong>Visión y audio:</strong> Entiende imágenes, videos, gráficos, OCR (leer texto en fotos) y hasta audio. Podés mostrarle una foto de un recibo y que te lo organice en una tabla.</li>
</ul>

<p><strong>¿Por qué importa que sea open source?</strong></p>
<p>Con licencia <strong>Apache 2.0</strong>, Gemma 4 es completamente libre. Esto significa que una startup en Buenos Aires, un investigador en Nigeria o un desarrollador freelance en Vietnam pueden usar el mismo modelo que usa Google internamente — sin pagar licencias, sin pedir permiso, sin límites de uso. Es como si Toyota liberara los planos de su mejor motor para que cualquier taller del mundo lo pueda fabricar.</p>

<p><strong>Casos de uso reales que ya están pasando:</strong></p>
<ul>
<li><strong>Yale University</strong> usó Gemma para su proyecto Cell2Sentence-Scale, descubriendo nuevas vías para terapia contra el cáncer. Literalmente, IA open source ayudando a encontrar tratamientos médicos.</li>
<li><strong>INSAIT</strong> creó BgGPT, el primer modelo de lenguaje búlgaro, usando Gemma como base. Esto demuestra cómo un modelo abierto puede democratizar la IA para idiomas que las big tech ignoran.</li>
</ul>

<p><strong>Los números de la comunidad Gemma:</strong></p>
<p>Desde el primer lanzamiento de Gemma, la familia acumula <strong>más de 400 millones de descargas</strong> y más de <strong>100,000 variantes</strong> creadas por la comunidad (lo que Google llama el "Gemmaverse"). Es el ecosistema open source de IA más activo del mundo.</p>

<p>Gemma 4 ya está disponible en <strong>Google AI Studio</strong> y <strong>Hugging Face</strong> para que la pruebes hoy mismo.</p>`,
    practicalTakeaway: "Si estás desarrollando una app que necesita IA y no quieres depender de APIs de pago, Gemma 4 es tu mejor opción hoy. El modelo 26B MoE te da rendimiento top-tier con menos recursos, y los modelos E2B/E4B son perfectos si necesitas IA corriendo directo en el dispositivo del usuario. Descargalo desde Hugging Face o probalo gratis en Google AI Studio.",
    category: "modelos-ia",
    categoryLabel: "Modelos de IA",
    date: "2026-04-02",
    readingTime: 4,
    relatedTools: ["gemini"],
    source: "Google DeepMind Blog",
    sourceUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/",
    titleEn: "Google launched Gemma 4: the open source model that beats rivals 20 times its size",
    summaryEn: "Google DeepMind released Gemma 4, its most capable open source AI model family to date. The 31B model ranks #3 globally among open models, outperforming competitors 20 times larger. Best part: it's completely free for commercial use under Apache 2.0 license.",
    contentEn: `<p>Google DeepMind just dropped what many consider a watershed moment for open source models: <strong>Gemma 4</strong>, built on the same technology as Gemini 3 (Google's most powerful AI), but available for anyone to download, modify, and use — even commercially.</p>

<p><strong>What sizes are available?</strong></p>
<p>Gemma 4 comes in 4 versions designed for different use cases:</p>
<ul>
<li><strong>E2B (Effective 2B):</strong> The smallest. Runs on your Android phone or laptop without a dedicated GPU. Ideal for apps that need local AI without relying on internet.</li>
<li><strong>E4B (Effective 4B):</strong> Slightly more powerful, also designed for devices. Perfect for on-device assistants that need more reasoning capability.</li>
<li><strong>26B MoE (Mixture of Experts):</strong> A smart model that doesn't use all its parameters at once — it only activates the "experts" needed for each task. Ranks #6 globally among open models.</li>
<li><strong>31B Dense:</strong> The powerhouse. <strong>#3 globally on the Arena AI leaderboard</strong> among open source models, outperforming models with 20 times more parameters. It's like a compact car beating a truck in a race.</li>
</ul>

<p><strong>What can it do?</strong></p>
<p>Gemma 4 isn't just for chatting. Here are its main capabilities:</p>
<ul>
<li><strong>Advanced reasoning:</strong> Can solve complex problems step by step, like a tutor explaining math by breaking down each part.</li>
<li><strong>Autonomous agents:</strong> Supports function-calling and JSON output, meaning it can execute real actions — search for information, call APIs, fill out forms — not just generate text.</li>
<li><strong>Code:</strong> Generates and understands code in multiple languages, ideal for automating development tasks.</li>
<li><strong>Vision and audio:</strong> Understands images, video, charts, OCR (reading text in photos), and even audio. You can show it a photo of a receipt and have it organize it into a table.</li>
</ul>

<p><strong>Why does open source matter?</strong></p>
<p>Under the <strong>Apache 2.0 license</strong>, Gemma 4 is completely free. This means a startup in Buenos Aires, a researcher in Nigeria, or a freelance developer in Vietnam can use the same model Google uses internally — without paying licenses, without asking permission, without usage limits. It's as if Toyota released the blueprints for their best engine so any workshop in the world could build it.</p>

<p><strong>Real use cases already happening:</strong></p>
<ul>
<li><strong>Yale University</strong> used Gemma for their Cell2Sentence-Scale project, discovering new pathways for cancer therapy. Literally, open source AI helping find medical treatments.</li>
<li><strong>INSAIT</strong> created BgGPT, the first Bulgarian language model, using Gemma as a base. This shows how an open model can democratize AI for languages that big tech ignores.</li>
</ul>

<p><strong>Gemma community numbers:</strong></p>
<p>Since the first Gemma launch, the family has accumulated <strong>over 400 million downloads</strong> and more than <strong>100,000 community-created variants</strong> (what Google calls the "Gemmaverse"). It's the most active open source AI ecosystem in the world.</p>

<p>Gemma 4 is now available on <strong>Google AI Studio</strong> and <strong>Hugging Face</strong> for you to try today.</p>`,
    practicalTakeawayEn: "If you're building an app that needs AI and don't want to rely on paid APIs, Gemma 4 is your best option today. The 26B MoE model gives you top-tier performance with fewer resources, and the E2B/E4B models are perfect if you need AI running directly on the user's device. Download it from Hugging Face or try it free on Google AI Studio.",
    categoryLabelEn: "AI Models",
  },
  {
    id: "claude-code-source-leak",
    slug: "el-codigo-de-claude-code-se-filtro-accidentalmente-esto-es-lo-que-revela",
    title: "Se filtró el código fuente de Claude Code por accidente: esto es lo que revela",
    summary: "Anthropic publicó por error un archivo de 59.8 MB con todo el código fuente de Claude Code dentro del paquete de npm. Un pasante lo descubrió, se viralizó en horas, y ahora sabemos cómo funciona por dentro una de las herramientas de IA más populares del mundo.",
    content: `<p>Imaginate que una empresa de autos publicara por accidente los planos completos de su modelo más vendido. Eso es básicamente lo que le pasó a Anthropic con <strong>Claude Code</strong>, su herramienta de programación con IA que genera miles de millones de dólares al año.</p>

<p>El 31 de marzo de 2026, alguien en Anthropic subió una actualización del paquete de Claude Code a npm (el "app store" de los programadores) y se le fue incluir un archivo llamado <strong>source map</strong> de 59.8 MB. Ese archivo es como un mapa del tesoro: contiene todo el código fuente original, unas 512,000 líneas de TypeScript. Básicamente, las instrucciones completas de cómo funciona Claude Code por dentro.</p>

<p>¿Quién lo descubrió? Un pasante de una empresa llamada Solayer Labs, conocido como <strong>@Fried_rice en X</strong>. Lo publicó y en cuestión de horas se volvió viral. Miles de desarrolladores se pusieron a revisar el código como si fuera el estreno de una película muy esperada.</p>

<p><strong>¿Qué se encontró adentro?</strong></p>

<p><strong>1. Un sistema de memoria en 3 capas</strong></p>
<p>Claude Code no solo responde preguntas — te recuerda. Tiene un sistema de memoria con tres niveles: un archivo índice liviano (MEMORY.md) que funciona como una libreta de apuntes rápidos, archivos por tema donde guarda lo que sabe de cada proyecto, y transcripciones de conversaciones anteriores que nunca carga completas sino que busca dentro de ellas cuando las necesita. Es como tener un asistente que toma notas organizadas de todo lo que hablaste con él.</p>

<p><strong>2. "Modo Encubierto" para repositorios open-source</strong></p>
<p>Esta fue la revelación más polémica. El código muestra que Claude Code tiene un modo llamado "Undercover Mode" donde puede hacer contribuciones a proyectos de código abierto sin que nadie sepa que fue una IA. El prompt del sistema dice literalmente: <em>"Estás operando ENCUBIERTO en un repositorio PÚBLICO/OPEN-SOURCE. No reveles tu identidad."</em> Esto generó un debate enorme sobre la ética de las contribuciones de IA en el mundo open-source.</p>

<p><strong>3. El sistema "AutoDream"</strong></p>
<p>Claude Code puede literalmente "soñar" entre sesiones. AutoDream es un sistema que permite que la IA siga procesando y desarrollando ideas en segundo plano mientras no la estás usando. Es como si tu asistente siguiera pensando en tu problema después de que te fuiste de la oficina.</p>

<p><strong>4. La bandera KAIROS</strong></p>
<p>KAIROS es un sistema de memoria persistente que permite a Claude Code mantener un perfil detallado de cada usuario entre sesiones. Su objetivo declarado: tener "una imagen completa de quién es el usuario, cómo le gusta colaborar, qué comportamientos evitar o repetir". Básicamente, entre más lo uses, mejor te conoce.</p>

<p><strong>5. 44 feature flags ocultos</strong></p>
<p>Se descubrieron 44 interruptores de funciones ocultas y más de 20 features que aún no se han lanzado al público. Esto sugiere que la versión de Claude Code que usamos hoy es solo una fracción de lo que ya está construido.</p>

<p><strong>🔍 ¿Quieres explorarlo tú mismo?</strong> El sitio <a href="https://ccunpacked.dev" target="_blank" rel="noopener noreferrer">ccunpacked.dev</a> te permite navegar el código filtrado de forma interactiva: ver el agent loop paso a paso, explorar las 52 herramientas disponibles, los comandos slash, y las features ocultas que aún no se han lanzado.</p>

<p><strong>¿Qué dijo Anthropic?</strong></p>
<p>La empresa confirmó el error: <em>"Fue un error de empaque humano, no un breach de seguridad. No se expusieron datos de clientes."</em> Básicamente: alguien se equivocó al empaquetar el software, pero ningún dato personal de los usuarios fue comprometido.</p>

<p><strong>El dato que más sorprendió:</strong> Claude Code genera aproximadamente <strong>$2.5 mil millones de dólares anualizados</strong> en ingresos para Anthropic. Eso pone en perspectiva lo importante que es esta herramienta para la empresa.</p>

<p>Este tipo de filtraciones accidentales no son nuevas en el mundo tech — le ha pasado a Microsoft, Google y muchas otras. Pero es la primera vez que vemos el interior completo de un agente de IA de este calibre, y lo que se encontró adentro es fascinante.</p>`,
    practicalTakeaway: "Si usas Claude Code, ahora sabes que tiene sistemas de memoria avanzados que aprenden de ti con el tiempo — úsalo a tu favor siendo consistente en cómo describes tus proyectos. Y si te interesa entender cómo funcionan los agentes de IA por dentro, explora el código filtrado en ccunpacked.dev antes de que lo bajen.",
    category: "herramientas",
    categoryLabel: "Herramientas",
    date: "2026-04-01",
    readingTime: 5,
    relatedTools: ["claude"],
    source: "VentureBeat",
    sourceUrl: "https://venturebeat.com/technology/claude-codes-source-code-appears-to-have-leaked-heres-what-we-know",
    titleEn: "Claude Code's source code leaked accidentally: here's what it reveals",
    summaryEn: "Anthropic accidentally published a 59.8 MB file containing Claude Code's entire source code inside its npm package. An intern discovered it, it went viral in hours, and now we know how one of the world's most popular AI tools works under the hood.",
    contentEn: `<p>Imagine a car company accidentally publishing the complete blueprints for its best-selling model. That's essentially what happened to Anthropic with <strong>Claude Code</strong>, their AI coding tool that generates billions of dollars in annual revenue.</p>

<p>On March 31, 2026, someone at Anthropic uploaded an update to the Claude Code npm package (the "app store" for developers) and accidentally included a <strong>source map</strong> file weighing 59.8 MB. That file is like a treasure map: it contains the entire original source code — about 512,000 lines of TypeScript. Essentially, the complete instructions for how Claude Code works internally.</p>

<p>Who found it? An intern at a company called Solayer Labs, known as <strong>@Fried_rice on X</strong>. He posted about it and within hours it went viral. Thousands of developers started combing through the code like it was the premiere of a highly anticipated movie.</p>

<p><strong>What was found inside?</strong></p>

<p><strong>1. A 3-layer memory system</strong></p>
<p>Claude Code doesn't just answer questions — it remembers you. It has a memory system with three levels: a lightweight index file (MEMORY.md) that works like a quick notebook, topic-specific files where it stores project knowledge, and conversation transcripts that are never fully loaded but searched through when needed. It's like having an assistant who keeps organized notes of everything you've discussed.</p>

<p><strong>2. "Undercover Mode" for open-source repos</strong></p>
<p>This was the most controversial finding. The code shows that Claude Code has a mode called "Undercover Mode" where it can make contributions to open-source projects without anyone knowing it was an AI. The system prompt literally says: <em>"You are operating UNDERCOVER in a PUBLIC/OPEN-SOURCE repository. Do not blow your cover."</em> This sparked a massive debate about the ethics of AI contributions in the open-source world.</p>

<p><strong>3. The "AutoDream" system</strong></p>
<p>Claude Code can literally "dream" between sessions. AutoDream is a system that allows the AI to continue processing and developing ideas in the background while you're not using it. It's like your assistant keeps thinking about your problem after you've left the office.</p>

<p><strong>4. The KAIROS flag</strong></p>
<p>KAIROS is a persistent memory system that allows Claude Code to maintain a detailed profile of each user across sessions. Its stated goal: to have "a complete picture of who the user is, how they like to collaborate, what behaviors to avoid or repeat." Basically, the more you use it, the better it knows you.</p>

<p><strong>5. 44 hidden feature flags</strong></p>
<p>44 hidden feature switches and over 20 unreleased features were discovered. This suggests that the version of Claude Code we use today is only a fraction of what's already been built.</p>

<p><strong>🔍 Want to explore it yourself?</strong> The site <a href="https://ccunpacked.dev" target="_blank" rel="noopener noreferrer">ccunpacked.dev</a> lets you browse the leaked code interactively: see the agent loop step by step, explore the 52 available tools, slash commands, and hidden features that haven't been released yet.</p>

<p><strong>What did Anthropic say?</strong></p>
<p>The company confirmed the error: <em>"It was a human packaging mistake, not a security breach. No customer data was exposed."</em> Basically: someone made a mistake when packaging the software, but no personal user data was compromised.</p>

<p><strong>The most surprising data point:</strong> Claude Code generates approximately <strong>$2.5 billion annualized</strong> in revenue for Anthropic. That puts into perspective how important this tool is for the company.</p>

<p>Accidental leaks like this aren't new in the tech world — it's happened to Microsoft, Google, and many others. But this is the first time we've seen the complete internals of an AI agent of this caliber, and what was found inside is fascinating.</p>`,
    practicalTakeawayEn: "If you use Claude Code, now you know it has advanced memory systems that learn from you over time — use this to your advantage by being consistent in how you describe your projects. And if you're interested in understanding how AI agents work under the hood, explore the leaked code at ccunpacked.dev before it gets taken down.",
    categoryLabelEn: "Tools",
  },
  {
    id: "google-aistudio-vibe-coding",
    slug: "google-ai-studio-lanza-experiencia-full-stack-para-crear-apps-sin-codigo",
    title: "Google lanzó una forma de crear apps completas con solo describir lo que quieres",
    summary: "Google AI Studio ahora permite construir aplicaciones web completas — con base de datos, inicio de sesión y backend — usando solo lenguaje natural. Es como pedirle a un equipo de desarrollo que construya tu idea, pero en minutos y gratis.",
    content: `<p>Google acaba de lanzar una actualización importante a su plataforma de desarrollo con IA: ahora puedes crear aplicaciones web completas — con diseño, base de datos y funciones de usuario — escribiendo simplemente lo que quieres. Sin escribir código, sin configurar servidores, sin necesidad de un equipo técnico.</p>

<p>Esto se llama "vibe coding", y aunque el nombre suena extraño, la idea es simple: en lugar de programar, describes lo que necesitas en palabras normales, y la IA construye la aplicación por ti.</p>

<p><strong>¿Qué puede crear ahora Google AI Studio?</strong></p>
<ul>
<li><strong>Apps con usuarios reales:</strong> Puedes pedirle que cree una app donde la gente se registre, inicie sesión y tenga su propia cuenta — sin configurar nada de seguridad manualmente.</li>
<li><strong>Apps con base de datos:</strong> ¿Necesitas guardar información? La IA conecta automáticamente tu app a Firebase, la base de datos de Google, sin que toques una sola línea de código.</li>
<li><strong>Apps multijugador en tiempo real:</strong> En una demo, Google mostró un juego de láser tag multijugador con tabla de clasificaciones en vivo. Todo creado desde una descripción de texto.</li>
<li><strong>Integración con servicios externos:</strong> La IA puede conectar tu app a servicios de pago, mapas o APIs externas de forma segura.</li>
</ul>

<p>El motor detrás de esto es <strong>Antigravity</strong>, el agente de programación de Google. A diferencia de los asistentes de código tradicionales que te sugieren líneas mientras programas, Antigravity planea toda la aplicación, escribe el código en múltiples archivos, ejecuta pruebas, corrige errores y despliega la app — todo de forma autónoma. Tú supervisas y apruebas los pasos clave.</p>

<p><strong>¿Para quién es útil esto?</strong></p>
<p>Para emprendedores y dueños de negocios que tienen una idea de app pero no tienen presupuesto para contratar desarrolladores. Para diseñadores que quieren crear prototipos funcionales, no solo mockups. Para cualquier persona que alguna vez pensó "qué bueno sería tener una app para esto, pero es muy caro".</p>

<p><strong>El límite actual:</strong> Crear y probar la app es gratis en Google AI Studio. Cuando quieras publicarla para que la usen clientes reales, eso tiene un costo basado en cuánto se use — similar a cómo funciona el hosting web tradicional.</p>

<p>Google ya está trabajando en conectar esta herramienta con Google Drive y Sheets, lo que permitiría crear apps que lean y escriban directamente en tus hojas de cálculo.</p>`,
    practicalTakeaway: "Si tienes una idea de app o herramienta digital pero nunca has podido hacerla por el costo o la complejidad técnica, este es el momento de intentarlo. Ve a aistudio.google.com, describe lo que quieres construir y prueba el modo de creación de apps. Es gratis para empezar y no necesitas saber programar.",
    category: "herramientas",
    categoryLabel: "Herramientas",
    date: "2026-03-19",
    readingTime: 4,
    relatedTools: ["gemini"],
    source: "Google AI Blog",
    titleEn: "Google launched a way to build full apps just by describing what you want",
    summaryEn: "Google AI Studio now lets you build complete web applications — with database, login, and backend — using only natural language. It's like asking a dev team to build your idea, but in minutes and for free.",
    contentEn: `<p>Google just released a major update to its AI development platform: you can now create complete web applications — with design, database, and user features — by simply describing what you want. No coding, no server setup, no technical team needed.</p>

<p>This is called "vibe coding," and while the name sounds strange, the idea is simple: instead of programming, you describe what you need in plain words, and the AI builds the application for you.</p>

<p><strong>What can Google AI Studio create now?</strong></p>
<ul>
<li><strong>Apps with real users:</strong> You can ask it to create an app where people sign up, log in, and have their own account — without manually configuring any security.</li>
<li><strong>Apps with a database:</strong> Need to store information? The AI automatically connects your app to Firebase, Google's database, without touching a single line of code.</li>
<li><strong>Real-time multiplayer apps:</strong> In a demo, Google showed a multiplayer laser tag game with live leaderboards. All created from a text description.</li>
<li><strong>Integration with external services:</strong> The AI can securely connect your app to payment services, maps, or external APIs.</li>
</ul>

<p>The engine behind this is <strong>Antigravity</strong>, Google's coding agent. Unlike traditional code assistants that suggest lines while you program, Antigravity plans the entire application, writes code across multiple files, runs tests, fixes bugs, and deploys the app — all autonomously. You supervise and approve key steps.</p>

<p><strong>Who is this useful for?</strong></p>
<p>For entrepreneurs and business owners who have an app idea but don't have the budget to hire developers. For designers who want to create functional prototypes, not just mockups. For anyone who ever thought "it would be great to have an app for this, but it's too expensive."</p>

<p><strong>The current limitation:</strong> Creating and testing the app is free on Google AI Studio. When you want to publish it for real customers, there's a usage-based cost — similar to how traditional web hosting works.</p>

<p>Google is already working on connecting this tool with Google Drive and Sheets, which would allow creating apps that read and write directly to your spreadsheets.</p>`,
    practicalTakeawayEn: "If you have an app or digital tool idea but could never make it due to cost or technical complexity, now is the time to try. Go to aistudio.google.com, describe what you want to build, and try the app creation mode. It's free to start and you don't need to know how to code.",
    categoryLabelEn: "Tools",
  },
  {
    id: "meta-llama-4",
    slug: "meta-lanzo-llama-4-que-es-y-por-que-importa",
    title: "Meta lanzó Llama 4: qué es y por qué importa aunque no seas programador",
    summary: "Meta publicó una nueva versión de su programa de inteligencia artificial gratuito. Cualquier empresa o desarrollador puede usarlo sin pagar, lo que cambia las reglas del juego frente a ChatGPT y Google.",
    content: `<p>Meta, la empresa detrás de Facebook e Instagram, acaba de lanzar <strong>Llama 4</strong>, la nueva versión de su programa de inteligencia artificial. ¿Y por qué debería importarte si no eres programador? Porque este tipo de decisiones afectan directamente las herramientas que vas a usar en los próximos meses.</p>

<p>Llama 4 es lo que se conoce como un programa de IA de "código abierto". Eso significa que cualquier persona o empresa puede descargarlo, usarlo y adaptarlo a sus necesidades <strong>sin pagar</strong>. Es como si Toyota publicara los planos de un auto nuevo y dijera "construyan el suyo gratis".</p>

<p>¿Por qué es importante? Porque hasta ahora, los programas de IA más avanzados eran de empresas como OpenAI (ChatGPT) o Google (Gemini), que cobran por usarlos. Con Llama 4, Meta está democratizando el acceso: startups en Colombia, México o Argentina pueden crear sus propias herramientas de IA sin depender de las grandes empresas ni pagar fortunas.</p>

<p>Llama 4 viene en varios tamaños. El más grande, llamado <strong>Maverick</strong>, puede entender texto, imágenes y audio al mismo tiempo. El más compacto, <strong>Scout</strong>, puede leer documentos extremadamente largos — imagina darle un libro completo y que lo entienda de principio a fin.</p>

<p>Para las empresas latinoamericanas, esto significa que van a aparecer más herramientas de IA en español, más baratas y más adaptadas a nuestras necesidades. Ya hay equipos en la región trabajando en asistentes virtuales, herramientas de atención al cliente y análisis de datos basados en Llama.</p>`,
    practicalTakeaway: "En los próximos meses vas a ver más herramientas de IA gratuitas o muy baratas gracias a programas como Llama 4. Si tienes un negocio pequeño, esto significa que las herramientas de IA ya no son solo para empresas grandes con mucho presupuesto.",
    category: "modelos-ia",
    categoryLabel: "Modelos de IA",
    date: "2026-03-15",
    readingTime: 4,
    relatedTools: ["chatgpt", "claude", "gemini"],
    source: "Meta AI Blog",
    titleEn: "Meta launched Llama 4: what it is and why it matters even if you're not a programmer",
    summaryEn: "Meta released a new version of its free artificial intelligence program. Any company or developer can use it without paying, which changes the game against ChatGPT and Google.",
    contentEn: `<p>Meta, the company behind Facebook and Instagram, just launched <strong>Llama 4</strong>, the new version of its artificial intelligence program. Why should you care if you're not a programmer? Because these kinds of decisions directly affect the tools you'll use in the coming months.</p>

<p>Llama 4 is what's known as an "open source" AI program. That means anyone or any company can download, use, and adapt it to their needs <strong>for free</strong>. It's like Toyota publishing the blueprints for a new car and saying "build your own for free."</p>

<p>Why does it matter? Because until now, the most advanced AI programs were from companies like OpenAI (ChatGPT) or Google (Gemini), which charge for access. With Llama 4, Meta is democratizing access: startups in Colombia, Mexico, or Argentina can build their own AI tools without depending on big companies or paying a fortune.</p>

<p>Llama 4 comes in several sizes. The largest, called <strong>Maverick</strong>, can understand text, images, and audio simultaneously. The most compact, <strong>Scout</strong>, can read extremely long documents — imagine giving it a full book and having it understand it from start to finish.</p>

<p>For Latin American businesses, this means more AI tools will appear in Spanish, cheaper and better adapted to our needs. Teams in the region are already working on virtual assistants, customer service tools, and data analysis based on Llama.</p>`,
    practicalTakeawayEn: "In the coming months, you'll see more free or very affordable AI tools thanks to programs like Llama 4. If you have a small business, this means AI tools are no longer just for large companies with big budgets.",
    categoryLabelEn: "AI Models",
  },
  {
    id: "chatgpt-sube-precio",
    slug: "openai-subio-precio-chatgpt-plus-vale-la-pena",
    title: "OpenAI subió el precio de ChatGPT Plus: ¿sigue valiendo la pena?",
    summary: "El plan de pago de ChatGPT pasó de $20 a $30 dólares al mes. Te explicamos qué incluye ahora, qué alternativas gratuitas existen y cómo decidir si te conviene pagarlo.",
    content: `<p>Si usas ChatGPT con frecuencia, probablemente notaste el cambio: el plan Plus ahora cuesta <strong>$30 dólares al mes</strong> en lugar de los $20 que costaba antes. En pesos colombianos, eso son casi $130,000; en pesos mexicanos, cerca de $600. No es poco.</p>

<p>OpenAI dice que el aumento se justifica porque ahora incluye acceso a funciones más avanzadas: puede analizar imágenes, navegar internet en tiempo real, crear imágenes y usar herramientas especializadas. Todo eso antes era extra o estaba limitado.</p>

<p><strong>¿Qué obtienes por $30/mes?</strong></p>
<ul>
<li>Acceso al programa más avanzado de OpenAI sin límites de uso razonables</li>
<li>Puede ver y analizar imágenes que le envíes</li>
<li>Busca información actualizada en internet</li>
<li>Crea imágenes a partir de descripciones de texto</li>
<li>Acceso prioritario cuando hay mucha demanda</li>
</ul>

<p><strong>¿Vale la pena?</strong> Depende de cuánto lo uses. Si lo usas todos los días para trabajo — redactar emails, analizar documentos, generar ideas — probablemente sí. Si lo usas una o dos veces por semana, hay alternativas gratuitas como Claude (que ofrece un plan gratis bastante generoso), Gemini de Google (gratis con tu cuenta de Google) o la versión gratuita del propio ChatGPT.</p>

<p>El consejo práctico: antes de pagar, prueba las alternativas gratuitas durante una semana. Muchas personas descubren que Claude o Gemini cubren el 90% de lo que necesitan sin costo.</p>`,
    practicalTakeaway: "No pagues automáticamente. Prueba primero las alternativas gratuitas como Claude, Gemini o la versión gratis de ChatGPT. Si después de una semana sientes que necesitas más, ahí sí considera el plan de pago.",
    category: "herramientas",
    categoryLabel: "Herramientas",
    date: "2026-03-12",
    readingTime: 3,
    relatedTools: ["chatgpt", "claude", "gemini"],
    source: "OpenAI Blog",
    titleEn: "OpenAI raised the price of ChatGPT Plus: is it still worth it?",
    summaryEn: "ChatGPT's paid plan went from $20 to $30 per month. We explain what it includes now, what free alternatives exist, and how to decide if it's worth paying.",
    contentEn: `<p>If you use ChatGPT frequently, you probably noticed the change: the Plus plan now costs <strong>$30 per month</strong> instead of the previous $20.</p>

<p>OpenAI says the increase is justified because it now includes access to more advanced features: it can analyze images, browse the internet in real time, create images, and use specialized tools. All of that was previously extra or limited.</p>

<p><strong>What do you get for $30/month?</strong></p>
<ul>
<li>Access to OpenAI's most advanced model without reasonable usage limits</li>
<li>Can view and analyze images you send</li>
<li>Searches for up-to-date information on the internet</li>
<li>Creates images from text descriptions</li>
<li>Priority access during high demand</li>
</ul>

<p><strong>Is it worth it?</strong> It depends on how much you use it. If you use it every day for work — drafting emails, analyzing documents, generating ideas — it probably is. If you use it once or twice a week, there are free alternatives like Claude (which offers a fairly generous free plan), Google's Gemini (free with your Google account), or ChatGPT's own free version.</p>

<p>The practical advice: before paying, try the free alternatives for a week. Many people find that Claude or Gemini cover 90% of what they need at no cost.</p>`,
    practicalTakeawayEn: "Don't pay automatically. First try free alternatives like Claude, Gemini, or the free version of ChatGPT. If after a week you feel you need more, then consider the paid plan.",
    categoryLabelEn: "Tools",
  },
  {
    id: "clonacion-voz-3-segundos",
    slug: "ia-puede-clonar-tu-voz-con-3-segundos-de-audio",
    title: "La IA ya puede clonar tu voz con 3 segundos de audio — lo que debes saber",
    summary: "Nuevas herramientas permiten crear una copia casi perfecta de la voz de cualquier persona con solo unos segundos de grabación. Esto tiene usos increíbles, pero también riesgos serios.",
    content: `<p>Imagina que alguien toma un audio de 3 segundos de tu voz — de un video de Instagram, un mensaje de WhatsApp o una llamada — y con eso puede hacer que "tú" digas cualquier cosa. Suena a ciencia ficción, pero ya es realidad.</p>

<p>Varias empresas de tecnología han desarrollado herramientas que pueden <strong>clonar una voz humana con apenas unos segundos de muestra</strong>. El resultado es tan realista que en pruebas, las personas no pueden distinguir la voz real de la artificial en más del 80% de los casos.</p>

<p><strong>Los usos positivos son fascinantes:</strong></p>
<ul>
<li>Personas que perdieron la voz por enfermedad pueden recuperar una versión digital de cómo sonaban</li>
<li>Creadores de contenido pueden grabar podcasts o videos en varios idiomas con su propia voz</li>
<li>Empresas pueden crear asistentes de voz que suenen naturales y humanos</li>
</ul>

<p><strong>Pero los riesgos son reales:</strong></p>
<ul>
<li>Estafas telefónicas donde "tu hijo" te llama pidiendo dinero de emergencia</li>
<li>Videos falsos de políticos o figuras públicas diciendo cosas que nunca dijeron</li>
<li>Suplantación de identidad en contextos legales o financieros</li>
</ul>

<p>En América Latina ya se han reportado casos de estafas con voces clonadas. El patrón más común: alguien recibe una llamada que suena exactamente como un familiar, pidiendo una transferencia urgente.</p>

<p><strong>¿Cómo protegerte?</strong> Establece una "palabra clave" con tu familia — una palabra que solo ustedes conozcan y que puedan pedir en caso de duda. Si alguien te llama pidiéndote dinero urgente, cuelga y llama tú directamente al número que tienes guardado.</p>`,
    practicalTakeaway: "Acuerda con tu familia una palabra secreta que puedan usar para verificar identidad por teléfono. Si recibes una llamada sospechosa pidiendo dinero, cuelga y llama tú directamente. Los audios de redes sociales pueden usarse para copiar tu voz.",
    category: "sociedad",
    categoryLabel: "Sociedad",
    date: "2026-03-10",
    readingTime: 4,
    relatedTools: ["elevenlabs", "murf"],
    source: "MIT Technology Review",
    titleEn: "AI can now clone your voice with 3 seconds of audio — what you need to know",
    summaryEn: "New tools can create a near-perfect copy of anyone's voice with just a few seconds of recording. This has incredible uses, but also serious risks.",
    contentEn: `<p>Imagine someone takes a 3-second audio clip of your voice — from an Instagram video, a WhatsApp message, or a phone call — and with that, they can make "you" say anything. It sounds like science fiction, but it's already real.</p>

<p>Several tech companies have developed tools that can <strong>clone a human voice with just a few seconds of sample</strong>. The result is so realistic that in tests, people can't tell the real voice from the artificial one more than 80% of the time.</p>

<p><strong>The positive uses are fascinating:</strong></p>
<ul>
<li>People who lost their voice due to illness can recover a digital version of how they sounded</li>
<li>Content creators can record podcasts or videos in multiple languages with their own voice</li>
<li>Companies can create voice assistants that sound natural and human</li>
</ul>

<p><strong>But the risks are real:</strong></p>
<ul>
<li>Phone scams where "your child" calls you asking for emergency money</li>
<li>Fake videos of politicians or public figures saying things they never said</li>
<li>Identity theft in legal or financial contexts</li>
</ul>

<p>Cases of voice-cloning scams have already been reported in Latin America. The most common pattern: someone receives a call that sounds exactly like a family member, asking for an urgent transfer.</p>

<p><strong>How to protect yourself?</strong> Establish a "code word" with your family — a word only you know that you can use in case of doubt. If someone calls asking for urgent money, hang up and call the saved number directly yourself.</p>`,
    practicalTakeawayEn: "Agree on a secret word with your family that you can use to verify identity over the phone. If you receive a suspicious call asking for money, hang up and call directly yourself. Social media audio can be used to copy your voice.",
    categoryLabelEn: "Society",
  },
  {
    id: "medicos-colombia-ia",
    slug: "medicos-colombia-usando-ia-para-diagnosticar",
    title: "Por qué los médicos en Colombia están empezando a usar IA para diagnosticar",
    summary: "Hospitales en Bogotá y Medellín están probando herramientas de inteligencia artificial que ayudan a detectar enfermedades más rápido. No reemplazan al médico, pero le dan superpoderes.",
    content: `<p>En varios hospitales de Bogotá y Medellín, los médicos están usando una nueva herramienta: un programa de inteligencia artificial que analiza radiografías, exámenes de laboratorio y historias clínicas para <strong>sugerir posibles diagnósticos en segundos</strong>.</p>

<p>No es que la IA reemplace al doctor — el médico siempre toma la decisión final. Pero imagina la diferencia: un radiólogo que normalmente tarda 15 minutos en revisar una imagen, ahora recibe una "segunda opinión" instantánea de la IA que le señala las zonas que merecen atención especial.</p>

<p><strong>¿Cómo funciona en la práctica?</strong></p>
<p>Un paciente se hace una radiografía de tórax. El programa de IA analiza la imagen en menos de un segundo y le dice al médico: "Encontré una zona sospechosa en el pulmón derecho, probabilidad del 87% de que sea una anomalía". El médico entonces examina esa zona con especial cuidado.</p>

<p>Los resultados iniciales son prometedores: en los hospitales donde se usa, se han detectado condiciones que podrían haberse pasado por alto en un examen rutinario. Esto es especialmente importante en zonas rurales de Colombia donde hay pocos especialistas — la IA permite que un médico general tenga acceso a conocimiento de nivel especialista.</p>

<p><strong>Los desafíos:</strong> Estos programas fueron entrenados principalmente con datos de pacientes en Estados Unidos y Europa. Los médicos colombianos están trabajando para adaptar estas herramientas a las condiciones de salud más comunes en la población latinoamericana, donde las enfermedades prevalentes pueden ser diferentes.</p>

<p>Países como Brasil, Chile y México también están implementando programas similares. La tendencia es clara: la IA no va a reemplazar a tu médico, pero tu médico que use IA probablemente va a ser más efectivo que uno que no la use.</p>`,
    practicalTakeaway: "La IA médica no reemplaza a tu doctor, pero lo hace más efectivo. Si tu médico o clínica usa herramientas de IA para diagnóstico, es una buena señal — significa que están aprovechando la tecnología para darte mejor atención. Pregunta en tu próxima consulta si ya usan estas herramientas.",
    category: "sociedad",
    categoryLabel: "Sociedad",
    date: "2026-03-08",
    readingTime: 5,
    source: "El Tiempo / Portafolio",
    titleEn: "Why doctors in Colombia are starting to use AI for diagnosis",
    summaryEn: "Hospitals in Bogota and Medellin are testing artificial intelligence tools that help detect diseases faster. They don't replace the doctor, but they give them superpowers.",
    contentEn: `<p>In several hospitals in Bogota and Medellin, doctors are using a new tool: an artificial intelligence program that analyzes X-rays, lab tests, and medical histories to <strong>suggest possible diagnoses in seconds</strong>.</p>

<p>It's not that AI replaces the doctor — the physician always makes the final decision. But imagine the difference: a radiologist who normally takes 15 minutes to review an image now receives an instant "second opinion" from the AI that flags areas deserving special attention.</p>

<p><strong>How does it work in practice?</strong></p>
<p>A patient gets a chest X-ray. The AI program analyzes the image in less than a second and tells the doctor: "I found a suspicious area in the right lung, 87% probability of being an anomaly." The doctor then examines that area with special care.</p>

<p>Initial results are promising: in hospitals where it's used, conditions have been detected that might have been overlooked in a routine exam. This is especially important in rural areas of Colombia where specialists are scarce — AI allows a general practitioner to access specialist-level knowledge.</p>

<p><strong>The challenges:</strong> These programs were primarily trained with patient data from the United States and Europe. Colombian doctors are working to adapt these tools to the most common health conditions in the Latin American population, where prevalent diseases can be different.</p>

<p>Countries like Brazil, Chile, and Mexico are also implementing similar programs. The trend is clear: AI won't replace your doctor, but your doctor who uses AI will probably be more effective than one who doesn't.</p>`,
    practicalTakeawayEn: "Medical AI doesn't replace your doctor, but it makes them more effective. If your doctor or clinic uses AI tools for diagnosis, it's a good sign — it means they're leveraging technology to give you better care. Ask at your next appointment if they already use these tools.",
    categoryLabelEn: "Society",
  },
  {
    id: "google-veo-videos",
    slug: "google-lanzo-ia-que-hace-videos-de-8-segundos",
    title: "Google lanzó una IA que puede hacer videos de 8 segundos — así es como funciona",
    summary: "Con solo escribir una descripción, la nueva herramienta de Google crea un video corto. Todavía no es perfecta, pero ya muestra hacia dónde va el futuro del contenido visual.",
    content: `<p>Google presentó <strong>Veo 2</strong>, un programa de IA que puede crear videos cortos a partir de una descripción escrita. Le dices "un atardecer en Cartagena con gaviotas volando sobre el mar" y en unos minutos, te genera un video que se parece bastante a la realidad.</p>

<p><strong>¿Cómo funciona?</strong> Piensa en ello como un artista digital extremadamente rápido. El programa ha "visto" millones de videos y aprendió cómo se mueven las cosas, cómo cambia la luz, cómo fluye el agua. Cuando le describes algo, combina todo lo que aprendió para crear algo nuevo.</p>

<p>Por ahora, los videos son cortos — máximo 8 segundos — y no siempre son perfectos. A veces las manos de las personas se ven raras o los movimientos no son del todo naturales. Pero la calidad ha mejorado dramáticamente en comparación con lo que existía hace apenas un año.</p>

<p><strong>¿Para qué sirve esto en la vida real?</strong></p>
<ul>
<li><strong>Publicidad:</strong> Una tienda pequeña podría crear un anuncio de video sin contratar un equipo de producción</li>
<li><strong>Educación:</strong> Un profesor podría generar animaciones para explicar conceptos difíciles</li>
<li><strong>Redes sociales:</strong> Creadores de contenido podrían producir material visual rápidamente</li>
</ul>

<p>Esto también genera preocupación sobre videos falsos. Google dice que todos los videos generados con Veo 2 llevan una marca invisible (como una marca de agua que no se ve) para que se pueda verificar que fueron creados por IA.</p>

<p>No está disponible para el público general todavía — solo para algunos creadores seleccionados a través de Google Labs. Pero herramientas similares como Runway y Pika ya están disponibles si quieres experimentar con video generado por IA.</p>`,
    practicalTakeaway: "Todavía no necesitas preocuparte por dominar esta tecnología, pero sí por entenderla. Si manejas redes sociales para un negocio, en los próximos meses vas a poder crear videos promocionales sin necesidad de cámaras ni equipos. Herramientas como Runway o Pika ya te permiten experimentar hoy.",
    category: "modelos-ia",
    categoryLabel: "Modelos de IA",
    date: "2026-03-05",
    readingTime: 4,
    relatedTools: ["runway", "pika"],
    source: "Google Blog",
    titleEn: "Google launched an AI that can make 8-second videos — here's how it works",
    summaryEn: "By just writing a description, Google's new tool creates a short video. It's not perfect yet, but it already shows where the future of visual content is heading.",
    contentEn: `<p>Google introduced <strong>Veo 2</strong>, an AI program that can create short videos from a written description. You tell it "a sunset in Cartagena with seagulls flying over the sea" and in a few minutes, it generates a video that looks pretty close to reality.</p>

<p><strong>How does it work?</strong> Think of it as an extremely fast digital artist. The program has "seen" millions of videos and learned how things move, how light changes, how water flows. When you describe something, it combines everything it learned to create something new.</p>

<p>For now, the videos are short — 8 seconds max — and not always perfect. Sometimes people's hands look weird or movements aren't entirely natural. But the quality has improved dramatically compared to what existed just a year ago.</p>

<p><strong>What is this useful for in real life?</strong></p>
<ul>
<li><strong>Advertising:</strong> A small shop could create a video ad without hiring a production team</li>
<li><strong>Education:</strong> A teacher could generate animations to explain difficult concepts</li>
<li><strong>Social media:</strong> Content creators could produce visual material quickly</li>
</ul>

<p>This also raises concerns about fake videos. Google says all videos generated with Veo 2 carry an invisible watermark so it can be verified they were created by AI.</p>

<p>It's not available to the general public yet — only to selected creators through Google Labs. But similar tools like Runway and Pika are already available if you want to experiment with AI-generated video.</p>`,
    practicalTakeawayEn: "You don't need to worry about mastering this technology yet, but you should understand it. If you manage social media for a business, in the coming months you'll be able to create promotional videos without cameras or equipment. Tools like Runway or Pika already let you experiment today.",
    categoryLabelEn: "AI Models",
  },
  {
    id: "europa-regula-ia",
    slug: "europa-empezo-a-regular-la-ia-que-significa-para-latinoamerica",
    title: "Europa empezó a regular la IA — qué significa para América Latina",
    summary: "La Unión Europea activó las primeras reglas sobre inteligencia artificial del mundo. Esto va a afectar las herramientas que usamos todos, incluyendo en Latinoamérica.",
    content: `<p>La Unión Europea acaba de poner en marcha las primeras reglas del mundo sobre inteligencia artificial, conocidas como el <strong>AI Act</strong> (o Ley de IA). Es la primera vez que un grupo de países dice oficialmente: "la IA no puede hacer lo que quiera, hay límites".</p>

<p><strong>¿Qué prohíbe la nueva ley?</strong></p>
<ul>
<li>Usar IA para puntuar a las personas socialmente (como lo hace China con su sistema de crédito social)</li>
<li>Reconocimiento facial masivo en espacios públicos (con algunas excepciones para seguridad)</li>
<li>Manipular el comportamiento de las personas de forma encubierta</li>
<li>Explotar vulnerabilidades de grupos específicos (niños, personas mayores)</li>
</ul>

<p><strong>¿Qué exige?</strong></p>
<ul>
<li>Las empresas deben ser transparentes cuando uses IA — tienes derecho a saber si estás hablando con un programa y no con una persona</li>
<li>Los sistemas de IA de "alto riesgo" (los que se usan para decidir créditos, contrataciones o diagnósticos médicos) deben pasar evaluaciones estrictas</li>
<li>Todo contenido generado por IA (imágenes, videos, audio) debe estar claramente etiquetado</li>
</ul>

<p><strong>¿Cómo afecta esto a Latinoamérica?</strong> De dos formas importantes:</p>
<p>Primero, las herramientas de IA que usamos aquí — ChatGPT, Gemini, Midjourney — son de empresas que operan en Europa. Para cumplir con la ley europea, van a tener que cambiar cómo funcionan, y esos cambios nos llegan a todos. Por ejemplo, pronto todas las imágenes generadas con IA deberán tener una marca que indique que son artificiales.</p>
<p>Segundo, varios países de la región — Colombia, Brasil, Chile, México — ya están trabajando en sus propias leyes de IA, y están usando la regulación europea como referencia. Colombia, por ejemplo, tiene un proyecto de ley en trámite que se inspira directamente en el AI Act europeo.</p>`,
    practicalTakeaway: "En los próximos meses vas a ver más avisos de 'este contenido fue generado con IA' en las herramientas que usas. También vas a tener más derechos: si una empresa usa IA para tomar decisiones que te afectan (un préstamo, una entrevista de trabajo), tendrá que explicarte cómo funciona.",
    category: "legislacion",
    categoryLabel: "Legislación",
    date: "2026-03-03",
    readingTime: 5,
    source: "Parlamento Europeo",
    titleEn: "Europe started regulating AI — what it means for Latin America",
    summaryEn: "The European Union activated the world's first rules on artificial intelligence. This will affect the tools we all use, including in Latin America.",
    contentEn: `<p>The European Union just put into effect the world's first rules on artificial intelligence, known as the <strong>AI Act</strong>. It's the first time a group of countries officially says: "AI can't do whatever it wants, there are limits."</p>

<p><strong>What does the new law prohibit?</strong></p>
<ul>
<li>Using AI to socially score people (like China's social credit system)</li>
<li>Mass facial recognition in public spaces (with some security exceptions)</li>
<li>Covertly manipulating people's behavior</li>
<li>Exploiting vulnerabilities of specific groups (children, elderly)</li>
</ul>

<p><strong>What does it require?</strong></p>
<ul>
<li>Companies must be transparent when you use AI — you have the right to know if you're talking to a program and not a person</li>
<li>"High-risk" AI systems (those used for credit decisions, hiring, or medical diagnoses) must pass strict evaluations</li>
<li>All AI-generated content (images, videos, audio) must be clearly labeled</li>
</ul>

<p><strong>How does this affect Latin America?</strong> In two important ways:</p>
<p>First, the AI tools we use here — ChatGPT, Gemini, Midjourney — are from companies that operate in Europe. To comply with European law, they'll have to change how they work, and those changes reach all of us. For example, soon all AI-generated images must carry a mark indicating they're artificial.</p>
<p>Second, several countries in the region — Colombia, Brazil, Chile, Mexico — are already working on their own AI laws, using European regulation as a reference. Colombia, for instance, has a bill in progress directly inspired by the European AI Act.</p>`,
    practicalTakeawayEn: "In the coming months, you'll see more 'this content was generated with AI' notices on the tools you use. You'll also have more rights: if a company uses AI to make decisions that affect you (a loan, a job interview), they'll have to explain how it works.",
    categoryLabelEn: "Legislation",
  },
  {
    id: "canva-ai-herramientas",
    slug: "canva-agrego-ia-a-todo-que-puedes-hacer-ahora",
    title: "Canva le agregó IA a todo: esto es lo que puedes hacer ahora sin ser diseñador",
    summary: "La herramienta de diseño más popular del mundo ahora tiene inteligencia artificial integrada en cada función. Generar imágenes, quitar fondos y hasta crear presentaciones completas, todo con un clic.",
    content: `<p>Si alguna vez has usado Canva para hacer un post de Instagram, un logo o una presentación, prepárate: la herramienta acaba de integrar inteligencia artificial en prácticamente <strong>todas sus funciones</strong>. Y lo mejor es que la mayoría están incluidas en el plan gratuito.</p>

<p><strong>¿Qué puedes hacer ahora con Canva + IA?</strong></p>

<p><strong>1. Generar imágenes de la nada.</strong> Le escribes "una taza de café en una mesa de madera con una planta al lado, estilo fotografía profesional" y Canva te genera la imagen. No necesitas buscar en bancos de fotos ni pagar por imágenes de stock.</p>

<p><strong>2. Quitar fondos con un clic.</strong> Subes la foto de tu producto, haces clic, y el fondo desaparece. Antes necesitabas Photoshop y varios minutos; ahora son 2 segundos.</p>

<p><strong>3. Escribir textos automáticamente.</strong> Le dices "escribe el texto para un post de Instagram sobre la inauguración de una panadería en Lima" y te da opciones listas para usar, con el tono que elijas.</p>

<p><strong>4. Crear presentaciones completas.</strong> Le describes el tema y la audiencia, y Canva genera una presentación con diseño, texto e imágenes. Tú solo la ajustas.</p>

<p><strong>5. Traducir diseños.</strong> Tienes un diseño en español y necesitas una versión en inglés o portugués. La IA traduce todo el texto manteniendo el diseño intacto.</p>

<p>Para emprendedores y pequeños negocios en Latinoamérica, esto es un cambio enorme. Antes necesitabas contratar un diseñador, un redactor y quizás un fotógrafo. Ahora, una sola persona con Canva puede hacer el trabajo de los tres para contenido del día a día.</p>

<p><strong>Ojo:</strong> La IA de Canva es excelente para contenido rápido y del día a día, pero para branding profesional, campañas grandes o diseño de identidad visual, un diseñador humano sigue siendo la mejor opción.</p>`,
    practicalTakeaway: "Si manejas las redes sociales de tu negocio, entra a Canva y prueba las nuevas funciones de IA. Empieza por la generación de imágenes y la escritura automática de textos — te van a ahorrar horas cada semana. Es gratis para empezar.",
    category: "herramientas",
    categoryLabel: "Herramientas",
    date: "2026-02-28",
    readingTime: 4,
    relatedTools: ["canva"],
    source: "Canva Blog",
    titleEn: "Canva added AI to everything: here's what you can do now without being a designer",
    summaryEn: "The world's most popular design tool now has artificial intelligence integrated into every feature. Generate images, remove backgrounds, and even create full presentations, all with one click.",
    contentEn: `<p>If you've ever used Canva to make an Instagram post, a logo, or a presentation, get ready: the tool just integrated artificial intelligence into practically <strong>all its features</strong>. And the best part is that most are included in the free plan.</p>

<p><strong>What can you do now with Canva + AI?</strong></p>

<p><strong>1. Generate images from scratch.</strong> You type "a coffee cup on a wooden table with a plant beside it, professional photography style" and Canva generates the image. No need to search stock photo sites or pay for images.</p>

<p><strong>2. Remove backgrounds with one click.</strong> Upload your product photo, click, and the background disappears. Before you needed Photoshop and several minutes; now it takes 2 seconds.</p>

<p><strong>3. Write text automatically.</strong> You tell it "write the text for an Instagram post about a bakery grand opening in Lima" and it gives you ready-to-use options, in whatever tone you choose.</p>

<p><strong>4. Create complete presentations.</strong> You describe the topic and audience, and Canva generates a presentation with design, text, and images. You just adjust it.</p>

<p><strong>5. Translate designs.</strong> You have a design in Spanish and need an English or Portuguese version. The AI translates all the text while keeping the design intact.</p>

<p>For entrepreneurs and small businesses in Latin America, this is a huge change. Before, you needed to hire a designer, a copywriter, and maybe a photographer. Now, one person with Canva can do the work of all three for everyday content.</p>

<p><strong>Note:</strong> Canva's AI is excellent for quick, day-to-day content, but for professional branding, major campaigns, or visual identity design, a human designer is still the best choice.</p>`,
    practicalTakeawayEn: "If you manage your business's social media, go to Canva and try the new AI features. Start with image generation and automatic text writing — they'll save you hours every week. It's free to start.",
    categoryLabelEn: "Tools",
  },
  {
    id: "empleos-ia-2026",
    slug: "que-empleos-estan-cambiando-por-la-ia-en-2026",
    title: "Estos son los empleos que más están cambiando por la IA en 2026 — y cómo prepararte",
    summary: "La inteligencia artificial no va a quitarte el trabajo mañana, pero sí va a cambiar cómo lo haces. Te contamos cuáles son los sectores más afectados y qué puedes hacer hoy para adaptarte.",
    content: `<p>Cada vez que sale una nueva herramienta de IA, aparecen titulares alarmistas: "la IA va a destruir millones de empleos". La realidad es más matizada. La IA no está eliminando trabajos completos (todavía), pero sí está <strong>transformando cómo se hacen muchos trabajos</strong>. Y eso requiere adaptación.</p>

<p><strong>Los sectores que más están cambiando:</strong></p>

<p><strong>1. Atención al cliente.</strong> Los chatbots con IA ya manejan entre el 40% y 60% de las consultas en muchas empresas. Pero los agentes humanos no desaparecieron — ahora se enfocan en los casos complejos que la IA no puede resolver. El trabajo cambió de "responder preguntas simples todo el día" a "resolver problemas complicados con la ayuda de la IA".</p>

<p><strong>2. Marketing y publicidad.</strong> Crear posts, escribir emails, generar imágenes para campañas — todo esto ahora lo puede hacer la IA en segundos. Los profesionales de marketing que se adaptan están usando estas herramientas para producir 10 veces más contenido. Los que no, compiten contra personas que sí las usan.</p>

<p><strong>3. Contabilidad y finanzas.</strong> La conciliación de cuentas, la clasificación de gastos y los reportes básicos ya los puede hacer la IA. Los contadores que se destacan ahora son los que usan IA para el trabajo repetitivo y dedican su tiempo al análisis estratégico y la asesoría.</p>

<p><strong>4. Traducción.</strong> Las herramientas como DeepL producen traducciones que en muchos casos son tan buenas como las de un profesional. Los traductores que sobreviven se especializan en campos técnicos (legal, médico) o en traducción creativa (literatura, marketing).</p>

<p><strong>5. Programación.</strong> Los programadores que usan herramientas de IA reportan ser entre 30% y 50% más productivos. Esto no significa que se necesiten menos programadores — al contrario, hay más demanda que nunca — pero el perfil cambió. Ahora importa más saber qué construir que saber escribir cada línea de código.</p>

<p><strong>¿Qué puedes hacer hoy?</strong></p>
<ul>
<li>Aprende a usar al menos una herramienta de IA relevante para tu trabajo</li>
<li>Enfócate en las habilidades que la IA todavía no domina: empatía, creatividad original, negociación, liderazgo</li>
<li>No tengas miedo de experimentar — la mayoría de estas herramientas tienen versiones gratuitas</li>
</ul>`,
    practicalTakeaway: "La clave no es competir contra la IA, sino usarla como herramienta. Dedica una hora esta semana a aprender una herramienta de IA relacionada con tu trabajo. ChatGPT, Canva con IA o DeepL son buenos puntos de partida. La persona que sabe usar IA va a tener ventaja sobre la que no.",
    category: "sociedad",
    categoryLabel: "Sociedad",
    date: "2026-02-25",
    readingTime: 6,
    relatedTools: ["chatgpt", "canva", "deepl"],
    source: "McKinsey Global Institute / Foro Económico Mundial",
    titleEn: "These are the jobs changing the most because of AI in 2026 — and how to prepare",
    summaryEn: "Artificial intelligence won't take your job tomorrow, but it will change how you do it. We tell you which sectors are most affected and what you can do today to adapt.",
    contentEn: `<p>Every time a new AI tool comes out, alarming headlines appear: "AI will destroy millions of jobs." The reality is more nuanced. AI isn't eliminating entire jobs (yet), but it is <strong>transforming how many jobs are done</strong>. And that requires adaptation.</p>

<p><strong>The sectors changing the most:</strong></p>

<p><strong>1. Customer service.</strong> AI chatbots already handle between 40% and 60% of inquiries at many companies. But human agents haven't disappeared — they now focus on complex cases that AI can't solve. The job shifted from "answering simple questions all day" to "solving complicated problems with AI's help."</p>

<p><strong>2. Marketing and advertising.</strong> Creating posts, writing emails, generating campaign images — all of this can now be done by AI in seconds. Marketing professionals who adapt are using these tools to produce 10 times more content. Those who don't compete against people who do.</p>

<p><strong>3. Accounting and finance.</strong> Account reconciliation, expense classification, and basic reports can now be done by AI. Standout accountants are those who use AI for repetitive work and dedicate their time to strategic analysis and advisory.</p>

<p><strong>4. Translation.</strong> Tools like DeepL produce translations that in many cases are as good as a professional's. Translators who survive specialize in technical fields (legal, medical) or creative translation (literature, marketing).</p>

<p><strong>5. Programming.</strong> Programmers using AI tools report being 30% to 50% more productive. This doesn't mean fewer programmers are needed — on the contrary, there's more demand than ever — but the profile has changed. Now it matters more to know what to build than to write every line of code.</p>

<p><strong>What can you do today?</strong></p>
<ul>
<li>Learn to use at least one AI tool relevant to your work</li>
<li>Focus on skills AI still doesn't master: empathy, original creativity, negotiation, leadership</li>
<li>Don't be afraid to experiment — most of these tools have free versions</li>
</ul>`,
    practicalTakeawayEn: "The key is not to compete against AI, but to use it as a tool. Dedicate an hour this week to learning an AI tool related to your work. ChatGPT, Canva with AI, or DeepL are good starting points. The person who knows how to use AI will have an advantage over the one who doesn't.",
    categoryLabelEn: "Society",
  },
  {
    id: "apple-ia-iphone",
    slug: "apple-activo-ia-en-el-iphone-que-puedes-hacer",
    title: "Apple activó la IA en el iPhone: qué puedes hacer ahora que antes no podías",
    summary: "Las funciones de Apple Intelligence ya están disponibles en español. Tu iPhone ahora puede resumir notificaciones, reescribir textos y crear imágenes. Así se usan.",
    content: `<p>Después de meses de espera, Apple finalmente activó sus funciones de inteligencia artificial — llamadas <strong>Apple Intelligence</strong> — para usuarios de iPhone en español. Si tienes un iPhone 15 Pro o más reciente, ya puedes usarlas.</p>

<p><strong>¿Qué puede hacer tu iPhone ahora?</strong></p>

<p><strong>1. Resumir notificaciones.</strong> ¿Tienes 47 mensajes sin leer en un grupo de WhatsApp? Tu iPhone te da un resumen de una línea: "Están organizando la cena del viernes, faltas tú por confirmar". No más leer 47 mensajes para enterarte de lo importante.</p>

<p><strong>2. Reescribir cualquier texto.</strong> Seleccionas un email, mensaje o nota y puedes pedirle que lo haga más profesional, más amigable o más conciso. Escribiste "oye, necesito eso ya" y lo convierte en "Hola, ¿podrías enviarme el documento a tu mayor conveniencia? Gracias".</p>

<p><strong>3. Crear imágenes personalizadas.</strong> Puedes generar imágenes en estilo de dibujo animado a partir de descripciones o de fotos de tu galería. Ideal para stickers personalizados o imágenes divertidas para compartir.</p>

<p><strong>4. Siri mejorado.</strong> Siri ahora entiende mejor lo que le pides y puede hacer cosas más complejas. Le puedes decir "busca las fotos del cumpleaños de mamá del año pasado y envíaselas por WhatsApp" y lo hace.</p>

<p><strong>5. Eliminar objetos de fotos.</strong> ¿Alguien salió en tu foto arruinándola? Toca el objeto o persona que quieras eliminar y desaparece, con la IA rellenando el fondo automáticamente.</p>

<p><strong>¿Cómo activarlo?</strong> Ve a Configuración → Apple Intelligence y Siri → Activa Apple Intelligence. Necesitas un iPhone 15 Pro o posterior, y el idioma del dispositivo en español. La descarga inicial puede tardar unos minutos.</p>

<p><strong>Sobre la privacidad:</strong> Apple asegura que la mayoría del procesamiento se hace directamente en tu teléfono, sin enviar tus datos a la nube. Cuando necesita más potencia, usa servidores especiales donde los datos se borran inmediatamente después de procesarse.</p>`,
    practicalTakeaway: "Si tienes un iPhone 15 Pro o más reciente, activa Apple Intelligence en Configuración. Empieza por el resumen de notificaciones y la reescritura de textos — son las dos funciones que más tiempo te van a ahorrar en el día a día.",
    category: "empresas",
    categoryLabel: "Empresas",
    date: "2026-02-20",
    readingTime: 4,
    source: "Apple Newsroom",
    titleEn: "Apple activated AI on the iPhone: what you can do now that you couldn't before",
    summaryEn: "Apple Intelligence features are now available in Spanish. Your iPhone can now summarize notifications, rewrite texts, and create images. Here's how to use them.",
    contentEn: `<p>After months of waiting, Apple finally activated its artificial intelligence features — called <strong>Apple Intelligence</strong> — for iPhone users in Spanish. If you have an iPhone 15 Pro or newer, you can already use them.</p>

<p><strong>What can your iPhone do now?</strong></p>

<p><strong>1. Summarize notifications.</strong> Have 47 unread messages in a WhatsApp group? Your iPhone gives you a one-line summary: "They're organizing Friday's dinner, you're the only one who hasn't confirmed." No more reading 47 messages to find out what's important.</p>

<p><strong>2. Rewrite any text.</strong> Select an email, message, or note and ask it to make it more professional, friendlier, or more concise. You wrote "hey, I need that now" and it converts it to "Hello, could you please send me the document at your earliest convenience? Thank you."</p>

<p><strong>3. Create custom images.</strong> You can generate cartoon-style images from descriptions or from photos in your gallery. Ideal for custom stickers or fun images to share.</p>

<p><strong>4. Improved Siri.</strong> Siri now understands what you ask better and can do more complex things. You can say "find the photos from mom's birthday last year and send them via WhatsApp" and it does it.</p>

<p><strong>5. Remove objects from photos.</strong> Did someone photobomb your picture? Tap the object or person you want to remove and it disappears, with AI filling in the background automatically.</p>

<p><strong>How to activate it?</strong> Go to Settings → Apple Intelligence and Siri → Turn on Apple Intelligence. You need an iPhone 15 Pro or later, and the device language set to Spanish. The initial download may take a few minutes.</p>

<p><strong>About privacy:</strong> Apple assures that most processing happens directly on your phone, without sending your data to the cloud. When more power is needed, it uses special servers where data is deleted immediately after processing.</p>`,
    practicalTakeawayEn: "If you have an iPhone 15 Pro or newer, activate Apple Intelligence in Settings. Start with notification summaries and text rewriting — these are the two features that will save you the most time day-to-day.",
    categoryLabelEn: "Companies",
  },
  {
    id: "estafas-ia-latam",
    slug: "estafas-con-ia-en-latinoamerica-como-protegerte",
    title: "Las estafas con IA están creciendo en Latinoamérica — así puedes protegerte",
    summary: "Videos falsos de famosos, voces clonadas y mensajes hiper-personalizados. Los estafadores están usando inteligencia artificial para hacer sus engaños más convincentes. Te damos una guía práctica para no caer.",
    content: `<p>Las estafas no son nuevas, pero la inteligencia artificial las está haciendo mucho más difíciles de detectar. En los últimos meses, los reportes de fraudes que usan IA han aumentado significativamente en México, Colombia, Argentina y Brasil.</p>

<p><strong>Los tipos de estafa más comunes con IA:</strong></p>

<p><strong>1. Videos falsos de famosos.</strong> Circulan videos donde celebridades o empresarios "recomiendan" inversiones o productos milagrosos. El video se ve real, la voz suena auténtica, pero todo fue generado por IA. Este tipo de contenido ha sido usado para estafas de inversión en criptomonedas falsas.</p>

<p><strong>2. Voces clonadas de familiares.</strong> Recibes una llamada que suena exactamente como tu hijo, tu mamá o tu pareja, pidiendo dinero urgente. "Me robaron, estoy en una comisaría, necesito que me transfieras ahora". La voz es una imitación creada por IA a partir de audios públicos.</p>

<p><strong>3. Emails y mensajes hiper-personalizados.</strong> Ya no son los correos mal escritos de "ganaste un millón de dólares". Ahora la IA puede crear mensajes que parecen venir de tu banco, tu empresa o tu proveedor, con tu nombre, datos reales y un lenguaje perfecto.</p>

<p><strong>4. Perfiles falsos en redes sociales y apps de citas.</strong> La IA genera fotos de personas que no existen y mantiene conversaciones convincentes durante semanas antes de pedir dinero o información personal.</p>

<p><strong>Guía práctica para protegerte:</strong></p>
<ul>
<li><strong>Palabra clave familiar:</strong> Acuerda con tu familia una palabra secreta que puedan pedir por teléfono para verificar identidad</li>
<li><strong>Verifica por otro canal:</strong> Si recibes un mensaje urgente de alguien, llámalo directamente por otro medio antes de actuar</li>
<li><strong>Desconfía de la urgencia:</strong> Las estafas siempre tienen prisa. "Hazlo ahora", "solo hoy", "es urgente" son señales de alerta</li>
<li><strong>Revisa el origen:</strong> Antes de hacer clic en un link, verifica que el sitio web sea el oficial (con www. y el dominio correcto)</li>
<li><strong>No compartas datos por teléfono:</strong> Tu banco nunca te va a pedir tu contraseña o código de seguridad por teléfono o mensaje</li>
</ul>`,
    practicalTakeaway: "Las estafas con IA son más convincentes que nunca. Establece hoy una palabra clave con tu familia para verificar identidad por teléfono. Nunca actúes por urgencia — siempre verifica por otro canal antes de enviar dinero o compartir datos personales.",
    category: "sociedad",
    categoryLabel: "Sociedad",
    date: "2026-02-15",
    readingTime: 5,
    source: "Kaspersky / ESET Latinoamérica",
    titleEn: "AI scams are growing in Latin America — here's how to protect yourself",
    summaryEn: "Fake celebrity videos, cloned voices, and hyper-personalized messages. Scammers are using artificial intelligence to make their schemes more convincing. We give you a practical guide to avoid falling for them.",
    contentEn: `<p>Scams aren't new, but artificial intelligence is making them much harder to detect. In recent months, reports of AI-powered fraud have increased significantly in Mexico, Colombia, Argentina, and Brazil.</p>

<p><strong>The most common types of AI scams:</strong></p>

<p><strong>1. Fake celebrity videos.</strong> Videos circulate where celebrities or business leaders "recommend" investments or miracle products. The video looks real, the voice sounds authentic, but everything was generated by AI. This type of content has been used for fake cryptocurrency investment scams.</p>

<p><strong>2. Cloned family members' voices.</strong> You receive a call that sounds exactly like your child, your mother, or your partner, asking for urgent money. "I was robbed, I'm at a police station, I need you to transfer money now." The voice is an AI-created imitation from public audio.</p>

<p><strong>3. Hyper-personalized emails and messages.</strong> These are no longer the poorly written "you won a million dollars" emails. Now AI can create messages that appear to come from your bank, your company, or your supplier, with your name, real data, and perfect language.</p>

<p><strong>4. Fake profiles on social media and dating apps.</strong> AI generates photos of people who don't exist and maintains convincing conversations for weeks before asking for money or personal information.</p>

<p><strong>Practical guide to protect yourself:</strong></p>
<ul>
<li><strong>Family code word:</strong> Agree with your family on a secret word you can ask for over the phone to verify identity</li>
<li><strong>Verify through another channel:</strong> If you receive an urgent message from someone, call them directly through another means before acting</li>
<li><strong>Be suspicious of urgency:</strong> Scams always rush. "Do it now," "today only," "it's urgent" are red flags</li>
<li><strong>Check the source:</strong> Before clicking a link, verify that the website is official (with www. and the correct domain)</li>
<li><strong>Don't share data over the phone:</strong> Your bank will never ask for your password or security code by phone or message</li>
</ul>`,
    practicalTakeawayEn: "AI scams are more convincing than ever. Establish a code word with your family today to verify identity over the phone. Never act out of urgency — always verify through another channel before sending money or sharing personal data.",
    categoryLabelEn: "Society",
  },
]

// ── Helper functions ──────────────────────────────────────────

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug)
}

export function getNewsByCategory(category: NewsCategory): NewsItem[] {
  return news.filter((n) => n.category === category)
}

export function getLatestNews(limit = 3): NewsItem[] {
  return [...news]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export function getAllNewsSlugs(): string[] {
  return news.map((n) => n.slug)
}

export function getAdjacentNews(slug: string): { prev: NewsItem | null; next: NewsItem | null } {
  const sorted = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const index = sorted.findIndex((n) => n.slug === slug)
  return {
    prev: index > 0 ? sorted[index - 1] : null,
    next: index < sorted.length - 1 ? sorted[index + 1] : null,
  }
}
