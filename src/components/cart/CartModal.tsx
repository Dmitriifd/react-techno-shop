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

const CartModal = () => {
  return (
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
          <AlertDialogAction className="bg-[#EC2525] w-[130px] hover:bg-[#EC2525]/90">Удалить</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { CartModal };
