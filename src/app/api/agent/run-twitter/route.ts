import { NextRequest, NextResponse } from "next/server";
import { verifyCronSecret } from "@/lib/auth";
import { runTwitterAgent } from "@/lib/agents/twitter-agent";

export async function POST(req: NextRequest) {
  const authError = verifyCronSecret(req);
  if (authError) return authError;

  try {
    const result = await runTwitterAgent();
    return NextResponse.json(result);
  } catch (err) {
    console.error("Twitter agent error:", err);
    return NextResponse.json(
      { error: "Twitter agent failed", details: String(err) },
      { status: 500 }
    );
  }
}
