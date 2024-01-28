import { NavLink, Outlet } from 'react-router-dom';

import { Button } from '@components/ui/button';
import { Section } from '@components/ui/section';
import { useProfilePage } from '@hooks/useProfilePage';

const ProfileLayout = () => {
  const { handleLogout } = useProfilePage();

  return (
    <Section>
      <h1 className="mb-10 text-2xl font-bold">Личный кабинет</h1>

      <div className="flex gap-10 flex-col md:flex-row">
        <ul className="space-y-4 md:border-r pr-10">
          <li>
            <NavLink end to="." className={({ isActive }) => (isActive ? 'font-bold' : '')}>
              Учетная запись
            </NavLink>
          </li>
          <li>
            <NavLink to="address" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
              Адреса доставки
            </NavLink>
          </li>
          <li>
            <NavLink
              to="order"
              className={({ isActive }) => (isActive ? 'flex items-center font-bold' : 'flex items-center')}>
              <span className="pr-2">История заказов</span>
              <span className="h-4 w-4 rounded-full bg-[#ED1C22] inline-flex justify-center items-center text-white text-xs">
                1
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="password" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
              Смена пароля
            </NavLink>
          </li>
          <li>
            <Button variant="link" className="p-0 h-fit text-[#EC2525] hover:no-underline" onClick={handleLogout}>
              Выйти
            </Button>
          </li>
        </ul>
        <Outlet />
      </div>
    </Section>
  );
};

export { ProfileLayout };
