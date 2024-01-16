import { Link } from 'react-router-dom';

import { bottomNavLink } from '@mock/data';

const HeaderBottom = () => {
  return (
    <nav className="container hidden md:flex justify-between py-4">
      <ul className="gap-6 flex">
        {bottomNavLink.map(({ id, title, ulr, icon }) => (
          <li key={id} className={`transition-colors hover:text-accent-base ${icon ? 'flex items-center gap-2' : ''}`}>
            <Link to={ulr}>{title}</Link>
            {icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { HeaderBottom };
