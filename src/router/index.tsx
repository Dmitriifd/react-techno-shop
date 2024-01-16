import { createBrowserRouter, Link } from 'react-router-dom';

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
        element: <Link to="apple">Smartphones</Link>,
      },
      { path: '*', element: <h1>404 - Page Not Found</h1> },
    ],
  },
]);
