import { glossaryTerms } from "@/data/glossary";

interface SearchKey {
  keyword: string;
  anchor: string;
}

function buildSearchKeys(): SearchKey[] {
  const keys: SearchKey[] = [];

  for (const t of glossaryTerms) {
    const anchor = t.term.toLowerCase().replace(/[^a-z0-9]/g, "-");

    if (t.term.includes(" — ")) {
      // e.g. "API — Application Programming Interface" → ["API", "Application Programming Interface"]
      const parts = t.term.split(" — ");
      for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.length >= 2) {
          keys.push({ keyword: trimmed, anchor });
        }
      }
    } else if (t.term.includes("(")) {
      // e.g. "Hallucination (Alucinación)" → ["Hallucination", "Alucinación"]
      const before = t.term.split("(")[0].trim();
      const inside = t.term.match(/\(([^)]+)\)/)?.[1]?.trim();
      if (before.length >= 2) keys.push({ keyword: before, anchor });
      if (inside && inside.length >= 2) keys.push({ keyword: inside, anchor });
    } else {
      // Simple: "Benchmark" → ["Benchmark"]
      keys.push({ keyword: t.term, anchor });
    }
  }

  // Sort by keyword length descending so longer phrases match first
  keys.sort((a, b) => b.keyword.length - a.keyword.length);
  return keys;
}

const searchKeys = buildSearchKeys();

/**
 * Splits HTML into segments: tags (including their content) and text nodes.
 * Returns an array where odd indices are tags and even indices are text.
 */
function splitHtmlSegments(html: string): string[] {
  // Split by HTML tags, keeping the tags as separators
  return html.split(/(<[^>]+>)/);
}

/**
 * Processes a plain-text string (no HTML tags), replacing the first occurrence
 * of each unlinked keyword, then recursing on the remaining tail.
 */
function processTextSegment(
  text: string,
  searchKeys: SearchKey[],
  linked: Set<string>
): string {
  for (const { keyword, anchor } of searchKeys) {
    if (linked.has(anchor)) continue;

    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`\\b(${escaped})\\b`, "i");
    const match = text.match(re);

    if (match && match.index !== undefined) {
      const before = text.slice(0, match.index);
      const matched = match[1];
      const after = text.slice(match.index + matched.length);
      linked.add(anchor);
      // Only recurse on `after` — never touch `before` or the href
      const processedAfter = processTextSegment(after, searchKeys, linked);
      return `${before}<a href="/glosario#${anchor}" class="glossary-link">${matched}</a>${processedAfter}`;
    }
  }
  return text;
}

export function linkGlossaryTerms(html: string): string {
  const segments = splitHtmlSegments(html);
  const linked = new Set<string>();
  let insideAnchor = 0;

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];

    if (seg.startsWith("<")) {
      if (/^<a[\s>]/i.test(seg)) insideAnchor++;
      else if (/^<\/a>/i.test(seg)) insideAnchor = Math.max(0, insideAnchor - 1);
      continue;
    }

    if (insideAnchor > 0 || !seg) continue;

    segments[i] = processTextSegment(seg, searchKeys, linked);
  }

  return segments.join("");
}
