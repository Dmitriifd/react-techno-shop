import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CloseIcon from '@assets/icons/close.svg?react';
import { Button } from '@components/ui/button';
import { useProductStore } from '@store/useProductStore';

const FilterPanel = () => {
  const sortProducts = useProductStore((state) => state.sortProducts);

  return (
    <div className="mb-10">
      {/* Top */}
      <div className="mb-4 flex flex-col">
        <div className="flex items-center  gap-5 flex-wrap order-1">
          <h3>Часто ищут:</h3>
          <div className="flex gap-[10px] flex-wrap">
            <Button variant="outline" className="h-[30px]">
              Название
            </Button>
            <Button variant="outline" className="h-[30px]">
              Название
            </Button>
            <Button variant="outline" className="h-[30px]">
              Название
            </Button>
            <Button variant="outline" className="h-[30px]">
              Название
            </Button>
          </div>
        </div>
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
          <Button variant="base" className="h-[30px] flex gap-2">
            Название
            <CloseIcon fill="#FFF" />
          </Button>
          <Button variant="base" className="h-[30px] flex gap-2">
            Название
            <CloseIcon fill="#FFF" />
          </Button>
          <Button variant="base" className="h-[30px] flex gap-2">
            Название
            <CloseIcon fill="#FFF" />
          </Button>
        </div>
        <Button
          variant="outline"
          className="group flex w-full items-center  gap-2 border-accent-base text-accent-base hover:bg-accent-base hover:text-white transition-colors ml-auto sm2:w-fit">
          Сбросить фильтры
          <CloseIcon fill="#FE9015" className="group-hover:fill-white" />
        </Button>
      </div>
    </div>
  );
};

export { FilterPanel };
