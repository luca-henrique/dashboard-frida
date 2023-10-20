import {MapContainer, TileLayer} from 'react-leaflet';

import MapPoints from '@/components/organisms/MapPoints/MapPoints';

const Map = () => {
  const {width, height} = window.screen;

  return (
    <MapContainer
      style={{
        height: height - 200,
        width,
      }}
      center={[37.33170303, -122.03024001]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MapPoints />
    </MapContainer>
  );
};

export default Map;
