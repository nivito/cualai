import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import BuscarClient from "@/components/search/BuscarClient";

export const metadata = {
  title: "Buscar herramientas AI — cual.ai",
  description: "Busca con inteligencia artificial la herramienta perfecta para tu caso de uso.",
};

export default function BuscarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <Suspense>
            <BuscarClient />
          </Suspense>
          <Footer />
        </main>
      </div>
    </div>
  );
}
