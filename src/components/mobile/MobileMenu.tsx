import { useState } from 'react';
import { Link } from 'react-router-dom';

import BurgerIcon from '@assets/icons/burger.svg?react';
import { Button } from '@components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@components/ui/sheet';
import { bottomNavLink } from '@mock/data';

const MobileMenu = ({ isHeader = false, title }: { isHeader: boolean; title?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
      <SheetContent className="max-w-[320px] md:min-w-[400px] pt-12 pl-10">
        <ul className="space-y-5">
          {bottomNavLink.map(({ id, title, url, icon }) => (
            <li key={id} className="text-xl ">
              <Link onClick={() => setOpen(false)} to={url} className={`${icon && 'flex items-center gap-1'}}`}>
                {title}
                <span className="pl-2">{icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export { MobileMenu };
