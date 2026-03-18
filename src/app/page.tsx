import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/search/SearchBar";
import CategoryList from "@/components/categories/CategoryList";
import ToolCard from "@/components/tools/ToolCard";
import { tools } from "@/data/tools";

export default function Home() {
  const featured = tools.filter((t) => t.highlight);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          {/* Hero */}
          <section className="border-b border-border px-4 py-12 sm:py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="text-accent">cual</span>
                <span className="text-text-muted">.ai</span>
              </h1>
              <p className="text-xs sm:text-sm text-text-muted mb-6">
                Encuentra la herramienta de IA perfecta para lo que necesitas
              </p>
              <SearchBar large autoFocus />
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["crear videos", "editar fotos", "escribir código", "hacer presentaciones"].map(
                  (s) => (
                    <a
                      key={s}
                      href={`/buscar?q=${encodeURIComponent(s)}`}
                      className="text-[10px] text-text-muted border border-border rounded px-2 py-1 hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      {s}
                    </a>
                  )
                )}
              </div>
            </div>
          </section>

          {/* Destacadas */}
          <section className="px-4 py-6">
            <h2 className="text-xs text-text-muted uppercase tracking-wider mb-3">
              // destacadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {featured.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>

          {/* Categorías */}
          <section className="px-4 py-6">
            <h2 className="text-xs text-text-muted uppercase tracking-wider mb-3">
              // explorar por categoría
            </h2>
            <CategoryList />
          </section>

          {/* Todas */}
          <section className="px-4 py-6">
            <h2 className="text-xs text-text-muted uppercase tracking-wider mb-3">
              // todas las herramientas ({tools.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
