import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';

const CallBackModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-sm text-accent-base">Заказать звонок</DialogTrigger>
      <DialogContent className="max-w-[350px]">
        <DialogHeader className="mb-[35px]">
          <DialogTitle className="mt-5 mb-5 text-center max-w-[230px] mx-auto leading-6">
            Перезвоним <br /> через 27 секунд
          </DialogTitle>
          <DialogDescription>
            <Label>
              <span className="pb-2 inline-block">Телефон</span>
              <Input placeholder="+7(000) 000 00 00" />
            </Label>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="base" className="w-full">
            Заказать звонок
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { CallBackModal };
