import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';

const LoginForm = () => {
  return (
    <div className="w-[300px]">
      <form className="space-y-5">
        <div>
          <Label htmlFor="email" className="text-[#848992] text-sm inline-block mb-2">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Ваш email"
            className="placeholder:text-gray-400 text-xs"
            required
          />
        </div>
        <div>
          <Label htmlFor="password" className="text-[#848992] text-sm inline-block mb-2">
            Пароль
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Введите свой пароль"
            className="placeholder:text-gray-400 text-xs"
            required
          />
        </div>
        <Button type="submit" variant="base" className="w-full">
          Войти
        </Button>
      </form>
    </div>
  );
};

export { LoginForm };
