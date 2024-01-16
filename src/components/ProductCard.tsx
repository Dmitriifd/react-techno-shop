import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from './ui/button';

type ProductCardProps = {
  title: string;
  price: number;
  img: string;
};

const ProductCard = ({ title, price, img }: ProductCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pt-4 pb-3 mx-auto">
        <img src={img} alt="honor" width={200} height={200} className="h-[200px] object-contain" />
      </CardHeader>
      <CardContent className="flex-auto pb-3">
        <CardTitle className="font-medium text-sm xl:text-[16px]">
          <a href="/">{title}</a>
        </CardTitle>
      </CardContent>
      <CardDescription className="px-6 pb-3 ">
        <a href="/" className="font-bold text-xl">
          {price} ₽
        </a>
      </CardDescription>
      <CardFooter>
        <Button variant="base" className="w-full">
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ProductCard };
