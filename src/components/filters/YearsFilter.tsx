import { MouseEvent, useEffect, useState } from 'react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import ArrowIcon from '@assets/icons/arrowDown.svg?react';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Label } from '@components/ui/label';
import { ProductService } from '@services/product.service';
import { useProductStore } from '@store/useProductStore';

const YearsFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [years, setYears] = useState([]);
  const { filters, setFilters } = useProductStore((state) => state);

  const handleYearChange = (event: MouseEvent<HTMLButtonElement>) => {
    const year = event.currentTarget.value;
    const updatedYears = filters.years.includes(year)
      ? filters.years.filter((selectedYear) => selectedYear !== year)
      : [...filters.years, year];

    setFilters({ ...filters, years: updatedYears });
  };

  useEffect(() => {
    ProductService.getYears().then((data) => setYears(data));
  }, []);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-3">
      <div className="flex items-center justify-between">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex w-full justify-between p-2 pl-0 text-base font-bold hover:bg-transparent">
            <span>Год релиза</span>
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
        {years.map((year) => (
          <Label key={year} className="flex gap-3 items-center cursor-pointer">
            <Checkbox
              value={year}
              aria-checked={filters.years.includes(year)}
              checked={filters.years.includes(year)}
              onClick={handleYearChange}
            />
            <span className="md:grow">{year}</span>
          </Label>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export { YearsFilter };
