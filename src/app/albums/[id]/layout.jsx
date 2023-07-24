import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { getGoogleApiToken, getGoogleAlbum } from "@/lib/google/api";

const getAlbum = async ({ albumId }) => {
  const bearerToken = await getGoogleApiToken();

  const album = await getGoogleAlbum(bearerToken, albumId);

  if (!album) {
    throw new Error(500, 'Unable to get media items');
  }

  return album;
}

export default async function AlbumLayout({ children, params }) {
  const album = await getAlbum({ albumId: params.id });

  if (!album) {
    return notFound();
  }

  return (
    <Suspense fallback={<div className="i-svg-spinners-pulse-rings-multiple text-4xl text-white" />}>
      <header className="relative w-full h-[540px] z-1">
        <Image
          src={album.coverPhotoBaseUrl}
          alt={album.title}
          width="2200"
          height="2400"
          className="object-cover w-1/2 h-full object-top absolute inset-x-1/8 top-8 z-0"
          quality={100}
        />
        <h1 className="absolute z-1 right-12 bottom-8">{album.title}</h1>
      </header>

      <div className="py-12">
        {children}
      </div>
    </Suspense>
  )
}