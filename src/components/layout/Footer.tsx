"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-border bg-bg-card mt-8">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mb-4">
          <h3 className="text-sm font-semibold text-text mb-1">
            // newsletter
          </h3>
          <p className="text-xs text-text-muted">
            Las mejores herramientas AI de la semana, directo a tu inbox.
          </p>
        </div>
        {subscribed ? (
          <div className="text-center text-green text-xs">
            <span className="mr-1">✓</span> ¡Suscrito! Revisa tu email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 bg-bg border border-border rounded px-3 py-2 text-xs text-text placeholder:text-text-muted focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="bg-accent text-bg px-4 py-2 rounded text-xs font-medium hover:bg-accent-hover transition-colors"
            >
              Suscribir
            </button>
          </form>
        )}
        <div className="text-center mt-6 text-[10px] text-text-muted">
          cual.ai © 2026 — Encuentra la IA perfecta para tu objetivo
        </div>
      </div>
    </footer>
  );
}
