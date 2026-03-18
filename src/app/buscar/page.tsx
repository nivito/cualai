import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/search/SearchBar";
import ToolCard from "@/components/tools/ToolCard";
import { searchTools } from "@/data/tools";

export default async function BuscarPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = searchTools(q);

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
                <p className="text-xs text-text-muted mb-4 px-2">
                  {results.length} herramienta{results.length !== 1 ? "s" : ""}{" "}
                  encontrada{results.length !== 1 ? "s" : ""} para:{" "}
                  <span className="text-accent">&quot;{q}&quot;</span>
                </p>
                {results.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {results.map((tool) => (
                      <ToolCard key={tool.id} tool={tool} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-text-muted text-sm">
                      No encontramos herramientas para esa búsqueda.
                    </p>
                    <p className="text-text-muted text-xs mt-2">
                      Intenta con otras palabras clave.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-text-muted text-sm">
                  Escribe algo para buscar herramientas AI.
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
