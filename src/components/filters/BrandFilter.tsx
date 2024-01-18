import { useState } from 'react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import ArrowIcon from '@assets/icons/arrowDown.svg?react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { ShowMore } from '@components/ui/show-more';

const BrandFilter = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-3">
      <div className="flex items-center justify-between">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex w-full justify-between p-2 pl-0 text-base font-bold hover:bg-transparent">
            <span>Производитель</span>
            <ArrowIcon
              width={24}
              height={24}
              className={isOpen ? 'transition-transform rotate-180' : 'transition-transform'}
            />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2 pt-3">
        <Input placeholder="Поиск" className="mb-5" />
        <ShowMore />
      </CollapsibleContent>
    </Collapsible>
  );
};

export { BrandFilter };
