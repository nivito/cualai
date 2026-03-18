import type { Tool } from "@/data/tools";
import ToolCard from "@/components/tools/ToolCard";

export default function SearchResults({
  tools,
  query,
}: {
  tools: Tool[];
  query: string;
}) {
  return (
    <div>
      <div className="text-xs text-text-muted mb-4">
        <span className="text-green">{tools.length}</span> resultado
        {tools.length !== 1 ? "s" : ""} para{" "}
        <span className="text-accent">&quot;{query}&quot;</span>
      </div>
      {tools.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-muted text-sm">
            // No se encontraron herramientas
          </p>
          <p className="text-text-muted text-xs mt-2">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
