import { Outlet } from 'react-router-dom';

import { Breadcrumbs } from './ui/breadcrumbs';
import { Footer } from './footer';
import { Header } from './header';
import { MobileNav } from './MobileNav';

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <Breadcrumbs />
      <main className="flex-auto">
        <div className="container mt-5">
          <Outlet />
        </div>
      </main>
      <MobileNav />
      <Footer />
    </div>
  );
};

export { AppLayout };
