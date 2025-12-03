
"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { useState } from 'react'

export default function Cardapio() {
    const [currentView, setCurrentView] = useState('executivos')

    return(
        <div className="container py-4">
            <h1 className="text-center mb-4">Cardápio</h1>
            
            {/* Menu de navegação */}
            <div className="d-flex justify-content-center mb-4">
                <div className="btn-group" role="group">
                    <button 
                        type="button" 
                        className={`btn ${currentView === 'executivos' ? 'btn-outline-dark' : 'btn-primary-dark'}`}
                        onClick={() => setCurrentView('executivos')}
                    >
                        Pratos Executivos
                    </button>
                    <button 
                        type="button" 
                        className={`btn ${currentView === 'familia' ? 'btn-outline-dark' : 'btn-primary-dark'}`}
                        onClick={() => setCurrentView('familia')}
                    >
                        Pratos Família
                    </button>
                     <button 
                        type="button" 
                        className={`btn ${currentView === 'drinks' ? 'btn-outline-dark' : 'btn-primary-dark'}`}
                        onClick={() => setCurrentView('drinks')}
                    >
                        Drinks
                    </button>
                </div>
            </div>

            {/* Conteúdo baseado na seleção */}
            {currentView === 'executivos' && <PratosExec />}
            {currentView === 'familia' && <PratosFam />}
            {currentView === 'drinks' && <Drinks />}
        </div>
    )
}






function PratosExec() {
    return (
        <div className='container'>
            <h2 className="text-center mb-4 mt-4">Pratos Executivos</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card h-100">
                        <img src="/file-de-frango-a-parmegiana.jpg" className="card-img-top" alt="Parmegiana de Frango" style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Parmegiana de Frango</h5>
                            <p className="card-text flex-grow-1">Filé de frango empanado dourado, coberto com molho de tomate caseiro e queijo derretido. Acompanha arroz branco, batata frita e salada verde. Uma explosão de sabores que conquista paladares!</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card h-100">
                        <img src="/picadinhocarne.jpg" className="card-img-top" alt="Picadinho de Carne de Sol Angus" style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Picadinho de Carne de Sol Angus</h5>
                            <p className="card-text flex-grow-1">Cubos de carne de sol Angus temperados com especiarias regionais, refogados com cebola, pimentão e mandioca. Servido com arroz de leite de coco e farofa especial. Tradição nordestina no seu prato!</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card h-100">
                        <img src="/strogonoff.jpeg" className="card-img-top" alt="Strogonoff de Frango" style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Strogonoff de Frango</h5>
                            <p className="card-text flex-grow-1">Tiras macias de frango em molho cremoso de cogumelos com toque especial de mostarda. Acompanha arroz branco soltinho e batata palha dourada. O clássico que nunca sai de moda, feito com todo carinho!</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card h-100">
                        <img src="/espaguete.jpg" className="card-img-top" alt="Espaguete ao Molho Branco" style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Espaguete ao Molho Branco</h5>
                            <p className="card-text flex-grow-1">Massa artesanal al dente envolvida em cremoso molho branco com alho, queijo parmesão e ervas finas. Finalizado com frango grelhado em cubos e champignons salteados. Uma viagem à Itália!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PratosFam(){
    return(
        <div className='container'>
            <h2 className='text-center mb-4 mt-4 py-3'>Pratos Família</h2>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                    <div className="card h-100">
                        <img src="/file-de-frango-a-parmegiana.jpg" className="card-img-top" alt="Parmegiana de Frango para Duas Pessoas" style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Parmegiana de Frango para Duas Pessoas</h5>
                            <p className="card-text flex-grow-1">
                                Prato serve de duas a três pessoas. Generosa porção de filé de frango empanado com molho especial e queijo derretido, acompanha arroz, batata frita e salada para toda família.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                    <div className="card h-100">
                        <img src="/picadinhocarne.jpg" className="card-img-top" alt="Picadinho Família" style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Picadinho Família</h5>
                            <p className="card-text flex-grow-1">
                                Porção familiar do nosso famoso picadinho de carne de sol. Serve até 4 pessoas. Acompanha arroz de coco, farofa e macaxeira.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                    <div className="card h-100">
                        <img src="/strogonoff.jpeg" className="card-img-top" alt="Strogonoff Família" style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Strogonoff Família</h5>
                            <p className="card-text flex-grow-1">
                                Strogonoff cremoso em porção generosa para 3-4 pessoas. Acompanha arroz branco e batata palha crocante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Drinks(){
    return(
        <div className='container'>
            <h2 className='text-center mb-4 mt-4 py-3'>Drinks</h2>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                        <img src="/drymartini.jpeg" className="card-img-top" alt="Dry Martini" style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Dry Martini</h5>
                            <p className="card-text flex-grow-1">
                                Combinação elegante de Vermuth Seco e Gin premium, servido gelado com azeitona ou twist de limão. Um clássico atemporal dos coquetéis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                        <img src="/mojito.jpeg" className="card-img-top" alt="Mojito" style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Mojito</h5>
                            <p className="card-text flex-grow-1">
                                Refrescante mistura de rum branco, folhas de hortelã fresca, limão espremido na hora e água com gás. Finalizado com gelo e açúcar cristal. O sabor cubano que refresca qualquer momento!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                        <img src="/marguerita.jpeg" className="card-img-top" alt="Marguerita" style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Marguerita</h5>
                            <p className="card-text flex-grow-1">
                                Tequila premium com licor de laranja e limão fresco, servido com borda de sal e gelo. O clássico mexicano que desperta os sentidos com seu sabor marcante e refrescante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}