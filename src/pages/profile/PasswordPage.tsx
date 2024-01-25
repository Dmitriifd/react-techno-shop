import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@radix-ui/react-label';

const PasswordPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Смена пароля</h2>

      <div className="sm2:w-[350px]">
        <form className="space-y-5">
          <div>
            <Label htmlFor="password" className="text-[#848992] text-sm inline-block mb-2">
              Новый пароль
            </Label>
            <Input
              id="password"
              type="password"
              className="placeholder:text-gray-400 text-xs"
              placeholder="Введите пароль"
              required
            />
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
              required
            />
          </div>
          <Button type="submit" variant="base">
            Сменить пароль
          </Button>
        </form>
      </div>
    </div>
  );
};

export { PasswordPage };
