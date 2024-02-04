import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ArrowRightIcon from '@assets/icons/arrowRight.svg?react';
import { Button } from '@components/ui/button';
import { cn } from '@lib/utils';
import { SERVER_URL } from '@pages/admin/ProductListPage';
import { useProductStore } from '@store/useProductStore';

import { ProductPrice } from './ProductPrice';
import { ProductTabs } from './ProductTabs';

const ProductDetailCard = () => {
  const [activeButton, setActiveButton] = useState(0);

  const { id } = useParams() as { id: string };
  const { fetchProductById, loading, product } = useProductStore((state) => state);

  useEffect(() => {
    fetchProductById(id);
  }, [id, fetchProductById]);

  const handleChangeColor = (index: number) => {
    setActiveButton(index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-7 block lg:hidden">{product.name}</h2>
      <div className="flex gap-8 items-start flex-wrap mb-[50px] lg:flex-row lg:flex-nowrap">
        {/* ProductImage */}
        <div className="p-10 border inline-block rounded-[5px] shrink-0">
          <img src={`${SERVER_URL}${product.image}`} alt="" width={300} height={300} />
        </div>
        {/* ProductInfo */}
        <div>
          <h2 className="text-2xl font-bold mb-7 hidden lg:block">{product.name}</h2>
          {/* Colors */}
          <div className="mb-5">
            <div className="flex gap-5 text-sm items-center">
              Цвет:
              {product.colors.map((color, index) => (
                <Button
                  key={index}
                  className={cn(
                    `w-[30px] h-[30px] ${color} outline-offset-4 outline outline-2 hover:bg-${color}`,
                    activeButton === index ? 'outline-accent-base' : '',
                  )}
                  onClick={() => handleChangeColor(index)}
                />
              ))}
            </div>
          </div>
          {/* Characteristics */}
          <div className="flex flex-col gap-y-5 items-start">
            <ul className="flex flex-col gap-3">
              {product.description
                .split('.')
                .slice(0, 3)
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
            <a href="#char" className="flex gap-2  items-center text-accent-base pl-0">
              Все характеристики
              <ArrowRightIcon fill="#FE9015" width={18} height={18} />
            </a>
          </div>
        </div>
        <ProductPrice price={product.price} product={product} />
      </div>
      <ProductTabs description={product.description} char={product.char} />
    </>
  );
};

export { ProductDetailCard };
