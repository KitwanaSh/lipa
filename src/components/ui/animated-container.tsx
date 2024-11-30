import React from 'react';
import { cn } from '../../lib/utils';

interface AnimatedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  delay = 0,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'animate-in fade-in duration-700 slide-in-from-bottom-4',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
