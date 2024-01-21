import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@components/AppLayout';
import { ProfileLayout } from '@components/ProfileLayout';
import { Section } from '@components/ui/section';
import { CartPage } from '@pages/CartPage';
import { CatalogPage } from '@pages/CatalogPage';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { ProductPage } from '@pages/ProductPage';
import { ProfilePage } from '@pages/profile/ProfilePage';
import { AddressPage } from '@pages/profile/AddressPage';
import { OrderPage } from '@pages/profile/OrderPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/smartphones',
        element: <CatalogPage />,
      },
      {
        path: '/product',
        element: <ProductPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/profile',
        element: <ProfileLayout />,
        children: [
          { index: true, element: <ProfilePage /> },
          {
            path: 'address',
            element: <AddressPage />,
          },
          {
            path: 'order',
            element: <OrderPage />,
          },
          {
            path: 'password',
            element: <h1>Password</h1>,
          },
        ],
      },
      {
        path: '*',
        element: (
          <Section>
            <h1>404 - Page Not Found</h1>
          </Section>
        ),
      },
    ],
  },
]);
