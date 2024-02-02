import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@components/ui/button';
import { SERVER_URL } from '@pages/admin/ProductListPage';

type ProductCardProps = {
  title: string;
  price: number;
  img: string;
  id: string;
};

const ProductCard = ({ title, price, img, id }: ProductCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-6 w-[200px] h-[200px] mx-auto">
        <Link to={`/product/${id}`}>
          <LazyLoadImage
            effect="blur"
            src={`${SERVER_URL}${img}`}
            alt="honor"
            className="max-w-full max-h-[200px] object-contain"
          />
        </Link>
      </CardHeader>

      <CardContent className="flex-auto pb-3">
        <CardTitle className="font-medium text-sm xl:text-[16px]">
          <Link to={`/product/${id}`}>{title}</Link>
        </CardTitle>
      </CardContent>
      <CardDescription className="px-6 pb-3">
        <Link to={`/product/${id}`} className="font-bold text-xl">
          {price} ₽
        </Link>
      </CardDescription>
      <CardFooter>
        <Button variant="base" className="w-full">
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ProductCard };
