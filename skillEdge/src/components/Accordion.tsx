import React, { ReactNode } from 'react';

interface AccordionProps {
  type: 'single' | 'multiple';
  collapsible?: boolean;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ type, collapsible, children }) => {
  return (
    <div className={`accordion ${type} ${collapsible ? 'collapsible' : ''}`}>
      {children}
    </div>
  );
};

export default Accordion;