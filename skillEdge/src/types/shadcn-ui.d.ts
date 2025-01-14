declare module '@shadcn/ui' {
  import { HTMLAttributes } from 'react';

  export const Container: React.FC<HTMLAttributes<HTMLDivElement>>;
  export const Typography: React.FC<HTMLAttributes<HTMLHeadingElement> & { as?: string }>;
  export const Button: React.FC<HTMLAttributes<HTMLButtonElement> & { variant?: string }>;
  export const Input: React.FC<HTMLAttributes<HTMLInputElement> & { placeholder?: string }>;
  export const Card: React.FC<HTMLAttributes<HTMLDivElement>>;
  export const CardHeader: React.FC<HTMLAttributes<HTMLDivElement>>;
  export const CardBody: React.FC<HTMLAttributes<HTMLDivElement>>;
  export const CardFooter: React.FC<HTMLAttributes<HTMLDivElement>>;
  export const Accordion: React.FC<{ type: 'single' | 'multiple'; collapsible?: boolean }>;
  export const AccordionItem: React.FC<HTMLAttributes<HTMLDivElement>>;
  export const AccordionTrigger: React.FC<HTMLAttributes<HTMLButtonElement>>;
  export const AccordionContent: React.FC<HTMLAttributes<HTMLDivElement>>;
}
