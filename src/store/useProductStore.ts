import { toast } from '@components/ui/use-toast';
import { ProductService } from '@services/product.service';
import { AxiosError } from 'axios';
import { Product } from 'types/product';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type ProductStore = {
  products: Product[];
  fetchProducts: () => Promise<void>;
  fetchProductByCategory: (category: string) => Promise<void>;
  deleteProduct: (productId: string) => Promise<void>;
};

export const useProductStore = create<ProductStore>()(
  devtools(
    (set) => ({
      products: [],
      fetchProducts: async () => {
        const res = await ProductService.getProducts();
        set({ products: res.products }, false, 'fetchProducts');
      },
      fetchProductByCategory: async (category) => {
        try {
          const res = await ProductService.getProductCategories(category);
          set({ products: res }, false, 'fetchProductCategory');
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log(error.response?.data.message);
          }
          set({ products: [] }, false, 'fetchProductCategory');
        }
      },
      deleteProduct: async (productId) => {
        const res = await ProductService.deleteProduct(productId);
        const updatedProducts = await ProductService.getProducts();
        toast({
          variant: 'success',
          title: res.message,
        });
        set({ products: updatedProducts.products }, false, 'deleteProduct');
      },
    }),
    { name: 'products' },
  ),
);
