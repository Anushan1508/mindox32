import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Video from '../../images/bg-image.png'
// import { Button } from '../ButtonElements'
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg  autoPlay loop   muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
      <Fade bottom>
        <HeroH1>
            Semiconductor Equipment Manufacturing Advanced Analyics in Water and Pannel level process and packing 
        </HeroH1>
        </Fade>
        <Fade bottom>
        <HeroP>
          Mindox Techno's state of art technologies enables the world to build future and improve lives 
        </HeroP>
        </Fade>
        <HeroBtnWrapper>
        <Fade bottom>
          <Button to='more' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
            More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          </Fade>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
