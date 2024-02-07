import { Control } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@components/ui/checkbox';
import { OrderSchema, useOrderForm } from '@hooks/useOrderForm';
import { Label } from '@radix-ui/react-label';
import { useCartStore } from '@store/useCartStore';

interface TControl {
  control: Control<OrderSchema>;
}

type DeliveryOptionsProps = TControl & {
  setPickup: React.Dispatch<React.SetStateAction<boolean>>;
};

type ConfirmOrderProps = {
  isLoading: boolean;
  totalPrice: number;
};

export const OrderForm = () => {
  const { form, isLoading, pickup, setPickup, onSubmit } = useOrderForm();
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="text-sm text-[#848992]">
        <div className="flex flex-col mb-16">
          <div className="flex tablet:justify-between flex-col mb-16 gap-10 lg:gap-0 tablet:flex-row">
            <CustomerDetails control={form.control} />
            <DeliveryOptions control={form.control} setPickup={setPickup} />
          </div>

          <div className="flex justify-between flex-col gap-10 lg:gap-0 tablet:flex-row">
            {!pickup && <DeliveryAddress control={form.control} />}
            <OrderComment control={form.control} />
          </div>
        </div>

        <ConfirmOrder isLoading={isLoading} totalPrice={totalPrice} />
      </form>
    </Form>
  );
};

export const CustomerDetails = ({ control }: TControl) => (
  <fieldset className="flex flex-col justify-between gap-5 tablet:max-w-[350px] w-full">
    <legend className="text-2xl font-bold mb-10 text-black">Покупатель</legend>
    <FormField
      control={control}
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
      control={control}
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
      control={control}
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
      control={control}
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
);

export const DeliveryOptions = ({ control, setPickup }: DeliveryOptionsProps) => (
  <fieldset className="flex flex-col gap-10 lg:w-[550px]">
    <legend className="text-2xl font-bold mb-10 text-black">Способ доставки</legend>
    <FormField
      control={control}
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
              onClick={() => setPickup(true)}>
              <span className="leading-none">Самовывоз</span>
              <span className="text-sm text-[#848992]">ул. Выдуманная, 7 - магазин &quot;Техно Shop&quot;</span>
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
);

export const DeliveryAddress = ({ control }: TControl) => (
  <fieldset className="flex flex-col gap-5 tablet:max-w-[350px] w-full">
    <legend className="text-2xl font-bold mb-10 text-black">Адрес доставки</legend>
    <FormField
      control={control}
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
      control={control}
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
);

export const OrderComment = ({ control }: TControl) => (
  <FormField
    control={control}
    name="comment"
    render={({ field }) => (
      <FormItem className="flex flex-col justify-between gap-5 tablet:w-[550px]">
        <FormLabel className="text-2xl font-bold mb-10 inline-block text-black">Комментарий к заказу</FormLabel>
        <FormControl>
          <textarea className="w-full border rounded-md min-h-[170px] p-3" {...field}></textarea>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export const ConfirmOrder = ({ isLoading, totalPrice }: ConfirmOrderProps) => (
  <div className="pt-7 border-t flex flex-col flex-wrap justify-center gap-5 md:justify-between md:flex-row">
    <p className="text-xl font-bold lg:text-2xl text-black">Сумма заказа: {totalPrice} ₽</p>
    <div className="flex flex-wrap gap-10">
      <fieldset className="flex items-start gap-2 text-sm">
        <Checkbox defaultChecked id="agree" name="agree" />
        <Label htmlFor="agree" className="w-[200px] inline-block cursor-pointer">
          Я прочитал и согласен с <br />
          <span className="text-accent-base">Условиями соглашения</span>
        </Label>
      </fieldset>
      <Button variant="base" className="w-full md:w-fit" disabled={isLoading}>
        Подтвердить заказ
      </Button>
    </div>
  </div>
);
