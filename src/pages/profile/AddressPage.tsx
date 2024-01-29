import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { useAddressPage } from '@hooks/useAddressPage';
import { Label } from '@radix-ui/react-label';
import { useAuthStore } from '@store/auth/useAuth';

const AddressPage = () => {
  const userInfo = useAuthStore((state) => state.userInfo);
  const { onSubmit, register, handleSubmit, errors, isLoading } = useAddressPage();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Адрес</h2>
      <div className="sm2:w-[350px]">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="city" className="text-[#848992] text-sm inline-block mb-2">
              Город
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="Введите город"
              defaultValue={userInfo?.address?.city}
              className="placeholder:text-gray-400 text-xs"
              {...register('city')}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>
          <div>
            <Label htmlFor="address" className="text-[#848992] text-sm inline-block mb-2">
              Адрес
            </Label>
            <Input
              id="address"
              type="text"
              placeholder="ул. Ленина, д. 1 кв. 1"
              defaultValue={userInfo?.address?.street}
              className="placeholder:text-gray-400 text-xs"
              {...register('street')}
            />
            {errors.street && <p className="text-red-500 text-sm">{errors.street.message}</p>}
          </div>
          <Button type="submit" variant="base" disabled={isLoading}>
            Сохранить
          </Button>
        </form>
      </div>
    </div>
  );
};

export { AddressPage };
