"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = ({ mediaItems }) => {
  const [inViewAmount, setInViewAmount] = useState(12);
  return (
    <>
      <div className="gallery-grid">
        {mediaItems.slice(0, inViewAmount).map((mediaItem, i) => (
          <div key={mediaItem.id} className="gallery-item">
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
          </div>
        ))}
      </div>
      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
          grid-auto-rows: 1fr;
        }
        .gallery-item {
          grid-column: span 1;
          grid-row: span 1;
        }
        .gallery-item:nth-child(1) {
          grid-column: span 2;
          grid-row: span 2;
        }
      `}</style>
    </>    
  );
}

export default Gallery