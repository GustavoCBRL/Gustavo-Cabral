"use client"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from "react"

export default function Reserva() {
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const mensagem = `Olá! Gostaria de fazer uma reserva.\n\nResponsável: ${nome}\nNúmero de pessoas: ${numero}\nData: ${data}\nHorário: ${horario}`;
        const url = `https://wa.me/5561982990749?text=${encodeURI(mensagem)}`;
        window.open(url, "_blank");
    }


    return(
        <>
        <div className="container">
            {/* SEO: H2 descritivo da página de reservas com call-to-action */}
            <h2 className='text-center m-4'>Solicite sua Reserva!</h2>
           <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="my-3">
                    <label className="form-label row">Responsável pela Reserva: </label>
                    <input type="text" required={true} id='nome' className="form-control row" value={nome} onChange={e => setNome(e.target.value)}/>
                </div>
                <div className="my-3">
                    <label className="form-label row">Número de Pessoas: </label>
                    <input type="number" required={true} min="10" max="30" id="numero" className="form-control row" value={numero} onChange={e => setNumero(e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="my-3 col">
                    <label className="form-label row">Data da Reserva: </label>
                    <input type="date" required={true} id="data" className="form-control row" value={data} onChange={e => setData(e.target.value)}/>
                </div>
                <div className="my-3 col">
                    <label className="form-label row">Horário da Reserva: </label>
                    <input type="time" min="11:30" max="22:00" required={true} id="horario" className="form-control row-end-10" value={horario} onChange={e => setHorario(e.target.value)}/>
                </div>
            </div>
            <button type="submit" className="btn btn-dark my-3"><i className="bi bi-whatsapp me-2"></i>Solicitar Reserva!</button>
        </form>
        </div>
        </>

    )
}
