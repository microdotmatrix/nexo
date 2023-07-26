"use client"

import { Suspense } from 'react';
import { Icon } from '@/components/ui';
import { useIsMounted } from 'usehooks-ts';

const Video = ({ mediaItem }) => {
  const isMounted = useIsMounted();

  return isMounted && (
    <video controls autoPlay muted className="object-contain object-center w-fit" style={{ maxHeight: '75vh' }}>
      <source src={`${mediaItem.baseUrl}=dv` || null} type="video/mp4" />
      <Icon icon="mdi:video-image" className="text-2xl" />
    </video>
  )
}

export default Video
