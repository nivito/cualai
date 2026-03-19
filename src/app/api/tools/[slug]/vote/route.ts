import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { getSupabaseAdmin } from "@/lib/supabase";

function getFingerprint(req: NextRequest): string {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const ua = req.headers.get("user-agent") || "unknown";
  return createHash("sha256")
    .update(`${ip}:${ua}`)
    .digest("hex")
    .slice(0, 32);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const body = await req.json().catch(() => ({}));
  const vote = body?.vote;

  if (vote !== "up" && vote !== "down") {
    return NextResponse.json({ error: "vote must be 'up' or 'down'" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
  }

  const fingerprint = getFingerprint(req);

  // Upsert — si ya votó, cambia el voto
  const { error } = await supabase.from("tool_votes").upsert(
    { tool_slug: slug, vote, fingerprint },
    { onConflict: "tool_slug,fingerprint" }
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Devolver conteo actualizado
  const { data } = await supabase
    .from("tool_votes")
    .select("vote")
    .eq("tool_slug", slug);

  const up = (data ?? []).filter((r) => r.vote === "up").length;
  const down = (data ?? []).filter((r) => r.vote === "down").length;
  const total = up + down;
  const upPct = total > 0 ? Math.round((up / total) * 100) : 0;

  return NextResponse.json({ up, down, total, upPct, yourVote: vote });
}
