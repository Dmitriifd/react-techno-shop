import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@components/AppLayout';
import { ProfileLayout } from '@components/ProfileLayout';
import { Section } from '@components/ui/section';
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
        path: '/checkout',
        element: <CheckoutPage />,
      },
      {
        path: '/admin/products',
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
