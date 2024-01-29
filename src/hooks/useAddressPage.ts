import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useToast } from '@components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProfileService } from '@services/profile.service';
import { useAuthStore } from '@store/auth/useAuth';
import { z } from 'zod';

const AddressSchema = z.object({
  city: z.string().min(2, { message: 'Обязательное поле' }),
  street: z.string().min(2, { message: 'Обязательное поле' }),
});

type FormData = z.infer<typeof AddressSchema>;

export const useAddressPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(AddressSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const response = await ProfileService.updateProfile({
        address: {
          city: data.city,
          street: data.street,
        },
      });

      setCredentials(response);
      toast({
        variant: 'success',
        title: 'Адрес успешно сохранен',
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
