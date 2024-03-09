import { memo, useRef } from 'react';

import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Slider } from '@components/ui/slider';
import { useProductStore } from '@store/useProductStore';
import throttle from 'lodash.throttle';

const PriceFilter = memo(() => {
  const constMinPrice = useProductStore((state) => state.constMinPrice);
  const constMaxPrice = useProductStore((state) => state.constMaxPrice);
  const minPrice = useProductStore((state) => state.minPrice);
  const maxPrice = useProductStore((state) => state.maxPrice);
  const setMinPrice = useProductStore((state) => state.setMinPrice);
  const setMaxPrice = useProductStore((state) => state.setMaxPrice);

  const throttledSetMinPrice = useRef(throttle(setMinPrice, 100)).current;
  const throttledSetMaxPrice = useRef(throttle(setMaxPrice, 100)).current;

  const handleRangeChange = (value: number[]) => {
    throttledSetMinPrice(value[0]);
    throttledSetMaxPrice(value[1]);
  };

  return (
    <div className="mb-10">
      <h2 className="font-bold mb-3">Цена</h2>
      <div className="flex gap-3 flex-col">
        <div className="flex gap-3 mb-3">
          <div className="flex items-center relative">
            <Label htmlFor="id1" className="text-sm text-gray-400 absolute left-2">
              От
            </Label>
            <Input
              onChange={(e) => setMinPrice(+e.target.value)}
              placeholder={`От ${minPrice}`}
              type="number"
              value={minPrice}
              min={minPrice}
              className="pl-8"
              id="id1"
            />
          </div>
          <div className="flex items-center relative">
            <Label htmlFor="id2" className="text-sm text-gray-400 absolute left-2">
              До
            </Label>
            <Input
              onChange={(e) => setMaxPrice(+e.target.value)}
              placeholder={`От ${maxPrice}`}
              type="number"
              value={maxPrice}
              max={maxPrice}
              className="pl-8"
              id="id2"
            />
          </div>
        </div>
        <Slider
          min={constMinPrice}
          max={constMaxPrice}
          step={100}
          value={[minPrice, maxPrice]}
          onValueChange={handleRangeChange}
        />
      </div>
    </div>
  );
});

PriceFilter.displayName = 'PriceFilter';

export { PriceFilter };
