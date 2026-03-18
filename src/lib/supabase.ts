import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;

  if (!url || !key) {
    console.error(
      `Missing Supabase env vars — SUPABASE_URL: ${!!url}, SUPABASE_SERVICE_KEY: ${!!key}`
    );
    return null;
  }

  return createClient(url, key);
}
