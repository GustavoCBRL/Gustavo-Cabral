
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


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
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="/">Restaurante</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="/cardapio">Cardápio</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/reserva">Reservas</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/sobre">Sobre</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav> 
            </header>
              {children}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async/>
          <footer className="bg-dark text-white py-4 mt-5 w-screen">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <h5>Restaurante</h5>
                  <p>Sabor e qualidade em cada prato.</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h5>Contato</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-whatsapp"></i> WhatsApp: (11) 99999-9999
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-envelope"></i> Email: contato@restaurante.com
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-3">
                  <h5>Redes Sociais</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#" className="text-white text-decoration-none">
                        <i className="bi bi-instagram"></i> Instagram
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-white text-decoration-none">
                        <i className="bi bi-facebook"></i> Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="bg-secondary" />
              <div className="text-center ">
                <p className="mb-0">&copy; 2024 Restaurante. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
  );
}

