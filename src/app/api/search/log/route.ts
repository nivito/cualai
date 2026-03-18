import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { query, results_count } = await req.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Query requerido" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json({ ok: true }); // Don't fail on analytics
    }

    // Fire and forget — don't block on the result
    supabase
      .from("search_logs")
      .insert({ query: query.trim(), results_count: results_count ?? 0 })
      .then(({ error }) => {
        if (error) console.error("Search log error:", error);
      });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Search log error:", err);
    return NextResponse.json({ ok: true }); // Don't fail on analytics
  }
}
