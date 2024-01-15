import { useState } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

export const EVENT_KEYS = {
  hover: {
    off: 'mouseout',
    on: 'mouseover',
  },
  click: {
    off: 'mouseup',
    on: 'mousedown',
  },
  focus: {
    off: 'focusout',
    on: 'focusin',
  },
};

interface useTooltipProps {
  eventType: 'hover' | 'click' | 'focus';
}

const useTooltip = ({ eventType }: useTooltipProps) => {
  const [state, setState] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleEventOn = useCallback(() => setState(true), []);
  const handleEventOff = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener(EVENT_KEYS[eventType].off, handleEventOff);
    element.addEventListener(EVENT_KEYS[eventType].on, handleEventOn);

    return () => {
      element.removeEventListener(EVENT_KEYS[eventType].off, handleEventOff);
      element.removeEventListener(EVENT_KEYS[eventType].on, handleEventOn);
    };
  }, [eventType, handleEventOff, handleEventOn]);

  return [ref, state] as const;
};
export default useTooltip;
