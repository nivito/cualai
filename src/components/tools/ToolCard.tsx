import Link from "next/link";
import type { Tool } from "@/data/tools";
import { categories } from "@/data/tools";
import VoteButtons from "@/components/tools/VoteButtons";
import CompareButton from "@/components/comparator/CompareButton";

function PricingBadge({ tool }: { tool: Tool }) {
  const color =
    tool.pricing === "gratis"
      ? "text-green"
      : tool.pricing === "freemium"
        ? "text-yellow"
        : "text-accent";

  return <span className={`text-[10px] ${color}`}>{tool.priceLabel}</span>;
}

export default function ToolCard({ tool }: { tool: Tool }) {
  const firstCat = categories.find((c) => c.slug === tool.categories[0]);
  const initial = tool.name.charAt(0).toUpperCase();

  return (
    <Link
      href={`/herramienta/${tool.slug}`}
      className="group relative block border border-border rounded bg-bg-card hover:border-accent hover:shadow-[0_0_12px_rgba(88,166,255,0.1)] transition-all"
    >
      {/* Compare button */}
      <div className="absolute top-2 right-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-10">
        <CompareButton slug={tool.slug} compact />
      </div>

      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded bg-bg flex items-center justify-center text-accent text-sm font-bold shrink-0 border border-border">
            {initial}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold truncate group-hover:text-accent transition-colors">
              {tool.name}
            </h3>
            {firstCat && (
              <span className="text-[10px] text-text-muted">
                {firstCat.icon} {firstCat.name}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-3">
          {tool.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <PricingBadge tool={tool} />
          <div className="flex items-center gap-2">
            <VoteButtons slug={tool.slug} compact />
            <span className="text-[10px] text-text-muted group-hover:text-accent transition-colors">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
