import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cual.ai — ¿Qué herramienta de IA necesitas?",
  description:
    "Encuentra la herramienta de inteligencia artificial perfecta para tu objetivo. Buscador de herramientas AI por categoría y caso de uso.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
