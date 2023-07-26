"use client"

import { useEffect } from 'react';
import { useCookieManager } from '@/utils/storage';

const TokenInit = ({ bearerToken, tokenUpdate }) => {
  const cookieManager = useCookieManager('bearerToken');
  useEffect(() => {
    if (tokenUpdate) {
      cookieManager.set(bearerToken);
    }
  }, [bearerToken]);
  return (
    <>
      {bearerToken ? <span className="i-mdi-check xl" /> : <span className="i-mdi-close xl" />}
    </>
  );
}

export default TokenInit;