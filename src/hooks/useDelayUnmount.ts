import { useEffect, useState } from 'react';

const useDelayUnmount = (isMounted: boolean, delay: number) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delay);
    }

    return () => clearTimeout(timeoutId);
  }, [delay, isMounted, shouldRender]);
  return shouldRender;
};

export default useDelayUnmount;
