import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui';
import { getAlbums } from '@/lib/google/api';

export default function ClientPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold">Client Page</h1>
      <p className="text-2xl">Count: {count}</p>
      <Button variant="subtle" size="lg" onClick={() => setCount(count + 1)}>Increment</Button>
      
    </div>
  )
}