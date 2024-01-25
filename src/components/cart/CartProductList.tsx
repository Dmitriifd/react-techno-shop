import { CartProduct } from './CartProduct';

const CartProductList = () => {
  return (
    <div className="space-y-7">
      {Array.from({ length: 3 }).map((_, index) => (
        <CartProduct key={index} />
      ))}
    </div>
  );
};

export { CartProductList };
