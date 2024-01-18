import { FilterPanel } from '@components/filters/FilterPanel';
import { PriceFilter } from '@components/filters/PriceFilter';
import { YearsFilter } from '@components/filters/YearsFilter';
import { ProductCard } from '@components/ProductCard';
const CatalogPage = () => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex gap-10 items-start">
        {/* Filters */}
        <div className="w-[300px] border rounded-lg p-5">
          <PriceFilter />
          <YearsFilter />
        </div>

        {/* Products list */}
        <div>
          <FilterPanel />
          <div className="grid grid-cols-4 gap-5 flex-wrap">
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductCard key={index} img="/poco7.webp" title="Poco m5" price={20000} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CatalogPage };
