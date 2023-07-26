import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import Gallery from './components/gallery';

import { getGoogleApiToken, getGoogleMediaItemsAlbum } from "@/lib/google/api";

export const getMediaItems = async ({ albumId }) => {
  let mediaItems = [];
  let nextPageToken = '';

  const bearerToken = await getGoogleApiToken();

  do {
    const data = await getGoogleMediaItemsAlbum(bearerToken, albumId, nextPageToken);
    
    if (data.mediaItems) {
      mediaItems = [...mediaItems, ...data.mediaItems];
    }

    nextPageToken = data.nextPageToken;

  } while (nextPageToken);

  if (!mediaItems) {
    throw new Error(500, 'Unable to get media items');
  }

  return {
    mediaItems
  };
}

export default async function Album({ params }) {
  const { mediaItems } = await getMediaItems({ albumId: params.id });

  if (!mediaItems) {
    return notFound();
  }
  
  return (
    <Suspense fallback={
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-gray-200 animate-pulse">Loading...</h1>
      </div>
    }>
      <Gallery mediaItems={mediaItems} albumId={params.id} />
    </Suspense>
  )
}