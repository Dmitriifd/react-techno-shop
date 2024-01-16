import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@components/AppLayout';
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
        element: <h1>Smartphones</h1>,
      },
      { path: '*', element: <h1>404 - Page Not Found</h1> },
    ],
  },
]);
