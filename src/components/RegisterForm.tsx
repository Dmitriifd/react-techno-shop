import { Label } from '@radix-ui/react-label';

import { Button } from './ui/button';
import { Input } from './ui/input';

const RegisterForm = () => {
  return (
    <div className="w-[300px]">
      <form className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-[#848992] text-sm inline-block mb-2">
            Имя
          </Label>
          <Input id="name" type="text" placeholder="Ваше имя" className="placeholder:text-gray-400 text-xs" required />
        </div>
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
            placeholder="Придумайте пароль"
            className="placeholder:text-gray-400 text-xs"
            required
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword" className="text-[#848992] text-sm inline-block mb-2">
            Подтвердите пароль
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Подтвердите свой пароль"
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

export { RegisterForm };
