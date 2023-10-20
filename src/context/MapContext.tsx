import {CoordinateType} from '@/@types';
import {PropsWithChildren, createContext, useCallback, useState} from 'react';

export type MapContext = {
  points: CoordinateType[];
  addPoint: any;
};

const defaultContext: MapContext = {
  points: [],
  addPoint: () => {},
};

export const MapContext = createContext(defaultContext);

export const MapProvider = ({children}: PropsWithChildren) => {
  const [points, setPoints] = useState<CoordinateType[] | null>(null);

  const addPoint = useCallback((point: CoordinateType) => {
    setPoints((oldPoints): CoordinateType[] => [...oldPoints!, point]);
  }, []);

  return (
    <MapContext.Provider value={{points: points || [], addPoint}}>
      {children}
    </MapContext.Provider>
  );
};
