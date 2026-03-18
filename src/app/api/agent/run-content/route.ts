import { NextRequest, NextResponse } from "next/server";
import { verifyCronSecret } from "@/lib/auth";
import { runContentAgent } from "@/lib/agents/content-agent";

export async function POST(req: NextRequest) {
  const authError = verifyCronSecret(req);
  if (authError) return authError;

  try {
    const result = await runContentAgent();
    return NextResponse.json(result);
  } catch (err) {
    console.error("Content agent error:", err);
    return NextResponse.json(
      { error: "Content agent failed", details: String(err) },
      { status: 500 }
    );
  }
}
