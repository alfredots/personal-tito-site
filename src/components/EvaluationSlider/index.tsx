import Slider from 'react-slick'
import { Box } from '@chakra-ui/react'
import { Typography } from 'components/Typography'
import { useQuery } from './../../common/hooks/useQuery'
import { data } from './data'

export const EvaluationSlider = () => {
  const { isMinWidthLg } = useQuery()
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
        {data.map((value, index) => {
          return (
            <Box key={value.name}>
              <Typography
                mx="2rem"
                variant={isMinWidthLg ? 'title' : 'body'}
                color="gray.100"
                textAlign="center"
              >
                {value.text}
              </Typography>
              <Typography
                mt="4rem"
                variant={isMinWidthLg ? 'title' : 'body'}
                color="gray.100"
                textAlign="center"
              >
                {value.name}
              </Typography>
              <Typography variant="body" color="gray.100" textAlign="center">
                {value.social}
              </Typography>
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}
