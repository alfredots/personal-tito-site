import { Box, Image } from '@chakra-ui/react'
import { Typography } from 'components/Typography'
import { useQuery } from './../../common/hooks/useQuery'

export const CardProf = () => {
  const { isMinWidthLg } = useQuery()
  return (
    <Box
      w="100%"
      maxW={isMinWidthLg ? '890px' : '304px'}
      minH="330px"
      backgroundColor="white"
      boxShadow="4px 4px 0px #E45A4D"
      display="flex"
      flexDirection={isMinWidthLg ? 'row' : 'column'}
    >
      <Image
        src={isMinWidthLg ? 'img/prof.png' : 'img/prof-mobile.png'}
        alt="foto do instrutor"
        maxW="304px"
        height="330px"
      />
      <Box width={isMinWidthLg ? '100%' : '304px'} p="1rem">
        <Typography
          width="100%"
          variant="display"
          color="black.500"
          borderBottom="2px solid #262626"
        >
          Andhrik Tito
        </Typography>
        <Typography mt="1rem" variant="body" color="black.500">
          Amante da atividade física desde cedo, Andhrik decidiu seguir carreira
          na área.
        </Typography>
        <Typography mt="1rem" variant="body" color="black.500">
          Formou-se em Educação Física pela Universidade X, desde então, vem
          prestando serviço como consultor físico.
        </Typography>
      </Box>
    </Box>
  )
}
