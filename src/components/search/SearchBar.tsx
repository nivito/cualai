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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex items-center border border-border rounded bg-bg-card focus-within:border-accent transition-colors ${
          large ? "px-4 py-3" : "px-3 py-2"
        }`}
      >
        <span className="text-accent mr-2 text-sm">&gt;</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="¿Qué quieres lograr con IA?"
          autoFocus={autoFocus}
          className={`flex-1 bg-transparent outline-none text-text placeholder:text-text-muted ${
            large ? "text-base" : "text-sm"
          }`}
        />
        <button
          type="submit"
          className="text-text-muted hover:text-accent transition-colors text-xs ml-2"
        >
          [enter]
        </button>
      </div>
    </form>
  );
}
