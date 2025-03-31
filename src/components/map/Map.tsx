import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City, Point, MapClass } from '../../types';
import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/useMap';
import { DEFAULT_MARKER, CURRENT_MARKER } from './Map.consts';

type MapPrors = {
  city: City;
  points: Point[];
  selectedPoint?: Point | undefined;
  mapType: MapClass;
}

export const Map = ({city, points, selectedPoint, mapType}: MapPrors) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      points.forEach((point) => {
        leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: (selectedPoint !== undefined &&
            point.title === selectedPoint.title) ?
            CURRENT_MARKER : DEFAULT_MARKER,
        }).addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div className={`${mapType}__map map`}
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
};
