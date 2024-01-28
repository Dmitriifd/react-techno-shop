import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { AuthService } from '@services/auth.service';
import { useAuthStore } from '@store/auth/useAuth';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Неверный email' }),
  password: z.string().min(6, { message: 'Минимум 6 символов' }),
});

type FormData = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
  const navigate = useNavigate();
  const setCredentials = useAuthStore((state) => state.setCredentials);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await AuthService.login({
        email: data.email,
        password: data.password,
      });

      setCredentials(response);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
