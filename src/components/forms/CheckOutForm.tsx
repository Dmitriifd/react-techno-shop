import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@components/ui/checkbox';
import { toast } from '@components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
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

const CheckoutSchemaWithAddress = defaultFields.extend({
  city: z.string().min(2, messageSchema),
  street: z.string().min(2, messageSchema),
});

const CheckoutSchemaWithoutAddress = defaultFields;

type CheckoutSchema = z.infer<typeof CheckoutSchemaWithAddress>;

const getSchema = (value: boolean) => (value ? CheckoutSchemaWithoutAddress : CheckoutSchemaWithAddress);

export function CheckOutForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [pickup, setPickup] = useState(false);
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const cleanCart = useCartStore((state) => state.cleanCart);

  const form = useForm<CheckoutSchema>({
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

  async function onSubmit(data: CheckoutSchema) {
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="text-sm text-[#848992]">
        <div className="flex flex-col mb-16">
          <div className="flex tablet:justify-between flex-col mb-16 gap-10 lg:gap-0 tablet:flex-row">
            <fieldset className="flex flex-col justify-between gap-5 tablet:max-w-[350px] w-full">
              <legend className="text-2xl font-bold mb-10 text-black">Покупатель</legend>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван" {...field} className="placeholder:text-gray-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Фамилия</FormLabel>
                    <FormControl>
                      <Input placeholder="Иванов" {...field} className="placeholder:text-gray-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 (999) 999-99-99" {...field} className="placeholder:text-gray-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="ivan@gmail.com" {...field} className="placeholder:text-gray-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>
            <fieldset className="flex flex-col gap-10 lg:w-[550px]">
              <legend className="text-2xl font-bold mb-10 text-black">Способ доставки</legend>
              <FormField
                control={form.control}
                name="radioOption"
                render={({ field: { onChange, name, ref, value, onBlur } }) => (
                  <RadioGroup
                    defaultValue="courier"
                    className="space-y-7"
                    name={name}
                    ref={ref}
                    value={value}
                    onBlur={onBlur}
                    onValueChange={onChange}>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="courier" id="courier" />
                      <Label
                        htmlFor="courier"
                        className="cursor-pointer text-base flex flex-col gap-2"
                        onClick={() => setPickup(false)}>
                        <span className="leading-none">Доставка курьером</span>
                        <span className="text-sm text-[#848992]">по г. Москва, от 5000 рублей - бесплатно</span>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label
                        htmlFor="pickup"
                        className="cursor-pointer text-base flex flex-col gap-2"
                        onClick={() => setPickup(!pickup)}>
                        <span className="leading-none">Самовывоз</span>
                        <span className="text-sm text-[#848992]">
                          ул. Выдуманная, 7 - магазин &quot;Техно Shop&quot;
                        </span>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label
                        htmlFor="delivery"
                        className="cursor-pointer text-base flex flex-col gap-2"
                        onClick={() => setPickup(false)}>
                        <span className="leading-none">Доставка по РФ</span>
                        <span className="text-sm text-[#848992]">от 5000 рублей (по предоплате) - 0 р.</span>
                      </Label>
                    </div>
                  </RadioGroup>
                )}
              />
              <div>
                <h4 className="text-2xl font-bold mb-7 text-black">Способ оплаты</h4>
                <p>Оплата при получении наличными или картой</p>
              </div>
            </fieldset>
          </div>

          <div className="flex justify-between flex-col gap-10 lg:gap-0 tablet:flex-row">
            {!pickup && (
              <fieldset className="flex flex-col gap-5 tablet:max-w-[350px] w-full">
                <legend className="text-2xl font-bold mb-10 text-black">Адрес доставки</legend>
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Город</FormLabel>
                      <FormControl>
                        <Input placeholder="Москва" {...field} className="placeholder:text-gray-300" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Адрес</FormLabel>
                      <FormControl>
                        <Input placeholder="ул. Пушкина, 99" {...field} className="placeholder:text-gray-300" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </fieldset>
            )}

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-between gap-5 tablet:w-[550px]">
                  <FormLabel className="text-2xl font-bold mb-10 inline-block text-black">
                    Комментарий к заказу
                  </FormLabel>
                  <FormControl>
                    <textarea className="w-full border rounded-md min-h-[170px] p-3" {...field}></textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="pt-7 border-t flex flex-col flex-wrap justify-center gap-5 md:justify-between md:flex-row">
          <p className="text-xl font-bold lg:text-2xl text-black">Сумма заказа: {0} ₽</p>
          <div className="flex flex-wrap gap-10">
            <fieldset className="flex items-start gap-2 text-sm">
              <Checkbox defaultChecked id="agree" name="agree" />
              <Label htmlFor="agree" className="w-[200px] inline-block cursor-pointer">
                Я прочитал и согласен с <br />
                <span className="text-accent-base">Условиями соглашения</span>
              </Label>
            </fieldset>
            <Button variant="base" className="w-full md:w-fit">
              Подтвердить заказ
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
