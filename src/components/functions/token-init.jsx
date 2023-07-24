"use client"

import { useEffect } from 'react';
import { useCookieManager } from '@/utils/storage';

const TokenInit = ({ token }) => {
  const cookieManager = useCookieManager('bearerToken');
  useEffect(() => {
    cookieManager.set(token);
  }, [token]);
  return (
    <>
      {token ? <span className="i-mdi-check xl" /> : <span className="i-mdi-close xl" />}
    </>
  );
}

export default TokenInit;