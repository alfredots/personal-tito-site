import { Box, Button, Image } from '@chakra-ui/react'
import { Typography } from 'components/Typography'

export const CardProf = () => {
  return (
    <Box
      w="100%"
      maxW="890px"
      minH="330px"
      backgroundColor="white"
      boxShadow="4px 4px 0px #E45A4D"
      display="flex"
    >
      <Image
        src="img/prof.png"
        alt="foto do instrutor"
        maxW="304px"
        height="330px"
      />
      <Box width="100%" p="1rem">
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
