import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import ToolCard from "@/components/tools/ToolCard";
import {
  categories,
  getCategoryBySlug,
  getToolsByCategory,
} from "@/data/tools";

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
        <main className="flex-1 min-w-0">
          <section className="py-8 px-4">
            <div className="mb-6 px-2">
              <h1 className="text-lg font-bold">
                {category.icon} {category.name}
              </h1>
              <p className="text-text-muted text-xs mt-1">
                {categoryTools.length} herramienta
                {categoryTools.length !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {categoryTools.map((tool) => (
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
