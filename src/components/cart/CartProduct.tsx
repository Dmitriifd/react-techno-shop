import { Link } from 'react-router-dom';

import { Counter } from '@components/shared/Counter';
import { SERVER_URL } from '@pages/admin/ProductListPage';

import { CartModal } from './CartModal';

type CartProductProps = {
  title: string;
  price: number;
  image: string;
  id: string;
};

const CartProduct = ({ title, price, image, id }: CartProductProps) => {
  return (
    <div className="border-b pb-3 md:pb-7 max-w-[750px]">
      <div className="flex gap-5">
        <Link to={`/product/${id}`}>
          <img className="w-[100px] h-[100px]" src={`${SERVER_URL}${image}`} alt="img" />
        </Link>
        <div className="flex flex-col justify-between grow">
          <div className="flex items-start gap-3 flex-col md:flex-row md:gap-10">
            <Link to={`/product/${id}`}>
              <h3 className="max-w-[355px]">{title}</h3>
            </Link>
            <Counter id={id} />
            <div className="flex flex-row gap-3 items-center md:flex-col ml-auto">
              <span className="text-[#EC2525] text-xl font-bold">{price}₽</span>
              <span className="text-[#848992] line-through text-sm">4500 ₽</span>
            </div>
          </div>
          <div>
            <CartModal id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartProduct };
