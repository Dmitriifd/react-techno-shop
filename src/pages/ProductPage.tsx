import { ProductDetailCard } from '@components/product/ProductDetailCard';
import { Slider } from '@components/shared/Slider';
import { Section } from '@components/ui/section';

const ProductPage = () => {
  return (
    <Section>
      {/* Product */}
      <ProductDetailCard />
      <div className="mt-10">
        <Slider title="Похожие товары" />
      </div>
      <div className="mt-10">
        <Slider title="Рекомендуемые товары" />
      </div>
    </Section>
  );
};

export { ProductPage };
