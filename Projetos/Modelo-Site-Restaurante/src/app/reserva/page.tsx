import Link from 'next/link'

export default function Reserva() {
    return(
        <>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Restaurante-Reserva</title >
            </head>
            <header className="bg-light border-bottom">
            <div className="container py-3">
            <div className="d-flex justify-content-between align-items-center">
            <div>
                <h1 className="h3 fw-bold text-dark mb-0">Restaurante</h1>
                <small className="text-muted">Uma Nova Experiência Gastronômica</small>
            </div>
            <div className="d-flex gap-3">
                <Link href="/" className= "nav-link" >Página Principal</Link>
                <Link href="/cardapio" className= "nav-link" >Cardápio</Link>
                <Link href="/sobre" className= "nav-link" >Sobre</Link>
            </div>
            </div>
            </div>
        </header>
        
        <div className="container py-1">
           <form>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label row">Responsável pela Reserva: </label>
                    <input type="text" className="form-control row" />
                </div>
                <div className="mb-3 col">
                    <label className="form-label row">Número de Pessoas: </label>
                    <input type="number" className="form-control row"/>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label row">Data da Reserva: </label>
                    <input type="date" className="form-control row"/>
                </div>
                <div className="mb-3 col">
                    <label className="form-label row">Horário da Reserva: </label>
                    <input type="time" className="form-control row-end-10"/>
                </div>
            </div>
            <button type="submit" className="btn btn-dark">Solicitar Reserva!</button>
        </form>
        </div>
        </>

    )
}

