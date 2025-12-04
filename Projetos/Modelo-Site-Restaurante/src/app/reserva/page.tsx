import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Reserva() {
    return(
        <>
        <div className="container  m-auto  vh-100">
           <form>
            <div className="row">
                <div className="my-3">
                    <label className="form-label row">Responsável pela Reserva: </label>
                    <input type="text" className="form-control row" />
                </div>
                <div className="my-3">
                    <label className="form-label row">Número de Pessoas: </label>
                    <input type="number" className="form-control row"/>
                </div>
            </div>
            <div className="row">
                <div className="my-3 col">
                    <label className="form-label row">Data da Reserva: </label>
                    <input type="date" className="form-control row"/>
                </div>
                <div className="my-3 col">
                    <label className="form-label row">Horário da Reserva: </label>
                    <input type="time" className="form-control row-end-10"/>
                </div>
            </div>
            <button type="submit" className="btn btn-dark my-3">Solicitar Reserva!</button>
        </form>
        </div>
        </>

    )
}

