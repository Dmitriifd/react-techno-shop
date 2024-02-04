import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@components/ui/button';
import { SERVER_URL } from '@pages/admin/ProductListPage';
import { useCartStore } from '@store/useCartStore';
import { Product } from 'types/product';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, cart } = useCartStore((state) => state);
  const inCart = cart.some((item) => item._id === product?._id);

  if (!product) return null;

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-6 w-[200px] h-[200px] mx-auto">
        <Link to={`/product/${product._id}`}>
          <LazyLoadImage
            effect="blur"
            src={`${SERVER_URL}${product.image}`}
            alt="honor"
            className="max-w-full max-h-[200px] object-contain"
          />
        </Link>
      </CardHeader>

      <CardContent className="flex-auto pb-3">
        <CardTitle className="font-medium text-sm xl:text-[16px]">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </CardTitle>
      </CardContent>
      <CardDescription className="px-6 pb-3">
        <Link to={`/product/${product._id}`} className="font-bold text-xl">
          {product.price} ₽
        </Link>
      </CardDescription>
      <CardFooter>
        {inCart ? (
          <Button asChild variant="outline2" className="w-full">
            <Link to="/cart" className="w-full">
              В корзине
            </Link>
          </Button>
        ) : (
          <Button variant="base" className="w-full" onClick={() => addToCart(product)}>
            Купить
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export { ProductCard };
