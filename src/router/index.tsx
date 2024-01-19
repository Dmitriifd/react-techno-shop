import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@components/AppLayout';
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
        path: '/profile',
        element: <LoginPage />,
      },
      { path: '*', element: <h1>404 - Page Not Found</h1> },
    ],
  },
]);
