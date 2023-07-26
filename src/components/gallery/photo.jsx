import { BlurImage } from '@/components/elements'; 

const Photo = ({ mediaItem }) => {
  return (
    <div className="relative w-full h-full">
      <BlurImage
        src={mediaItem.baseUrl || null}
        alt="Album 1"
        width={mediaItem.mediaMetadata.width}
        height={mediaItem.mediaMetadata.height}
        quality={100}
        className="object-contain w-full h-full"
      />
    </div>
  )
}

export default Photo;
