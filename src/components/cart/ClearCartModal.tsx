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
import { Button } from '@components/ui/button';
import { useCartStore } from '@store/useCartStore';

const ClearCartModal = () => {
  const cleanCart = useCartStore((state) => state.cleanCart);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="border-none text-gray-500 flex gap-2 mb-5 pl-0 shadow-none hover:bg-transparent">
          <span>Очистить корзину</span>
          <DeleteIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[460px]">
        <AlertDialogHeader className="mb-5">
          <AlertDialogDescription className="text-center">
            <img className="inline-block" width={200} height={200} src="/delete-cart.png" alt="sad cat" />
          </AlertDialogDescription>
          <AlertDialogTitle className="max-w-[340px] mx-auto font-medium">
            Вы уверены, что хотите удалить все товары из корзины?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="mx-auto">
          <AlertDialogCancel className="border-[#FE9015] text-accent-base w-[130px] hover:bg-transparent hover:text-accent-base">
            Отмена
          </AlertDialogCancel>
          <AlertDialogAction className="bg-[#EC2525] w-[130px] hover:bg-[#EC2525]/90" onClick={() => cleanCart()}>
            Удалить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { ClearCartModal };
