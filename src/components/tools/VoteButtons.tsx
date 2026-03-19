"use client";

import { useState, useEffect, useCallback } from "react";

interface VoteData {
  up: number;
  down: number;
  total: number;
  upPct: number;
}

interface VoteButtonsProps {
  slug: string;
  compact?: boolean; // true = versión ToolCard, false = versión página detalle
}

export default function VoteButtons({ slug, compact = false }: VoteButtonsProps) {
  const [votes, setVotes] = useState<VoteData | null>(null);
  const [myVote, setMyVote] = useState<"up" | "down" | null>(null);
  const [loading, setLoading] = useState(false);

  // Cargar votos al montar
  useEffect(() => {
    fetch(`/api/tools/${slug}/votes`)
      .then((r) => r.json())
      .then(setVotes)
      .catch(() => {});

    // Recuperar voto previo del localStorage
    const stored = localStorage.getItem(`vote:${slug}`);
    if (stored === "up" || stored === "down") setMyVote(stored);
  }, [slug]);

  const handleVote = useCallback(
    async (vote: "up" | "down") => {
      if (loading) return;

      // Toggle: si ya votó lo mismo, no hace nada (podría extenderse a quitar voto)
      setLoading(true);
      try {
        const res = await fetch(`/api/tools/${slug}/vote`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ vote }),
        });
        if (res.ok) {
          const data = await res.json();
          setVotes(data);
          setMyVote(vote);
          localStorage.setItem(`vote:${slug}`, vote);
        }
      } catch {
        // silencioso
      } finally {
        setLoading(false);
      }
    },
    [slug, loading]
  );

  if (compact) {
    // Versión compacta para ToolCard
    return (
      <div
        className="flex items-center gap-1.5"
        onClick={(e) => e.preventDefault()} // evitar navegar al hacer clic
      >
        <button
          onClick={() => handleVote("up")}
          disabled={loading}
          title="Recomendar"
          className={`flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
            myVote === "up"
              ? "border-green text-green bg-green/10"
              : "border-border text-text-muted hover:border-green hover:text-green"
          } disabled:opacity-50`}
        >
          <span>👍</span>
          {votes && votes.total > 0 && (
            <span className="font-mono">{votes.upPct}%</span>
          )}
        </button>
        <button
          onClick={() => handleVote("down")}
          disabled={loading}
          title="No recomendar"
          className={`flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
            myVote === "down"
              ? "border-red-400 text-red-400 bg-red-400/10"
              : "border-border text-text-muted hover:border-red-400 hover:text-red-400"
          } disabled:opacity-50`}
        >
          <span>👎</span>
        </button>
      </div>
    );
  }

  // Versión completa para página de herramienta
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] uppercase tracking-widest text-text-muted">
        ¿La recomendarías?
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleVote("up")}
          disabled={loading}
          className={`flex items-center gap-2 px-4 py-2 rounded border text-xs font-semibold transition-all ${
            myVote === "up"
              ? "border-green text-green bg-green/10"
              : "border-border text-text-muted hover:border-green hover:text-green"
          } disabled:opacity-50`}
        >
          <span className="text-base">👍</span>
          <span>Sí, la recomiendo</span>
          {votes && votes.total > 0 && (
            <span className="font-mono text-[10px]">{votes.upPct}%</span>
          )}
        </button>
        <button
          onClick={() => handleVote("down")}
          disabled={loading}
          className={`flex items-center gap-2 px-4 py-2 rounded border text-xs font-semibold transition-all ${
            myVote === "down"
              ? "border-red-400 text-red-400 bg-red-400/10"
              : "border-border text-text-muted hover:border-red-400 hover:text-red-400"
          } disabled:opacity-50`}
        >
          <span className="text-base">👎</span>
          <span>No la recomiendo</span>
          {votes && votes.total > 0 && (
            <span className="font-mono text-[10px]">{100 - votes.upPct}%</span>
          )}
        </button>
      </div>
      {votes && votes.total > 0 && (
        <div className="flex items-center gap-2">
          {/* Barra de progreso */}
          <div className="flex-1 h-1 rounded-full bg-border overflow-hidden">
            <div
              className="h-full bg-green transition-all duration-500"
              style={{ width: `${votes.upPct}%` }}
            />
          </div>
          <span className="text-[10px] text-text-muted">
            {votes.total} voto{votes.total !== 1 ? "s" : ""}
          </span>
        </div>
      )}
      {myVote && (
        <p className="text-[10px] text-text-muted">
          {myVote === "up" ? "✓ Marcaste que la recomiendas" : "✓ Marcaste que no la recomiendas"}
        </p>
      )}
    </div>
  );
}
