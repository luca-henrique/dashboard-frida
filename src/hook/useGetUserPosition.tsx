import {supabase} from '@/config/supabase';
import {useEffect, useState} from 'react';

export const useGetUserPostion = () => {
  const [pointsUser, setPointsUser] = useState<any>([]);

  useEffect(() => {
    getCoordinates();
  }, []);

  async function getCoordinates() {
    const {data} = await supabase.from('coordinate').select();
    setPointsUser(data);
  }

  return {
    pointsUser,
  };
};
