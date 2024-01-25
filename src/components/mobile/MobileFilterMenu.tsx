import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { BrandFilter } from '@components/filters/BrandFilter';
import { PriceFilter } from '@components/filters/PriceFilter';
import { YearsFilter } from '@components/filters/YearsFilter';
import { Button } from '@components/ui/button';

const MobileFilterMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="base" className="mb-5 w-full block tablet:hidden">
          Фильтры
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-full overflow-auto">
        <SheetHeader>
          <SheetTitle className="my-5">Фильтры</SheetTitle>
          <SheetDescription>
            <div className="max-w-[450px]">
              <PriceFilter />
              <BrandFilter />
              <YearsFilter />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export { MobileFilterMenu };
