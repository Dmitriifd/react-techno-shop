import { topNavLink } from '@mock/data';

const HeaderNav = () => {
  return (
    <ul className="flex gap-6 text-xs flex-wrap">
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
