import { supabase } from '@/config/supabase';


export const useSignInRequest = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const userData = {
      email: String(formData.get('email')),
      password: String(formData.get('password')),
    };

    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
    });

    if (error) {
      return;
    }

    console.log(data)

  };

  return { handleSubmit }
}