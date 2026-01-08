
// SEO: Importação do tipo Metadata do Next.js para configurar metadados da página
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Josefin_Sans, SUSE_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"]
});

const geistMontserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO: Configuração dos metadados principais da aplicação
// Title e description são fundamentais para o SEO
export const metadata: Metadata = {
  title: "Restaurante - Template", // SEO: Título que aparece na aba do navegador e nos resultados de busca
  description: "Template de site para restaurante com Next.js e Bootstrap", // SEO: Meta description para resultados de busca
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {/* SEO: Atributo lang="pt-BR" importante para motores de busca identificarem o idioma */}
    <html lang="pt-BR">
        <head>
          {/* SEO: Meta viewport para responsividade - Google considera mobile-first */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={`${josefinSans.variable} ${geistMontserrat.variable} antialiased`}>
            <header className="bg-light border-bottom">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                  <div className="container-fluid">
                    {/* SEO: Link interno para home com texto âncora descritivo */}
                    <a className="navbar-brand" href="/">Restaurante</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul className="navbar-nav">
                        {/* SEO: Navegação interna com links descritivos - importante para crawling */}
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
  
            {/* SEO: Tag main semântica - ajuda motores de busca a identificar conteúdo principal */}
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
        
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async/>
          {/* SEO: Tag footer semântica com informações de contato - importante para SEO local */}
          <footer className="bg-dark text-white py-4" style={{ flexShrink: 0 }}>
                <div className="container">
                  <div className="row">
                  {/* SEO: Informações da empresa com heading estruturado */}
                  <div className="col-md-4 mb-3">
                    <h5>Restaurante</h5> {/* SEO: H5 para estrutura hierárquica */}
                    <p>Sabor e qualidade em cada prato.</p>
                  </div>
                  {/* SEO: Informações de contato estruturadas - importantes para SEO local */}
                  <div className="col-md-4 mb-3">
                    <h5>Contato</h5> {/* SEO: H5 para estrutura hierárquica */}
                    <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-whatsapp"></i> WhatsApp: (11) 99999-9999 {/* SEO: Número de telefone para SEO local */}
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-envelope"></i> Email: contato@restaurante.com {/* SEO: Email de contato */}
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
      </>
  );
}

