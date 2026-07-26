import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: "Patrick J. Kamgaing | Développeur Full-Stack & Profil Data/IA",
  description: "Portfolio de Patrick Jovani KAMGAING DOMEGNE, étudiant à INGETIS Paris recherchant une alternance de 24 mois en développement web ou Data/IA.",
  keywords: ["Développeur Web", "Full-Stack", "Alternance", "Paris", "Data Analyst", "IA", "Python", "React", "Next.js"],
  authors: [{ name: "Patrick Jovani KAMGAING DOMEGNE" }],
  creator: "Patrick Jovani KAMGAING DOMEGNE",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://patrick-kamgaing.com",
    title: "Patrick J. Kamgaing | Développeur Full-Stack & Profil Data/IA",
    description: "Portfolio de Patrick Jovani KAMGAING DOMEGNE, étudiant à INGETIS Paris recherchant une alternance de 24 mois en développement web ou Data/IA.",
    siteName: "Portfolio de Patrick J. Kamgaing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick J. Kamgaing | Développeur Full-Stack & Profil Data/IA",
    description: "Portfolio de Patrick Jovani KAMGAING DOMEGNE, étudiant à INGETIS Paris recherchant une alternance de 24 mois en développement web ou Data/IA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50 antialiased selection:bg-blue-200 dark:selection:bg-blue-900`}>
        {/* We will add ThemeProvider and Header/Footer here later */}
        {children}
      </body>
    </html>
  );
}
