// ============================================================
// cual.ai — Noticias Seed Data
// ============================================================

export type NewsCategory = "modelos-ia" | "herramientas" | "empresas" | "sociedad" | "legislacion"

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
]

export const news: NewsItem[] = [
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
