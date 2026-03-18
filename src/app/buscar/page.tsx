import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";
import { searchTools } from "@/data/tools";

export default async function BuscarPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "";
  const results = searchTools(query);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 py-6">
          <div className="max-w-2xl mb-6">
            <SearchBar defaultValue={query} autoFocus />
          </div>
          <SearchResults tools={results} query={query} />
          <Footer />
        </main>
      </div>
    </div>
  );
}
