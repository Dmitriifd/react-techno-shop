import { CheckOutForm } from '@components/forms/CheckOutForm';
import { Section } from '@components/ui/section';

const CheckoutPage = () => {
  return (
    <Section>
      <h2 className="text-3xl mb-10 font-bold">Оформление заказа</h2>

      <CheckOutForm />
    </Section>
  );
};

export { CheckoutPage };
