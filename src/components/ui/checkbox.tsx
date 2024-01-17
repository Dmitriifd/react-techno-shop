import * as React from 'react';

import CheckIcon from '@assets/icons/check.svg?react';
import { cn } from '@lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-[#C8CBD0] shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent-base data-[state=checked]:border-0 data-[state=checked]:shadow-none data-[state=checked]:text-accent-base',
      className,
    )}
    {...props}>
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
      <CheckIcon className="h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
