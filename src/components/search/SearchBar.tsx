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

const TYPING_SPEED = 45;
const DELETING_SPEED = 25;
const PAUSE_AFTER = 2200;
const PAUSE_BEFORE = 400;

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
  const showAnimation = !focused && !query;
  const animatedPlaceholder = useTypingPlaceholder(showAnimation);

  // Refs para medir overflow y desplazar el texto
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [translateX, setTranslateX] = useState(0);

  const recalculate = () => {
    if (!containerRef.current || !textRef.current) {
      setTranslateX(0);
      return;
    }
    const containerWidth = containerRef.current.offsetWidth;
    const textWidth = textRef.current.scrollWidth;
    const overflow = textWidth - containerWidth;
    setTranslateX(overflow > 0 ? -overflow : 0);
  };

  // Recalcular cuando cambia el texto
  useEffect(() => {
    if (!showAnimation) { setTranslateX(0); return; }
    recalculate();
  }, [animatedPlaceholder, showAnimation]);

  // Recalcular cuando cambia el tamaño del contenedor (mobile rotate, resize)
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => recalculate());
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [showAnimation]);

  // Si el usuario borra todo el texto, volver al home
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    if (!val.trim()) {
      router.push("/");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        {/* Prompt > */}
        <span
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none z-10 ${
            large ? "text-base" : "text-xs"
          }`}
        >
          &gt;
        </span>

        {/* Input real */}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          autoFocus={autoFocus}
          placeholder=""
          className={`w-full bg-bg-card border border-border rounded text-text focus:outline-none focus:border-accent transition-colors ${
            large ? "px-4 py-3.5 pl-9 text-base md:text-sm" : "px-3 py-2 pl-7 text-base md:text-xs"
          }`}
        />

        {/* Placeholder animado — visible solo cuando no hay texto ni foco */}
        {showAnimation && (
          <div
            ref={containerRef}
            className={`absolute inset-0 pointer-events-none overflow-hidden flex items-center ${
              large ? "pl-9 pr-4 text-sm" : "pl-7 pr-3 text-xs"
            }`}
          >
            <span
              ref={textRef}
              className="text-text-muted whitespace-nowrap transition-transform duration-75"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {animatedPlaceholder}
              {/* Cursor parpadeante */}
              <span className="animate-pulse opacity-70">▌</span>
            </span>
          </div>
        )}
      </div>
    </form>
  );
}
