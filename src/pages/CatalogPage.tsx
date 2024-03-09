import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { FilterPanel } from '@components/filters/FilterPanel';
import { Filters } from '@components/filters/Filters';
import { MobileFilterMenu } from '@components/mobile/MobileFilterMenu';
import { Section } from '@components/ui/section';
import { useProductStore } from '@store/useProductStore';

import { CatalogProductsList } from './CatalogProductsList';

const CatalogPage = () => {
  const { category } = useParams() as { category: string };
  const products = useProductStore((state) => state.products);
  const fetchProductByCategory = useProductStore((state) => state.fetchProductByCategory);

  useEffect(() => {
    fetchProductByCategory(category);

    return () => {
      useProductStore.setState((state) => ({ ...state, products: [] }));
    };
  }, [category, fetchProductByCategory]);

  return (
    <Section>
      <div className="flex gap-10 items-start">
        <Filters />
        <div className="grow">
          <MobileFilterMenu />
          <FilterPanel />
          <CatalogProductsList products={products} />
        </div>
      </div>
    </Section>
  );
};

export { CatalogPage };
