"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/tools";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-accent text-bg w-10 h-10 rounded flex items-center justify-center text-sm font-bold"
      >
        {collapsed ? "×" : "≡"}
      </button>

      {/* Mobile overlay */}
      {collapsed && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setCollapsed(false)}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-12 left-0 z-40
          w-52 h-[calc(100vh-3rem)] overflow-y-auto
          border-r border-border bg-bg
          transition-transform duration-200
          ${collapsed ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-3">
          <div className="text-[10px] uppercase tracking-wider text-text-muted mb-2 px-2">
            categorías
          </div>
          <nav className="flex flex-col gap-0.5">
            {categories.map((cat) => {
              const isActive = pathname === `/categoria/${cat.slug}`;
              return (
                <Link
                  key={cat.slug}
                  href={`/categoria/${cat.slug}`}
                  onClick={() => setCollapsed(false)}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs transition-colors ${
                    isActive
                      ? "bg-bg-hover text-accent"
                      : "text-text-muted hover:text-text hover:bg-bg-hover"
                  }`}
                >
                  <span className="w-5 text-center text-[10px]">{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
