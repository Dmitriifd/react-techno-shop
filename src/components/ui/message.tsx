import React from 'react';

import { cn } from '@lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('rounded-md border', {
  variants: {
    variant: {
      default: 'bg-transparent text-black',
      danger: 'bg-red-100 border-red-300 text-red-600',
      success: 'bg-green-100 border-green-300 text-green-600',
    },
    size: {
      default: 'p-5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonVariants> {}

const Message = ({ className, variant, size, children, ...props }: MessageProps) => {
  return (
    <div className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </div>
  );
};

export { Message };
