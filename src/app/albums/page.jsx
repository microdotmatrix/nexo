import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getGoogleApiToken, getGoogleAlbums } from '@/lib/google/api';

const getAlbums = async () => {
  let nextPageToken = '';
  let albums = [];

  const bearerToken = await getGoogleApiToken();
  do {
    const data = await getGoogleAlbums(bearerToken, nextPageToken);
    if (data.albums) {
      albums = [...albums, ...data.albums];
    }
    nextPageToken = data.nextPageToken;
  } while (nextPageToken);

  if (!albums) {
    throw new Error(500, 'Unable to get albums');
  }

  return albums
}

export default async function AlbumsPage() {
  const albums = await getAlbums();

  if (!albums) {
    return notFound();
  }

  return (
    <div className="container py-4">
      <section className="grid grid-cols-4 gap-6">
        <Suspense fallback={
          <>
            <div className="animate-pulse bg-gray-200 rounded-md h-[40vh] w-[40vw]">
              <h1>Loading...</h1>
            </div>
          </>
        }>
          {albums.slice(1, albums.length).map((album) => (
            <figure key={album.id} className="relative overflow-hidden">
              <Link href={`/albums/${album.id}`}>
                <Image
                  src={album.coverPhotoBaseUrl}
                  alt={album.title}
                  width="400"
                  height="400"
                  className="object-cover w-full h-full"
                  quality={80}
                />
                <figcaption className="absolute bottom-1 right-1">
                  <span className="text-lg hover:text-red-800">
                    {album.title}
                  </span>
                </figcaption>
                
                <div className="absolute p-2 text-sm leading-none text-white rounded-full top-2 left-2 font-heading bg-warning">
                  {album.mediaItemsCount}
                </div>
              </Link>
            </figure>
          ))}
        </Suspense>
      </section>
    </div>
  )
}