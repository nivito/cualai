import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { getResend } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, url, description, email } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Nombre requerido" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json({ error: "Servicio no disponible" }, { status: 503 });
    }

    const { error } = await supabase.from("tool_suggestions").insert({
      name: name.trim(),
      url: url?.trim() || null,
      description: description?.trim() || null,
      suggested_by_email: email?.trim().toLowerCase() || null,
      status: "pending",
    });

    if (error) {
      console.error("Suggestion insert error:", error);
      return NextResponse.json({ error: "Error al guardar sugerencia" }, { status: 500 });
    }

    // Notify admin via email
    try {
      const resend = getResend();
      await resend.emails.send({
        from: "cual.ai <hola@cual.ai>",
        to: "admin@cual.ai",
        subject: `Nueva sugerencia de herramienta: ${name.trim()}`,
        html: `
          <div style="font-family: monospace; background: #0d1117; color: #e6edf3; padding: 32px;">
            <h2 style="color: #58a6ff;">Nueva herramienta sugerida</h2>
            <p><strong>Nombre:</strong> ${name.trim()}</p>
            <p><strong>URL:</strong> ${url || "No proporcionada"}</p>
            <p><strong>Descripción:</strong> ${description || "No proporcionada"}</p>
            <p><strong>Email:</strong> ${email || "No proporcionado"}</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Admin notification error:", emailError);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Suggest error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
