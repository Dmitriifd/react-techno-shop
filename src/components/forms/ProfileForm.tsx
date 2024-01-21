import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';

const ProfileForm = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Личные данные</h2>
      <div className="w-[350px]">
        <form className="space-y-5">
          <div>
            <Label htmlFor="name" className="text-[#848992] text-sm inline-block mb-2">
              Имя
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Введите имя"
              defaultValue="Николай"
              className="placeholder:text-gray-400 text-xs"
              required
            />
          </div>
          <div>
            <Label htmlFor="surname" className="text-[#848992] text-sm inline-block mb-2">
              Фамилия
            </Label>
            <Input
              id="surname"
              type="text"
              placeholder="Введите фамилию"
              defaultValue="Иванов"
              className="placeholder:text-gray-400 text-xs"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-[#848992] text-sm inline-block mb-2">
              Телефон
            </Label>
            <Input
              id="phone"
              type="text"
              placeholder="+7 (900) 000 00 00"
              className="placeholder:text-gray-400 text-xs"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-[#848992] text-sm inline-block mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Ваш email"
              defaultValue="email@mail.ru"
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

export { ProfileForm };
