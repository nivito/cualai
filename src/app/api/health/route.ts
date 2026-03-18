import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    supabase_url: !!process.env.SUPABASE_URL,
    supabase_service_key: !!process.env.SUPABASE_SERVICE_KEY,
    resend_key: !!process.env.RESEND_API_KEY,
    anthropic_key: !!process.env.ANTHROPIC_API_KEY,
    cron_secret: !!process.env.CRON_SECRET,
    node_env: process.env.NODE_ENV,
  });
}
