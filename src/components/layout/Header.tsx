"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getToolCount } from "@/data/tools";

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const toolCount = getToolCount();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="flex items-center h-12 px-4 gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-accent font-bold text-sm shrink-0 hover:text-accent-hover transition-colors"
        >
          cual.ai
        </Link>

        {/* Search bar */}
        <form onSubmit={handleSubmit} className="flex-1 max-w-xl mx-auto">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xs">
              &gt;
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar herramientas AI..."
              className="w-full bg-bg-card border border-border rounded px-3 py-1.5 pl-7 text-xs text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </form>

        {/* Nav links */}
        <Link
          href="/noticias"
          className="text-text-muted text-xs shrink-0 hidden sm:block hover:text-accent transition-colors"
        >
          Noticias
        </Link>
        <Link
          href="/cursos"
          className="text-text-muted text-xs shrink-0 hidden sm:block hover:text-accent transition-colors"
        >
          Cursos
        </Link>
        <Link
          href="/modelos"
          className="text-text-muted text-xs shrink-0 hidden sm:block hover:text-accent transition-colors"
        >
          Modelos
        </Link>
        <Link
          href="/glosario"
          className="text-text-muted text-xs shrink-0 hidden sm:block hover:text-accent transition-colors"
        >
          Glosario
        </Link>
        <span className="text-text-muted text-xs shrink-0 hidden sm:block">
          {toolCount} herramientas
        </span>
      </div>
    </header>
  );
}
