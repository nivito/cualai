-- ============================================================
-- cual.ai — Supabase Schema
-- ============================================================

-- Herramientas
create table if not exists tools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null,
  long_description text,
  url text not null,
  pricing text not null check (pricing in ('gratis', 'freemium', 'pago')),
  price_label text,
  featured boolean default false,
  tags text[] default '{}',
  use_cases text[] default '{}',
  source text,
  verified boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index idx_tools_slug on tools(slug);
create index idx_tools_featured on tools(featured) where featured = true;

-- Categorías
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  icon text,
  description text
);

create index idx_categories_slug on categories(slug);

-- Relación herramienta-categoría
create table if not exists tool_categories (
  tool_id uuid not null references tools(id) on delete cascade,
  category_id uuid not null references categories(id) on delete cascade,
  primary key (tool_id, category_id)
);

-- Noticias capturadas por el agente
create table if not exists news_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text,
  source_url text,
  source_name text,
  published_at timestamptz,
  processed_at timestamptz default now(),
  tools_mentioned text[] default '{}',
  raw_data jsonb
);

create index idx_news_items_processed on news_items(processed_at desc);

-- Suscriptores al newsletter
create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  confirmed boolean default true,
  created_at timestamptz default now(),
  unsubscribe_token text not null unique
);

create index idx_subscribers_email on newsletter_subscribers(email);
create index idx_subscribers_token on newsletter_subscribers(unsubscribe_token);

-- Log de envíos del newsletter
create table if not exists newsletter_sends (
  id uuid primary key default gen_random_uuid(),
  subject text not null,
  content_html text not null,
  sent_at timestamptz default now(),
  subscriber_count integer default 0,
  resend_message_id text
);

-- Log de búsquedas (analytics)
create table if not exists search_logs (
  id uuid primary key default gen_random_uuid(),
  query text not null,
  results_count integer default 0,
  created_at timestamptz default now()
);

create index idx_search_logs_created on search_logs(created_at desc);

-- Herramientas sugeridas por usuarios
create table if not exists tool_suggestions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url text,
  description text,
  suggested_by_email text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz default now()
);

create index idx_tool_suggestions_status on tool_suggestions(status);

-- Votos de herramientas (thumbs up/down)
create table if not exists tool_votes (
  id uuid primary key default gen_random_uuid(),
  tool_slug text not null,
  vote text not null check (vote in ('up', 'down')),
  fingerprint text not null,               -- hash de IP+UA para limitar 1 voto por usuario
  created_at timestamptz default now(),
  unique (tool_slug, fingerprint)          -- 1 voto por herramienta por fingerprint
);

create index idx_tool_votes_slug on tool_votes(tool_slug);
create index idx_tool_votes_fingerprint on tool_votes(fingerprint);

-- Trigger para updated_at en tools
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger tools_updated_at
  before update on tools
  for each row
  execute function update_updated_at();
