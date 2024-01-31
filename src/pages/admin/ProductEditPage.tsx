import { Link } from 'react-router-dom';

import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Message } from '@components/ui/message';
import { Section } from '@components/ui/section';
import { useProductUpdate } from '@hooks/useProductUpdate';

import { SERVER_URL } from './ProductListPage';

const ProductEditPage = () => {
  const { isLoading, register, handleSubmit, errors, onSubmit, product, error } = useProductUpdate();

  if (error) {
    return (
      <Section>
        <Link to="/admin/products" className="py-2 px-4 bg-black text-white rounded-md mb-5 inline-block">
          Вернуться назад
        </Link>
        <Message variant="danger">{error}</Message>
      </Section>
    );
  }

  return (
    <Section>
      <Link to="/admin/products" className="py-2 px-4 bg-black text-white rounded-md mb-5 inline-block">
        Вернуться назад
      </Link>

      <h1 className="text-2xl font-bold mb-10 text-center">Редактировать товар</h1>

      <div className="flex justify-center mb-5">
        <img src={`${SERVER_URL}${product?.image}`} width={100} height={100} alt={product?.name} />
      </div>

      <form className="max-w-[550px] mx-auto flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Название</span>
          <Input defaultValue={product?.name} type="text" className="placeholder:text-gray-300" {...register('name')} />
        </Label>
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Цена</span>
          <Input
            defaultValue={product?.price}
            type="number"
            className="placeholder:text-gray-300"
            {...register('price')}
          />
        </Label>
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Фото</span>
          <Input type="file" {...register('image')} />
        </Label>
        {errors.image && <p className="text-red-500 text-sm">{errors.image?.message as string}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Бренд</span>
          <Input
            defaultValue={product?.brand}
            type="text"
            className="placeholder:text-gray-300"
            {...register('brand')}
          />
        </Label>
        {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Количество на складе</span>
          <Input
            defaultValue={product?.countInStock}
            type="number"
            className="placeholder:text-gray-300"
            {...register('countInStock')}
          />
        </Label>
        {errors.countInStock && <p className="text-red-500 text-sm">{errors.countInStock.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Категория</span>
          <Input
            defaultValue={product?.category}
            type="text"
            className="placeholder:text-gray-300"
            {...register('category')}
          />
        </Label>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Описание</span>
          <Input
            defaultValue={product?.description}
            type="text"
            className="placeholder:text-gray-300"
            {...register('description')}
          />
        </Label>
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Характеристики</span>
          <Input defaultValue={product?.char} type="text" className="placeholder:text-gray-300" {...register('char')} />
        </Label>
        {errors.char && <p className="text-red-500 text-sm">{errors.char.message}</p>}
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Цвет</span>
          <Input
            type="text"
            className="placeholder:text-gray-300"
            {...register('color')}
            placeholder="black,red,green"
            defaultValue={product?.colors}
          />
        </Label>
        {errors.color && <p className="text-red-500 text-sm">{errors.color.message}</p>}
        <Button className="mt-5 text-base max-w-[200px]" disabled={isLoading}>
          Обновить
        </Button>
      </form>
    </Section>
  );
};

export { ProductEditPage };
