import { BrandFilter } from './BrandFilter';
import { ColorFilter } from './ColorFilter';
import { PriceFilter } from './PriceFilter';
import { YearsFilter } from './YearsFilter';

const Filters = () => {
  return (
    <div className="w-[300px] border rounded-lg p-5 hidden tablet:block shrink-0">
      <PriceFilter />
      <BrandFilter />
      <YearsFilter />
      <ColorFilter />
    </div>
  );
};

export { Filters };
