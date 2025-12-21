
"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { useEffect } from 'react'

interface MenuItem {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    imagem: string;
}


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
    const [itens, setItens] = useState<MenuItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const parmegiana = itens.find(u => u.id === 1)
    const picadinho = itens.find(u => u.id === 2)
    const strogonoff = itens.find(u => u.id === 3)
    const espaguete = itens.find(u => u.id === 4)
  

// API do Cardápio
    useEffect(() => {
        fetch('https://cardapioapi-production-1b26.up.railway.app/api/items/')
            .then(res => {
                if (!res.ok) throw new Error('Erro na resposta da API')
                return res.json()
            })
            .then(data => {
                
                setItens(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar API:', error);
                setError(error.message);
                setLoading(false);
            })
    }, [])

    if (loading) return <p className="text-center">Carregando cardápio...</p>
    if (error) return <p className="text-center text-danger">Erro ao carregar: {error}</p>
    if (!parmegiana || !picadinho || !strogonoff || !espaguete) return <p className="text-center">Itens não encontrados</p>

    return (
    
        <div className='container'>
            <h2 className="text-center mb-4 mt-4">Pratos Executivos</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card h-100">
                        <img src={parmegiana.imagem} className="card-img-top" alt={parmegiana.nome} style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{parmegiana.nome}</h5>
                            <p className="card-text flex-grow-1">{parmegiana.descricao}</p>
                            <p className="card-text mt-auto"><strong>R$ {parmegiana.preco}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card h-100">
                        <img src={picadinho.imagem} className="card-img-top" alt={picadinho.nome} style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{picadinho.nome}</h5>
                            <p className="card-text flex-grow-1">{picadinho.descricao}</p>
                            <p className="card-text mt-auto"><strong>R$ {picadinho.preco}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card h-100">
                        <img src={strogonoff.imagem} className="card-img-top" alt={strogonoff.nome} style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{strogonoff.nome}</h5>
                            <p className="card-text flex-grow-1">{strogonoff.descricao}</p>
                            <p className="card-text mt-auto"><strong>R$ {strogonoff.preco}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card h-100">
                        <img src={espaguete.imagem} className="card-img-top" alt={espaguete.nome} style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{espaguete.nome}</h5>
                            <p className="card-text flex-grow-1">{espaguete.descricao}</p>
                            <p className="card-text mt-auto"><strong>R$ {espaguete.preco}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PratosFam(){

    const [itens, setItens] = useState<MenuItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    
    const parmegianafam = itens.find(u => u.id === 5)
    const carnedesol = itens.find(u => u.id === 6)
    const strogonofffam = itens.find(u => u.id === 7)

// API do Cardápio
    useEffect(() => {
        fetch('https://cardapioapi-production-1b26.up.railway.app/api/items/')
            .then(res => {
                if (!res.ok) throw new Error('Erro na resposta da API')
                return res.json()
            })
            .then(data => {
                setItens(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }, [])
    if (loading) return <p className="text-center">Carregando cardápio...</p>
    if (error) return <p className="text-center text-danger">Erro ao carregar: {error}</p>
    if (!parmegianafam || !carnedesol || !strogonofffam) return <p className="text-center">Itens não encontrados</p>

    return(
        <div className='container'>
            <h2 className='text-center mb-4 mt-4 py-3'>Pratos Família</h2>
            <h2 className='text-center mb-4 mt-4 py-3'>Pratos Família</h2>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                    <div className="card h-100">
                         <img src={parmegianafam.imagem} className="card-img-top" alt={parmegianafam.nome} style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{parmegianafam.nome}</h5>
                            <p className="card-text flex-grow-1">{parmegianafam.descricao}</p>
                            <p className="card-text mt-auto"><strong>R$ {parmegianafam.preco}</strong></p>
                        </div>
                        
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                    <div className="card h-100">
                        <img src={carnedesol.imagem} className="card-img-top" alt={carnedesol.nome} style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{carnedesol.nome}</h5>
                            <p className="card-text flex-grow-1">
                                {carnedesol.descricao}
                            </p>
                            <p className="card-text mt-auto"><strong>R$ {carnedesol.preco}</strong></p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                    <div className="card h-100">
                        <img src={strogonofffam.imagem} className="card-img-top" alt={strogonofffam.nome} style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{strogonofffam.nome}</h5>
                            <p className="card-text flex-grow-1">
                                {strogonofffam.descricao}
                            </p>
                            <p className="card-text mt-auto"><strong>R$ {strogonofffam.preco}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Drinks(){
    const [itens, setItens] = useState<MenuItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const drymartini = itens.find(u => u.id === 8)
    const mojito = itens.find(u => u.id === 9)
    const marguerita = itens.find(u => u.id === 10)
    
  

// API do Cardápio
    useEffect(() => {
        fetch('https://cardapioapi-production-1b26.up.railway.app/api/items/')
            .then(res => {
                if (!res.ok) throw new Error('Erro na resposta da API')
                return res.json()
            })
            .then(data => {
                
                setItens(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar API:', error);
                setError(error.message);
                setLoading(false);
            })
    }, [])

    if (loading) return <p className="text-center">Carregando cardápio...</p>
    if (error) return <p className="text-center text-danger">Erro ao carregar: {error}</p>
    if (!drymartini || !mojito|| !marguerita) return <p className="text-center">Itens não encontrados</p>
    return(
        
        <div className='container'>
            <h2 className='text-center mb-4 mt-4 py-3'>Drinks</h2>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                        <img src={drymartini.imagem} className="card-img-top" alt={drymartini.nome} style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{drymartini.nome}</h5>
                            <p className="card-text flex-grow-1">
                                {drymartini.descricao}
                            </p>
                            <p className="card-text mt-auto"><strong>R$ {drymartini.preco}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                        <img src={mojito.imagem} className="card-img-top" alt={mojito.nome} style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{mojito.nome}</h5>
                            <p className="card-text flex-grow-1">
                               {mojito.descricao}
                            </p>
                            <p className="card-text mt-auto"><strong>R$ {mojito.preco}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                        <img src={marguerita.imagem} className="card-img-top" alt={marguerita.nome} style={{height: '250px', objectFit: 'cover'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{marguerita.nome}</h5>
                            <p className="card-text flex-grow-1">
                                {marguerita.descricao}
                            </p>
                            <p className="card-text mt-auto"><strong>R$ {marguerita.preco}</strong></p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}