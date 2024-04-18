import {useSizeChange} from '@/hook/useSizeChange';
import {ReactNode} from 'react';
import {MapContainer as Map, TileLayer} from 'react-leaflet';

export const MapContainer = ({children}: {children: ReactNode}) => {
  const {width, height} = window.screen;
  const {isMobile} = useSizeChange();

  const heightSize = isMobile ? 0 : 184;
  const zoomMap = heightSize ? 16 : 14;

  return (
    <Map
      style={{
        height: height - heightSize,
        width: width,
      }}
      center={[-8.419438, -37.059506]}
      zoom={zoomMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {children}
    </Map>
  );
};
