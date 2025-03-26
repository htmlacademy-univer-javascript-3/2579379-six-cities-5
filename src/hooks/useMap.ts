import { Map } from 'leaflet';
import leaflet from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { City } from '../types';

export const useMap = (mapRef: MutableRefObject<HTMLElement | null>, city: City) => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef<boolean | null>(false);

  useEffect(() => {
    if(mapRef.current !== null && !isRenderRef.current) {
      const mapInstance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: 10
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        ).addTo(mapInstance);

      setMap(mapInstance);
      isRenderRef.current = true;
    }
  }, [mapRef, city]);

  return map;
  // hook state
  // side effects
  // cancel repeating initialization
};
