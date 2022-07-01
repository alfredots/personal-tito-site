import Slider from 'react-slick'
import { Box, Image } from '@chakra-ui/react'
import { useQuery } from 'common/hooks/useQuery'

const students = [
  'img/students/01.png',
  'img/students/02.png',
  'img/students/03.png',
  'img/students/04.png'
]

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
        {students.map((value, index) => {
          return (
            <Box key={'students' + index}>
              <Image
                borderRadius="8px"
                src={value}
                width={measure}
                height={measure}
                alt="foto de um aluno"
                margin="0 auto"
              />
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}
