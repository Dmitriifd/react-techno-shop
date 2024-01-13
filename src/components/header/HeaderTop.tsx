import PhoneIcon from '@assets/icons/phone.svg?react';
import { topNavLink } from '@mock/data';
const HeaderTop = () => {
  return (
    <nav className="flex justify-between py-4">
      <ul className="flex gap-6 text-xs">
        {topNavLink.map(({ id, title, ulr }) => (
          <li key={id}>
            <a href={ulr} className="transition-colors hover:text-accent-base">
              {title}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex gap-5">
        <li>
          <a className="group transition-transform flex items-center gap-2 text-sm" href="tel:+73452594945">
            <PhoneIcon className="group-hover:scale-[1.1] duration-300" />
            +7 (3534) 55-33-22
          </a>
        </li>
        <li>
          <a className="text-sm text-accent-base" href="tel:+73452594945">
            Заказать звонок
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { HeaderTop };
