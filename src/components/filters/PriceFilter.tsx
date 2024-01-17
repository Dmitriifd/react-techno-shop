import { useCallback, useState } from 'react';

import { Input } from '@components/ui/input';
import { Slider } from '@components/ui/slider';

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(4199);
  const [maxPrice, setMaxPrice] = useState(219999);

  const handleRangeChange = useCallback((value: number[]) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  }, []);
  return (
    <div className="mb-10">
      <h2 className="font-bold mb-3">Цена</h2>
      <div className="flex gap-3 flex-col">
        <div className="flex gap-3 mb-3">
          <div className="flex items-center relative">
            <label htmlFor="id1" className="text-sm text-gray-400 absolute left-2">
              От
            </label>
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
            <label htmlFor="id2" className="text-sm text-gray-400 absolute left-2">
              До
            </label>
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
          defaultValue={[4199, 219999]}
          step={100}
          min={4199}
          max={219999}
          onValueChange={handleRangeChange}
          value={[minPrice, maxPrice]}
        />
      </div>
    </div>
  );
};

export { PriceFilter };
