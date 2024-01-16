import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { products } from '@mock/data';

import { ProductCard } from './ProductCard';

export function Slider() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Хиты продаж</h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full">
        <CarouselContent>
          {products.map((props) => (
            <CarouselItem
              key={props.id}
              className="min-h-full sm:basis-[80%] sm2:basis-1/2 md:basis-1/3 xl:basis-1/4 xll:basis-1/5">
              <div className="p-1 h-full">
                <ProductCard {...props} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-3 disabled:hidden bg-white" />
        <CarouselNext className="-right-3 disabled:hidden bg-white" />
      </Carousel>
    </div>
  );
}
