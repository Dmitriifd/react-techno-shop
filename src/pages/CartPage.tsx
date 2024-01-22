import { Link } from 'react-router-dom';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import DeleteIcon from '@assets/icons/delete.svg?react';
import MinusIcon from '@assets/icons/minus.svg?react';
import PlusIcon from '@assets/icons/plus.svg?react';
import { EmptyCart } from '@components/EmptyCart';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Section } from '@components/ui/section';

const CartPage = () => {
  const isEmpty = false;

  if (isEmpty) {
    return <EmptyCart />;
  }

  return (
    <Section>
      <h2 className="mb-10 text-2xl font-bold">Корзина</h2>
      <div className="flex items-start">
        {/* Cards */}
        <div className="space-y-7">
          <div className="border-b pb-7">
            {/* Product */}
            <div className="flex gap-5">
              <div className="w-[100px] h-[100px]">
                <img src="/honor3.webp" alt="img" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-start gap-10">
                  <h3 className="max-w-[355px]">Смартфон Apple iPhone 13 128 ГБ черный</h3>
                  {/* Counter */}
                  <div className="border rounded-md inline-flex gap-1">
                    <button className="w-[30px] h-[30px] p-2 rounded-md hover:bg-gray-100">
                      <MinusIcon fill="#C8CBD0" />
                    </button>
                    <Input className="border-none h-[30px] w-[40px] shadow-none" defaultValue="1" />
                    <button className="w-[30px] h-[30px] p-2 rounded-md hover:bg-gray-100">
                      <PlusIcon fill="#C8CBD0" />
                    </button>
                  </div>
                  {/* Price */}
                  <div className="flex flex-col">
                    <span className="text-[#EC2525] text-xl font-bold">3651 ₽</span>
                    <span className="text-[#848992] line-through text-sm">4500 ₽</span>
                  </div>
                </div>
                {/* Buttons */}
                <div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="link"
                        className="p-[5px] text-[#EC2525] text-sm inline-flex items-center gap-1 pl-0 hover:no-underline">
                        <DeleteIcon />
                        Удалить
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-[460px]">
                      <AlertDialogHeader className="mb-5">
                        <AlertDialogDescription className="text-center">
                          <img className="inline-block" width={200} height={200} src="/delete-cart.png" alt="sad cat" />
                        </AlertDialogDescription>
                        <AlertDialogTitle className="max-w-[340px] mx-auto font-medium">
                          Вы уверены, что хотите удалить товар из корзины?
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="mx-auto">
                        <AlertDialogCancel className="border-[#FE9015] text-accent-base w-[130px] hover:bg-transparent hover:text-accent-base">
                          Отмена
                        </AlertDialogCancel>
                        <AlertDialogAction className="bg-[#EC2525] w-[130px] hover:bg-[#EC2525]/90">
                          Удалить
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b pb-7">
            {/* Product */}
            <div className="flex gap-5">
              <div className="w-[100px] h-[100px]">
                <img src="/iphone1.webp" alt="img" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-start gap-10">
                  <h3 className="max-w-[355px]">Смартфон Apple iPhone 13 128 ГБ черный</h3>
                  {/* Counter */}
                  <div className="border rounded-md inline-flex gap-1">
                    <button className="w-[30px] h-[30px] p-2 rounded-md hover:bg-gray-100">
                      <MinusIcon fill="#C8CBD0" />
                    </button>
                    <Input className="border-none h-[30px] w-[40px] shadow-none" defaultValue="1" />
                    <button className="w-[30px] h-[30px] p-2 rounded-md hover:bg-gray-100">
                      <PlusIcon fill="#C8CBD0" />
                    </button>
                  </div>
                  {/* Price */}
                  <div className="flex flex-col">
                    <span className="text-[#EC2525] text-xl font-bold">3651 ₽</span>
                    <span className="text-[#848992] line-through text-sm">4500 ₽</span>
                  </div>
                </div>
                {/* Buttons */}
                <div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="link"
                        className="p-[5px] text-[#EC2525] text-sm inline-flex items-center gap-1 pl-0 hover:no-underline">
                        <DeleteIcon />
                        Удалить
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-[460px]">
                      <AlertDialogHeader className="mb-5">
                        <AlertDialogDescription className="text-center">
                          <img className="inline-block" width={200} height={200} src="/delete-cart.png" alt="sad cat" />
                        </AlertDialogDescription>
                        <AlertDialogTitle className="max-w-[340px] mx-auto font-medium">
                          Вы уверены, что хотите удалить товар из корзины?
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="mx-auto">
                        <AlertDialogCancel className="border-[#FE9015] text-accent-base w-[130px] hover:bg-transparent hover:text-accent-base">
                          Отмена
                        </AlertDialogCancel>
                        <AlertDialogAction className="bg-[#EC2525] w-[130px] hover:bg-[#EC2525]/90">
                          Удалить
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Order */}
        <div className="ml-auto border p-6 flex flex-col space-y-5 rounded-[5px] max-w-[370px] w-full">
          <Link
            to="/checkout"
            className="bg-accent-base rounded-md p-2 text-center transition-colors text-white hover:bg-accent-base/90">
            Оформить заказ
          </Link>
          <div className="flex gap-x-5">
            <span className="text-sm">4 товара</span>
            <span className="ml-auto font-bold">6890 ₽</span>
          </div>
          <div className="flex gap-x-5 border-b pb-5">
            <span className="text-sm">Доставка</span>
            <span className="ml-auto font-bold">0 ₽</span>
          </div>
          <div className="flex gap-x-5">
            <span className="text-sm">Итого</span>
            <span className="ml-auto font-bold">6890 ₽</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { CartPage };
