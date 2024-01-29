import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useToast } from '@components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProfileService } from '@services/profile.service';
import { useAuthStore } from '@store/auth/useAuth';
import { z } from 'zod';

const PasswordSchema = z
  .object({
    password: z.string().min(6, { message: 'минимум 6 символов' }),
    confirmPassword: z.string().min(6, { message: 'минимум 6 символов' }),
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

type FormData = z.infer<typeof PasswordSchema>;

export const useChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(PasswordSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const response = await ProfileService.updateProfile({
        password: data.password,
      });
      setCredentials(response);
      toast({
        variant: 'success',
        title: 'Пароль успешно обновлен',
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmit,
    register,
    isLoading,
    errors,
    handleSubmit,
  };
};
