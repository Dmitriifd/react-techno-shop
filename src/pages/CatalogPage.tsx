import { PriceFilter } from '@components/filters/PriceFilter';
import { ProductCard } from '@components/ProductCard';

const CatalogPage = () => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex gap-10 items-start">
        {/* Filters */}
        <div className="w-[300px] border rounded-lg p-5">
          <PriceFilter />
        </div>

        {/* Products list */}
        <div className="grid grid-cols-4 gap-5 flex-wrap">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard key={index} img="/poco7.webp" title="Poco m5" price={20000} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { CatalogPage };
