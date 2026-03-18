"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
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
        {submitted ? (
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
              className="flex-1 bg-bg-card border border-border rounded px-3 py-2 text-xs text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-accent text-bg px-4 py-2 rounded text-xs font-semibold hover:bg-accent-hover transition-colors shrink-0"
            >
              Suscribirse
            </button>
          </form>
        )}
        <p className="text-text-muted text-[10px] mt-6">
          cual.ai — Encuentra la herramienta AI perfecta
        </p>
      </div>
    </footer>
  );
}
