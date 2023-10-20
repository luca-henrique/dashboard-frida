import {Suspense, useEffect, useState} from 'react';
import {supabase} from '@/config/supabase';
import {Marker, MarkerType} from '@/components/atoms/Marker/Marker';

function MapPoints() {
  const [points, setPoints] = useState<MarkerType[] | null>([]);

  useEffect(() => {
    getPoints();
  }, []);

  async function getPoints() {
    const {data} = await supabase.from('coordinate').select();
    setPoints(data);
  }

  useEffect(() => {
    supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        {event: '*', schema: 'public', table: 'coordinate'},
        (payload) => {
          //@ts-ignore
          setPoints((oldPoints): MarkerType[] => [...oldPoints, payload.new]);
        },
      )
      .subscribe();
  }, [points]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {points!.map((point: MarkerType) => (
        <Marker key={point.id} {...point}>
          Exemplo
        </Marker>
      ))}
    </Suspense>
  );
}

export default MapPoints;
