import {MapContainer, TileLayer} from 'react-leaflet';

import MapPoints from '@/components/organisms/MapPoints/MapPoints';
import {DashboardContext} from '@/context/DashboardContext';
import {useContext, useEffect, useState} from 'react';

const Map = () => {
  const {drawer} = useContext(DashboardContext);
  const {width, height} = window.screen;
  const [widthSize, setWidthSize] = useState(0);

  useEffect(() => {
    let widthSize = drawer ? width - 240 : width;
    setWidthSize(widthSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawer]);

  console.log(widthSize);

  return (
    <>
      {widthSize > 0 && (
        <MapContainer
          style={{
            height: height - 184,
            width: '100%',
          }}
          center={[37.33170303, -122.03024001]}
          zoom={14}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <MapPoints />
        </MapContainer>
      )}
    </>
  );
};

export default Map;
