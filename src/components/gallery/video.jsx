"use client"

import ReactPlayer from 'react-player';

const Video = ({ mediaItem }) => {
  return (
    <div>
      <video controls width="500">
        <source src={mediaItem.baseUrl || null} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
