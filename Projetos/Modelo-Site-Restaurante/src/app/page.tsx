
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./globals.css";
export default function Princ(){
    return(
        <>
            <div className="position-relative w-100  vh-100 overflow-hidden">
                {/* Vídeo de fundo */}
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload='metadata'
                    poster='/posterbg.png'
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{objectFit: 'cover', opacity: 0.4}}

                >
                    <source src="/backgroundprinc.mp4" type="video/mp4" />
                    <source src="/seu-video.webm" type="video/webm" />
                    Seu navegador não suporta vídeos.
                </video>


                {/* Conteúdo sobre o vídeo */}
                <div className="position-relative d-flex align-items-center justify-content-center h-100 text-dark">
                    <div className="text-center">
                        <h1 className="display-1 fw-bold mb-4 text-black" style={{textShadow: '4px 4px 16px rgba(0,0,0,0.7)'}}>Restaurante</h1>
                        <p className="fs-3 text-black" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.6)'}}>Uma Nova Experiência Gastronômica</p>
                        
                        <div className="dropdown mt-4">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Descubra um novo sabor!
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/cardapio">📖 Veja nosso Cardápio!</a></li>
                                <li><a className="dropdown-item" href="/reserva">👥 Faça sua Reserva!</a></li>
                                <li><a className="dropdown-item" href="/sobre">📞 Fale Conosco!</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
             

        </>
    )
}



