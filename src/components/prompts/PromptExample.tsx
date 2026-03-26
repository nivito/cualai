"use client";

import { useState } from "react";
import type { PromptPart } from "@/data/prompts";

const typeConfig = {
  persona: {
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    label: "Persona",
    labelEn: "Persona",
  },
  task: {
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    label: "Tarea",
    labelEn: "Task",
  },
  context: {
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    label: "Contexto",
    labelEn: "Context",
  },
  format: {
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    label: "Formato",
    labelEn: "Format",
  },
  plain: {
    color: "text-text-muted",
    bg: "",
    border: "",
    label: "",
    labelEn: "",
  },
};

interface PromptExampleProps {
  parts: PromptPart[];
  label?: string;
  copyable?: boolean;
  locale?: "es" | "en";
}

export default function PromptExample({
  parts,
  label,
  copyable = true,
  locale = "es",
}: PromptExampleProps) {
  const [copied, setCopied] = useState(false);
  const [hoveredType, setHoveredType] = useState<string | null>(null);

  const fullText = parts.map((p) => p.text).join("");

  function handleCopy() {
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="border border-border rounded bg-bg-card overflow-hidden">
      {/* Header */}
      {(label || copyable) && (
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-border bg-bg">
          {label && (
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              {label}
            </span>
          )}
          {copyable && (
            <button
              onClick={handleCopy}
              className="text-[10px] text-text-muted hover:text-accent transition-colors ml-auto"
            >
              {copied
                ? locale === "en"
                  ? "✓ Copied"
                  : "✓ Copiado"
                : locale === "en"
                  ? "Copy prompt"
                  : "Copiar prompt"}
            </button>
          )}
        </div>
      )}

      {/* Prompt body */}
      <div className="px-3 py-3 text-sm leading-relaxed font-mono">
        {parts.map((part, i) => {
          if (part.type === "plain") {
            return (
              <span key={i} className="text-text-muted whitespace-pre-wrap">
                {part.text}
              </span>
            );
          }

          const cfg = typeConfig[part.type];
          return (
            <span
              key={i}
              className={`${cfg.color} ${cfg.bg} ${cfg.border} ${cfg.border ? "border" : ""} rounded px-1 py-0.5 relative cursor-default whitespace-pre-wrap`}
              onMouseEnter={() => setHoveredType(part.type)}
              onMouseLeave={() => setHoveredType(null)}
            >
              {part.text}
              {/* Tooltip */}
              {hoveredType === part.type && cfg.label && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-bg text-[10px] text-text border border-border whitespace-nowrap z-10 shadow-lg">
                  {locale === "en" ? cfg.labelEn : cfg.label}
                </span>
              )}
            </span>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 px-3 py-2 border-t border-border bg-bg">
        {Array.from(new Set(parts.filter((p) => p.type !== "plain").map((p) => p.type))).map(
          (type) => {
            const cfg = typeConfig[type];
            return (
              <span key={type} className="flex items-center gap-1 text-[10px]">
                <span className={`w-2 h-2 rounded-full ${cfg.bg} ${cfg.border} border`} />
                <span className={cfg.color}>
                  {locale === "en" ? cfg.labelEn : cfg.label}
                </span>
              </span>
            );
          }
        )}
      </div>
    </div>
  );
}
