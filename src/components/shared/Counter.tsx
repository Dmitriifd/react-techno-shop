import MinusIcon from '@assets/icons/minus.svg?react';
import PlusIcon from '@assets/icons/plus.svg?react';
import { Input } from '@components/ui/input';

const Counter = () => {
  return (
    <div className="border rounded-md inline-flex gap-1">
      <button className="w-[30px] h-[30px] p-2 rounded-md hover:bg-gray-100">
        <MinusIcon fill="#C8CBD0" />
      </button>
      <Input className="border-none h-[30px] w-[40px] shadow-none" defaultValue="1" />
      <button className="w-[30px] h-[30px] p-2 rounded-md hover:bg-gray-100">
        <PlusIcon fill="#C8CBD0" />
      </button>
    </div>
  );
};

export { Counter };
