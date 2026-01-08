"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { p } from 'framer-motion/client'

type ItemCardapio = {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    imagem: string;
    categoria: number;
    categoria_nome: string;
}


export default function Cardapio() {
    const [items, setItems] = useState<ItemCardapio[]>([]);
    const [currentView, setCurrentView] = useState('Todos');
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
    fetch('https://cardapioapi-production-1b26.up.railway.app/api/items/')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setCarregando(false);
      });
  }, []);

  const categorias = ["Todos", ...new Set(items.map(item => item.categoria_nome))];

  const itensFiltrados = currentView === 'Todos' 
    ? items 
    : items.filter(item => item.categoria_nome === currentView);

  if (carregando) return <p>Carregando Cardápio...</p>

   

    return(
        <>
        <div className="container py-4">
            {/* SEO: H1 da página do cardápio - importante para identificar o conteúdo principal */}
            <h1 className="text-center mb-4">Cardápio</h1>
            {/* Menu de navegação */}
            <div className="d-flex justify-content-center">
                <div className="row row-cols-2 row-cols-md-4 g-2 w-100 mb-4 justify-content-center">
                    {categorias.map((cat, idx) => (
                      <div className="col d-flex" key={cat + '-' + idx}>
                        <button
                          onClick={() => setCurrentView(cat)}
                          className={`btn btn-md btn-block w-100 py-3 fw-semibold shadow-sm ${currentView === cat ? 'btn-dark text-white' : 'btn-outline-dark'}`}
                        >
                          {cat}
                        </button>
                      </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='container'>
            <div className="row">
                {itensFiltrados.map(item => (
                    <div key={item.id} className="col-8 col-md-6 col-lg-5 mb-4 d-flex w-85 m-auto">
                        <div className="card">
                            <img src={item.imagem} className="card-img-top" alt={item.nome} style={{height: '250px', objectFit: 'cover'}} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{item.nome}</h5>
                                <p className="card-text flex-grow-1 ">{item.descricao}</p>
                                <p className="card-text mt-auto"><strong>R$ {item.preco}</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
}
