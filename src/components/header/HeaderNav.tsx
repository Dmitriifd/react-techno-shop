import { Link } from 'react-router-dom';

import { topNavLink } from '@mock/data';

const HeaderNav = () => {
  return (
    <ul className="flex gap-6 text-xs flex-wrap">
      {topNavLink.map(({ id, title, url }) => (
        <li key={id}>
          <Link to={url} className="transition-colors hover:text-accent-base">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { HeaderNav };
