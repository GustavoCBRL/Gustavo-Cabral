
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurante - Template",
  description: "Template de site para restaurante com Next.js e Bootstrap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="pt-BR">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Restaurante</title >
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <header className="bg-light border-bottom">
          <div className="container py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 fw-bold text-dark mb-0">Restaurante</h1>
              <small className="text-muted">Uma Nova Experiência Gastronômica</small>
            </div>
            <div className="d-flex gap-3">
              <Link href="/" className="nav-link">Página Principal</Link>
              <Link href="/cardapio" className= "nav-link" >Cardápio</Link>
              <Link href="/reserva" className= "nav-link" >Reservas</Link>
              <Link href="/sobre" className= "nav-link" >Sobre</Link>
            </div>
          </div>
          </div>
          </header> 
              {children}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async/>
        </body>
      </html>
  );
}

