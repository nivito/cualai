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
│   ├── modelos/            # Comparador de modelos LLM
│   ├── noticias/           # Noticias AI (estáticas + Supabase)
│   ├── glosario/           # Glosario de términos AI
│   ├── cursos/             # Directorio de cursos AI
│   ├── prompts/            # Guía interactiva de prompts
│   ├── comparar/           # Comparador de herramientas
│   ├── que-es-ia/          # Página explicativa "¿Qué es la IA?"
│   ├── feedback/           # Formulario de feedback
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
│   ├── tools/              # ToolCard, ToolDetail
│   ├── search/             # SearchBar, SearchResults
│   ├── news/               # NewsCard, NewsSidebar
│   ├── glosario/           # GlossaryCard
│   ├── courses/            # CourseCard
│   ├── comparator/         # ComparatorTable
│   └── prompts/            # PromptsSidebar, PromptCard
├── data/                   # Datos estáticos (TypeScript)
│   ├── tools.ts            # Herramientas AI (100+ entries)
│   ├── models.ts           # Modelos LLM con benchmarks
│   ├── news.ts             # Noticias AI curadas
│   ├── glossary.ts         # Glosario de términos
│   ├── courses.ts          # Cursos disponibles
│   ├── prompts.ts          # Ejemplos de prompts
│   └── newsletter-edition-1.ts
├── lib/                    # Utilidades y clientes
│   ├── supabase.ts         # Cliente Supabase
│   ├── resend.ts           # Cliente Resend (newsletter)
│   ├── auth.ts             # Helpers de autenticación
│   ├── glossary-links.ts   # Auto-linking de términos del glosario
│   ├── twitter.ts          # Twitter/X API (feeds de noticias)
│   ├── votes.ts            # Sistema de votos en herramientas
│   └── agents/             # Agentes autónomos de contenido
├── hooks/                  # React hooks
├── i18n/                   # Internacionalización (ES/EN)
└── scripts/                # Scripts utilitarios
    └── translate-supabase-news.ts
