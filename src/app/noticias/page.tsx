import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

const placeholderNews = [
  {
    title: "OpenAI lanza GPT-5 con capacidades multimodales mejoradas",
    source: "TechCrunch",
    date: "2026-03-18",
    summary: "La nueva versión promete mejor razonamiento y comprensión de imágenes y audio en tiempo real.",
  },
  {
    title: "Runway Gen-4 redefine la generación de video con IA",
    source: "The Verge",
    date: "2026-03-17",
    summary: "Videos de hasta 2 minutos con consistencia temporal y control de cámara cinematográfico.",
  },
  {
    title: "Anthropic presenta Claude 4.5 Opus con contexto de 1M tokens",
    source: "Anthropic Blog",
    date: "2026-03-16",
    summary: "El modelo más capaz de Anthropic ahora puede procesar documentos completos y codebases enteros.",
  },
  {
    title: "Suno v4 permite crear álbumes musicales completos",
    source: "Product Hunt",
    date: "2026-03-15",
    summary: "La nueva versión mantiene coherencia musical a lo largo de múltiples canciones con un mismo estilo.",
  },
  {
    title: "Google DeepMind presenta Gemini 2.5 Pro",
    source: "Google Blog",
    date: "2026-03-14",
    summary: "Nuevo modelo con capacidades avanzadas de código, matemáticas y razonamiento científico.",
  },
];

export default function NoticiasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 py-6">
          <h1 className="text-lg font-semibold mb-1">// noticias AI</h1>
          <p className="text-xs text-text-muted mb-6">
            Lo último en inteligencia artificial — actualizado por nuestro agente
          </p>

          <div className="max-w-2xl space-y-3">
            {placeholderNews.map((news, i) => (
              <article
                key={i}
                className="border border-border rounded bg-bg-card p-4 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center gap-2 text-[10px] text-text-muted mb-2">
                  <span className="text-accent">{news.source}</span>
                  <span>·</span>
                  <span>{news.date}</span>
                </div>
                <h2 className="text-sm font-medium mb-1">{news.title}</h2>
                <p className="text-xs text-text-muted leading-relaxed">
                  {news.summary}
                </p>
              </article>
            ))}
          </div>

          <div className="max-w-2xl mt-6 border border-border rounded bg-bg-card p-4 text-center">
            <p className="text-xs text-text-muted">
              // Próximamente: noticias actualizadas automáticamente por nuestro agente AI
            </p>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}
