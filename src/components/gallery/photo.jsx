import Image from 'next/image';

const Photo = ({ mediaItem }) => {
  return (
    <div className="container mx-auto" style={{ maxWidth: '40vw' }}>
      <Image
        src={mediaItem.baseUrl || null}
        alt="Album 1"
        width={600}
        height={600}
        quality={100}
        className="object-contain w-full h-full"
      />
    </div>
  )
}

export default Photo;
