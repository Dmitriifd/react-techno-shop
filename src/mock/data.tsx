import DiscountIcon from '@assets/icons/discount.svg?react';
import { v4 as uuidv4 } from 'uuid';

export const topNavLink = [
  {
    id: uuidv4(),
    title: 'О нас',
    ulr: '/about',
  },
  {
    id: uuidv4(),
    title: 'Доставка и оплата',
    ulr: '/delivery',
  },
  {
    id: uuidv4(),
    title: 'Вопросы и ответы',
    ulr: '/questions',
  },
  {
    id: uuidv4(),
    title: 'Отзывы',
    ulr: '/reviews',
  },
  {
    id: uuidv4(),
    title: 'Статьи',
    ulr: '/articles',
  },
  {
    id: uuidv4(),
    title: 'Контакты',
    ulr: '/contacts',
  },
];

export const bottomNavLink = [
  {
    id: uuidv4(),
    title: 'Смартфоны',
    ulr: '/smartphones',
  },
  {
    id: uuidv4(),
    title: 'Ноутбуки',
    ulr: '/notebooks',
  },
  {
    id: uuidv4(),
    title: 'Планшеты',
    ulr: '/tablets',
  },
  {
    id: uuidv4(),
    title: 'Мониторы',
    ulr: '/monitors',
  },
  {
    id: uuidv4(),
    title: 'Телевизоры',
    ulr: '/television',
  },
  {
    id: uuidv4(),
    title: 'Акции',
    ulr: '/discount',
    icon: <DiscountIcon />,
  },
];
