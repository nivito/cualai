"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { categories, getToolCountByCategory } from "@/data/tools";
import { getDict, getLocalizedCategory, type Locale } from "@/i18n";

export default function Sidebar({ locale = "es" }: { locale?: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const t = getDict(locale);

  const routeMap: Array<[string, string]> = [
    ["/noticias", "/news"],
    ["/herramienta", "/tool"],
    ["/glosario", "/glossary"],
    ["/que-es-ia", "/what-is-ai"],
    ["/comparar", "/compare"],
    ["/cursos", "/courses"],
    ["/modelos", "/models"],
  ];

  function mapRoute(path: string, from: string, to: string): string {
    if (path === from || path.startsWith(from + "/") || path.startsWith(from + "?")) {
      return to + path.slice(from.length);
    }
    return path;
  }

  function getEsPath(): string {
    const withoutEn = pathname.replace(/^\/en/, "") || "/";
    let esPath = withoutEn;
    for (const [es, en] of routeMap) {
      const mapped = mapRoute(withoutEn, en, es);
      if (mapped !== withoutEn) { esPath = mapped; break; }
    }
    return esPath || "/";
  }

  function getEnPath(): string {
    let enPath = pathname;
    for (const [es, en] of routeMap) {
      const mapped = mapRoute(pathname, es, en);
      if (mapped !== pathname) { enPath = mapped; break; }
    }
    return "/en" + enPath;
  }

  const prefix = locale === "en" ? "/en" : "";
  const newsRoute = locale === "en" ? "/en/news" : "/noticias";
  const glossaryRoute = locale === "en" ? "/en/glossary" : "/glosario";
  const whatIsAiRoute = locale === "en" ? "/en/what-is-ai" : "/que-es-ia";
  const compareRoute = locale === "en" ? "/en/compare" : "/comparar";
  const coursesRoute = locale === "en" ? "/en/courses" : "/cursos";
  const modelsRoute = locale === "en" ? "/en/models" : "/modelos";

  // For active state detection, strip the /en prefix from pathname
  const cleanPath = locale === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const newsClean = locale === "en" ? "/news" : "/noticias";
  const glossaryClean = locale === "en" ? "/glossary" : "/glosario";
  const whatIsAiClean = locale === "en" ? "/what-is-ai" : "/que-es-ia";
  const compareClean = locale === "en" ? "/compare" : "/comparar";
  const coursesClean = locale === "en" ? "/courses" : "/cursos";
  const modelsClean = locale === "en" ? "/models" : "/modelos";

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 lg:hidden bg-accent text-bg w-10 h-10 rounded flex items-center justify-center text-lg shadow-lg"
        aria-label="Toggle categories"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-12 left-0 z-40 h-[calc(100vh-3rem)] w-60 border-r border-border bg-bg overflow-y-auto transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="py-3">
          {/* ¿Qué es la IA? link */}
          <Link
            href={whatIsAiRoute}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith(whatIsAiClean)
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>🤖</span>
            <span className="flex-1 truncate">{t.sidebar.what_is_ai}</span>
          </Link>

          {/* Comparar link */}
          <Link
            href={compareRoute}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith(compareClean)
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>⚖️</span>
            <span className="flex-1 truncate">{t.sidebar.compare}</span>
          </Link>

          {/* Noticias link */}
          <Link
            href={newsRoute}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith(newsClean)
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>📰</span>
            <span className="flex-1 truncate">{t.sidebar.news}</span>
          </Link>

          {/* Cursos link */}
          <Link
            href={coursesRoute}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith(coursesClean)
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>📚</span>
            <span className="flex-1 truncate">{t.sidebar.courses}</span>
          </Link>

          {/* Modelos link */}
          <Link
            href={modelsRoute}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith(modelsClean)
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>🧠</span>
            <span className="flex-1 truncate">{t.sidebar.models}</span>
          </Link>

          {/* Glosario link */}
          <Link
            href={glossaryRoute}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
              cleanPath.startsWith(glossaryClean)
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>📖</span>
            <span className="flex-1 truncate">{t.sidebar.glossary}</span>
          </Link>

          {/* Feedback link */}
          <Link
            href={prefix + "/feedback"}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors mb-2 ${
              cleanPath.startsWith("/feedback")
                ? "bg-bg-hover text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
            }`}
          >
            <span>💬</span>
            <span className="flex-1 truncate">{t.sidebar.feedback}</span>
          </Link>

          <div className="px-4 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted">
              {t.sidebar.categories}
            </span>
          </div>
          {categories.map((cat) => {
            const isActive = cleanPath === `/categoria/${cat.slug}`;
            const count = getToolCountByCategory(cat.slug);
            return (
              <Link
                key={cat.slug}
                href={`${prefix}/categoria/${cat.slug}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-4 py-1.5 text-xs transition-colors ${
                  isActive
                    ? "bg-bg-hover text-accent border-l-2 border-accent"
                    : "text-text-muted hover:text-text hover:bg-bg-hover border-l-2 border-transparent"
                }`}
              >
                <span>{cat.icon}</span>
                <span className="flex-1 truncate">{getLocalizedCategory(cat, locale)}</span>
                <span className="text-[10px] text-text-muted">{count}</span>
              </Link>
            );
          })}

          {/* Language selector */}
          <div className="px-3 py-4 border-t border-border mt-4">
            <p className="text-[10px] uppercase tracking-widest text-text-muted mb-2">Language</p>
            <div className="flex gap-2">
              <button
                onClick={() => { setOpen(false); router.push(getEsPath()); }}
                className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                  locale !== "en"
                    ? "border-accent text-accent bg-accent/10"
                    : "border-border text-text-muted hover:border-accent hover:text-accent"
                }`}
              >
                🇪🇸 Español
              </button>
              <button
                onClick={() => { setOpen(false); router.push(getEnPath()); }}
                className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                  locale === "en"
                    ? "border-accent text-accent bg-accent/10"
                    : "border-border text-text-muted hover:border-accent hover:text-accent"
                }`}
              >
                🇺🇸 English
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
