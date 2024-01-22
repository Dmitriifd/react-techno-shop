import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Input } from '@components/ui/input';
import { Section } from '@components/ui/section';

const CheckoutPage = () => {
  const user = false;

  return (
    <Section>
      <h2 className="text-3xl mb-10 font-bold">Оформление заказа</h2>

      <form>
        <div>
          <div className="flex flex-col mb-16">
            <div className="flex justify-between mb-16">
              <fieldset className="flex flex-col justify-between gap-5 w-[350px]">
                <legend className="text-2xl font-bold mb-10">Покупатель</legend>
                <Label className="text-sm text-[#848992]">
                  <span className="inline-block mb-2">Имя</span>
                  <Input type="text" name="name" className="placeholder:text-gray-300" placeholder="Иван" />
                </Label>
                <Label className="text-sm text-[#848992]">
                  <span className="inline-block mb-2">Фамилия</span>
                  <Input type="text" name="surname" className="placeholder:text-gray-300" placeholder="Иванов" />
                </Label>
                <Label className="text-sm text-[#848992]">
                  <span className="inline-block mb-2">Телефон</span>
                  <Input
                    type="number"
                    name="phone"
                    className="placeholder:text-gray-300"
                    placeholder="+7 (999) 999-99-99"
                  />
                </Label>
                <Label className="text-sm text-[#848992]">
                  <span className="inline-block mb-2">E-mail</span>
                  <Input type="email" name="email" className="placeholder:text-gray-300" placeholder="email@mail.ru" />
                </Label>
              </fieldset>
              <fieldset className="flex flex-col gap-10 w-[550px] ">
                <legend className="text-2xl font-bold mb-10">Способ доставки</legend>
                <RadioGroup defaultValue="option-one" className="space-y-7">
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one" className="cursor-pointer text-base flex flex-col gap-2">
                      <span className="leading-none">Доставка курьером</span>
                      <span className="text-sm text-[#848992]">по г. Москва, от 5000 рублей - бесплатно</span>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two" className="cursor-pointer text-base flex flex-col gap-2">
                      <span className="leading-none">Самовывоз</span>
                      <span className="text-sm text-[#848992]">ул. Выдуманная, 7 - магазин &quot;Техно Shop&quot;</span>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="option-three" id="option-three" />
                    <Label htmlFor="option-three" className="cursor-pointer text-base flex flex-col gap-2">
                      <span className="leading-none">Доставка по РФ</span>
                      <span className="text-sm text-[#848992]">от 5000 рублей (по предоплате) - 0 р.</span>
                    </Label>
                  </div>
                </RadioGroup>
                <div>
                  <h4 className="text-2xl font-bold mb-7">Способ оплаты</h4>
                  <p>Оплата при получении наличными или картой</p>
                </div>
              </fieldset>
            </div>
            <div className="flex justify-between">
              <fieldset className="flex flex-col justify-between gap-5 w-[350px]">
                <legend className="text-2xl font-bold mb-10">Адрес доставки</legend>
                <Label className="text-sm text-[#848992]">
                  <span className="inline-block mb-2">Город</span>
                  <Input type="text" name="name" placeholder="Ваш город" className="placeholder:text-gray-300" />
                </Label>
                <Label className="text-sm text-[#848992]">
                  <span className="inline-block mb-2">Адрес</span>
                  <Input
                    type="text"
                    name="surname"
                    placeholder="Улица, дом, подъезд"
                    className="placeholder:text-gray-300"
                  />
                </Label>
              </fieldset>
              <fieldset className="flex flex-col justify-between gap-5 w-[550px]">
                <legend className="text-2xl font-bold mb-10">Комментарий к заказу</legend>
                <textarea className="w-full border rounded-md min-h-[170px] p-3"></textarea>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="pt-7 border-t flex justify-between">
          <p className="text-2xl font-bold">Сумма заказа: 7500 ₽</p>
          <div className="flex gap-10">
            <fieldset className="flex items-start gap-2 text-sm">
              <Checkbox defaultChecked id="agree" name="agree" />
              <Label htmlFor="agree" className="w-[200px] inline-block cursor-pointer">
                Я прочитал и согласен с <br />
                <span className="text-accent-base">Условиями соглашения</span>
              </Label>
            </fieldset>
            <Button variant="base">Подтвердить заказ</Button>
          </div>
        </div>
      </form>
    </Section>
  );
};

export { CheckoutPage };
