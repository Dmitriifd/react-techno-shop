import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@components/AppLayout';
import { CatalogPage } from '@pages/CatalogPage';
import { HomePage } from '@pages/HomePage';

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
      { path: '*', element: <h1>404 - Page Not Found</h1> },
    ],
  },
]);
