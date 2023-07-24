import { Suspense } from "react";
import Image from 'next/image';
import Link from 'next/link';

const Gallery = ({ albumId, mediaItems }) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-2">
        {mediaItems.map((mediaItem, i) => (
          <div key={i} className="relative overflow-hidden">
            <Suspense fallback={<div className="i-svg-spinners-pulse-rings-multiple text-4xl text-white" />}>
              <Link href={`/mediaItems/${mediaItem.id}`}>
                <Image
                  src={mediaItem.baseUrl}
                  alt={mediaItem.filename}
                  width="420"
                  height="420"
                  className="object-cover w-full h-full"
                  quality={100}
                />
              </Link>
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery