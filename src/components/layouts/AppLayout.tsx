import { Outlet } from 'react-router-dom';

import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { MobileNav } from '@components/mobile/MobileNav';
import { Breadcrumbs } from '@components/ui/breadcrumbs';

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <Breadcrumbs />
      <main className="flex-auto">
        <Outlet />
      </main>
      <Toaster />
      <MobileNav />
      <Footer />
    </div>
  );
};

export { AppLayout };
