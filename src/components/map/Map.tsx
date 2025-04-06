import { layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City, Point, MapType } from '../../types';
import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/useMap';
import { DEFAULT_MARKER, CURRENT_MARKER } from './Map.consts';

type MapPrors = {
  city: City;
  points: Point[];
  selectedPoint?: Point | undefined;
  mapType: MapType;
}

export const Map = ({city, points, selectedPoint, mapType}: MapPrors) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });
        marker.setIcon(
          selectedPoint !== undefined && point.title === selectedPoint.title
            ? CURRENT_MARKER
            : DEFAULT_MARKER
        )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return (
    <div className={`${mapType}__map map`}
      ref={mapRef}
    >
    </div>
  );
};
