import { toast } from '@components/ui/use-toast';
import { ProductService } from '@services/product.service';
import { AxiosError } from 'axios';
import { Product } from 'types/product';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type SortOption = 'asc' | 'desc' | 'rating';

type ProductStore = {
  products: Product[];
  product: Product | null;
  loading: boolean;
  fetchProducts: () => Promise<void>;
  fetchProductByCategory: (category: string) => Promise<void>;
  fetchProductById: (id: string) => Promise<Product>;
  deleteProduct: (productId: string) => Promise<void>;
  clearProducts: () => void;
  sortProducts: (data: SortOption) => void;
};

export const useProductStore = create<ProductStore>()(
  devtools(
    (set) => ({
      products: [],
      product: null,
      loading: false,
      fetchProducts: async () => {
        const res = await ProductService.getProducts();
        set({ products: res.products }, false, 'fetchProducts');
      },
      fetchProductByCategory: async (category) => {
        try {
          const res = await ProductService.getProductCategories(category);
          set({ products: res.products }, false, 'fetchProductCategory');
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
      fetchProductById: async (id) => {
        set({ loading: true });
        const res = await ProductService.getProductById(id);
        set({ product: res, loading: false });
        return res;
      },
      clearProducts: () => set({ products: [] }),
      sortProducts: (data) => {
        switch (data) {
          case 'asc':
            set((state) => ({
              products: [...state.products.sort((a, b) => b.price - a.price)],
            }));
            break;
          case 'desc':
            set((state) => ({
              products: [...state.products.sort((a, b) => a.price - b.price)],
            }));
            break;
          case 'rating':
            set((state) => ({
              products: [...state.products.sort((a, b) => b.rating - a.rating)],
            }));
            break;
        }
      },
    }),
    { name: 'products' },
  ),
);
