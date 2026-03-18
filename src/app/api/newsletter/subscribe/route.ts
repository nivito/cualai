import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { getResend } from "@/lib/resend";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body.email?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const unsubscribeToken = crypto.randomUUID();

    const { error } = await supabase
      .from("newsletter_subscribers")
      .upsert(
        { email, confirmed: true, unsubscribe_token: unsubscribeToken },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Error al suscribir" }, { status: 500 });
    }

    // Send welcome email
    try {
      const resend = getResend();
      await resend.emails.send({
        from: "cual.ai <hola@cual.ai>",
        to: email,
        subject: "Bienvenido a cual.ai — Las mejores herramientas AI cada semana",
        html: `
          <div style="font-family: monospace; background: #0d1117; color: #e6edf3; padding: 32px; max-width: 600px;">
            <h1 style="color: #58a6ff; font-size: 20px;">cual.ai</h1>
            <p>¡Gracias por suscribirte!</p>
            <p>Cada lunes recibirás un resumen con las herramientas AI más útiles de la semana.</p>
            <p style="color: #8b949e; font-size: 12px; margin-top: 32px;">
              Si no quieres recibir más emails, puedes
              <a href="${process.env.NEXT_PUBLIC_SUPABASE_URL ? "https://cual.ai" : "https://cual.ai"}/api/newsletter/unsubscribe?token=${unsubscribeToken}" style="color: #58a6ff;">darte de baja aquí</a>.
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      // Don't fail the subscription if the welcome email fails
      console.error("Welcome email error:", emailError);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
