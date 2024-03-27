import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@components/layouts/AppLayout';
import { Section } from '@components/ui/section';
import { OrderDetailPage } from '@pages/admin/OrderDetailPage';
import { OrdersListPage } from '@pages/admin/OrdersListPage';
import { ProductAddPage } from '@pages/admin/ProductAddPage';
import { ProductEditPage } from '@pages/admin/ProductEditPage';
import { ProductListPage } from '@pages/admin/ProductListPage';
import { UsersListPage } from '@pages/admin/UsersListPage';
import { CartPage } from '@pages/CartPage';
import { CatalogPage } from '@pages/CatalogPage';
import { CheckoutPage } from '@pages/CheckoutPage';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { ProductPage } from '@pages/ProductPage';
import { AddressPage } from '@pages/profile/AddressPage';
import { OrderDetailsPage } from '@pages/profile/OrderDetailsPage';
import { OrderPage } from '@pages/profile/OrderPage';
import { PasswordPage } from '@pages/profile/PasswordPage';
import { ProfilePage } from '@pages/profile/ProfilePage';

import { AdminRoute } from './AdminRoute';
import { PrivateRoute } from './PrivateRoute';

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
        path: '/:category',
        element: <CatalogPage />,
      },
      {
        path: '/product/:id',
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
        path: '/checkout',
        element: <CheckoutPage />,
      },

      {
        path: '',
        element: <AdminRoute />,
        children: [
          {
            path: '/admin/products',
            element: <ProductListPage />,
          },
          {
            path: '/admin/products/:id',
            element: <ProductListPage />,
          },
          {
            path: '/admin/product/:id/edit',
            element: <ProductEditPage />,
          },
          {
            path: '/admin/product/add',
            element: <ProductAddPage />,
          },
          {
            path: '/admin/users',
            element: <UsersListPage />,
          },
          {
            path: '/admin/orders',
            element: <OrdersListPage />,
          },
          {
            path: '/admin/orders/:id',
            element: <OrderDetailPage />,
          },
        ],
      },
      {
        path: '/profile',
        element: <PrivateRoute />,
        children: [
          { index: true, element: <ProfilePage /> },
          {
            path: 'address',
            element: <AddressPage />,
          },
          {
            path: 'order',

            children: [
              { index: true, element: <OrderPage /> },
              {
                path: ':id',
                element: <OrderDetailsPage />,
              },
            ],
          },
          {
            path: 'password',
            element: <PasswordPage />,
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
