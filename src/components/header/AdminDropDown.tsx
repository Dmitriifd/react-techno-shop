import { Link } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const AdminDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border p-2 px-2 rounded-md text-sm">Admin</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link to="/admin/products" className="cursor-pointer">
            Товары
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/admin/orders" className="cursor-pointer">
            Заказы
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/admin/users" className="cursor-pointer">
            Пользователи
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { AdminDropDown };
