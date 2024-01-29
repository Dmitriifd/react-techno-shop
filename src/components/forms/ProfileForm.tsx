import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { useProfileForm } from '@hooks/useProfileForm';
import { useAuthStore } from '@store/auth/useAuth';

const ProfileForm = () => {
  const { onSubmit, register, handleSubmit, errors, isLoading } = useProfileForm();
  const userInfo = useAuthStore((state) => state.userInfo);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Личные данные</h2>
      <div className="sm2:w-[350px]">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="name" className="text-[#848992] text-sm inline-block mb-2">
              Имя
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Введите имя"
              defaultValue={userInfo?.name}
              className="placeholder:text-gray-400 text-xs"
              {...register('name')}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="surname" className="text-[#848992] text-sm inline-block mb-2">
              Фамилия
            </Label>
            <Input
              id="surname"
              type="text"
              placeholder="Введите фамилию"
              defaultValue={userInfo?.surname}
              className="placeholder:text-gray-400 text-xs"
              {...register('surname')}
            />
            {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
          </div>
          <div>
            <Label htmlFor="phone" className="text-[#848992] text-sm inline-block mb-2">
              Телефон
            </Label>
            <Input
              id="phone"
              type="text"
              placeholder="+7 (900) 000 00 00"
              defaultValue={userInfo?.phone}
              className="placeholder:text-gray-400 text-xs"
              {...register('phone')}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-[#848992] text-sm inline-block mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Ваш email"
              defaultValue={userInfo?.email}
              className="placeholder:text-gray-400 text-xs"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <Button type="submit" variant="base" disabled={isLoading}>
            Сохранить
          </Button>
        </form>
      </div>
    </div>
  );
};

export { ProfileForm };
