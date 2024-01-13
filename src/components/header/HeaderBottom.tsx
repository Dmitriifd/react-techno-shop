import { bottomNavLink } from '@mock/data';

const HeaderBottom = () => {
  return (
    <nav className="flex justify-between py-4">
      <ul className="flex gap-6">
        {bottomNavLink.map(({ id, title, ulr, icon }) => (
          <li key={id} className={`transition-colors hover:text-accent-base ${icon ? 'flex items-center gap-2' : ''}`}>
            <a href={ulr}>{title}</a>
            {icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { HeaderBottom };
