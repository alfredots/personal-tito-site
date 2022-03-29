import Slider from 'react-slick'
import { Box, Image } from '@chakra-ui/react'
import { useQuery } from 'common/hooks/useQuery'

export const ResultSlider = () => {
  const { isMinWidthLg } = useQuery()
  const measure = isMinWidthLg ? '350px' : '250px'

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMinWidthLg ? 3 : 1,
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
