import { NextResponse } from "next/server";

export async function GET() {
  const serviceKey = process.env.SUPABASE_SERVICE_KEY || "";
  return NextResponse.json({
    supabase_url: !!process.env.SUPABASE_URL,
    supabase_service_key: !!serviceKey,
    service_key_prefix: serviceKey.substring(0, 20),
    service_key_length: serviceKey.length,
    resend_key: !!process.env.RESEND_API_KEY,
    node_env: process.env.NODE_ENV,
  });
}
