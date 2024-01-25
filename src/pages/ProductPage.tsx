import { ProductDetailCard } from '@components/product/ProductDetailCard';
import { ProductTabs } from '@components/product/ProductTabs';
import { Slider } from '@components/shared/Slider';
import { Section } from '@components/ui/section';

const ProductPage = () => {
  return (
    <Section>
      {/* Product */}
      <ProductDetailCard />
      {/* Tabs */}
      <ProductTabs />
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
