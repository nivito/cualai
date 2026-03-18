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
}

export const newsCategories: { slug: NewsCategory; label: string }[] = [
  { slug: "modelos-ia", label: "Modelos de IA" },
  { slug: "herramientas", label: "Herramientas" },
  { slug: "empresas", label: "Empresas" },
  { slug: "sociedad", label: "Sociedad" },
  { slug: "legislacion", label: "Legislación" },
]

export const news: NewsItem[] = [
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
