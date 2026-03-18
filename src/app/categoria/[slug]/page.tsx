import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/search/SearchBar";
import ToolCard from "@/components/tools/ToolCard";
import { getCategoryBySlug, getToolsByCategory, categories } from "@/data/tools";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 py-6">
          <div className="max-w-2xl mb-6">
            <SearchBar />
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{category.icon}</span>
              <h1 className="text-lg font-semibold">{category.name}</h1>
            </div>
            <p className="text-xs text-text-muted">{category.description}</p>
            <div className="text-[10px] text-text-muted mt-1">
              {categoryTools.length} herramienta
              {categoryTools.length !== 1 ? "s" : ""}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {categoryTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}
