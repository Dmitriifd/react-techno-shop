import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from '@components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductService } from '@services/product.service';
import { Product } from 'types/product';
import { z } from 'zod';

const messageSchema = { message: 'Обязательное поле' };
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

const ProductSchema = z.object({
  name: z.string().min(2, messageSchema),
  price: z.coerce.number().min(2, messageSchema),
  image: z
    .any()
    .refine((file) => file?.[0]?.size <= MAX_FILE_SIZE, `Максимальный размер файла 5MB.`)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type), 'Только .jpg, .jpeg, .png и .webp форматы.'),
  brand: z.string().min(2, messageSchema),
  category: z.string().min(2, messageSchema),
  countInStock: z.coerce.number().min(1, messageSchema),
  description: z.string().min(2, messageSchema),
  char: z.string().min(2, messageSchema),
});

type FormData = z.infer<typeof ProductSchema>;

export const useProductUpdate = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams() as { id: string };

  useEffect(() => {
    ProductService.getProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    try {
      setIsLoading(true);
      const res = await ProductService.uploadProductImage(formData);
      await ProductService.updateProduct({
        id,
        brand: data.brand,
        category: data.category,
        countInStock: data.countInStock,
        description: data.description,
        image: res.image,
        name: data.name,
        price: data.price,
        char: data.char,
      });

      navigate('/admin/products');

      toast({
        variant: 'success',
        title: 'Товар успешно обновлен',
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    register,
    handleSubmit,
    errors,
    onSubmit,
    product,
    error,
  };
};
