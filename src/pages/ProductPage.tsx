import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ArrowRightIcon from '@assets/icons/arrowRight.svg?react';
import CheckIcon from '@assets/icons/check.svg?react';
import VanIcon from '@assets/icons/van.svg?react';
import WatchIcon from '@assets/icons/watch.svg?react';
import { BuyOneClickModal } from '@components/modals/BuyOneClickModal';
import { Slider } from '@components/Slider';
import { Button } from '@components/ui/button';
import { Section } from '@components/ui/section';

const ProductPage = () => {
  return (
    <Section>
      {/* Product */}
      <div className="flex gap-8 items-start mb-[50px]">
        {/* ProductImage */}
        <div className="p-10 border inline-block rounded-[5px]">
          <img src="/honor3.webp" alt="" width={300} height={300} />
        </div>
        {/* ProductInfo */}
        <div>
          <h2 className="text-2xl font-bold mb-7">Смартфон Apple iPhone 13 128 ГБ черный</h2>
          {/* Colors */}
          <div className="mb-5">
            <div className="flex gap-5 text-sm items-center">
              Цвет:
              <Button className="w-[30px] h-[30px] outline-offset-4 outline outline-accent-base outline-2" />
              <Button className="w-[30px] h-[30px] bg-red-500 hover:bg-red-500/90 outline-offset-4 outline outline-[#e5e7eb] outline-2" />
            </div>
          </div>
          {/* Characteristics */}
          <div className="flex flex-col gap-y-5 items-start">
            <ul className="flex flex-col gap-3">
              <li>Экран: OLED, 7.85 (3120x1440),</li>
              <li>Процессор: Qualcomm Snapdragon 8 Plus Gen 1;</li>
              <li>Память: оперативная 12 ГБ, встроенная 512 ГБ,</li>
              <li>Поддержка сетей: 2G/3G/4G (LTE);</li>
              <li>Сканер отпечатка пальцев: сбоку;</li>
              <li>Размеры (ШхВхТ): 72.4 х 156.9 х 11.08 мм;</li>
            </ul>
            <Button variant="link" className="text-accent-base pl-0">
              Все характеристики
              <ArrowRightIcon fill="#FE9015" width={18} height={18} />
            </Button>
          </div>
        </div>
        <div className="ml-auto">
          {/* ProductPrice */}
          <div className="border rounded-[5px] p-6 min-w-[270px] mb-6">
            <div className="mb-5">
              <span className="text-[#EC2525] text-2xl font-bold pr-[10px]">15 990 ₽</span>
              <span className="text-[#848992] line-through">16 990 ₽</span>
            </div>
            <div className="space-y-5">
              <Button variant="base" className="w-full">
                Купить
              </Button>
              <BuyOneClickModal />
            </div>
          </div>
          <ul className="space-y-3">
            <li className="text-sm flex gap-[10px] items-center text-[#219653]">
              <CheckIcon width={20} height={20} stroke="#219653" />
              Есть на складе
            </li>
            <li className="text-sm flex gap-[10px] items-center text-[#219653]">
              <WatchIcon width={20} height={20} />
              Доставим сегодня
            </li>
            <li className="text-sm flex gap-[10px] items-center max-w-[235px]">
              <VanIcon width={20} height={20} />
              Бесплатная доставка при заказе от 5000р.
            </li>
          </ul>
        </div>
      </div>
      {/* Tabs */}
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="gap-5">
          <TabsTrigger value="account">Описание</TabsTrigger>
          <TabsTrigger value="password">Характеристики</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deleniti!
        </TabsContent>
        <TabsContent value="password">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ad?</TabsContent>
      </Tabs>
      <div className="mt-10">
        <Slider title="Похожие товары" />
      </div>
      <div className="mt-10">
        <Slider title="Рекомендуемые товары" />
      </div>
    </Section>
  );
};

export { ProductPage };
