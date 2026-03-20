import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body.email?.trim().toLowerCase();
    const otp = body.otp?.trim();

    if (!email || !otp) {
      return NextResponse.json({ error: "Email y código son requeridos" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json({ error: "Servicio no disponible" }, { status: 503 });
    }

    // Find most recent unverified feedback for this email with valid OTP
    const { data: feedback, error: fetchError } = await supabase
      .from("feedback")
      .select("*")
      .eq("email", email)
      .eq("verified", false)
      .gt("otp_expires_at", new Date().toISOString())
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (fetchError || !feedback) {
      return NextResponse.json(
        { error: "Código inválido o expirado" },
        { status: 400 }
      );
    }

    if (feedback.otp !== otp) {
      return NextResponse.json(
        { error: "Código inválido o expirado" },
        { status: 400 }
      );
    }

    // Mark feedback as verified
    const { error: updateError } = await supabase
      .from("feedback")
      .update({ verified: true })
      .eq("id", feedback.id);

    if (updateError) {
      console.error("Feedback verify update error:", updateError);
      return NextResponse.json({ error: "Error al verificar" }, { status: 500 });
    }

    // Subscribe to newsletter
    try {
      const unsubscribeToken = crypto.randomUUID();
      await supabase
        .from("newsletter_subscribers")
        .insert({ email, confirmed: true, unsubscribe_token: unsubscribeToken });
    } catch {
      // Already subscribed — ignore duplicate error
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Feedback verify error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
