import { Suspense } from 'react';
import Image from 'next/image';

import { getGoogleApiToken, getGoogleMediaItem } from "@/lib/google/api";

import { Photo, Video } from '@/components/gallery';

export const getImage = async ({ mediaItemId }) => {
  const bearerToken = await getGoogleApiToken();
  
  const data = await getGoogleMediaItem(bearerToken, mediaItemId);
  
  if (!data) {
    throw new Error(500, 'Unable to get media items');
  }

  return data;
}

export default async function MediaItem({ params }) {
  const mediaItem = await getImage({ mediaItemId: params.id });
  
  return (
    <Suspense fallback={"Loading..."}>
      {mediaItem.mimeType === "video/mp4" ? (
        <Video mediaItem={mediaItem} />
      ) : (
        <Photo mediaItem={mediaItem} />
      )}
    </Suspense>
  )
}