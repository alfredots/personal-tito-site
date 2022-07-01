import { Box, Button, Image } from '@chakra-ui/react'
import { Typography } from 'components/Typography'
import { useWhats } from './../../common/hooks/useWhats'

export const Hero = () => {
  const { sendToWhats } = useWhats()

  return (
    <Box
      width="100%"
      maxH="862px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="0"
    >
      <Box
        width="570px"
        height="fit-content"
        display="flex"
        flexDirection="column"
        gap="2rem"
        paddingLeft="1rem"
      >
        <Typography variant="display" color="gray.100">
          HORA DE SUBIR O NÍVEL!
        </Typography>
        <Typography variant="title" color="gray.100">
          VOU TE LEVAR A SUA MELHOR VERSÃO FÍSICA E MENTAL
        </Typography>
        <Button onClick={() => sendToWhats()} colorScheme="red">
          COMECE AGORA!
        </Button>
      </Box>
      <Image width="60%" src="img/hero.png" alt="imagem do instrutor" />
    </Box>
  )
}
