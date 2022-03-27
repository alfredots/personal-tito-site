import Slider from 'react-slick'
import { Box, Image } from '@chakra-ui/react'
import { Typography } from 'components/Typography'

export const EvaluationSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Box width="100%" px="2rem">
      <Slider {...settings}>
        <Box>
          <Typography
            mx="2rem"
            variant="title"
            color="gray.100"
            textAlign="center"
          >
            Bom instrutor e atencioso na consultoria informando melhor de se
            exercitar e tirar proveito lorem ipsum, lorem ipsum lorem ipsum
            lorem ipsumlorem ipsumlorem ipsum
          </Typography>
          <Typography
            mt="4rem"
            variant="body"
            color="gray.100"
            textAlign="center"
          >
            Mateus Castro
          </Typography>
          <Typography variant="body" color="gray.100" textAlign="center">
            Avaliação WhatsApp
          </Typography>
        </Box>
        <Box>
          <Typography
            mx="2rem"
            variant="title"
            color="gray.100"
            textAlign="center"
          >
            Bom instrutor e atencioso na consultoria informando melhor de se
            exercitar e tirar proveito lorem ipsum, lorem ipsum lorem ipsum
            lorem ipsumlorem ipsumlorem ipsum
          </Typography>
          <Typography
            mt="4rem"
            variant="body"
            color="gray.100"
            textAlign="center"
          >
            Mateus Castro
          </Typography>
          <Typography variant="body" color="gray.100" textAlign="center">
            Avaliação WhatsApp
          </Typography>
        </Box>
      </Slider>
    </Box>
  )
}
