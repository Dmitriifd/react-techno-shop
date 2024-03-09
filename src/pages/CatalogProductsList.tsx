import { useMemo } from 'react';

import { ProductCard } from '@components/shared/ProductCard';
import { useProductStore } from '@store/useProductStore';
import { Product } from 'types/product';

const CatalogProductsList = ({ products }: { products: Product[] }) => {
  const filters = useProductStore((state) => state.filters);
  const minPrice = useProductStore((state) => state.minPrice);
  const maxPrice = useProductStore((state) => state.maxPrice);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const { brands, years, colors } = filters;

      const priceInRange = (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
      const brandMatch = brands.length === 0 || brands.includes(product.brand);
      const colorMatch = colors.length === 0 || product.colors.some((color) => colors.includes(color));
      const yearMatch = years.length === 0 || years.includes(product.year);

      return priceInRange && brandMatch && yearMatch && colorMatch;
    });
  }, [filters, products, minPrice, maxPrice]);

  console.log('render');

  return (
    <div className="grid  gap-5 grid-cols-1 sm2:grid-cols-2 flex-wrap md:grid-cols-3 xll:grid-cols-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export { CatalogProductsList };
