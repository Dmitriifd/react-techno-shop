import { useState } from 'react';

import ArrowRightIcon from '@assets/icons/arrowRight.svg?react';
import { Button } from '@components/ui/button';

import { ProductPrice } from './ProductPrice';

const colors = [
  {
    id: 1,
    color: 'black',
  },
  {
    id: 2,
    color: 'red-500',
  },
  {
    id: 3,
    color: 'green-500',
  },
];

const ProductDetailCard = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleChangeColor = (index: number) => {
    setActiveButton(index);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-7 block lg:hidden">Смартфон Apple iPhone 13 128 ГБ черный</h2>
      <div className="flex gap-8 items-start flex-wrap mb-[50px] lg:flex-row lg:flex-nowrap">
        {/* ProductImage */}
        <div className="p-10 border inline-block rounded-[5px]">
          <img src="/honor3.webp" alt="" width={300} height={300} />
        </div>
        {/* ProductInfo */}
        <div>
          <h2 className="text-2xl font-bold mb-7 hidden lg:block">Смартфон Apple iPhone 13 128 ГБ черный</h2>
          {/* Colors */}
          <div className="mb-5">
            <div className="flex gap-5 text-sm items-center">
              Цвет:
              {colors.map(({ id, color }, index) => (
                <Button
                  key={id}
                  className={`w-[30px] h-[30px] bg-${color} outline-offset-4 outline ${
                    activeButton === index ? 'outline-accent-base' : ''
                  }  outline-2 hover:bg-${color}/90`}
                  onClick={() => handleChangeColor(index)}
                />
              ))}
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
        <ProductPrice />
      </div>
    </>
  );
};

export { ProductDetailCard };
