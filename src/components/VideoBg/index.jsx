import React from 'react'
import Video from '../../Video/video.mp4'
import {
  VideoBg,
  VideoSec,
} from './HeroElements'

const VideoB = () => {
  return (
    <VideoSec>
    <VideoBg  autoPlay loop   muted src={Video} type='video/mp4' />
    </VideoSec>
  )
}

export default VideoB
