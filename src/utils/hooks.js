"use client"

import { useCallback, useState, useEffect, useLayoutEffect, useRef } from 'react'

// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const canUseDOM =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';

/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 */
export const useIsomorphicLayoutEffect = canUseDOM
  ? useLayoutEffect
  : useEffect;


// Memoized stateful toggle function
export function useToggle(initialState) {
  const [value, setState] = useState(initialState);

  return {
    value,
    toggle: useCallback(() => setState((state) => !state), []),
    setTrue: useCallback(() => setState(true), []),
    setFalse: useCallback(() => setState(false), []),
  };
}

// Subscribe to a given value and invoke a callback when the value changes
export function useOnValueChange(value, onChange) {
  const tracked = useRef(value);
  useEffect(() => {
    const oldValue = tracked.current;
    if (value !== tracked.current) {
      tracked.current = value;
      onChange(value, oldValue);
    }
  }, [value, onChange]);
}

export const useProxyState = (initialState) => {
  const [, setDummy] = useState(0);
  const proxyRef = useRef(
    new Proxy(initialState, {
      get() {
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        return Reflect.get(...arguments);
      },
      set() {
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        Reflect.set(...arguments);
        setDummy((v) => v + 1);
        return true;
      },
    })
  );
  return proxyRef.current;
};

export const useInfiniteScroll = (option) => {
  option ??= {};
  const {
    hasMore,
    isLoading,
    onLoadMore,
    intersectionObserverInit,
    isError = false,
  } = option;
  const observer = useRef(null);
  const ref = useCallback(
    (node) => {
      if (isLoading || isError || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && hasMore) {
          onLoadMore?.();
        }
      }, intersectionObserverInit);
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );
  return { ref, observer: observer.current };
};
