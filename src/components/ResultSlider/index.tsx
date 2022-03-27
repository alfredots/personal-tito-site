import Slider from 'react-slick'
import { Box, Image, useMediaQuery } from '@chakra-ui/react'

export const ResultSlider = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')
  const measure = isDesktop ? '350px' : '250px'

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 3 : 1,
    slidesToScroll: 1
  }

  return (
    <Box width="100%" px="2rem">
      <Slider {...settings}>
        <Box width={measure} height={measure}>
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
