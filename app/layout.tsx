import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio Ian Monteiro",
  description: "Desenvolvedor Full Stack e Músico",
  icons: {
    icon: "/logo-port.png", // Favicon (o que aparece na aba do navegador)
    shortcut: "/logo-port.png",
    apple: "/logo-port.png", // Para quando alguém salva o site na tela inicial do iPhone
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      {/* REMOVIDO: bg-aurora, dark:bg-gray-900, etc. 
          MOTIVO: O arquivo globals.css já está cuidando disso sozinho. */}
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}