import { NextRequest, NextResponse } from "next/server";
import { verifyCronSecret } from "@/lib/auth";
import { runNewsletterAgent } from "@/lib/agents/newsletter-agent";

export async function POST(req: NextRequest) {
  const authError = verifyCronSecret(req);
  if (authError) return authError;

  try {
    const result = await runNewsletterAgent();
    return NextResponse.json(result);
  } catch (err) {
    console.error("Newsletter agent error:", err);
    return NextResponse.json(
      { error: "Newsletter agent failed", details: String(err) },
      { status: 500 }
    );
  }
}
