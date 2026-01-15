import { useMap, useMapsLibrary  } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import MapComponent from '../components/MapComponent'





const PlaceDetails = ({ placeId }: { placeId: string }) => {
    const map = useMap(); // Acessa a instância do mapa acima
    const placesLibrary = useMapsLibrary("places");
    const [place, setPlace] = useState<any>(null);

  useEffect(() => {
    if (!placesLibrary || !map || !placeId) return;

    const service = new placesLibrary.PlacesService(map);

    service.getDetails(
      {
        placeId: placeId,
        fields: ["name", "formatted_address", "geometry", "rating", "reviews", "photos"],
      },
      (result, status) => {
        if (status === "OK" && result && result.geometry?.location) {
          setPlace(result);
          // Move o mapa para o local encontrado
          map.panTo(result.geometry.location);
          map.setZoom(15);
        }
      }
    );
  }, [placesLibrary, map, placeId]);

  if (!place) return <div className="p-4 bg-white rounded-lg italic">Carregando detalhes do local...</div>;

  return (
    <div className="card">
        <div className="card-body">
            <h2 className="card-title h4 fw-bold text-dark">{place.name}</h2>
            <p className="text-muted mb-4">{place.formatted_address}</p>

            <h3 className="h5 fw-bold mb-3 d-flex align-items-center gap-2">
                ⭐ {place.rating} <span className="small text-muted fw-normal">Avaliações do Google</span>
            </h3>

            <div className="d-flex flex-column gap-3">
                {place.reviews?.map((review: any, i: number) => (
                    <div key={i} className="p-3 bg-light rounded border">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <img src={review.profile_photo_url} className="rounded-circle" width="32" height="32" alt="" />
                            <div>
                                <p className="small fw-bold mb-0">{review.author_name}</p>
                                <p className="text-muted" style={{fontSize: '10px'}}>{review.relative_time_description}</p>
                            </div>
                        </div>
                        <p className="small text-dark mb-0">"{review.text}"</p>
                    </div>
                ))}
            </div>
        </div>
    </div>

  );
}

export default PlaceDetails