import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Section } from '@components/ui/section';

const ProductEditPage = () => {
  return (
    <Section>
      <h1 className="text-2xl font-bold mb-10 text-center">Редактировать товар</h1>

      <form className="max-w-[550px] mx-auto flex flex-col gap-2">
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Имя</span>
          <Input type="text" name="name" className="placeholder:text-gray-300" />
        </Label>
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Цена</span>
          <Input type="number" name="price" className="placeholder:text-gray-300" />
        </Label>
        <fieldset className="flex flex-col justify-between">
          <Label className="text-sm text-[#848992]">
            <span className="inline-block mb-2">Фото</span>
            <Input type="text" name="image" className="placeholder:text-gray-300" />
          </Label>
          <Input type="file" name="image" />
        </fieldset>
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Бренд</span>
          <Input type="text" name="brand" className="placeholder:text-gray-300" />
        </Label>
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Количество на складе</span>
          <Input type="number" name="count-stock" className="placeholder:text-gray-300" />
        </Label>
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Категория</span>
          <Input type="text" name="category" className="placeholder:text-gray-300" />
        </Label>
        <Label className="text-sm text-[#848992]">
          <span className="inline-block mb-2">Описание</span>
          <Input type="text" name="description" className="placeholder:text-gray-300" />
        </Label>

        <Button className="mt-5 text-base max-w-[200px]">Обновить</Button>
      </form>
    </Section>
  );
};

export { ProductEditPage };
