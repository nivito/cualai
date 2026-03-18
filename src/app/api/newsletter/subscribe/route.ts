import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { getResend } from "@/lib/resend";
import crypto from "crypto";

const welcomeEmailHtml = (unsubscribeToken: string) => `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenido a cual.ai</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:'Courier New',Courier,monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 32px 24px;background:#161b22;border:1px solid #30363d;border-radius:8px 8px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="display:inline-block;background:#0d1117;border:1px solid #30363d;border-radius:6px;padding:6px 12px;">
                      <span style="color:#58a6ff;font-size:18px;font-weight:bold;letter-spacing:2px;">cual.ai</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="color:#3fb950;font-size:12px;background:#0d1117;border:1px solid #30363d;padding:4px 10px;border-radius:20px;">
                      ● suscrito
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Terminal prompt -->
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:20px 32px 0;">
              <p style="margin:0;color:#58a6ff;font-size:13px;">$ welcome --user=nuevo_suscriptor</p>
              <p style="margin:4px 0 0;color:#3fb950;font-size:13px;">✓ Suscripción confirmada</p>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:28px 32px;">
              <h1 style="margin:0 0 16px;color:#e6edf3;font-size:22px;font-weight:600;line-height:1.3;">
                Bienvenido a cual.ai
              </h1>
              <p style="margin:0 0 20px;color:#8b949e;font-size:15px;line-height:1.7;">
                Ya eres parte de la comunidad que usa la IA sin complicaciones.
                Cada <strong style="color:#e6edf3;">lunes a las 8am</strong> recibirás un resumen
                con las herramientas AI más relevantes de la semana — explicadas en lenguaje simple,
                sin tecnicismos.
              </p>

              <!-- What to expect -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;background:#161b22;border:1px solid #30363d;border-radius:6px;">
                <tr>
                  <td style="padding:16px 20px 8px;">
                    <p style="margin:0 0 12px;color:#58a6ff;font-size:12px;letter-spacing:1px;text-transform:uppercase;">// Qué recibirás cada semana</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 20px 8px;">
                    <p style="margin:0 0 10px;color:#e6edf3;font-size:14px;">
                      <span style="color:#3fb950;">▸</span>&nbsp; Las <strong>5 herramientas AI</strong> más importantes de la semana
                    </p>
                    <p style="margin:0 0 10px;color:#e6edf3;font-size:14px;">
                      <span style="color:#3fb950;">▸</span>&nbsp; Para qué sirve cada una y cuánto cuesta
                    </p>
                    <p style="margin:0 0 10px;color:#e6edf3;font-size:14px;">
                      <span style="color:#3fb950;">▸</span>&nbsp; Casos de uso reales para tu trabajo o negocio
                    </p>
                    <p style="margin:0 0 16px;color:#e6edf3;font-size:14px;">
                      <span style="color:#3fb950;">▸</span>&nbsp; Todo en menos de 5 minutos de lectura
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0 8px;">
                <tr>
                  <td align="center">
                    <a href="https://cual.ai" style="display:inline-block;background:#1f6feb;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:14px;font-weight:600;letter-spacing:0.5px;">
                      Explorar herramientas →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Categories preview -->
          <tr>
            <td style="background:#161b22;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:20px 32px;">
              <p style="margin:0 0 14px;color:#58a6ff;font-size:12px;letter-spacing:1px;">// Categorías disponibles</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 8px 8px 0;width:33%;">
                    <span style="display:block;background:#0d1117;border:1px solid #30363d;border-radius:4px;padding:8px 10px;color:#8b949e;font-size:12px;">🎨 Imágenes</span>
                  </td>
                  <td style="padding:0 8px 8px 0;width:33%;">
                    <span style="display:block;background:#0d1117;border:1px solid #30363d;border-radius:4px;padding:8px 10px;color:#8b949e;font-size:12px;">📹 Video</span>
                  </td>
                  <td style="padding:0 0 8px 0;width:33%;">
                    <span style="display:block;background:#0d1117;border:1px solid #30363d;border-radius:4px;padding:8px 10px;color:#8b949e;font-size:12px;">💻 Desarrollo</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 8px 0 0;">
                    <span style="display:block;background:#0d1117;border:1px solid #30363d;border-radius:4px;padding:8px 10px;color:#8b949e;font-size:12px;">📈 Marketing</span>
                  </td>
                  <td style="padding:0 8px 0 0;">
                    <span style="display:block;background:#0d1117;border:1px solid #30363d;border-radius:4px;padding:8px 10px;color:#8b949e;font-size:12px;">🎤 Voz & Audio</span>
                  </td>
                  <td>
                    <span style="display:block;background:#0d1117;border:1px solid #30363d;border-radius:4px;padding:8px 10px;color:#8b949e;font-size:12px;">📊 Datos & +</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#161b22;border:1px solid #30363d;border-top:none;border-radius:0 0 8px 8px;padding:20px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;color:#484f58;font-size:11px;line-height:1.6;">
                      Recibiste este email porque te suscribiste en <a href="https://cual.ai" style="color:#58a6ff;text-decoration:none;">cual.ai</a><br>
                      <a href="https://cual.ai/api/newsletter/unsubscribe?token=${unsubscribeToken}" style="color:#484f58;text-decoration:underline;">Darse de baja</a>
                    </p>
                  </td>
                  <td align="right">
                    <span style="color:#484f58;font-size:11px;">cual.ai © 2025</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

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

    const { error } = await supabase
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

    // Send welcome email
    try {
      const resend = getResend();
      if (resend) {
        await resend.emails.send({
          from: "cual.ai <onboarding@resend.dev>",
          to: email,
          subject: "✓ Bienvenido a cual.ai — Ya estás dentro",
          html: welcomeEmailHtml(unsubscribeToken),
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
