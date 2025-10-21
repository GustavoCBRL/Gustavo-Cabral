import 'bootstrap/dist/css/bootstrap.min.css'


export  default function PratosExec() {
    return (
    <>
    <div className='container'>
        <h2 className="text-center mb-4 mt-4">Pratos Executivos</h2>
        <div className="row">
            <div className="col-md-3">
                <div className="card h-100">
                    <img src="/file-de-frango-a-parmegiana.jpg" className="card-img-top" alt="Parmegiana de Frango" />
                    <div className="card-body">
                        <h5 className="card-title">Parmegiana de Frango</h5>
                        <p className="card-text">Filé de frango empanado dourado, coberto com molho de tomate caseiro e queijo derretido. Acompanha arroz branco, batata frita e salada verde. Uma explosão de sabores que conquista paladares!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card h-100">
                    <img src="/picadinhocarne.jpg" className="card-img-top" alt="Picadinho de Carne de Sol Angus" />
                    <div className="card-body">
                        <h5 className="card-title">Picadinho de Carne de Sol Angus</h5>
                        <p className="card-text">Cubos de carne de sol Angus temperados com especiarias regionais, refogados com cebola, pimentão e mandioca. Servido com arroz de leite de coco e farofa especial. Tradição nordestina no seu prato!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card h-100">
                    <img src="/strogonoff.jpeg" className="card-img-top" alt="Strogonoff de Frango" />
                    <div className="card-body">
                        <h5 className="card-title">Strognoff de Frango</h5>
                        <p className="card-text">Tiras macias de frango em molho cremoso de cogumelos com toque especial de mostarda. Acompanha arroz branco soltinho e batata palha dourada. O clássico que nunca sai de moda, feito com todo carinho!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card h-100">
                    <img src="espaguete.jpg" className="card-img-top" alt="Espaguete ao Molho Branco" />
                    <div className="card-body">
                        <h5 className="card-title">Espaguete ao Molho Branco</h5>
                        <p className="card-text">Massa artesanal al dente envolvida em cremoso molho branco com alho, queijo parmesão e ervas finas. Finalizado com frango grelhado em cubos e champignons salteados. Uma viagem à Itália!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <PratosFam />
    </>
    );
}

export function PratosFam(){
    return(
        <div className='container'>
            <h2 className='text-center mb-4 mt-4'>Pratos Família</h2>
            <div className='row'>
                <div className='col-md-2'>
                    <div className="card h-100">
                    <img src="/file-de-frango-a-parmegiana.jpg" className="card-img-top" alt="Parmegiana de Frango para Duas Pessoas" />
                    <div className="card-body">
                        <h5 className="card-title">Parmegianda de Frango para Duas Pessoas</h5>
                        <p className="card-text">
                            Prato serve de duas a três pessoas
                        </p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}