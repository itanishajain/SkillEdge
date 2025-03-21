import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface CountUpAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const CountUpAnimation: React.FC<CountUpAnimationProps> = ({
  end,
  duration = 2,
  suffix = '',
  prefix = ''
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          separator=","
          suffix={suffix}
          prefix={prefix}
        />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </div>
  );
};