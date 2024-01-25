import { useState } from 'react';

import { Checkbox } from '@components/ui/checkbox';
import { Label } from '@components/ui/label';

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
      {items.slice(0, visibleItems).map(({ id, label }) => (
        <Label key={id} className="flex gap-3 items-center cursor-pointer w-full">
          <Checkbox />
          <span className="md:grow">{label}</span>
        </Label>
      ))}
      <button className="text-sm text-accent-base" onClick={handleToggleVisibility}>
        {isExpanded ? 'Свернуть' : 'Показать еще'}
      </button>
    </div>
  );
};

export { ShowMore };
