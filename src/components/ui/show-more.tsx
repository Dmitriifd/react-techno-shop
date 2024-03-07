import { useEffect, useState } from 'react';

import { Checkbox } from '@components/ui/checkbox';
import { Label } from '@components/ui/label';
import { ProductService } from '@services/product.service';

const items = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Xiaomi' },
  { id: 3, label: 'HONOR' },
  { id: 4, label: 'Samsung' },
  { id: 5, label: 'Techno' },
  { id: 6, label: 'POCO' },
  { id: 7, label: 'HUAWEI' },
];

const ShowMore = () => {
  const [visibleItems, setVisibleItems] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    ProductService.getBrands().then((data) => setBrands(data));
  }, []);

  const handleToggleVisibility = () => {
    if (visibleItems === 5) {
      setVisibleItems(items.length);
      setIsExpanded(true);
    } else {
      setVisibleItems(5);
      setIsExpanded(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      {brands.slice(0, visibleItems).map((item) => (
        <Label key={item} className="flex gap-3 items-center cursor-pointer w-full">
          <Checkbox />
          <span className="md:grow">{item}</span>
        </Label>
      ))}
      <button className="text-sm text-accent-base" onClick={handleToggleVisibility}>
        {isExpanded ? 'Свернуть' : 'Показать еще'}
      </button>
    </div>
  );
};

export { ShowMore };
