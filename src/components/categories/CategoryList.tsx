import Link from "next/link";
import { categories, tools } from "@/data/tools";

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {categories.map((cat) => {
        const count = tools.filter((t) => t.categories.includes(cat.slug)).length;
        return (
          <Link
            key={cat.slug}
            href={`/categoria/${cat.slug}`}
            className="border border-border rounded bg-bg-card hover:border-accent/50 hover:bg-bg-hover transition-all p-3 group"
          >
            <div className="text-lg mb-1">{cat.icon}</div>
            <div className="text-xs font-medium text-text group-hover:text-accent transition-colors">
              {cat.name}
            </div>
            <div className="text-[10px] text-text-muted mt-0.5">
              {count} herramienta{count !== 1 ? "s" : ""}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
