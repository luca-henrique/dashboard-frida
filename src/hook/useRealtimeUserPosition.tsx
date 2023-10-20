import {supabase} from '@/config/supabase';
import {useEffect, useState} from 'react';

export const useRealtimeUserPosition = () => {
  const [pointsUser, setPointsUser] = useState<any>([]);

  useEffect(() => {
    supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        {event: '*', schema: 'public', table: 'coordinate'},
        (payload) => {
          setPointsUser([...pointsUser, payload.new]);
        },
      )
      .subscribe();
  }, [pointsUser]);

  return {pointsUser};
};
