import type { Tool } from "@/data/tools";

const SUPABASE_URL = "https://wktqdwuiwndfrpuetibp.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY ?? "";

export type VoteMap = Record<
  string,
  { up: number; down: number; score: number }
>;

export async function getToolVotes(): Promise<VoteMap> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/tool_votes?select=tool_slug,vote`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch votes:", res.status);
      return {};
    }

    const rows: { tool_slug: string; vote: string }[] = await res.json();

    const map: VoteMap = {};
    for (const row of rows) {
      if (!map[row.tool_slug]) {
        map[row.tool_slug] = { up: 0, down: 0, score: 0 };
      }
      if (row.vote === "up") map[row.tool_slug].up++;
      else if (row.vote === "down") map[row.tool_slug].down++;
    }

    for (const slug of Object.keys(map)) {
      map[slug].score = map[slug].up - map[slug].down;
    }

    return map;
  } catch (err) {
    console.error("Error fetching votes:", err);
    return {};
  }
}

export function sortToolsByVotes(tools: Tool[], votes: VoteMap): Tool[] {
  return [...tools].sort((a, b) => {
    const va = votes[a.slug];
    const vb = votes[b.slug];

    // Tools without votes go to the end
    if (!va && !vb) return 0;
    if (!va) return 1;
    if (!vb) return -1;

    // Higher score first
    if (vb.score !== va.score) return vb.score - va.score;

    // Tie-break: more total votes first (higher confidence)
    const totalA = va.up + va.down;
    const totalB = vb.up + vb.down;
    return totalB - totalA;
  });
}
