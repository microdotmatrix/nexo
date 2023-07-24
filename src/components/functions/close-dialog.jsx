"use client"

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';

const CloseDialog = () => {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      onClick={() => router.back()}
    >
      <span className="i-carbon-close text-2xl" />
    </Button>
  )
}

export default CloseDialog