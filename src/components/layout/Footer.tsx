"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al suscribir");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error al suscribir");
    }
  }

  return (
    <footer className="border-t border-border mt-12 py-8 px-4">
      <div className="max-w-lg mx-auto text-center">
        <h3 className="text-sm font-semibold mb-1">
          Recibe las mejores herramientas AI de la semana
        </h3>
        <p className="text-text-muted text-xs mb-4">
          Un email semanal con las herramientas más útiles, sin spam.
        </p>
        {status === "success" ? (
          <p className="text-green text-xs">
            ✓ ¡Suscrito! Te enviaremos las mejores herramientas cada semana.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              disabled={status === "loading"}
              className="flex-1 bg-bg-card border border-border rounded px-3 py-2 text-xs text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-accent text-bg px-4 py-2 rounded text-xs font-semibold hover:bg-accent-hover transition-colors shrink-0 disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Suscribirse"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red text-xs mt-2">{errorMsg}</p>
        )}
        <p className="text-text-muted text-[10px] mt-6">
          cual.ai — Encuentra la herramienta AI perfecta
        </p>
      </div>
    </footer>
  );
}
