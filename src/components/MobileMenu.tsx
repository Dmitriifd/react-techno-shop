import BurgerIcon from '@assets/icons/burger.svg?react';
import { Button } from '@components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@components/ui/sheet';
import { bottomNavLink } from '@mock/data';

const MobileMenu = ({ isHeader = false, title }: { isHeader: boolean; title?: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {isHeader ? (
          <Button variant="outline" className="flex py-3 lg:hidden h-[50px]">
            <BurgerIcon fill="#FE9015" />
          </Button>
        ) : (
          <Button variant="search" className="flex flex-col gap-1 lg:hidden w-[60px] h-[60px]">
            <BurgerIcon fill="#B5BBC4" />
            <span className="text-[#B5BBC4] text-xs">{title}</span>
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] pt-10 pl-10">
        <ul className="space-y-5">
          {bottomNavLink.map(({ id, title, ulr, icon }) => (
            <li key={id} className="text-xl ">
              <a href={ulr} className={`${icon && 'flex items-center gap-1'}}`}>
                {title}
                <span className="pl-2">{icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export { MobileMenu };
