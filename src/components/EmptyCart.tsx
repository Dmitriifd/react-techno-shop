import { Link } from 'react-router-dom';

import ArrowLeftIcon from '@assets/icons/arrowLeft.svg?react';

import { Section } from './ui/section';

const EmptyCart = () => {
  return (
    <Section>
      <div className="flex items-center flex-col">
        <div>
          <img className="w-[250px] h-[250px]" src="/empty-cart.png" alt="empty cart" />
        </div>
        <h2 className="mb-10 text-2xl">Ваша корзина пуста.</h2>
        <Link
          to=".."
          className="bg-accent-base p-3 rounded-md text-white text-sm flex items-center justify-center gap-2 max-w-[300px] w-full">
          <ArrowLeftIcon fill="white" />
          Вернуться назад
        </Link>
      </div>
    </Section>
  );
};

export { EmptyCart };
