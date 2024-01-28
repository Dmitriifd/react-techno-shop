import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { AuthService } from '@services/auth.service';
import { useAuthStore } from '@store/auth/useAuth';
import { z } from 'zod';

const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: 'Обязательное поле' }),
    email: z.string().email({ message: 'Неверный email' }),
    password: z.string().min(6, { message: 'Минимум 6 символов' }),
    confirmPassword: z.string().min(6, { message: 'Минимум 6 символов' }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Пароли должны совпадать',
        path: ['confirmPassword'],
      });
    }
  });

type FormData = z.infer<typeof RegisterSchema>;

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const setCredentials = useAuthStore((state) => state.setCredentials);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await AuthService.register({
        email: data.email,
        password: data.password,
        name: data.name,
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
