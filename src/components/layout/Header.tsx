"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { getToolCount } from "@/data/tools";
import { getDict, type Locale } from "@/i18n";

export default function Header({ locale = "es" }: { locale?: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const toolCount = getToolCount();
  const t = getDict(locale);

  const prefix = locale === "en" ? "/en" : "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`);
    }
  }

  const isEn = pathname.startsWith("/en");

  function toggleLocale() {
    if (isEn) {
      router.push(pathname.replace(/^\/en/, "") || "/");
    } else {
      router.push(`/en${pathname}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="flex items-center h-12 px-4 gap-4">
        {/* Logo */}
        <Link
          href={prefix + "/"}
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
              placeholder={t.header.search_placeholder}
              className="w-full bg-bg-card border border-border rounded px-3 py-1.5 pl-7 text-xs text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </form>

        {/* Nav links */}
        <Link
          href={prefix + "/noticias"}
          className="text-text-muted text-xs shrink-0 hidden sm:block hover:text-accent transition-colors"
        >
          {t.header.nav_news}
        </Link>
        <Link
          href={prefix + "/cursos"}
          className="text-text-muted text-xs shrink-0 hidden sm:block hover:text-accent transition-colors"
        >
          {t.header.nav_courses}
        </Link>
        <Link
          href={prefix + "/modelos"}
          className="text-text-muted text-xs shrink-0 hidden sm:block hover:text-accent transition-colors"
        >
          {t.header.nav_models}
        </Link>
        <Link
          href={prefix + "/glosario"}
          className="text-text-muted text-xs shrink-0 hidden sm:block hover:text-accent transition-colors"
        >
          {t.header.nav_glossary}
        </Link>
        <span className="text-text-muted text-xs shrink-0 hidden sm:block">
          {t.header.tool_count(toolCount)}
        </span>

        {/* Language switcher */}
        <button
          onClick={toggleLocale}
          className="text-text-muted text-xs shrink-0 hidden sm:flex items-center gap-1 hover:text-accent transition-colors"
        >
          <span className={!isEn ? "text-accent font-semibold" : ""}>ES</span>
          <span className="text-border">|</span>
          <span className={isEn ? "text-accent font-semibold" : ""}>EN</span>
        </button>
      </div>
    </header>
  );
}
