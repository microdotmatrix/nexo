"use client"

import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';

const CloseDialog = () => {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      onClick={() => router.back()}
    >
      <Icon icon="mdi:close" className="w-4 h-4" />
    </Button>
  )
}

export default CloseDialog