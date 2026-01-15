
import { Map, Pin, AdvancedMarker, useMap, useMapsLibrary  } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';


const MapComponent = () => {
  // Define o centro e o zoom padrão do mapa
  const position = { lat: -23.565630070194135 , lng: -46.667476636544684  };

  return (
    <>
      <div className="card center" style={{ height: '600px', width: '100%' }}>
        <Map
          defaultCenter={position}
          defaultZoom={15}
          mapId={'seu-map-id-aqui'} // Opcional, mas recomendado para personalização
          disableDefaultUI={false} // Mantém a interface de usuário padrão
          >
          <AdvancedMarker position={{lat: -23.565630070194135, lng: -46.667476636544684}}>
            <Pin
              background={'#6e6e6eff'}
              borderColor={'#303030ff'}
              glyphColor={'#4b4b4bff'}
            />
          </AdvancedMarker>
        
        </Map>
    </div>
    </>
  );
};

export default MapComponent;

