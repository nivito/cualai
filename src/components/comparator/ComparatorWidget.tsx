"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useComparator } from "@/hooks/useComparator";
import { getToolBySlug } from "@/data/tools";

export default function ComparatorWidget() {
  const { selected, removeTool, clearAll } = useComparator();
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  if (selected.length === 0) return null;

  const canCompare = selected.length >= 2;

  const handleCompare = () => {
    router.push(`/comparar?tools=${selected.join(",")}`);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        collapsed ? "translate-y-[calc(100%-2.5rem)]" : "translate-y-0"
      }`}
    >
      {/* Toggle bar (mobile) */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="lg:hidden w-full bg-bg-card border-t border-x border-border rounded-t px-4 py-1.5 text-[10px] text-text-muted flex items-center justify-center gap-2"
      >
        <span>⚖️ {selected.length} de máx. 4 seleccionadas</span>
        <span>{collapsed ? "▲" : "▼"}</span>
      </button>

      {/* Widget body */}
      <div className="bg-bg-card border-t border-border px-4 py-3 shadow-lg">
        <div className="max-w-4xl mx-auto">
          {/* Counter (desktop) */}
          <div className="hidden lg:flex items-center justify-between mb-2">
            <span className="text-[10px] text-text-muted uppercase tracking-widest">
              ⚖️ {selected.length} de máx. 4 seleccionadas
            </span>
          </div>

          {/* Selected tools */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {selected.map((slug) => {
              const tool = getToolBySlug(slug);
              return (
                <span
                  key={slug}
                  className="inline-flex items-center gap-1.5 text-xs bg-bg border border-border rounded px-2 py-1"
                >
                  <span className="truncate max-w-[120px]">
                    {tool?.name ?? slug}
                  </span>
                  <button
                    onClick={() => removeTool(slug)}
                    className="text-text-muted hover:text-red transition-colors text-[10px]"
                    aria-label={`Quitar ${tool?.name ?? slug}`}
                  >
                    ✕
                  </button>
                </span>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCompare}
              disabled={!canCompare}
              className={`px-4 py-1.5 rounded text-xs font-semibold transition-colors ${
                canCompare
                  ? "bg-accent text-bg hover:bg-accent-hover"
                  : "bg-bg-hover text-text-muted cursor-not-allowed"
              }`}
            >
              Comparar{canCompare ? ` (${selected.length})` : ""}
            </button>
            <button
              onClick={clearAll}
              className="px-3 py-1.5 rounded text-xs text-text-muted hover:text-red border border-border hover:border-red transition-colors"
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
