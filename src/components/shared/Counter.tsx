import MinusIcon from '@assets/icons/minus.svg?react';
import PlusIcon from '@assets/icons/plus.svg?react';
import { Input } from '@components/ui/input';
import { useCartStore } from '@store/useCartStore';

const Counter = ({ id }: { id: string }) => {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const quantity = useCartStore((state) => state.cart.find((item) => item._id === id)?.quantity);

  return (
    <div className="border rounded-md inline-flex gap-1">
      <button className="w-[30px] h-[30px] p-2 rounded-md hover:bg-gray-100" onClick={() => decreaseQuantity(id)}>
        <MinusIcon fill="#C8CBD0" />
      </button>
      <Input className="border-none h-[30px] w-[40px] shadow-none" value={quantity} readOnly />
      <button className="w-[30px] h-[30px] p-2 rounded-md hover:bg-gray-100" onClick={() => increaseQuantity(id)}>
        <PlusIcon fill="#C8CBD0" />
      </button>
    </div>
  );
};

export { Counter };
