import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return <section className={`${className ?? ''} container pt-12 pb-20`}>{children}</section>;
};

export { Section };
