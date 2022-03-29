import { Box, Button, Image } from '@chakra-ui/react'
import { Typography } from 'components/Typography'

export const HeroMobile = () => {
  return (
    <Box width="100%" display="flex" alignItems="center" flexDir="column" p="0">
      <Typography
        variant="display"
        color="gray.100"
        textAlign="center"
        pt="1rem"
      >
        HORA DE SUBIR O NÍVEL!
      </Typography>
      <Box
        width="100%"
        backgroundImage="url('img/hero-mobile.png')"
        backgroundSize="cover"
        height="475px"
        display="flex"
        flexDirection="column"
        gap="2rem"
        p="0rem 0.5rem 1rem 0.5rem"
        justifyContent="flex-end"
      >
        <Typography variant="title" color="gray.100" textAlign="center">
          VOU TE LEVAR A SUA MELHOR VERSÃO FÍSICA E MENTAL
        </Typography>
        <Button colorScheme="red">COMECE AGORA!</Button>
      </Box>
    </Box>
  )
}
