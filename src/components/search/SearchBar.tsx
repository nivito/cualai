"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const PLACEHOLDERS = [
  "¿Qué quieres lograr con IA?",
  "ej: hacer un video de marketing sin aparecer yo",
  "ej: escribir emails de ventas en segundos",
  "ej: transcribir reuniones automáticamente",
  "ej: crear imágenes para mis redes sociales",
  "ej: programar sin saber código",
  "ej: analizar datos de mi negocio",
  "ej: clonar mi voz para podcasts",
  "ej: automatizar tareas repetitivas",
  "ej: generar música para mis videos",
  "ej: crear presentaciones en minutos",
];

const TYPING_SPEED = 45;    // ms por carácter escribiendo
const DELETING_SPEED = 25;  // ms por carácter borrando
const PAUSE_AFTER = 2200;   // ms antes de borrar
const PAUSE_BEFORE = 400;   // ms antes de escribir el siguiente

function useTypingPlaceholder(active: boolean) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!active) return;

    const current = PLACEHOLDERS[index];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout.current = setTimeout(() => setPhase("pausing"), PAUSE_AFTER);
      }
    } else if (phase === "pausing") {
      timeout.current = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, DELETING_SPEED);
      } else {
        timeout.current = setTimeout(() => {
          setIndex((i) => (i + 1) % PLACEHOLDERS.length);
          setPhase("waiting");
        }, PAUSE_BEFORE);
      }
    } else if (phase === "waiting") {
      setPhase("typing");
    }

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [displayed, phase, index, active]);

  return displayed;
}

export default function SearchBar({
  defaultValue = "",
  autoFocus = false,
  large = false,
}: {
  defaultValue?: string;
  autoFocus?: boolean;
  large?: boolean;
}) {
  const [query, setQuery] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const router = useRouter();
  const animatedPlaceholder = useTypingPlaceholder(!focused && !query);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <span
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-text-muted ${
            large ? "text-base" : "text-xs"
          }`}
        >
          &gt;
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={focused || query ? "¿Qué quieres lograr con IA?" : animatedPlaceholder}
          autoFocus={autoFocus}
          className={`w-full bg-bg-card border border-border rounded text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors ${
            large ? "px-4 py-3.5 pl-9 text-sm" : "px-3 py-2 pl-7 text-xs"
          }`}
        />
      </div>
    </form>
  );
}
