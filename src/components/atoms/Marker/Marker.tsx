import {Icon} from 'leaflet';
import {ReactNode} from 'react';
import {Marker as DefaultMarker, Popup} from 'react-leaflet';

const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [38, 38],
});

export type MarkerType = {
  id: number;
  latitude: number;
  longitude: number;
  children: ReactNode;
};

export const Marker = ({id, latitude, longitude, children}: MarkerType) => {
  return (
    <DefaultMarker key={id} position={[latitude, longitude]} icon={customIcon}>
      <Popup>{children}</Popup>
    </DefaultMarker>
  );
};
