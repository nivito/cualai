# cual.ai — Plan de Desarrollo

## Visión
Un sitio web tipo "buscador de herramientas AI" donde cualquier persona describe su problema/objetivo y obtiene recomendaciones de herramientas de IA relevantes. Look & feel de IDE (fondo oscuro, tipografía monospace, minimalista).

---

## Arquitectura General

```
┌─────────────────────────────────────────────────────┐
│                    FRONTEND                          │
│  Next.js 14 (App Router) + Tailwind CSS             │
│  Look: IDE-style, dark theme, monospace              │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │  Search Bar (hero)                           │    │
│  │  "¿Qué quieres lograr con IA?"              │    │
│  ├─────────────────────────────────────────────┤    │
│  │  Categorías (tabs/sidebar tipo IDE)          │    │
│  │  > Presentaciones  > Video  > Voz            │    │
│  │  > Fotos  > Marketing  > Desarrollo          │    │
│  │  > Finanzas  > Texto  > Audio  > Datos       │    │
│  ├─────────────────────────────────────────────┤    │
│  │  Resultados (cards estilo terminal)          │    │
│  │  Tool name | Categoría | Rating | Precio     │    │
│  ├─────────────────────────────────────────────┤    │
│  │  Noticias / Newsletter signup                │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
           │                    │
           ▼                    ▼
┌──────────────────┐  ┌──────────────────────────┐
│   Supabase DB    │  │  Agente Autónomo (Cron)  │
│  - tools         │  │  - Scraping fuentes      │
│  - categories    │  │  - Consolidar noticias   │
│  - news          │  │  - Actualizar DB         │
│  - subscribers   │  │  - Enviar newsletter     │
│  - searches      │  └──────────────────────────┘
└──────────────────┘
```

---

## Fases de Desarrollo

### FASE 1 — MVP Frontend (Semana 1-2)
> Sitio estático funcional con datos seed

1. **Setup del proyecto**
   - Next.js 14 con App Router + TypeScript
   - Tailwind CSS con tema dark por defecto
   - Fuente: JetBrains Mono / Fira Code
   - Deploy en Vercel

2. **Layout IDE-style**
   - Header: logo `cual.ai` + search bar prominente
   - Sidebar izquierda: categorías como "archivos" de un IDE
   - Área principal: resultados en grid/lista
   - Footer: newsletter signup + créditos
   - Mobile: sidebar colapsa a menú hamburguesa

3. **Páginas**
   - `/` — Home con buscador hero + categorías destacadas
   - `/buscar?q=...` — Resultados de búsqueda
   - `/categoria/[slug]` — Herramientas por categoría
   - `/herramienta/[slug]` — Detalle de herramienta
   - `/noticias` — Feed de noticias AI
   - `/newsletter` — Suscripción

4. **Categorías iniciales**
   - Presentaciones, Video, Edición de fotos, Voz/Audio
   - Marketing, Desarrollo/Código, Análisis financiero
   - Texto/Escritura, Diseño, Productividad, Educación
   - Datos/Analytics, Música, 3D/Modelado

5. **Datos seed**
   - 50-100 herramientas curadas manualmente al inicio
   - Campos: nombre, descripción, URL, categoría(s), precio, rating, logo

### FASE 2 — Backend + Base de Datos (Semana 2-3)
> Persistencia y búsqueda real

1. **Supabase setup**
   - Tabla `tools`: id, name, slug, description, url, logo_url, pricing, rating, featured, created_at
   - Tabla `categories`: id, name, slug, icon, description
   - Tabla `tool_categories`: tool_id, category_id (many-to-many)
   - Tabla `news`: id, title, summary, source_url, source_name, published_at
   - Tabla `subscribers`: id, email, confirmed, created_at
   - Tabla `search_logs`: id, query, results_count, created_at

2. **API Routes (Next.js)**
   - `GET /api/tools?q=&category=&page=` — Búsqueda con full-text search
   - `GET /api/tools/[slug]` — Detalle
   - `GET /api/categories` — Listado
   - `GET /api/news` — Noticias recientes
   - `POST /api/newsletter/subscribe` — Suscripción
   - `POST /api/search` — Log de búsquedas

3. **Búsqueda inteligente**
   - Full-text search en Supabase (pg_trgm)
   - Búsqueda por descripción de problema, no solo nombre
   - Autocompletado con búsquedas populares

### FASE 3 — Agente Autónomo (Semana 3-4)
> El diferenciador: actualización automática del catálogo

1. **Scraper de fuentes**
   - Product Hunt (nuevas herramientas AI)
   - There's An AI For That (theresanaiforthat.com)
   - Futurpedia
   - Twitter/X (cuentas clave de AI)
   - Blogs: The Verge AI, TechCrunch AI, Ben's Bites
   - Reddit: r/artificial, r/ChatGPT

2. **Pipeline del agente (Cron job diario)**
   ```
   1. Scrape fuentes → raw data
   2. Claude API: clasificar, extraer info, generar descripción
   3. Deduplicar contra DB existente
   4. Insertar nuevas herramientas con status "pendiente"
   5. Consolidar noticias del día
   6. Generar resumen semanal para newsletter
   ```

3. **Newsletter automático**
   - Resend o SendGrid para envío
   - Template: "Las 5 herramientas AI de la semana"
   - Frecuencia: semanal (lunes)
   - Include: nuevas herramientas, noticias destacadas, herramienta de la semana

