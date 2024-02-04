import { CartCheckout } from '@components/cart/CartCheckout';
import { CartProductList } from '@components/cart/CartProductList';
import { ClearCartModal } from '@components/cart/ClearCartModal';
import { EmptyCart } from '@components/shared/EmptyCart';
import { Section } from '@components/ui/section';
import { useCartStore } from '@store/useCartStore';

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const isEmpty = cart.length === 0;

  if (isEmpty) {
    return <EmptyCart />;
  }

  return (
    <Section>
      <h2 className="mb-10 text-2xl font-bold">Корзина</h2>
      <ClearCartModal />
      <div className="flex items-start flex-wrap gap-10">
        <CartProductList cart={cart} />
        <CartCheckout />
      </div>
    </Section>
  );
};

export { CartPage };
