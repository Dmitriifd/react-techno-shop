import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CloseIcon from '@assets/icons/close.svg?react';
import { Button } from '@components/ui/button';
import { useProductStore } from '@store/useProductStore';

const FilterPanel = () => {
  const { filters, setFilters, resetFilters } = useProductStore((state) => state);
  const brands = filters.brands;
  const years = filters.years;
  const colors = filters.colors;

  const handleChangeBrand = (brand: string) => {
    setFilters({
      ...filters,
      brands: brands.includes(brand) ? brands.filter((b) => b !== brand) : [...brands, brand],
    });
  };
  const handleChangeYear = (year: string) => {
    setFilters({
      ...filters,
      years: years.includes(year) ? years.filter((b) => b !== year) : [...years, year],
    });
  };

  const handleChangeColor = (color: string) => {
    setFilters({
      ...filters,
      colors: colors.includes(color) ? colors.filter((b) => b !== color) : [...colors, color],
    });
  };

  const sortProducts = useProductStore((state) => state.sortProducts);

  return (
    <div className="mb-10">
      {/* Top */}
      <div className="mb-4 flex flex-col">
        <Select onValueChange={sortProducts}>
          <SelectTrigger className="w-full mb-3 sm2:w-[210px] md:border-none shadow-none ml-auto text-base">
            <SelectValue placeholder="По популярности" />
          </SelectTrigger>
          <SelectContent className="order-2 sm2:order-none">
            <SelectItem value="rating">По популярности</SelectItem>
            <SelectItem value="desc">Сначала дешевые</SelectItem>
            <SelectItem value="asc">Сначала дорогие</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Bottom */}
      <div className="flex flex-col gap-2 sm2:flex-row order-3">
        <div className="flex items-center gap-2 flex-wrap mb-2 sm2:mb-0">
          {brands.length > 0 &&
            brands.map((brand) => (
              <Button
                key={brand}
                variant="base"
                className="h-[30px] flex gap-2"
                onClick={() => handleChangeBrand(brand)}>
                Бренд: {brand}
                <CloseIcon fill="#FFF" />
              </Button>
            ))}
          {years.length > 0 &&
            years.map((year) => (
              <Button key={year} variant="base" className="h-[30px] flex gap-2" onClick={() => handleChangeYear(year)}>
                Год: {year}
                <CloseIcon fill="#FFF" />
              </Button>
            ))}
          {colors.length > 0 &&
            colors.map((color) => (
              <Button
                key={color}
                variant="base"
                className="h-[30px] flex gap-2"
                onClick={() => handleChangeColor(color)}>
                Цвет: {color}
                <CloseIcon fill="#FFF" />
              </Button>
            ))}
        </div>
        {brands.length > 0 || years.length > 0 || colors.length > 0 ? (
          <Button
            onClick={resetFilters}
            variant="outline"
            className="group flex w-full items-center  gap-2 border-accent-base text-accent-base hover:bg-accent-base hover:text-white transition-colors ml-auto sm2:w-fit">
            Сбросить фильтры
            <CloseIcon fill="#FE9015" className="group-hover:fill-white" />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export { FilterPanel };
