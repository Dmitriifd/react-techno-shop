import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@components/ui/button';

type ProductCardProps = {
  title: string;
  price: number;
  img: string;
  id: number;
};

const ProductCard = ({ title, price, img, id }: ProductCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pt-4 pb-3 mx-auto">
        <LazyLoadImage
          effect="blur"
          src={img}
          alt="honor"
          width={200}
          height={200}
          className="h-[200px] object-contain"
        />
      </CardHeader>
      <CardContent className="flex-auto pb-3">
        <CardTitle className="font-medium text-sm xl:text-[16px]">
          <Link to="/product">{title}</Link>
        </CardTitle>
      </CardContent>
      <CardDescription className="px-6 pb-3 ">
        <a href="/" className="font-bold text-xl">
          {price} ₽
        </a>
      </CardDescription>
      <CardFooter>
        <Button variant={id === 1 ? 'outline2' : 'base'} className="w-full">
          {id === 1 ? 'В корзине ' : 'Купить'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ProductCard };
