import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const BASE_URL = "https://cual.ai";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "cual.ai — Encuentra la herramienta de IA perfecta",
    template: "%s",
  },
  description:
    "Directorio de herramientas de inteligencia artificial en español. Encuentra la herramienta AI perfecta por categoría, precio y caso de uso. Para profesionales y equipos en LATAM.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "cual.ai — Directorio de herramientas de IA en español",
    description:
      "Directorio de herramientas de inteligencia artificial en español. Encuentra la herramienta AI perfecta por categoría, precio y caso de uso.",
    url: BASE_URL,
    siteName: "cual.ai",
    locale: "es_LA",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "cual.ai — Herramientas de IA en español",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cual.ai — Herramientas de IA en español",
    description:
      "Directorio de herramientas de inteligencia artificial en español para profesionales en LATAM.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "cual.ai",
  url: BASE_URL,
  description:
    "Directorio de herramientas de inteligencia artificial en español",
  inLanguage: "es",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/buscar?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHPDCLSW');`,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PHPDCLSW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
