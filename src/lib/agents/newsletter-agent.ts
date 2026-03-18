import { getSupabaseAdmin } from "@/lib/supabase";
import { getResend } from "@/lib/resend";
import { tools as allTools } from "@/data/tools";
import { news as allNews } from "@/data/news";

// ── Types ───────────────────────────────────────────────────

interface NewsletterEdition {
  number: number;
  date: string;
  subject: string;
  toolOfTheWeek: {
    name: string;
    url: string;
    pricing: string;
    headline: string;
    description: string;
    useCases: string[];
  };
  top5: Array<{
    name: string;
    url: string;
    pricing: string;
    oneLiner: string;
  }>;
  news: Array<{
    title: string;
    summary: string;
    source: string;
  }>;
  tip: {
    headline: string;
    content: string;
  };
}

// ── Generate HTML from edition data ─────────────────────────

function generateNewsletterHTML(
  edition: NewsletterEdition,
  unsubscribeUrl: string
): string {
  const dateFormatted = new Date(edition.date + "T12:00:00Z").toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const top5Rows = edition.top5
    .map(
      (t, i) => `
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #21262d;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="width:28px;vertical-align:top;">
                        <span style="display:inline-block;background:#0d1117;border:1px solid #30363d;border-radius:4px;width:24px;height:24px;text-align:center;line-height:24px;color:#58a6ff;font-size:12px;font-weight:bold;">${i + 1}</span>
                      </td>
                      <td style="padding-left:12px;">
                        <a href="${t.url}" style="color:#58a6ff;text-decoration:none;font-size:14px;font-weight:600;">${t.name}</a>
                        <span style="color:#484f58;font-size:11px;"> · ${t.pricing}</span>
                        <p style="margin:4px 0 0;color:#8b949e;font-size:13px;line-height:1.5;">${t.oneLiner}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`
    )
    .join("");

  const newsRows = edition.news
    .map(
      (n) => `
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #21262d;">
                  <p style="margin:0 0 4px;color:#e6edf3;font-size:14px;font-weight:600;line-height:1.4;">${n.title}</p>
                  <p style="margin:0 0 4px;color:#8b949e;font-size:13px;line-height:1.5;">${n.summary}</p>
                  <p style="margin:0;color:#484f58;font-size:11px;">Fuente: ${n.source}</p>
                </td>
              </tr>`
    )
    .join("");

  const useCasesList = edition.toolOfTheWeek.useCases
    .map(
      (uc) =>
        `<p style="margin:0 0 8px;color:#e6edf3;font-size:13px;line-height:1.5;"><span style="color:#3fb950;">▸</span>&nbsp; ${uc}</p>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>cual.ai Newsletter #${edition.number}</title>
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
                    <span style="color:#8b949e;font-size:12px;">Edición #${edition.number}</span><br>
                    <span style="color:#484f58;font-size:11px;">${dateFormatted}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Terminal prompt -->
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:16px 32px 0;">
              <p style="margin:0;color:#58a6ff;font-size:13px;">$ newsletter --edicion=${edition.number}</p>
              <p style="margin:4px 0 0;color:#3fb950;font-size:13px;">✓ Tu resumen semanal de IA está listo</p>
            </td>
          </tr>

          <!-- ═══ HERRAMIENTA DE LA SEMANA ═══ -->
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:28px 32px 0;">
              <p style="margin:0 0 8px;color:#58a6ff;font-size:12px;letter-spacing:1px;text-transform:uppercase;">🔧 // Herramienta de la semana</p>
              <h2 style="margin:0 0 16px;color:#e6edf3;font-size:20px;font-weight:600;line-height:1.3;">${edition.toolOfTheWeek.headline}</h2>
            </td>
          </tr>
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:0 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#161b22;border:1px solid #30363d;border-radius:6px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <a href="${edition.toolOfTheWeek.url}" style="color:#58a6ff;text-decoration:none;font-size:16px;font-weight:bold;">${edition.toolOfTheWeek.name}</a>
                        </td>
                        <td align="right">
                          <span style="color:#3fb950;font-size:12px;background:#0d1117;border:1px solid #30363d;padding:3px 8px;border-radius:12px;">${edition.toolOfTheWeek.pricing}</span>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:12px 0 16px;color:#8b949e;font-size:14px;line-height:1.6;">${edition.toolOfTheWeek.description}</p>
                    ${useCasesList}
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;">
                      <tr>
                        <td align="center">
                          <a href="${edition.toolOfTheWeek.url}" style="display:inline-block;background:#1f6feb;color:#ffffff;text-decoration:none;padding:10px 24px;border-radius:6px;font-size:13px;font-weight:600;">Probar ${edition.toolOfTheWeek.name} →</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ═══ TOP 5 DE LA SEMANA ═══ -->
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:28px 32px 0;">
              <p style="margin:0 0 12px;color:#58a6ff;font-size:12px;letter-spacing:1px;text-transform:uppercase;">📋 // Top 5 de la semana</p>
            </td>
          </tr>
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:0 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#161b22;border:1px solid #30363d;border-radius:6px;">
                ${top5Rows}
              </table>
            </td>
          </tr>

          <!-- ═══ NOTICIAS DE LA SEMANA ═══ -->
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:28px 32px 0;">
              <p style="margin:0 0 12px;color:#58a6ff;font-size:12px;letter-spacing:1px;text-transform:uppercase;">📰 // Lo que pasó en IA esta semana</p>
            </td>
          </tr>
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:0 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#161b22;border:1px solid #30363d;border-radius:6px;">
                ${newsRows}
              </table>
            </td>
          </tr>

          <!-- ═══ TIP DE LA SEMANA ═══ -->
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:28px 32px 0;">
              <p style="margin:0 0 8px;color:#58a6ff;font-size:12px;letter-spacing:1px;text-transform:uppercase;">💡 // El tip de la semana</p>
              <h3 style="margin:0 0 12px;color:#e6edf3;font-size:16px;font-weight:600;line-height:1.3;">${edition.tip.headline}</h3>
            </td>
          </tr>
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:0 32px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#161b22;border:1px solid #30363d;border-radius:6px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0;color:#8b949e;font-size:14px;line-height:1.7;">${edition.tip.content}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ═══ CTA ═══ -->
          <tr>
            <td style="background:#0d1117;border-left:1px solid #30363d;border-right:1px solid #30363d;padding:0 32px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://cual.ai" style="display:inline-block;background:#1f6feb;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:14px;font-weight:600;letter-spacing:0.5px;">Explorar todas las herramientas →</a>
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
                      <a href="${unsubscribeUrl}" style="color:#484f58;text-decoration:underline;">Darse de baja</a>
                    </p>
                  </td>
                  <td align="right">
                    <span style="color:#484f58;font-size:11px;">cual.ai © 2026</span>
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
</html>`;
}

// ── Select tool of the week (deterministic for a given week) ─

function selectToolOfTheWeek(weekNumber: number) {
  const featured = allTools.filter((t) => t.featured);
  const index = weekNumber % featured.length;
  return featured[index];
}

// ── Select top 5 (excluding tool of the week) ───────────────

function selectTop5(excludeId: string) {
  const candidates = allTools.filter(
    (t) => t.id !== excludeId && t.featured
  );
  // If not enough featured, add non-featured popular ones
  if (candidates.length < 5) {
    const extra = allTools.filter(
      (t) => t.id !== excludeId && !t.featured
    );
    candidates.push(...extra);
  }
  return candidates.slice(0, 5);
}

// ── Get latest news ─────────────────────────────────────────

function selectNews(limit = 3) {
  return [...allNews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// ── Load edition data (manual or auto-generated) ────────────

async function loadEdition(): Promise<NewsletterEdition> {
  // Try loading manual edition file first
  try {
    const mod = await import("@/data/newsletter-edition-1");
    if (mod.edition1) {
      return mod.edition1;
    }
  } catch {
    // No manual edition, generate automatically
  }

  // Auto-generate from seed data
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const weekNumber = Math.ceil(
    ((now.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7
  );

  const toolOfWeek = selectToolOfTheWeek(weekNumber);
  const top5 = selectTop5(toolOfWeek.id);
  const newsItems = selectNews(3);

  const dateStr = now.toISOString().split("T")[0];

  return {
    number: weekNumber,
    date: dateStr,
    subject: `🔧 Tu resumen semanal de IA — Edición #${weekNumber}`,
    toolOfTheWeek: {
      name: toolOfWeek.name,
      url: toolOfWeek.url,
      pricing: toolOfWeek.priceLabel,
      headline: `Esta semana destacamos: ${toolOfWeek.name}`,
      description: toolOfWeek.longDescription,
      useCases: toolOfWeek.useCases,
    },
    top5: top5.map((t) => ({
      name: t.name,
      url: t.url,
      pricing: t.priceLabel,
      oneLiner: t.description,
    })),
    news: newsItems.map((n) => ({
      title: n.title,
      summary: n.summary,
      source: n.source || "cual.ai",
    })),
    tip: {
      headline: "Tip de la semana",
      content:
        "Prueba pedirle a ChatGPT o Claude que reescriba tus textos en un tono diferente. Escribe tu borrador y pídele: 'Hazlo más profesional' o 'Hazlo más amigable'. Es como tener un editor personal gratis.",
    },
  };
}

// ── Main Newsletter Function ────────────────────────────────

export async function runNewsletterAgent(options?: {
  testEmail?: string;
}): Promise<{
  subscriberCount: number;
  subject: string;
  errors: string[];
}> {
  const errors: string[] = [];

  // Load edition data
  const edition = await loadEdition();

  // Test mode: send only to test email
  if (options?.testEmail) {
    const resend = getResend();
    const html = generateNewsletterHTML(edition, "#");

    try {
      await resend.emails.send({
        from: "cual.ai Newsletter <onboarding@resend.dev>",
        to: options.testEmail,
        subject: `[TEST] ${edition.subject}`,
        html,
      });
      return { subscriberCount: 1, subject: edition.subject, errors: [] };
    } catch (err) {
      return {
        subscriberCount: 0,
        subject: edition.subject,
        errors: [`Test send failed: ${String(err)}`],
      };
    }
  }

  // Production mode: send to all subscribers
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { subscriberCount: 0, subject: "", errors: ["Supabase not configured"] };
  }

  const { data: subscribers, error: subError } = await supabase
    .from("newsletter_subscribers")
    .select("id, email, unsubscribe_token")
    .eq("confirmed", true);

  if (subError) {
    return { subscriberCount: 0, subject: "", errors: [`Subscribers: ${subError.message}`] };
  }

  if (!subscribers || subscribers.length === 0) {
    return { subscriberCount: 0, subject: "No subscribers", errors: [] };
  }

  // Send in batches of 100
  const resend = getResend();
  const batchSize = 100;
  let sentCount = 0;
  const resendIds: string[] = [];

  for (let i = 0; i < subscribers.length; i += batchSize) {
    const batch = subscribers.slice(i, i + batchSize);

    const sendPromises = batch.map(async (sub) => {
      const unsubscribeUrl = `https://cual.ai/api/newsletter/unsubscribe?token=${sub.unsubscribe_token}`;
      const html = generateNewsletterHTML(edition, unsubscribeUrl);

      try {
        const result = await resend.emails.send({
          from: "cual.ai Newsletter <onboarding@resend.dev>",
          to: sub.email,
          subject: edition.subject,
          html,
        });
        if (result.data?.id) resendIds.push(result.data.id);
        sentCount++;
      } catch (err) {
        errors.push(`Failed: ${sub.email} — ${String(err)}`);
      }
    });

    await Promise.all(sendPromises);
  }

  // Log the send
  const { error: logError } = await supabase.from("newsletter_sends").insert({
    edition_number: edition.number,
    subject: edition.subject,
    subscriber_count: sentCount,
    resend_message_id: resendIds[0] || null,
  });

  if (logError) errors.push(`Log error: ${logError.message}`);

  return { subscriberCount: sentCount, subject: edition.subject, errors };
}
