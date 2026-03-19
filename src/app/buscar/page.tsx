"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/search/SearchBar";
import ToolCard from "@/components/tools/ToolCard";
import type { Tool } from "@/data/tools";

export default function BuscarPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const [results, setResults] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiEnhanced, setAiEnhanced] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);

  const doSearch = useCallback(async (query: string) => {
    if (!query.trim()) { setResults([]); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/search/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setResults(data.results || []);
      setAiEnhanced(data.aiEnhanced || false);
      setKeywords(data.keywords || []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    doSearch(q);
  }, [q, doSearch]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <section className="py-8 px-4">
            <div className="max-w-2xl mx-auto mb-6">
              <SearchBar defaultValue={q} autoFocus large />
            </div>

            {q ? (
              <>
                {/* Status bar */}
                <div className="flex items-center gap-2 mb-4 px-2 flex-wrap">
                  {loading ? (
                    <span className="text-xs text-text-muted animate-pulse">
                      ⟳ Buscando con AI...
                    </span>
                  ) : (
                    <>
                      <span className="text-xs text-text-muted">
                        {results.length} herramienta{results.length !== 1 ? "s" : ""} para{" "}
                        <span className="text-accent">&quot;{q}&quot;</span>
                      </span>
                      {aiEnhanced && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded border border-accent/40 text-accent bg-accent/5">
                          ✦ AI
                        </span>
                      )}
                    </>
                  )}
                </div>

                {/* Keywords expandidas por AI */}
                {aiEnhanced && keywords.length > 0 && !loading && (
                  <div className="flex flex-wrap gap-1 mb-4 px-2">
                    {keywords.slice(0, 6).map((kw) => (
                      <span key={kw} className="text-[10px] px-2 py-0.5 rounded border border-border text-text-muted">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}

                {!loading && results.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {results.map((tool) => (
                      <ToolCard key={tool.id} tool={tool} />
                    ))}
                  </div>
                )}

                {!loading && results.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-text-muted text-sm">
                      No encontramos herramientas para esa búsqueda.
                    </p>
                    <p className="text-text-muted text-xs mt-2">
                      Intenta con otras palabras, ej: &quot;hacer videos&quot;, &quot;escribir emails&quot;
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-text-muted text-sm">
                  Describe lo que quieres lograr y la AI encuentra la herramienta perfecta.
                </p>
              </div>
            )}
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}
