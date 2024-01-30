import { Link } from 'react-router-dom';

import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Section } from '@components/ui/section';
import { useProductAdd } from '@hooks/useProductAdd';

const ProductAddPage = () => {
  const { errors, handleSubmit, register, onSubmit, isLoading } = useProductAdd();

  return (
    <Section>
      <Link to="/admin/products" className="py-2 px-4 bg-black text-white rounded-md mb-5 inline-block">
        Вернуться назад
      </Link>

      <h1 className="text-2xl font-bold mb-10 text-center">Добавить товар</h1>

      <form className="max-w-[550px] mx-auto flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Название</span>
          <Input type="text" className="placeholder:text-gray-300" {...register('name')} />
        </Label>
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Цена</span>
          <Input type="number" className="placeholder:text-gray-300" {...register('price')} />
        </Label>
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Фото</span>
          <Input type="file" {...register('image')} />
        </Label>
        {errors.image && <p className="text-red-500 text-sm">{errors.image?.message as string}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Бренд</span>
          <Input type="text" className="placeholder:text-gray-300" {...register('brand')} />
        </Label>
        {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Количество на складе</span>
          <Input type="number" className="placeholder:text-gray-300" {...register('countInStock')} />
        </Label>
        {errors.countInStock && <p className="text-red-500 text-sm">{errors.countInStock.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Категория</span>
          <Input type="text" className="placeholder:text-gray-300" {...register('category')} />
        </Label>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Описание</span>
          <Input type="text" className="placeholder:text-gray-300" {...register('description')} />
        </Label>
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        <Button className="mt-5 text-base max-w-[250px]" disabled={isLoading}>
          Добавить товар
        </Button>
      </form>
    </Section>
  );
};

export { ProductAddPage };
