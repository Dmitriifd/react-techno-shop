import { Link, useLocation } from 'react-router-dom';

import ArrowIcon from '@assets/icons/breadArrow.svg?react';
import { bottomNavLink } from '@mock/data';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((pathname) => pathname);

  const navLinkTitle = bottomNavLink.reduce(
    (acc, { title, url }) => {
      acc[url.slice(1)] = title;
      return acc;
    },
    {} as Record<string, string>,
  );

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="container mt-7">
      <ul className=" flex gap-1 items-center text-xs text-gray-900">
        <li>
          <Link to="/">Главная</Link>
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const title = navLinkTitle[pathname] || pathname;

          return (
            <li key={pathname} className="flex items-center">
              <ArrowIcon />
              {isLast ? <span className="text-gray-400">{title}</span> : <Link to={routeTo}>{title}</Link>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Breadcrumbs };