4. **Moderación**
   - Dashboard admin simple para aprobar/rechazar herramientas del agente
   - Flag automático para duplicados o baja calidad

### FASE 4 — Features Avanzados (Semana 5+)
> Engagement y comunidad

1. **Sugerencias de usuarios**
   - Formulario "Sugiere una herramienta"
   - Votación/rating de herramientas

2. **Comparador**
   - Seleccionar 2-3 herramientas y comparar features/precios

3. **"¿Qué herramienta debo usar?"**
   - Wizard interactivo: responde 3-4 preguntas → recomendación personalizada
   - Powered by Claude API

4. **Analytics dashboard**
   - Herramientas más buscadas
   - Categorías trending
   - Búsquedas sin resultados (oportunidad)

---

## Stack Técnico

| Componente      | Tecnología                     |
|----------------|--------------------------------|
| Frontend       | Next.js 14, TypeScript         |
| Estilos        | Tailwind CSS, tema dark        |
| Base de datos  | Supabase (PostgreSQL)          |
| Auth (admin)   | Supabase Auth                  |
| Hosting        | Vercel                         |
| Agente/Cron    | Vercel Cron + Edge Functions   |
| AI             | Claude API (clasificación)     |
| Email          | Resend                         |
| Analytics      | Plausible (privacy-first)      |
| Dominio        | cual.ai (pendiente compra)     |

---

## Estructura de Archivos

```
cualai/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Layout global (IDE theme)
│   │   ├── page.tsx                # Home + hero search
│   │   ├── buscar/page.tsx         # Resultados búsqueda
│   │   ├── categoria/[slug]/page.tsx
│   │   ├── herramienta/[slug]/page.tsx
│   │   ├── noticias/page.tsx
│   │   ├── newsletter/page.tsx
│   │   └── api/
│   │       ├── tools/route.ts
│   │       ├── categories/route.ts
│   │       ├── news/route.ts
│   │       ├── newsletter/route.ts
│   │       └── agent/              # Cron endpoints
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── search/
│   │   │   ├── SearchBar.tsx
│   │   │   └── SearchResults.tsx
│   │   ├── tools/
│   │   │   ├── ToolCard.tsx
│   │   │   └── ToolDetail.tsx
│   │   ├── categories/
│   │   │   └── CategoryList.tsx
│   │   └── news/
│   │       └── NewsFeed.tsx
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── types.ts
│   │   └── agent/
│   │       ├── scraper.ts
│   │       ├── classifier.ts
│   │       └── newsletter.ts
│   └── data/
│       └── seed.ts                 # Datos iniciales
├── public/
│   └── logos/                      # Logos de herramientas
├── tailwind.config.ts
├── next.config.js
├── package.json
└── PLAN.md
```

---

## Diseño Visual (IDE Theme)

```
┌──────────────────────────────────────────────────────────┐
│  ■ cual.ai                              [dark] [login]   │
│──────────────────────────────────────────────────────────│
│  ┌────────────────────────────────────────────────────┐  │
│  │ > ¿Qué quieres lograr con IA? _                   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  EXPLORAR  │  CATEGORÍAS                                 │
│  ──────────┼─────────────────────────────────────────── │
│  📊 Datos  │  ┌─────────┐ ┌─────────┐ ┌─────────┐     │
│  🎨 Diseño │  │ Midj... │ │ Runway  │ │ Claude  │     │
│  💻 Code   │  │ Imagen  │ │ Video   │ │ Texto   │     │
│  🎤 Voz    │  │ Free... │ │ $12/mo  │ │ Free... │     │
│  📹 Video  │  └─────────┘ └─────────┘ └─────────┘     │
│  📝 Texto  │                                            │
│  📈 Mktng  │  ┌─────────┐ ┌─────────┐ ┌─────────┐     │
│  💰 Finzas │  │ Suno    │ │ Gamma   │ │ Cursor  │     │
│  🎵 Audio  │  │ Música  │ │ Present │ │ Código  │     │
│            │  │ Free... │ │ Free... │ │ $20/mo  │     │
│            │  └─────────┘ └─────────┘ └─────────┘     │
│──────────────────────────────────────────────────────────│
│  Newsletter: [tu@email.com] [Suscribir]                  │
└──────────────────────────────────────────────────────────┘
```

Colores:
- Fondo: `#0d1117` (GitHub dark)
- Texto: `#e6edf3`
- Accent: `#58a6ff` (azul)
- Borde: `#30363d`
- Cards: `#161b22`
- Hover: `#1f2937`

---

## Orden de Ejecución Inmediato

Para empezar hoy, implementaré la **Fase 1** en este orden:

1. ✅ Setup Next.js + Tailwind + TypeScript
2. ✅ Configurar tema dark IDE-style
3. ✅ Crear layout principal (header, sidebar, main)
4. ✅ Implementar SearchBar con diseño terminal
5. ✅ Crear componente ToolCard
6. ✅ Crear datos seed (30+ herramientas)
7. ✅ Página home con búsqueda + categorías
8. ✅ Página de resultados de búsqueda
9. ✅ Página de categoría
10. ✅ Página de detalle de herramienta
11. ✅ Responsive design (mobile-first)
12. ✅ Newsletter signup form (UI only)
