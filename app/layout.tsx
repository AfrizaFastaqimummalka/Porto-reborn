import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted fonts (no Google Fonts network call needed at build time).
const spaceGrotesk = localFont({
  src: [
    { path: "./fonts/SpaceGrotesk-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SpaceGrotesk-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/SpaceGrotesk-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/Inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    { path: "./fonts/JetBrainsMono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/JetBrainsMono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afriza Fastaqimummalka — Full Stack Developer",
  description:
    "Portofolio Afriza Fastaqimummalka. Full stack developer dari Bandung — Laravel, React, Next.js, PostgreSQL. Project kampus, GIS, UMKM tools, dan web app produksi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
