import { useState } from 'react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import ArrowIcon from '@assets/icons/arrowDown.svg?react';
import { Button } from '@components/ui/button';
import { Checkbox } from '@components/ui/checkbox';
import { Label } from '@components/ui/label';

const YearsFilter = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-3">
      <div className="flex items-center justify-between">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex w-full justify-between p-2 pl-0 text-base font-bold hover:bg-transparent">
            <span>Год релиза</span>
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
        <Label className="flex gap-3 items-center cursor-pointer">
          <Checkbox />
          <span className="grow">2024</span>
        </Label>
        <Label className="flex gap-3 items-center cursor-pointer">
          <Checkbox />
          <span className="grow">2023</span>
        </Label>
        <Label className="flex gap-3 items-center cursor-pointer">
          <Checkbox />
          <span className="grow">2022</span>
        </Label>
      </CollapsibleContent>
    </Collapsible>
  );
};

export { YearsFilter };
