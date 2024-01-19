import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@components/AppLayout';
import { ProfileLayout } from '@components/ProfileLayout';
import { Section } from '@components/ui/section';
import { CartPage } from '@pages/CartPage';
import { CatalogPage } from '@pages/CatalogPage';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { ProductPage } from '@pages/ProductPage';

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
          { index: true, element: <h1>ProfilePage</h1> },
          {
            path: 'address',
            element: <h1>Address</h1>,
          },
          {
            path: 'order',
            element: <h1>Order</h1>,
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