supabase/
├── schema.sql              # Schema completo de la DB
└── migrations/             # Migraciones aplicadas
```

---

## Módulos principales

### 🔧 Herramientas (`/herramienta/[slug]`)
- 100+ herramientas curadas en `src/data/tools.ts`
- Campos: nombre, descripción (ES/EN), URL, pricing, categorías, tags, use cases
- Página de detalle con descripción larga, casos de uso, enlace a la herramienta
- Auto-linking de términos del glosario en las descripciones
- Categorías: Texto, Código, Imagen, Video, Audio, Marketing, Productividad, Datos, Diseño, Educación, Ingeniería/AEC, Electrónica, y más

### 🤖 Modelos LLM (`/modelos`)
- Comparador de modelos con benchmarks: ELO, MMLU, contexto, pricing
- Datos curados en `src/data/models.ts` con actualizaciones semanales
- Página de detalle por modelo (`/modelos/[slug]`)
- Versión EN: `/en/models`
- Actualización automática: cron cada lunes 10am Bogotá

### 📰 Noticias (`/noticias`)
- Noticias estáticas en `src/data/news.ts` (curadas manualmente)
- Noticias dinámicas en Supabase (tabla `news_items`, generadas por agente)
- Agente autónomo: cron diario 12am Bogotá que genera nuevos artículos con Anthropic
- Auto-linking de términos del glosario en los artículos
- Sidebar con categorías filtrables
- Versión EN con `title_en` + `summary_en` en Supabase

### 📖 Glosario (`/glosario`)
- Términos AI con definiciones en ES/EN (`src/data/glossary.ts`)
- Auto-linking: menciones de términos en noticias y herramientas se linkean automáticamente
- Versión EN: `/en/glossary`

### 🎓 Cursos (`/cursos`)
- Directorio de cursos AI con filtros por precio y nivel
- Datos en `src/data/courses.ts`
- Versión EN: `/en/courses`

### ✍️ Guía de Prompts (`/prompts`)
- Sección educativa con ejemplos interactivos de prompts
- Sidebar con categorías
- Sección de "Agent prompting"
- Versión EN: `/en/prompts`

### ⚖️ Comparador (`/comparar`)
- Comparación side-by-side de herramientas AI
- Versión EN: `/en/compare`

### 💬 Feedback (`/feedback`)
- Formulario de feedback almacenado en Supabase (tabla `feedback`)
- RLS habilitado: anon solo puede INSERT
- Cron de revisión: lun-vie 6am-6pm Bogotá (agent revisa y notifica)
- Versión EN: `/en/feedback`

### 📧 Newsletter
- Suscripción vía `/api/newsletter/subscribe`
- Template HTML en IDE dark theme
- Envío con Resend API
- Welcome email automático al suscribirse

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
| `tools` | Herramientas AI (sync manual desde `data/tools.ts`) |
| `categories` | Categorías de herramientas |
| `tool_categories` | Relación N:N herramienta-categoría |
| `news_items` | Noticias generadas por agente (+ `title_en`, `summary_en`) |
| `newsletter_subscribers` | Suscriptores al newsletter |
| `newsletter_sends` | Log de envíos |
| `feedback` | Feedback de usuarios (RLS: anon INSERT, service_role full) |
| `tool_embeddings` | Embeddings para búsqueda semántica (lectura pública) |
| `searches` | Log de búsquedas |

**RLS habilitado** en todas las tablas. Políticas principales:
- `feedback`: anon puede INSERT, service_role lee todo
- `tool_embeddings`: lectura pública, escritura solo service_role
- `news_items`: lectura pública, escritura solo service_role

---

## API Routes

| Endpoint | Método | Descripción |
|---|---|---|
| `/api/tools` | GET | Búsqueda con full-text (`?q=&category=`) |
| `/api/tools/[slug]` | GET | Detalle de herramienta |
| `/api/categories` | GET | Listado de categorías |
| `/api/news` | GET | Noticias recientes |
| `/api/newsletter/subscribe` | POST | Suscripción al newsletter |
| `/api/newsletter/send` | POST | Envío newsletter (protegido con CRON_SECRET) |
| `/api/cron/news-agent` | GET | Agente generador de noticias (Vercel cron) |
| `/api/cron/content-agent` | GET | Agente de actualización de contenido |
| `/api/feedback` | POST | Guardar feedback de usuario |
| `/api/health` | GET | Health check con diagnóstico de Supabase |

---

## Agentes autónomos (crons)

| Agente | Frecuencia | Función |
|---|---|---|
| **News Agent** | Diario 12am Bogotá (Vercel cron) | Genera nuevos artículos de noticias AI con Anthropic |
| **Model Update** | Lunes 10am Bogotá (OpenClaw cron) | Actualiza modelos en `data/models.ts` con datos de llm-stats.com |
| **Feedback Review** | Lun-vie 6am-6pm Bogotá (OpenClaw cron, cada hora) | Revisa feedbacks nuevos en Supabase y notifica |

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

- **Datos primarios en TypeScript** (`src/data/`): permite edición directa sin migrar DB, con type safety. Supabase es para datos dinámicos (noticias generadas, feedback, suscriptores).
- **Sin autenticación de usuarios**: el sitio es público. Admin operations usan `service_role` key server-side.
- **Búsqueda semántica**: embeddings en Supabase con `pgvector` para búsqueda inteligente de herramientas.
- **i18n manual**: sin next-intl ni i18next — rutas duplicadas con `/en/` prefix. Simple y sin overhead.
- **Auto-linking glosario**: `src/lib/glossary-links.ts` procesa HTML de noticias/herramientas en build time.
- **CSS**: Tailwind v4 (config via `postcss.config.mjs`, sin `tailwind.config.js`).
