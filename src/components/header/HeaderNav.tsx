import { topNavLink } from '@mock/data';

const HeaderNav = () => {
  return (
    <ul className="hidden lg:flex gap-6 text-xs pl-[46px]">
      {topNavLink.map(({ id, title, ulr }) => (
        <li key={id}>
          <a href={ulr} className="transition-colors hover:text-accent-base">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { HeaderNav };
