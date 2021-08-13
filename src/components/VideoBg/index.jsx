import React from 'react'
import Video from '../../Video/video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg
} from './HeroElements'

const VideoB = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg  autoPlay loop   muted src={Video} type='video/mp4' />
      </HeroBg>
    </HeroContainer>
  )
}

export default VideoB
