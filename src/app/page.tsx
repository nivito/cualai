import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/search/SearchBar";
import ToolCard from "@/components/tools/ToolCard";
import NewsCard from "@/components/news/NewsCard";
import { getFeaturedTools, tools } from "@/data/tools";
import { getLatestNews } from "@/data/news";

export default function Home() {
  const featured = getFeaturedTools();
  const latestNews = getLatestNews(3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          {/* Hero */}
          <section className="border-b border-border py-12 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl font-bold mb-2">
                <span className="text-accent">cual</span>.ai
              </h1>
              <p className="text-text-muted text-xs mb-6">
                Describe tu problema, encuentra la herramienta AI perfecta
              </p>
              <SearchBar large autoFocus />
              <p className="text-text-muted text-[10px] mt-3">
                {tools.length} herramientas indexadas en 12 categorías
              </p>
            </div>
          </section>

          {/* Featured */}
          <section className="py-8 px-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 px-2">
              // Destacadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {featured.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>

          {/* Latest news */}
          <section className="py-8 px-4">
            <div className="flex items-center justify-between mb-4 px-2">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                // Últimas noticias
              </h2>
              <a
                href="/noticias"
                className="text-[10px] text-text-muted hover:text-accent transition-colors"
              >
                Ver todas →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {latestNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* All tools */}
          <section className="py-8 px-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4 px-2">
              // Todas las herramientas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
