import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@radix-ui/react-label';

const AddressPage = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Адрес</h2>

      <div className="w-[350px]">
        <form className="space-y-5">
          <div>
            <Label htmlFor="city" className="text-[#848992] text-sm inline-block mb-2">
              Город
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="Введите город"
              className="placeholder:text-gray-400 text-xs"
              required
            />
          </div>
          <div>
            <Label htmlFor="address" className="text-[#848992] text-sm inline-block mb-2">
              Адрес
            </Label>
            <Input
              id="address"
              type="text"
              placeholder="Введите адрес"
              className="placeholder:text-gray-400 text-xs"
              required
            />
          </div>
          <Button type="submit" variant="base">
            Сохранить
          </Button>
        </form>
      </div>
    </div>
  );
};

export { AddressPage };
