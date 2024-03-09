import { MouseEvent, useEffect, useState } from 'react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import ArrowIcon from '@assets/icons/arrowDown.svg?react';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Label } from '@components/ui/label';
import { ProductService } from '@services/product.service';
import { useProductStore } from '@store/useProductStore';

const ColorFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { filters, setFilters } = useProductStore((state) => state);
  const [colors, setColors] = useState([]);
  console.log(colors);

  const handleColorChange = (event: MouseEvent<HTMLButtonElement>) => {
    const color = event.currentTarget.value;
    const updatedColors = filters.colors.includes(color)
      ? filters.colors.filter((selectedColor) => selectedColor !== color)
      : [...filters.colors, color];

    setFilters({ ...filters, colors: updatedColors });
  };

  useEffect(() => {
    ProductService.getColors().then((data) => setColors(data));
  }, []);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-3">
      <div className="flex items-center justify-between">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex w-full justify-between p-2 pl-0 text-base font-bold hover:bg-transparent">
            <span>Выбор цвета</span>
            <ArrowIcon
              width={24}
              height={24}
              className={isOpen ? 'transition-transform rotate-180' : 'transition-transform'}
            />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2 pt-3">
        {colors.map((color) => (
          <Label key={color} className="flex gap-3 items-center cursor-pointer">
            <Checkbox
              value={color}
              aria-checked={filters.colors.includes(color)}
              checked={filters.colors.includes(color)}
              onClick={handleColorChange}
            />
            <span className="md:grow">{color}</span>
          </Label>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export { ColorFilter };
