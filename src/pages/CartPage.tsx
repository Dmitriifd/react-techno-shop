import { CartCheckout } from '@components/cart/CartCheckout';
import { CartProductList } from '@components/cart/CartProductList';
import { EmptyCart } from '@components/shared/EmptyCart';
import { Section } from '@components/ui/section';

const CartPage = () => {
  const isEmpty = false;

  if (isEmpty) {
    return <EmptyCart />;
  }

  return (
    <Section>
      <h2 className="mb-10 text-2xl font-bold">Корзина</h2>
      <div className="flex items-start flex-wrap gap-10">
        <CartProductList />
        <CartCheckout />
      </div>
    </Section>
  );
};

export { CartPage };
