import { Link, Outlet } from 'react-router-dom';

import { Button } from '@components/ui/button';

const ProfileLayout = () => {
  return (
    <div>
      <h1 className="mb-10 text-2xl font-bold">Личный кабинет</h1>

      <div className="flex">
        <ul className="space-y-4 border-r pr-10">
          <li>
            <Link to=".">Учетная запись</Link>
          </li>
          <li>
            <Link to="address">Адреса доставки</Link>
          </li>
          <li>
            <Link to="order" className="flex items-center">
              <span className="pr-2">История заказов</span>
              <span className="h-4 w-4 rounded-full bg-[#ED1C22] inline-flex justify-center items-center text-white text-xs">
                1
              </span>
            </Link>
          </li>
          <li>
            <Link to="password">Смена пароля</Link>
          </li>
          <li>
            <Button variant="link" className="p-0 h-fit text-[#EC2525] hover:no-underline">
              Выйти
            </Button>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export { ProfileLayout };
