
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

export default function Cabeça() {
 return(
  <>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Restaurante</title >
  </head>
  <header className="bg-light border-bottom">
    <div className="container py-3">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h1 className="h3 fw-bold text-dark mb-0">Restaurante</h1>
        <small className="text-muted">Uma Nova Experiência Gastronômica</small>
      </div>
      <div className="d-flex gap-3">
        <Link href="/cardapio" className= "nav-link" >Cardápio</Link>
        <Link href="/reserva" className= "nav-link" >Reservas</Link>
        <Link href="/sobre" className= "nav-link" >Sobre</Link>
      </div>
    </div>
    </div>
  </header>
  </>
 );
}



