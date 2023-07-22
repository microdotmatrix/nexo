"use client"

import { useEffect } from 'react';
import { useCookieManager } from '@/utils/storage';
import { Icon } from '@iconify/react';

const TokenInit = ({ token }) => {
  const cookieManager = useCookieManager('bearerToken');
  useEffect(() => {
    cookieManager.set(token);
  }, [token]);
  return (
    <>
      {token ? <Icon icon="mdi:check" width="2rem" /> : <Icon icon="mdi:close" width="2rem" />}
    </>
  );
}

export default TokenInit;