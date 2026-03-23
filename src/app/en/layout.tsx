import type { Metadata } from "next";

const BASE_URL = "https://cual.ai";

export const metadata: Metadata = {
  title: {
    default: "cual.ai — Find the perfect AI tool",
    template: "%s",
  },
  description:
    "Directory of artificial intelligence tools. Find the perfect AI tool by category, price and use case. For professionals and teams in LATAM.",
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: { es: BASE_URL, en: `${BASE_URL}/en` },
  },
  openGraph: {
    title: "cual.ai — AI tools directory",
    description:
      "Directory of artificial intelligence tools. Find the perfect AI tool by category, price and use case.",
    url: `${BASE_URL}/en`,
    siteName: "cual.ai",
    locale: "en_US",
    alternateLocale: ["es_LA"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cual.ai — AI tools directory",
    description:
      "Directory of artificial intelligence tools for professionals in LATAM.",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>;
}
