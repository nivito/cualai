import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { getResend } from "@/lib/resend";

const otpEmailHtml = (otp: string) => `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tu código de verificación — cual.ai</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:'Courier New',Courier,monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 32px 24px;background:#161b22;border:1px solid #30363d;border-radius:8px 8px 0 0;">
              <span style="display:inline-block;background:#0d1117;border:1px solid #30363d;border-radius:6px;padding:6px 12px;">
                <span style="color:#58a6ff;font-size:18px;font-weight:bold;letter-spacing:2px;">cual.ai</span>
              </span>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:28px 32px;">
              <p style="margin:0 0 16px;color:#e6edf3;font-size:16px;font-weight:600;line-height:1.4;">
                Gracias por tu feedback.
              </p>
              <p style="margin:0 0 8px;color:#8b949e;font-size:14px;line-height:1.6;">
                Tu código de verificación es:
              </p>
              <div style="margin:20px 0;text-align:center;">
                <span style="display:inline-block;background:#0d1117;border:2px solid #30363d;border-radius:8px;padding:16px 32px;font-size:32px;font-weight:bold;color:#3fb950;letter-spacing:8px;font-family:'Courier New',Courier,monospace;">
                  ${otp}
                </span>
              </div>
              <p style="margin:16px 0 0;color:#8b949e;font-size:13px;line-height:1.6;">
                Este código expira en 30 minutos.
              </p>
              <p style="margin:12px 0 0;color:#484f58;font-size:12px;line-height:1.6;">
                Si no enviaste feedback, ignora este mensaje.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#161b22;border:1px solid #30363d;border-top:none;border-radius:0 0 8px 8px;padding:20px 32px;">
              <p style="margin:0;color:#484f58;font-size:11px;">
                <a href="https://cual.ai" style="color:#58a6ff;text-decoration:none;">cual.ai</a> — El directorio de herramientas AI en español
              </p>
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
    const message = body.message?.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    if (!message || message.length < 20) {
      return NextResponse.json(
        { error: "El mensaje debe tener al menos 20 caracteres" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json({ error: "Servicio no disponible" }, { status: 503 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otp_expires_at = new Date(Date.now() + 30 * 60 * 1000).toISOString();

    const { error } = await supabase
      .from("feedback")
      .insert({ email, message, otp, otp_expires_at, verified: false });

    if (error) {
      console.error("Feedback insert error:", error);
      return NextResponse.json(
        { error: "Error al guardar feedback" },
        { status: 500 }
      );
    }

    try {
      const resend = getResend();
      if (resend) {
        await resend.emails.send({
          from: "cual.ai <noreply@cual.ai>",
          to: email,
          subject: "Tu código de verificación — cual.ai",
          html: otpEmailHtml(otp),
        });
      }
    } catch (emailErr) {
      console.error("OTP email failed:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Feedback submit error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
