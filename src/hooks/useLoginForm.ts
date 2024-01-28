import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useToast } from '@components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthService } from '@services/auth.service';
import { useAuthStore } from '@store/auth/useAuth';
import { AxiosError } from 'axios';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Неверный email' }),
  password: z.string().min(6, { message: 'Минимум 6 символов' }),
});

type FormData = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
  const navigate = useNavigate();
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const { toast } = useToast();

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
      if (error instanceof AxiosError) {
        toast({
          variant: 'destructive',
          title: error?.response?.data.message,
        });
      }
    }
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
