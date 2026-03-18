import { NextRequest, NextResponse } from "next/server";
import { verifyCronSecret } from "@/lib/auth";
import { runNewsletterAgent } from "@/lib/agents/newsletter-agent";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const isTest = url.searchParams.get("test") === "true";
  const testEmail = url.searchParams.get("email");

  // Test mode: no CRON_SECRET needed, just send to specified email
  if (isTest && testEmail) {
    try {
      const result = await runNewsletterAgent({ testEmail });
      return NextResponse.json({ mode: "test", ...result });
    } catch (err) {
      return NextResponse.json(
        { error: "Newsletter test failed", details: String(err) },
        { status: 500 }
      );
    }
  }

  // Production mode: requires CRON_SECRET
  const authError = verifyCronSecret(req);
  if (authError) return authError;

  try {
    const result = await runNewsletterAgent();
    return NextResponse.json({ mode: "production", ...result });
  } catch (err) {
    console.error("Newsletter agent error:", err);
    return NextResponse.json(
      { error: "Newsletter agent failed", details: String(err) },
      { status: 500 }
    );
  }
}
