import { memo, useEffect, useState } from 'react';

import { Checkbox } from '@components/ui/checkbox';
import { Label } from '@components/ui/label';
import { ProductService } from '@services/product.service';
import { useProductStore } from '@store/useProductStore';

const ShowMore = () => {
  const [visibleItems, setVisibleItems] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);
  const { filters, setFilters } = useProductStore((state) => state);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    ProductService.getBrands().then((data) => setBrands(data));
  }, []);

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    const updatedBrands = filters.brands.includes(brand)
      ? filters.brands.filter((selectedBrand) => selectedBrand !== brand)
      : [...filters.brands, brand];
    setFilters({ ...filters, brands: updatedBrands });
  };

  const handleToggleVisibility = () => {
    if (visibleItems === 5) {
      setVisibleItems(brands.length);
      setIsExpanded(true);
    } else {
      setVisibleItems(5);
      setIsExpanded(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      {brands.slice(0, visibleItems).map((brand) => (
        <Label key={brand} className="flex gap-3 items-center cursor-pointer w-full">
          <Checkbox
            value={brand}
            aria-checked={filters.brands.includes(brand)}
            checked={filters.brands.includes(brand)}
            onClick={handleBrandChange}
          />
          <span className="md:grow">{brand}</span>
        </Label>
      ))}
      <button className="text-sm text-accent-base" onClick={handleToggleVisibility}>
        {isExpanded ? 'Свернуть' : 'Показать еще'}
      </button>
    </div>
  );
};

export { ShowMore };
