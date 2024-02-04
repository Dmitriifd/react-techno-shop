import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { BrandFilter } from '@components/filters/BrandFilter';
import { FilterPanel } from '@components/filters/FilterPanel';
import { PriceFilter } from '@components/filters/PriceFilter';
import { YearsFilter } from '@components/filters/YearsFilter';
import { MobileFilterMenu } from '@components/mobile/MobileFilterMenu';
import { ProductCard } from '@components/shared/ProductCard';
import { Section } from '@components/ui/section';
import { useProductStore } from '@store/useProductStore';

const CatalogPage = () => {
  const { category } = useParams() as { category: string };
  const { products, fetchProductByCategory } = useProductStore((state) => state);

  useEffect(() => {
    fetchProductByCategory(category);

    return () => {
      useProductStore.setState((state) => ({ ...state, products: [] }));
    };
  }, [category, fetchProductByCategory]);

  return (
    <Section>
      <div className="flex gap-10 items-start">
        {/* Filters */}
        <div className="w-[300px] border rounded-lg p-5 hidden tablet:block shrink-0">
          <PriceFilter />
          <BrandFilter />
          <YearsFilter />
        </div>

        <div className="grow">
          <MobileFilterMenu />
          <FilterPanel />
          {/* Products list */}
          <div className="grid  gap-5 grid-cols-1 sm2:grid-cols-2 flex-wrap md:grid-cols-3 xll:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export { CatalogPage };
