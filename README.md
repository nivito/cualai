# cual.ai — Directorio de Herramientas AI

Plataforma de información sobre inteligencia artificial dirigida a personas no técnicas. Directorio curado de herramientas AI, modelos, noticias, glosario y guías, con look & feel de IDE.

🌐 **Producción:** [cual.ai](https://cual.ai)
📦 **Stack:** Next.js 15 · TypeScript · Tailwind CSS v4 · Supabase · Vercel

---

## Configuración local

### 1. Clonar e instalar

```bash
git clone https://github.com/nivito/cualai.git
cd cualai
npm install
```

### 2. Variables de entorno

Copia `.env.local.example` a `.env.local` y completa los valores:

```bash
cp .env.local.example .env.local
```

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clave pública (anon) de Supabase |
| `SUPABASE_URL` | URL del proyecto Supabase (server-side) |
| `SUPABASE_SERVICE_KEY` | Clave service_role (solo server) |
| `ANTHROPIC_API_KEY` | API key de Anthropic (para agentes de contenido) |
| `RESEND_API_KEY` | API key de Resend (para newsletter) |
| `CRON_SECRET` | Token secreto para proteger los endpoints de cron |
| `TWITTER_API_KEY` | Twitter/X API key |
| `TWITTER_API_SECRET` | Twitter/X API secret |
| `TWITTER_ACCESS_TOKEN` | Twitter/X access token |
| `TWITTER_ACCESS_TOKEN_SECRET` | Twitter/X access token secret |
| `MATON_API_KEY` | API key de Maton (scraping Gmail para fuentes de noticias) |

> Los valores reales están en la cuenta de Supabase / Vercel de Nicolas.

### 3. Correr en desarrollo

```bash
npm run dev
# → http://localhost:3000
```

---

## Estructura del proyecto

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── page.tsx            # Home — buscador + herramientas destacadas
│   ├── buscar/             # Resultados de búsqueda (/buscar?q=...)
│   ├── herramienta/[slug]/ # Detalle de herramienta
│   ├── categoria/[slug]/   # Herramientas por categoría
│   ├── modelos/            # Directorio de modelos LLM
│   ├── noticias/           # Noticias AI (estáticas + Supabase)
│   ├── glosario/           # Glosario de términos AI
│   ├── cursos/             # Directorio de cursos AI
│   ├── prompts/            # Guía interactiva de prompts
│   ├── comparar/           # Comparador de herramientas
│   ├── que-es-ia/          # Página explicativa "¿Qué es la IA?"
│   ├── feedback/           # Formulario de feedback
│   ├── api/                # API Routes (ver sección API)
│   └── en/                 # Rutas en inglés (mirror completo)
│       ├── page.tsx
│       ├── tool/[slug]/
│       ├── categoria/[slug]/
│       ├── models/
│       ├── news/
│       ├── glossary/
│       ├── courses/
│       ├── prompts/
│       ├── compare/
│       ├── what-is-ai/
│       └── feedback/
├── components/             # Componentes reutilizables
│   ├── layout/             # Header, Sidebar, Footer
│   ├── tools/              # ToolCard, VoteButtons
│   ├── search/             # SearchBar, BuscarClient
│   ├── news/               # NewsCard, NewsSidebar
│   ├── glosario/           # GlosarioSidebar
│   ├── courses/            # CourseCard
│   ├── comparator/         # ComparatorWidget, CompareButton
│   └── prompts/            # PromptsSidebar, PromptExample
├── data/                   # Datos estáticos (TypeScript)
│   ├── tools.ts            # 136 herramientas AI
│   ├── models.ts           # 48 modelos LLM con benchmarks y pricing
│   ├── news.ts             # 25+ noticias AI curadas (seed + manual)
│   ├── glossary.ts         # 41 términos del glosario
│   ├── courses.ts          # 14 cursos disponibles
│   ├── prompts.ts          # Ejemplos de prompts (4 niveles)
│   └── newsletter-edition-1.ts
├── lib/                    # Utilidades y clientes
│   ├── supabase.ts         # Cliente Supabase
│   ├── resend.ts           # Cliente Resend (newsletter)
│   ├── auth.ts             # Helpers de autenticación (CRON_SECRET)
│   ├── glossary-links.ts   # Auto-linking de términos del glosario en HTML
│   ├── twitter.ts          # Twitter/X API
│   ├── votes.ts            # Sistema de votos (fingerprint IP+UA)
│   └── agents/             # Agentes autónomos de contenido
│       ├── content-agent.ts    # Scraping + generación de artículos
│       ├── twitter-agent.ts    # Auto-posting de noticias a Twitter
│       └── newsletter-agent.ts # Generación y envío de newsletter
├── hooks/                  # React hooks
│   └── useComparator.ts
├── i18n/                   # Internacionalización (ES/EN)
│   ├── index.ts            # getDict(locale) + helpers
│   ├── es.ts               # Diccionario español
│   └── en.ts               # Diccionario inglés
└── scripts/                # Scripts utilitarios
    └── translate-supabase-news.ts
supabase/
├── schema.sql              # Schema completo de la DB
└── migrations/             # Migraciones aplicadas
```

---

## Módulos principales

### 🔧 Herramientas (`/herramienta/[slug]`)
- **136 herramientas** curadas en `src/data/tools.ts`
- Campos: nombre, descripción (ES/EN), URL, pricing, categorías, tags, use cases
- Página de detalle con descripción larga, casos de uso, enlace a la herramienta
- Auto-linking de términos del glosario en las descripciones
- Votación comunitaria (up/down) con fingerprint para evitar duplicados
- Categorías: Agentes & Productividad, Desarrollo, Marketing, Video, Voz & Audio, Imágenes, Educación, Datos & Análisis, Diseño, Ingeniería/AEC, Electrónica, y más

### 🤖 Modelos LLM (`/modelos`)
- **48 modelos** de 13 empresas en `src/data/models.ts`
- Datos por modelo: ventana de contexto, pricing por millón de tokens (input/output), velocidad, inteligencia (1-5), fortalezas/debilidades
- Empresas incluidas: OpenAI, Anthropic, Google, Meta, Mistral, DeepSeek, xAI, Cursor, Alibaba/Qwen, y más
- Página de detalle por modelo (`/modelos/[slug]`)
- Versión EN: `/en/models`

### 📰 Noticias (`/noticias`)
- **Noticias estáticas** en `src/data/news.ts` (~25 artículos curados manualmente)
- **Noticias dinámicas** en Supabase (tabla `news_items`, generadas por agente de contenido)
- Agente autónomo: cron diario a las 5am UTC (12am Bogotá) que genera nuevos artículos con Anthropic Claude
- Ambas fuentes se combinan en la página: Supabase primero, estáticas como fallback
- Artículos con links al glosario, `practicalTakeaway`, y versión ES+EN
- Sidebar con categorías filtrables: Modelos de IA, Herramientas, Empresas, Sociedad, Legislación, Agentes de IA, Casos de Uso
- ISR: `revalidate = 3600` (actualiza cada hora)

### 📖 Glosario (`/glosario`)
- **41 términos** AI con definiciones cortas/largas y ejemplos en ES/EN (`src/data/glossary.ts`)
- Auto-linking: menciones de términos en noticias y herramientas se linkean automáticamente al glosario
- Anchors por término: `/glosario#agente-ai`, `/glosario#llm---large-language-model`, etc.
- Versión EN: `/en/glossary`

### 🎓 Cursos (`/cursos`)
- **14 cursos** AI con filtros por precio y nivel en `src/data/courses.ts`
- Niveles: básico, intermedio, avanzado
- Versión EN: `/en/courses`

### ✍️ Guía de Prompts (`/prompts`)
- Sección educativa con ejemplos interactivos de prompts (4 niveles: zero-shot → few-shot avanzado)
- Sidebar con categorías y sección de "Agent prompting"
- Versión EN: `/en/prompts`

### ⚖️ Comparador (`/comparar`)
- Comparación side-by-side de herramientas AI (selecciona 2-3)
- Versión EN: `/en/compare`

### 💬 Feedback (`/feedback`)
- Formulario con verificación OTP por email
- Almacenado en Supabase (tabla `feedback`)
- Versión EN: `/en/feedback`

### 📧 Newsletter
- Suscripción vía `/api/newsletter/subscribe`
- Template HTML en IDE dark theme, enviado con Resend
- Generado automáticamente cada lunes a las 8am Bogotá (cron)

---

## Internacionalización (i18n)

El sitio es completamente bilingüe (ES/EN):

- **Español:** rutas base (`/`, `/herramienta/[slug]`, `/modelos`, etc.)
- **Inglés:** prefijo `/en/` (`/en/tool/[slug]`, `/en/models`, etc.)
- Language switcher en Header y Sidebar (incluye versión mobile)
- Datos bilingües en archivos `.ts` con campos `nameEn`, `descriptionEn`, etc.
- Noticias de Supabase con `title_en` y `summary_en`

Mapeo de rutas:
| Español | Inglés |
|---|---|
| `/noticias` | `/en/news` |
| `/herramienta/[slug]` | `/en/tool/[slug]` |
| `/glosario` | `/en/glossary` |
| `/modelos` | `/en/models` |
| `/cursos` | `/en/courses` |
| `/prompts` | `/en/prompts` |
| `/comparar` | `/en/compare` |
| `/que-es-ia` | `/en/what-is-ai` |
| `/feedback` | `/en/feedback` |

---

## Base de datos (Supabase)

Tablas principales (ver `supabase/schema.sql` para schema completo):

| Tabla | Descripción |
|---|---|
| `tools` | Herramientas AI |
| `categories` | Categorías de herramientas |
| `tool_categories` | Relación N:N herramienta-categoría |
| `news_items` | Noticias generadas por agente (con `title_en`, `summary_en`, `tweeted_at`) |
| `newsletter_subscribers` | Suscriptores al newsletter |
| `newsletter_sends` | Log de envíos |
| `search_logs` | Log de búsquedas |
| `tool_suggestions` | Herramientas sugeridas por usuarios |
| `tool_votes` | Votos comunitarios (unique: tool_slug + fingerprint) |
| `feedback` | Feedback de usuarios con OTP de verificación |

**RLS habilitado** en todas las tablas. Admin operations usan `service_role` key server-side.

---

## API Routes

| Endpoint | Método | Descripción |
|---|---|---|
| `/api/agent/run-content` | POST | Agente generador de noticias (Vercel cron diario) |
| `/api/agent/run-twitter` | POST | Agente de auto-posting a Twitter (Vercel cron diario) |
| `/api/agent/run-newsletter` | POST | Agente generador y enviador de newsletter (Vercel cron semanal) |
| `/api/tools/[slug]/votes` | GET | Conteo de votos de una herramienta |
| `/api/tools/[slug]/vote` | POST | Registrar voto (up/down) |
| `/api/search/ai` | GET | Búsqueda semántica con Claude |
| `/api/search/log` | POST | Registrar búsqueda para analytics |
| `/api/suggest` | POST | Sugerir nueva herramienta |
| `/api/newsletter/subscribe` | POST | Suscripción al newsletter |
| `/api/newsletter/unsubscribe` | GET | Baja del newsletter |
| `/api/feedback/submit` | POST | Enviar feedback (genera OTP) |
| `/api/feedback/verify` | POST | Verificar OTP del feedback |
| `/api/health` | GET | Health check con diagnóstico de Supabase |

Todos los endpoints de agentes están protegidos con `CRON_SECRET` (Bearer token).

---

## Agentes autónomos (crons)

Configurados en `vercel.json`, se ejecutan automáticamente:

| Agente | Schedule (UTC) | Hora Bogotá | Función |
|---|---|---|---|
| **Content Agent** | `0 5 * * *` | 12am (diario) | Scraping de noticias → genera artículos con Claude → guarda en Supabase |
| **Twitter Agent** | `0 14 * * *` | 9am (diario) | Toma noticias no tuiteadas → Claude genera tweet → publica en Twitter/X |
| **Newsletter Agent** | `0 13 * * 1` | 8am (lunes) | Genera email HTML con top tools + noticias → envía a todos los suscriptores |

### Fuentes del Content Agent
- Hacker News (top 50 stories filtradas por keywords AI)
- Ben's Bites (RSS feed)
- The Rundown AI (RSS feed)
- Gmail vía Maton API (emails de newsletters AI de los últimos 2 días)

---

## Deploy

El proyecto corre en **Vercel** con deploy automático desde `main`.

```bash
# Build local
npm run build

# Vercel CLI (si lo necesitas)
vercel deploy
```

Variables de entorno configuradas en Vercel dashboard (mismas que `.env.local`).

---

## Contexto y decisiones de arquitectura

- **Datos primarios en TypeScript** (`src/data/`): permite edición directa sin migrar DB, con type safety. Supabase es para datos dinámicos (noticias generadas por agente, feedback, suscriptores, votos).
- **Sin autenticación de usuarios**: el sitio es público. Admin operations usan `service_role` key server-side.
- **Votación por fingerprint**: hash de IP + User-Agent para limitar 1 voto por usuario por herramienta, reforzado con unique constraint en Supabase.
- **i18n manual**: sin next-intl ni i18next — rutas duplicadas con `/en/` prefix. Simple y sin overhead.
- **Auto-linking glosario**: `src/lib/glossary-links.ts` inyecta links a `/glosario#term-slug` en HTML de noticias y descripciones de herramientas.
- **CSS**: Tailwind v4 (config via `postcss.config.mjs`, sin `tailwind.config.js`).
- **ISR**: Página de noticias con `revalidate = 3600` — nuevos artículos aparecen en producción en hasta 1 hora tras el deploy.
