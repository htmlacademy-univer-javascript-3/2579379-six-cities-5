import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City, Point } from '../../types';
import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from './Map.consts';

type MapPrors = {
  city: City;
  points: Point[];
  selectedPoint: Point | undefined;
}

const defaultMarker = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentMarker = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

export const Map = ({city, points, selectedPoint}: MapPrors) => {
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
            currentMarker : defaultMarker,
        }).addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
};
