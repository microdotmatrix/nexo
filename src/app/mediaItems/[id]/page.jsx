import { Suspense } from 'react';
import { getGoogleApiToken, getGoogleMediaItem } from "@/lib/google/api";

import { PhotoElement } from './components';

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
    <Suspense>
      <PhotoElement mediaItem={mediaItem} />
    </Suspense>
  )
}