import { NextRequest, NextResponse } from "next/server";

// Ruta temporal de migración — eliminar después de ejecutar
const MIGRATION_SECRET = process.env.CRON_SECRET || "";

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (!auth || auth !== `Bearer ${MIGRATION_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

  if (!SUPABASE_URL || !SERVICE_KEY) {
    return NextResponse.json({ error: "Missing env vars" }, { status: 500 });
  }

  // Usar el endpoint de PostgreSQL directo via supabase-js con fetch
  // El service_role puede ejecutar DDL via el endpoint de admin
  const sql = `
    CREATE TABLE IF NOT EXISTS tool_votes (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      tool_slug text NOT NULL,
      vote text NOT NULL CHECK (vote IN ('up', 'down')),
      fingerprint text NOT NULL,
      created_at timestamptz DEFAULT now(),
      UNIQUE (tool_slug, fingerprint)
    );
    CREATE INDEX IF NOT EXISTS idx_tool_votes_slug ON tool_votes(tool_slug);
    CREATE INDEX IF NOT EXISTS idx_tool_votes_fingerprint ON tool_votes(fingerprint);
  `;

  // Supabase expone un endpoint SQL via el project management API
  const res = await fetch(`${SUPABASE_URL}/pg/query`, {
    method: "POST",
    headers: {
      "apikey": SERVICE_KEY,
      "Authorization": `Bearer ${SERVICE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: sql }),
  });

  const text = await res.text();
  return NextResponse.json({ status: res.status, body: text });
}
