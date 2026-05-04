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
      <body>{children}</body>
    </html>
  );
}
