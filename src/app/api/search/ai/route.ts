import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { searchTools } from "@/data/tools";

export async function POST(req: NextRequest) {
  const { query } = await req.json().catch(() => ({}));
  if (!query?.trim()) return NextResponse.json({ results: [] });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Fallback: búsqueda normal
    return NextResponse.json({ results: searchTools(query), aiEnhanced: false });
  }

  try {
    const client = new Anthropic({ apiKey });

    const msg = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 200,
      messages: [
        {
          role: "user",
          content: `Eres un motor de búsqueda de herramientas AI. El usuario busca: "${query}"

Devuelve SOLO un JSON array con 8-12 keywords en español e inglés que capturen la intención del usuario y los términos técnicos relacionados. Sin explicaciones, solo el JSON.

Ejemplo para "hacer videos sin cámara": ["video generación", "avatar", "synthesia", "heygen", "text to video", "video sin grabar", "presentación video", "AI video"]`,
        },
      ],
    });

    const text = msg.content[0].type === "text" ? msg.content[0].text.trim() : "";
    let keywords: string[] = [];

    try {
      const jsonStr = text.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
      keywords = JSON.parse(jsonStr);
    } catch {
      keywords = [query];
    }

    // Buscar con cada keyword y hacer union de resultados con scoring
    const scoreMap = new Map<string, number>();

    for (const kw of keywords) {
      const results = searchTools(kw);
      results.forEach((tool, idx) => {
        const current = scoreMap.get(tool.id) || 0;
        // Más peso a los primeros resultados de cada keyword
        scoreMap.set(tool.id, current + (results.length - idx));
      });
    }

    // También buscar con la query original para no perder matches exactos
    const originalResults = searchTools(query);
    originalResults.forEach((tool, idx) => {
      const current = scoreMap.get(tool.id) || 0;
      scoreMap.set(tool.id, current + (originalResults.length - idx) * 2); // peso doble
    });

    // Ordenar por score y reconstruir tools
    const allTools = searchTools(""); // no retorna nada, necesitamos la lista
    const { tools } = await import("@/data/tools");
    const ranked = tools
      .filter((t) => scoreMap.has(t.id))
      .sort((a, b) => (scoreMap.get(b.id) || 0) - (scoreMap.get(a.id) || 0))
      .slice(0, 15);

    return NextResponse.json({ results: ranked, aiEnhanced: true, keywords });
  } catch {
    return NextResponse.json({ results: searchTools(query), aiEnhanced: false });
  }
}
