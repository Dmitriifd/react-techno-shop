import BasketIcon from '@assets/icons/basket.svg?react';
import BurgerIcon from '@assets/icons/burger.svg?react';
import DiscountIcon from '@assets/icons/discount.svg?react';
import HomeIcon from '@assets/icons/home.svg?react';
import SearchIcon from '@assets/icons/search.svg?react';
import UserIcon from '@assets/icons/user.svg?react';
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

export const mobileNavLink = [
  {
    id: uuidv4(),
    title: 'Главная',
    ulr: '/',
    icon: <HomeIcon />,
  },
  {
    id: uuidv4(),
    title: 'Поиск',
    ulr: '#',
    icon: <SearchIcon fill="#B5BBC4" />,
  },
  {
    id: uuidv4(),
    title: 'Корзина',
    ulr: '/basket',
    icon: <BasketIcon fill="#B5BBC4" />,
  },
  {
    id: uuidv4(),
    title: 'Профиль',
    ulr: '/profile',
    icon: <UserIcon fill="#B5BBC4" />,
  },
  {
    id: uuidv4(),
    title: 'Меню',
    ulr: '/profile',
    icon: <BurgerIcon />,
    isMenu: true,
  },
];

export const cities = [
  {
    id: uuidv4(),
    title: 'Москва',
  },
  {
    id: uuidv4(),
    title: 'Санкт-Петербург',
  },
  {
    id: uuidv4(),
    title: 'Новосибирск',
  },
  {
    id: uuidv4(),
    title: 'Екатеринбург',
  },
  {
    id: uuidv4(),
    title: 'Нижний Новгород',
  },
  {
    id: uuidv4(),
    title: 'Казань',
  },
  {
    id: uuidv4(),
    title: 'Челябинск',
  },
  {
    id: uuidv4(),
    title: 'Омск',
  },
  {
    id: uuidv4(),
    title: 'Самара',
  },
  {
    id: uuidv4(),
    title: 'Ростов-на-Дону',
  },
];

export const products = [
  {
    id: 1,
    title: 'Смартфон Apple iPhone 13 128 ГБ черный',
    price: 74699,
    img: 'iphone1.webp',
  },
  {
    id: 2,
    title: 'Смартфон Xiaomi Redmi 12 256 ГБ черный',
    price: 14999,
    img: 'xiaomi2.webp',
  },
  {
    id: 3,
    title: 'Смартфон HONOR 90 512 ГБ зеленый',
    price: 47999,
    img: 'honor3.webp',
  },
  {
    id: 4,
    title: 'Смартфон Samsung Galaxy S21 FE 256 ГБ черный',
    price: 48499,
    img: 'samsung4.webp',
  },
  {
    id: 5,
    title: 'Смартфон Apple iPhone 13 128 ГБ белый',
    price: 74699,
    img: 'iphone5.webp',
  },
  {
    id: 6,
    title: 'Смартфон Tecno POVA 5 256 ГБ черный',
    price: 15499,
    img: 'techno6.webp',
  },
  {
    id: 7,
    title: 'Смартфон POCO X5 Pro 5G 256 ГБ черный',
    price: 31999,
    img: 'poco7.webp',
  },
  {
    id: 8,
    title: 'Смартфон HUAWEI P60 Pro 256 ГБ белый',
    price: 74999,
    img: 'huawei8.webp',
  },
];
