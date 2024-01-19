import DeleteIcon from '@assets/icons/delete.svg?react';
import MinusIcon from '@assets/icons/minus.svg?react';
import PlusIcon from '@assets/icons/plus.svg?react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';

const CartPage = () => {
  return (
    <section>
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
                    <Input className="border-none h-[30px] w-[40px] shadow-none" value="1" />
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
                  <button className="p-[5px] text-[#EC2525] text-sm inline-flex items-center gap-1 pl-0">
                    <DeleteIcon />
                    Удалить
                  </button>
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
                    <Input className="border-none h-[30px] w-[40px] shadow-none" value="1" />
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
                  <button className="p-[5px] text-[#EC2525] text-sm inline-flex items-center gap-1 pl-0">
                    <DeleteIcon />
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Order */}
        <div className="ml-auto border p-6 flex flex-col space-y-2 rounded-[5px] max-w-[370px] w-full">
          <Button variant="base" className="mb-5">
            Оформить заказ
          </Button>
          <div className="flex gap-x-5">
            <span className="text-sm">4 товара</span>
            <span className="ml-auto">6890 ₽</span>
          </div>
          <div className="flex gap-x-5">
            <span className="text-sm">Доставка</span>
            <span className="ml-auto">0 ₽</span>
          </div>
          <div className="flex gap-x-5">
            <span className="text-sm">Итого</span>
            <span className="ml-auto">6890 ₽</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CartPage };
