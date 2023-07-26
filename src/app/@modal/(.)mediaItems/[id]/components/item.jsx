import { Photo, Video } from '@/components/gallery';

const PhotoElement = ({ mediaItem }) => {
  return (
    <>
      {mediaItem.mimeType === "video/mp4" ? (
        <Video mediaItem={mediaItem} />
      ) : (
        <Photo mediaItem={mediaItem} />
      )}
    </>
  )
}

export default PhotoElement;