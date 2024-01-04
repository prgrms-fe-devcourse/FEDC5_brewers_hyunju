import { useState, useRef, useEffect, MouseEventHandler } from 'react';

const useDetectClose = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const ref = useRef<HTMLButtonElement>(null);

  const removeHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current !== null && !ref.current.contains(e.target as Node)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen]);

  return [isOpen, ref, removeHandler] as const;
};

export default useDetectClose;
