import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token requerido" }, { status: 400 });
  }

  try {
    const supabase = getSupabaseAdmin();

    const { error } = await supabase
      .from("newsletter_subscribers")
      .update({ confirmed: false })
      .eq("unsubscribe_token", token);

    if (error) {
      console.error("Unsubscribe error:", error);
      return NextResponse.json({ error: "Error al procesar" }, { status: 500 });
    }

    return new NextResponse(
      `<!DOCTYPE html>
      <html lang="es">
        <head><meta charset="utf-8"><title>cual.ai — Desuscrito</title></head>
        <body style="font-family: monospace; background: #0d1117; color: #e6edf3; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0;">
          <div style="text-align: center;">
            <h1 style="color: #58a6ff;">cual.ai</h1>
            <p>Te has dado de baja del newsletter.</p>
            <p style="color: #8b949e;">No recibirás más correos. ¡Hasta pronto!</p>
            <a href="https://cual.ai" style="color: #58a6ff;">Volver a cual.ai</a>
          </div>
        </body>
      </html>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
