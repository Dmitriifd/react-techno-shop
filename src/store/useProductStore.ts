import { toast } from '@components/ui/use-toast';
import { ProductService } from '@services/product.service';
import { Product } from 'types/product';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type ProductStore = {
  products: Product[];
  fetchProducts: () => Promise<void>;
  deleteProduct: (productId: string) => Promise<void>;
};

export const useProductStore = create<ProductStore>()(
  devtools(
    (set) => ({
      products: [],
      fetchProducts: async () => {
        const res = await ProductService.getProducts();
        set({ products: res.products });
      },
      deleteProduct: async (productId) => {
        const res = await ProductService.deleteProduct(productId);
        const updatedProducts = await ProductService.getProducts();
        toast({
          variant: 'success',
          title: res.message,
        });
        set({ products: updatedProducts.products });
      },
    }),
    { name: 'products' },
  ),
);
