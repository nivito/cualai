import Link from "next/link";
import type { Tool } from "@/data/tools";
import { categories } from "@/data/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/herramienta/${tool.slug}`}
      className="block border border-border rounded bg-bg-card hover:border-accent/50 hover:bg-bg-hover transition-all group"
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
            {tool.name}
          </h3>
          <span
            className={`text-[10px] px-1.5 py-0.5 rounded ${
              tool.pricingType === "free"
                ? "bg-green/10 text-green"
                : tool.pricingType === "freemium"
                ? "bg-yellow/10 text-yellow"
                : "bg-accent/10 text-accent"
            }`}
          >
            {tool.pricingType === "free"
              ? "gratis"
              : tool.pricingType === "freemium"
              ? "freemium"
              : "pago"}
          </span>
        </div>
        <p className="text-xs text-text-muted leading-relaxed mb-3 line-clamp-2">
          {tool.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {tool.categories.slice(0, 3).map((catSlug) => {
            const cat = categories.find((c) => c.slug === catSlug);
            return (
              <span
                key={catSlug}
                className="text-[10px] text-text-muted bg-bg px-1.5 py-0.5 rounded"
              >
                {cat?.icon} {cat?.name}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
