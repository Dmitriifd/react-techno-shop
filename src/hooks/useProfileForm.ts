import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useToast } from '@components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProfileService } from '@services/profile.service';
import { useAuthStore } from '@store/auth/useAuth';
import { z } from 'zod';

const ProfileSchema = z.object({
  name: z.string().min(2, { message: 'Обязательное поле' }),
  surname: z.string().min(2, { message: 'Обязательное поле' }),
  phone: z.string().min(6, { message: 'Минимум 6 символов' }),
  email: z.string().email({ message: 'Неверный email' }),
});

type FormData = z.infer<typeof ProfileSchema>;

export const useProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ProfileSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const response = await ProfileService.updateProfile({
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        email: data.email,
      });

      setCredentials(response);
      toast({
        variant: 'success',
        title: 'Профиль успешно обновлен',
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
    handleSubmit,
    errors,
    isLoading,
  };
};
