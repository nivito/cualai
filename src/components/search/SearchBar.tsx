"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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
          placeholder="¿Qué quieres lograr con IA? ej: hacer un video de marketing sin aparecer yo"
          autoFocus={autoFocus}
          className={`w-full bg-bg-card border border-border rounded text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors ${
            large ? "px-4 py-3.5 pl-9 text-sm" : "px-3 py-2 pl-7 text-xs"
          }`}
        />
      </div>
    </form>
  );
}
