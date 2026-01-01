"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { APIProvider } from '@vis.gl/react-google-maps';
import MapComponent from '../components/MapComponent'
import { useState  } from 'react'


    export default function Sobre() {
        const [currentView, setCurrentView] = useState('contato')
    
        return(
            <div className="container py-4">
                <h1 className="text-center mb-4">Sobre</h1>
                
                {/* Menu de navegação */}
            <div className="d-flex justify-content-center">
                <div className="row row-cols-2 row-cols-md-4 g-2 w-100 mb-4" role="group">
                    <div className='col'>
                        <button 
                            type="button" 
                            className={`btn w-100 ${currentView === 'contato' ? 'btn-outline-dark' : 'btn-primary-dark'} row-auto`}
                            onClick={() => setCurrentView('contato')}
                        >
                            Contatos
                        </button>
                    </div>
                    <div className='col'>
                        <button 
                            type="button" 
                            className={`btn w-100 ${currentView === 'colaboradores' ? 'btn-outline-dark' : 'btn-primary-dark'} row-auto`}
                            onClick={() => setCurrentView('colaboradores')}
                        >
                            Colaboradores
                        </button>
                    </div>
                    <div className='col'>
                        <button 
                            type="button" 
                            className={`btn w-100 ${currentView === 'sobrenos' ? 'btn-outline-dark' : 'btn-primary-dark'} row-auto`}
                            onClick={() => setCurrentView('sobrenos')}
                        >
                            Sobre Nós
                        </button>
                    </div>
                    <div className='col'>
                        <button 
                            type="button" 
                            className={`btn w-100 ${currentView === 'localizacao' ? 'btn-outline-dark' : 'btn-primary-dark'} row-auto`}
                            onClick={() => setCurrentView('localizacao')}
                        >
                            Localização
                        </button>
                    </div>
               
                </div>
            </div>

    
                {/* Conteúdo baseado na seleção */}
                {currentView === 'sobrenos' && <SobreNos />}
                {currentView === 'contato' && <Contatos />}
                {currentView === 'colaboradores' && <Colaboradores />}
                {currentView === 'localizacao' && <Localizacao />}
            </div>
        )
    }


function SobreNos(){
    return(
        <div>
            <h2 className='h2'>Nossa História</h2>
            <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )
}

function Contatos(){
    return(
    <div>
        <h2 className='h2'>Contatos</h2>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><a href = 'https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20mais%20informações' className='link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'><i className="bi bi-whatsapp me-2"></i>Whatsapp</a></li>
            <li className="list-group-item"><a href = 'mailto:' className='link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'><i className="bi bi-envelope me-2"></i>Email</a></li>
            <li className="list-group-item"><a className='link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'><i className="bi bi-instagram me-2"></i>Instagram</a></li>
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


function Localizacao(){
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <APIProvider apiKey={apiKey}>
      <MapComponent />
    </APIProvider>
  );
}