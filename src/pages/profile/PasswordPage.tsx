import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { useChangePassword } from '@hooks/useChangePassword';
import { Label } from '@radix-ui/react-label';

const PasswordPage = () => {
  const { onSubmit, register, isLoading, errors, handleSubmit } = useChangePassword();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Смена пароля</h2>

      <div className="sm2:w-[350px]">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="password" className="text-[#848992] text-sm inline-block mb-2">
              Новый пароль
            </Label>
            <Input
              id="password"
              type="password"
              className="placeholder:text-gray-400 text-xs"
              placeholder="Введите пароль"
              {...register('password')}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="text-[#848992] text-sm inline-block mb-2">
              Повторите пароль
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              className="placeholder:text-gray-400 text-xs"
              placeholder="Введите пароль"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
          <Button type="submit" variant="base" disabled={isLoading}>
            Сменить пароль
          </Button>
        </form>
      </div>
    </div>
  );
};

export { PasswordPage };
