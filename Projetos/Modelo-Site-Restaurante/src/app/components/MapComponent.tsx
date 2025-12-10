import React from 'react';
import { Map } from '@vis.gl/react-google-maps';

const MapComponent = () => {
  // Define o centro e o zoom padrão do mapa
  const position = { lat: -23.5505, lng: -46.6333 }; // São Paulo, SP

  return (
    
    
    <div className="card center" style={{ height: '600px', width: '100%' }}>
      {/* O componente Map é renderizado pelo APIProvider */}
      <h1 className='h2 text-center'>Localização do Restaurante</h1>
      <Map
        defaultCenter={position}
        defaultZoom={15}
        mapId={'seu-map-id-aqui'} // Opcional, mas recomendado para personalização
        disableDefaultUI={false} // Mantém a interface de usuário padrão
      />
    </div>
  );
};

export default MapComponent;