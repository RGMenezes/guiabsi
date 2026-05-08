import type { Metadata } from "next";
import { Space_Mono as SpaceMono, DM_Sans as DmSans } from "next/font/google";
import "./globals.css";

const spaceMono = SpaceMono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DmSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Guia BSI — IFF",
  description: "Guia completo para calouros de Sistemas de Informação do IFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceMono.variable} ${dmSans.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00e5a0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Guia BSI" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
