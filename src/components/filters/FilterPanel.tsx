import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CloseIcon from '@assets/icons/close.svg?react';
import { Button } from '@components/ui/button';

const FilterPanel = () => {
  return (
    <div className="mb-10">
      {/* Top */}
      <div className="mb-4 flex">
        <div className="flex items-center gap-5">
          <h3>Часто ищут:</h3>
          <div className="flex gap-[10px]">
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
        <Select>
          <SelectTrigger className="w-[210px] border-none shadow-none ml-auto text-base">
            <SelectValue placeholder="По популярности" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">По популярности</SelectItem>
            <SelectItem value="dark">Сначала дешевые</SelectItem>
            <SelectItem value="system">Сначала дорогие</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Bottom */}
      <div className="flex">
        <div className="flex items-center gap-2">
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
          className="group flex items-center  gap-2 border-accent-base text-accent-base hover:bg-accent-base hover:text-white transition-colors ml-auto">
          Сбросить фильтры
          <CloseIcon fill="#FE9015" className="group-hover:fill-white" />
        </Button>
      </div>
    </div>
  );
};

export { FilterPanel };
