import { useEffect } from 'react';
import useTimeout from './useTimeout';

const useDebounce = (
  fn: () => void,
  ms: number,
  deps: React.DependencyList
) => {
  const [run, clear] = useTimeout(fn, ms);

  // eslint-disable-next-line
  useEffect(run, deps);

  return clear;
};

export default useDebounce;
