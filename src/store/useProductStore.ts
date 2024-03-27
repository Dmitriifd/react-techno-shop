import { toast } from '@components/ui/use-toast';
import { ProductService } from '@services/product.service';
import { AxiosError } from 'axios';
import { Product } from 'types/product';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type SortOption = 'asc' | 'desc' | 'rating';

interface Filters {
  brands: string[];
  years: string[];
  colors: string[];
}

type ProductStore = {
  products: Product[];
  product: Product | null;
  loading: boolean;
  constMinPrice: number;
  constMaxPrice: number;
  minPrice: number;
  maxPrice: number;
  filters: Filters;
  page: number;
  pages: number;
  fetchProducts: (id: string) => Promise<void>;
  fetchProductByCategory: (category: string) => Promise<void>;
  fetchProductById: (id: string) => Promise<Product>;
  deleteProduct: (productId: string) => Promise<void>;
  clearProducts: () => void;
  sortProducts: (data: SortOption) => void;
  setFilters: (newFilters: Partial<Filters>) => void;
  resetFilters: () => void;
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
};

export const useProductStore = create<ProductStore>()(
  devtools(
    (set) => ({
      products: [],
      product: null,
      loading: false,
      constMinPrice: 0,
      constMaxPrice: 0,
      minPrice: 0,
      maxPrice: 0,
      page: 1,
      pages: 1,
      filters: {
        brands: [],
        years: [],
        colors: [],
      },
      fetchProducts: async (id) => {
        const res = await ProductService.getProducts(id);

        set({ products: res.products, page: res.page, pages: res.pages }, false, 'fetchProducts');
      },
      setFilters: (newFilters) => set((state) => ({ filters: { ...state.filters, ...newFilters } })),
      resetFilters: () => set({ filters: { brands: [], years: [], colors: [] } }),
      fetchProductByCategory: async (category) => {
        set({ loading: true });
        try {
          const res = await ProductService.getProductCategories(category);
          set(
            {
              products: res.products,
              constMinPrice: res.minPrice,
              constMaxPrice: res.maxPrice,
              minPrice: res.minPrice,
              maxPrice: res.maxPrice,
            },
            false,
            'fetchProductCategory',
          );
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log(error.response?.data.message);
          }
          set({ products: [] }, false, 'fetchProductCategory');
        } finally {
          set({ loading: false });
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
      setMinPrice: (minPrice) => set({ minPrice }),
      setMaxPrice: (maxPrice) => set({ maxPrice }),
    }),
    { name: 'products' },
  ),
);
