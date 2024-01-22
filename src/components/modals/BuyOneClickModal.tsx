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

const BuyOneClickModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="border border-accent-base rounded-md p-2 w-full text-sm  text-accent-base">
        Купить в 1 клик
      </DialogTrigger>
      <DialogContent className="w-[350px] pt-8">
        <DialogHeader className="mb-[35px]">
          <DialogTitle className="text-xl mb-5 text-center max-w-[250px] mx-auto">
            Для заказа в 1 клик укажите своё имя <br /> и телефон
          </DialogTitle>
          <DialogDescription className="space-y-5">
            <Label className="inline-block w-full">
              <span className="pb-2 inline-block">Имя</span>
              <Input placeholder="Иван" />
            </Label>
            <Label className="inline-block w-full">
              <span className="pb-2 inline-block">Телефон</span>
              <Input placeholder="+7(000) 000 00 00" />
            </Label>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="base" className="w-full">
            Отправить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { BuyOneClickModal };
