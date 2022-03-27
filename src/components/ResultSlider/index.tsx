import Slider from 'react-slick'
import { Box, Image } from '@chakra-ui/react'
import { Typography } from 'components/Typography'

export const ResultSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  return (
    <Box width="100%" px="2rem">
      <Slider {...settings}>
        <Box width="350px" height="350px">
          <Image
            borderRadius="8px"
            src="img/aluno.png"
            alt="foto de um aluno"
          />
        </Box>
        <Box>
          <Image
            borderRadius="8px"
            src="img/aluno.png"
            alt="foto de um aluno"
          />
        </Box>
        <Box>
          <Image
            borderRadius="8px"
            src="img/aluno.png"
            alt="foto de um aluno"
          />
        </Box>
        <Box>
          <Image
            borderRadius="8px"
            src="img/aluno.png"
            alt="foto de um aluno"
          />
        </Box>
        <Box>
          <Image
            borderRadius="8px"
            src="img/aluno.png"
            alt="foto de um aluno"
          />
        </Box>
        <Box>
          <Image
            borderRadius="8px"
            src="img/aluno.png"
            alt="foto de um aluno"
          />
        </Box>
        <Box>
          <Image
            borderRadius="8px"
            src="img/aluno.png"
            alt="foto de um aluno"
          />
        </Box>
      </Slider>
    </Box>
  )
}
