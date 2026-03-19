import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json({ up: 0, down: 0, total: 0, upPct: 0 });
  }

  const { data, error } = await supabase
    .from("tool_votes")
    .select("vote")
    .eq("tool_slug", slug);

  if (error || !data) {
    return NextResponse.json({ up: 0, down: 0, total: 0, upPct: 0 });
  }

  const up = data.filter((r) => r.vote === "up").length;
  const down = data.filter((r) => r.vote === "down").length;
  const total = up + down;
  const upPct = total > 0 ? Math.round((up / total) * 100) : 0;

  return NextResponse.json({ up, down, total, upPct });
}
