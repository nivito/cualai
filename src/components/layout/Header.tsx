"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-bg-card sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 h-12">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <span className="text-accent font-bold text-lg">cual</span>
            <span className="text-text-muted">.ai</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-1 ml-4">
            {[
              { href: "/", label: "inicio" },
              { href: "/noticias", label: "noticias" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  pathname === link.href
                    ? "bg-bg-hover text-accent"
                    : "text-text-muted hover:text-text hover:bg-bg-hover"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span className="hidden sm:inline">v0.1.0</span>
          <span className="text-green">●</span>
        </div>
      </div>
    </header>
  );
}
