import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// src/app/page.tsx
export const metadata = {
  title: "Solicitação de Polo - FaCiência",
  description: "Formulário para solicitação de polo",
  icons: {
    icon: "/logoFaCiencia.webp",          // ícone padrão
    shortcut: "/logoFaCiencia.webp",      // ícone para atalhos
    apple: "/logoFaCiencia.webp",     // ícone para dispositivos Apple
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">     
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
