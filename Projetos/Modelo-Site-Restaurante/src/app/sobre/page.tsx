"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState  } from 'react'


    export default function Sobre() {
        const [currentView, setCurrentView] = useState('sobrenos')
    
        return(
            <div className="container py-4">
                <h1 className="text-center mb-4">Sobre</h1>
                
                {/* Menu de navegação */}
                <div className="d-flex justify-content-center mb-4">
                    <div className="btn-group" role="group">
                        <button 
                            type="button" 
                            className={`btn ${currentView === 'sobrenos' ? 'btn-outline-dark' : 'btn-primary-dark'}`}
                            onClick={() => setCurrentView('sobrenos')}
                        >
                            Sobre Nós
                        </button>
                        <button 
                            type="button" 
                            className={`btn ${currentView === 'contato' ? 'btn-outline-dark' : 'btn-primary-dark'}`}
                            onClick={() => setCurrentView('contato')}
                        >
                            Contatos
                        </button>
                         <button 
                            type="button" 
                            className={`btn ${currentView === 'colaboradores' ? 'btn-outline-dark' : 'btn-primary-dark'}`}
                            onClick={() => setCurrentView('colaboradores')}
                        >
                            Nossos Colaboradores
                        </button>
                    </div>
                </div>
    
                {/* Conteúdo baseado na seleção */}
                {currentView === 'sobrenos' && <SobreNos />}
                {currentView === 'contato' && <Contatos />}
                {currentView === 'colaboradores' && <Colaboradores />}
            </div>
        )
    }


function SobreNos(){
    return(
            <div className='blockquote'>
                <h2 className='h2'>Nossa História</h2>
                <p className="mb-0">
                    História a ser inserida aqui nesse espaço.
                </p>
            </div>
        
    )
}

function Contatos(){
    return(
    <div>
        <h2 className='h2'>Contatos</h2>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><i className="bi bi-whatsapp me-2"></i>Whatsapp: xx-xxxxxxxxx </li>
            <li className="list-group-item"><i className="bi bi-linkedin me-2"></i>Linkedin: exampleprofile</li>
            <li className="list-group-item"><i className="bi bi-envelope-at me-2"></i>Email: example@provider.com</li>
        </ul>
    </div>
    )
}

function Colaboradores(){
    return(
    <div>
        <h2 className='h2'>Nossos Colaboradores</h2>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Func 1</li>
            <li className="list-group-item">Func 2</li>
            <li className="list-group-item">Func 3</li>
            <li className="list-group-item">Func 4</li>
            <li className="list-group-item">Func 5</li>
        </ul>
    </div>
    )
}


