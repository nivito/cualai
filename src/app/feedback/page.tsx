"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

export default function FeedbackPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<"form" | "otp" | "done">("form");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/feedback/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al enviar feedback");
        return;
      }

      setStep("otp");
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/feedback/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al verificar");
        return;
      }

      setStep("done");
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-lg mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-text-muted text-xs mb-6">
              <Link href="/" className="hover:text-accent transition-colors">cual.ai</Link>
              <span>/</span>
              <span>Feedback</span>
            </div>

            <h1 className="text-2xl font-bold text-text mb-2">Feedback</h1>
            <p className="text-sm text-text-muted mb-8">
              ¿Hay una herramienta que falta? ¿Algo que mejorar? Cuéntanos.
            </p>

            {step === "form" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs text-text-muted mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full bg-bg-card border border-border rounded px-3 py-2 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-text-muted mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    minLength={20}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Sugiérenos una herramienta nueva, una funcionalidad, o cualquier cosa que quieras que mejoremos en cual.ai."
                    className="w-full bg-bg-card border border-border rounded px-3 py-2 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors resize-vertical"
                  />
                  <p className="text-[10px] text-text-muted mt-1">Mínimo 20 caracteres</p>
                </div>

                {error && (
                  <p className="text-xs text-red">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-bg text-sm font-medium py-2 rounded hover:bg-accent-hover transition-colors disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar feedback"}
                </button>
              </form>
            )}

            {step === "otp" && (
              <form onSubmit={handleVerify} className="space-y-4">
                <div className="bg-bg-card border border-border rounded-lg p-5">
                  <p className="text-sm text-text mb-4">
                    Ingresa el código de 6 dígitos que te enviamos a{" "}
                    <span className="text-accent font-medium">{email}</span>
                  </p>

                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="000000"
                    className="w-full bg-bg border border-border rounded px-3 py-3 text-center text-lg font-mono text-text tracking-[0.5em] placeholder:text-text-muted/30 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-bg text-sm font-medium py-2 rounded hover:bg-accent-hover transition-colors disabled:opacity-50"
                >
                  {loading ? "Verificando..." : "Verificar"}
                </button>
              </form>
            )}

            {step === "done" && (
              <div className="bg-bg-card border border-border rounded-lg p-6 text-center">
                <p className="text-3xl mb-3">✅</p>
                <p className="text-sm text-text font-medium mb-2">
                  ¡Gracias! Tu feedback fue registrado.
                </p>
                <p className="text-xs text-text-muted">
                  Ya quedaste suscrito a nuestro newsletter.
                </p>
              </div>
            )}
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}
