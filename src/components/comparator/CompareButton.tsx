"use client";

import { useComparator } from "@/hooks/useComparator";

interface CompareButtonProps {
  slug: string;
  compact?: boolean;
}

export default function CompareButton({ slug, compact }: CompareButtonProps) {
  const { addTool, removeTool, isSelected, isFull } = useComparator();
  const active = isSelected(slug);
  const disabled = !active && isFull;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (active) {
      removeTool(slug);
    } else if (!disabled) {
      addTool(slug);
    }
  };

  if (compact) {
    return (
      <button
        onClick={handleClick}
        disabled={disabled}
        title={
          disabled
            ? "Máximo 4 herramientas"
            : active
              ? "Quitar de comparación"
              : "Agregar a comparar"
        }
        className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
          active
            ? "border-accent text-accent bg-accent/10"
            : disabled
              ? "border-border text-text-muted opacity-50 cursor-not-allowed"
              : "border-border text-text-muted hover:border-accent hover:text-accent"
        }`}
      >
        {active ? "✓" : "⚖️"}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold transition-colors ${
        active
          ? "border border-accent text-accent bg-accent/10"
          : disabled
            ? "border border-border text-text-muted opacity-50 cursor-not-allowed"
            : "border border-border text-text-muted hover:border-accent hover:text-accent"
      }`}
    >
      {active ? "Agregada ✓" : "Agregar a comparar"}
    </button>
  );
}
