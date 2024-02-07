import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { toast } from '@components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { OrderService } from '@services/order.service';
import { useCartStore } from '@store/useCartStore';
import { z } from 'zod';

const messageSchema = { message: 'Обязательное поле' };

const defaultFields = z.object({
  name: z.string().min(2, messageSchema),
  surname: z.string().min(2, messageSchema),
  phone: z.string().min(2, messageSchema),
  email: z.string().min(2, messageSchema),
  comment: z.string(),
  radioOption: z.enum(['courier', 'pickup', 'delivery']),
});

const OrderSchemaWithAddress = defaultFields.extend({
  city: z.string().min(2, messageSchema),
  street: z.string().min(2, messageSchema),
});

const OrderSchemaWithoutAddress = defaultFields;

export type OrderSchema = z.infer<typeof OrderSchemaWithAddress>;

const getSchema = (value: boolean) => (value ? OrderSchemaWithoutAddress : OrderSchemaWithAddress);

export const useOrderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pickup, setPickup] = useState(false);
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const cleanCart = useCartStore((state) => state.cleanCart);

  const form = useForm<OrderSchema>({
    resolver: zodResolver(getSchema(pickup)),
    defaultValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      comment: '',
      city: '',
      street: '',
      radioOption: 'courier',
    },
  });

  async function onSubmit(data: OrderSchema) {
    try {
      setIsLoading(true);

      const res = await OrderService.submitOrder({
        orderItems: cart,
        shippingAddress: {
          address: data.street,
          city: data.city,
        },
      });

      console.log(res);

      navigate('/');

      toast({
        variant: 'success',
        title: 'Спасибо за заказ!',
      });
      cleanCart();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    form,
    isLoading,
    pickup,
    setPickup,
    onSubmit,
  };
};
