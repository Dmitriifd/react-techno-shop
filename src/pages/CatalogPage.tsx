import { BrandFilter } from '@components/filters/BrandFilter';
import { FilterPanel } from '@components/filters/FilterPanel';
import { PriceFilter } from '@components/filters/PriceFilter';
import { YearsFilter } from '@components/filters/YearsFilter';
import { MobileFilterMenu } from '@components/mobile/MobileFilterMenu';
import { ProductCard } from '@components/shared/ProductCard';
import { Section } from '@components/ui/section';

const CatalogPage = () => {
  return (
    <Section>
      <div className="flex gap-10 items-start">
        {/* Filters */}
        <div className="w-[300px] border rounded-lg p-5 hidden tablet:block">
          <PriceFilter />
          <BrandFilter />
          <YearsFilter />
        </div>

        <div className="grow">
          <MobileFilterMenu />
          <FilterPanel />
          {/* Products list */}
          <div className="grid  gap-5 grid-cols-1 sm2:grid-cols-2 flex-wrap md:grid-cols-3 xll:grid-cols-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductCard key={index} img="/poco7.webp" id={index} title="Poco m5" price={20000} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export { CatalogPage };
