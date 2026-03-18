import { getSupabaseAdmin } from "@/lib/supabase";
import { getResend } from "@/lib/resend";
import Anthropic from "@anthropic-ai/sdk";

// ── Generate newsletter content with Claude ─────────────────

async function generateNewsletterHTML(
  tools: Array<{ name: string; description: string; url: string; pricing: string }>,
  news: Array<{ title: string; summary: string; source_url: string; source_name: string }>
): Promise<{ subject: string; html: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("Missing ANTHROPIC_API_KEY");

  const now = new Date();
  const dateStr = now.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const client = new Anthropic({ apiKey });

  const toolsList = tools
    .map((t, i) => `${i + 1}. ${t.name} — ${t.description} (${t.pricing}) — ${t.url}`)
    .join("\n");

  const newsList = news
    .map((n, i) => `${i + 1}. ${n.title} — ${n.summary} (${n.source_name}: ${n.source_url})`)
    .join("\n");

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 3000,
    messages: [
      {
        role: "user",
        content: `Genera el HTML de un newsletter semanal de cual.ai para la fecha ${dateStr}.

Herramientas destacadas:
${toolsList || "No hay herramientas esta semana."}

Noticias AI de la semana:
${newsList || "No hay noticias esta semana."}

Requisitos del HTML:
- Diseño oscuro (fondo #0d1117, texto #e6edf3, accent #58a6ff)
- Font: monospace
- Máximo 600px de ancho
- Header con logo "cual.ai" en azul
- Sección "Herramientas destacadas" con hasta 5 tools (nombre, descripción corta, precio, link)
- Sección "Noticias AI" con hasta 3 noticias (título, resumen, fuente)
- CTA: "Explora más en cual.ai"
- Footer con link de desuscripción: {{unsubscribe_url}}
- Todo en español
- Inline CSS (no external stylesheets)

Responde SOLO con el HTML completo, sin markdown ni explicaciones.`,
      },
    ],
  });

  const html =
    message.content[0].type === "text"
      ? message.content[0].text.replace(/```html?\n?/g, "").replace(/```/g, "").trim()
      : "";

  return {
    subject: `Las mejores herramientas AI de la semana — ${dateStr}`,
    html,
  };
}

// ── Main Newsletter Function ────────────────────────────────

export async function runNewsletterAgent(): Promise<{
  subscriberCount: number;
  subject: string;
  errors: string[];
}> {
  const errors: string[] = [];
  const supabase = getSupabaseAdmin();

  // Fetch recent news (last 7 days)
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const [newsResult, toolsResult, subscribersResult] = await Promise.all([
    supabase
      .from("news_items")
      .select("title, summary, source_url, source_name")
      .gte("processed_at", weekAgo.toISOString())
      .order("processed_at", { ascending: false })
      .limit(10),
    supabase
      .from("tools")
      .select("name, description, url, pricing")
      .or("featured.eq.true")
      .order("created_at", { ascending: false })
      .limit(5),
    supabase
      .from("newsletter_subscribers")
      .select("id, email, unsubscribe_token")
      .eq("confirmed", true),
  ]);

  if (newsResult.error) errors.push(`News fetch: ${newsResult.error.message}`);
  if (toolsResult.error) errors.push(`Tools fetch: ${toolsResult.error.message}`);
  if (subscribersResult.error) {
    errors.push(`Subscribers fetch: ${subscribersResult.error.message}`);
    return { subscriberCount: 0, subject: "", errors };
  }

  const subscribers = subscribersResult.data || [];
  if (subscribers.length === 0) {
    return { subscriberCount: 0, subject: "No subscribers", errors };
  }

  const news = newsResult.data || [];
  const tools = toolsResult.data || [];

  // Generate newsletter content
  const { subject, html: templateHtml } = await generateNewsletterHTML(tools, news);

  // Send in batches of 100
  const resend = getResend();
  const batchSize = 100;
  let sentCount = 0;
  const resendIds: string[] = [];

  for (let i = 0; i < subscribers.length; i += batchSize) {
    const batch = subscribers.slice(i, i + batchSize);

    const sendPromises = batch.map(async (sub) => {
      const personalizedHtml = templateHtml.replace(
        /\{\{unsubscribe_url\}\}/g,
        `https://cual.ai/api/newsletter/unsubscribe?token=${sub.unsubscribe_token}`
      );

      try {
        const result = await resend.emails.send({
          from: "cual.ai <hola@cual.ai>",
          to: sub.email,
          subject,
          html: personalizedHtml,
        });
        if (result.data?.id) resendIds.push(result.data.id);
        sentCount++;
      } catch (err) {
        console.error(`Failed to send to ${sub.email}:`, err);
      }
    });

    await Promise.all(sendPromises);
  }

  // Log the send
  const { error: logError } = await supabase.from("newsletter_sends").insert({
    subject,
    content_html: templateHtml,
    subscriber_count: sentCount,
    resend_message_id: resendIds[0] || null,
  });

  if (logError) errors.push(`Send log error: ${logError.message}`);

  return { subscriberCount: sentCount, subject, errors };
}
