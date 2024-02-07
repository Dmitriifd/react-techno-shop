import { OrderForm } from '@components/forms/OrderForm';
import { Section } from '@components/ui/section';

const CheckoutPage = () => {
  return (
    <Section>
      <h2 className="text-3xl mb-10 font-bold">Оформление заказа</h2>

      <OrderForm />
    </Section>
  );
};

export { CheckoutPage };
