import { Product } from 'types/product';

import { CartProduct } from './CartProduct';

type CartProductListProps = {
  cart: Product[];
};

const CartProductList = ({ cart }: CartProductListProps) => {
  return (
    <div className="space-y-7 grow">
      {cart.map((item) => (
        <CartProduct
          key={item._id}
          title={item.name}
          price={item.price}
          image={item.image}
          id={item._id}
          quantity={item?.quantity}
        />
      ))}
    </div>
  );
};

export { CartProductList };
