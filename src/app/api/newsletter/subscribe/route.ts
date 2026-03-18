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
    if (!supabase) {
      return NextResponse.json({ error: "Servicio no disponible" }, { status: 503 });
    }

    const unsubscribeToken = crypto.randomUUID();

    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email, confirmed: true, unsubscribe_token: unsubscribeToken })
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ ok: true, message: "Ya estás suscrito" });
      }
      return NextResponse.json(
        { error: "Error al suscribir", detail: error.message, code: error.code },
        { status: 500 }
      );
    }

    // Send welcome email (best-effort)
    try {
      const resend = getResend();
      if (resend) {
        await resend.emails.send({
          from: "cual.ai <onboarding@resend.dev>",
          to: email,
          subject: "Bienvenido a cual.ai — Las mejores herramientas AI cada semana",
          html: `
            <div style="font-family:monospace;background:#0d1117;color:#e6edf3;padding:32px;max-width:600px;">
              <h1 style="color:#58a6ff;font-size:20px;">cual.ai</h1>
              <p>¡Gracias por suscribirte!</p>
              <p>Cada lunes recibirás un resumen con las herramientas AI más útiles de la semana.</p>
              <p style="color:#8b949e;font-size:12px;margin-top:32px;">
                <a href="https://cual.ai/api/newsletter/unsubscribe?token=${unsubscribeToken}" style="color:#58a6ff;">Darse de baja</a>
              </p>
            </div>
          `,
        });
      }
    } catch (emailErr) {
      console.error("Welcome email failed:", emailErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Error interno", detail: String(err) }, { status: 500 });
  }
}
