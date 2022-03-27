import { Box } from '@chakra-ui/react'
import { ResultSlider } from 'components/ResultSlider'
import { Typography } from 'components/Typography'

export const ResultSection = () => {
  return (
    <Box
      width="100%"
      padding="10px"
      gap="2rem"
      display="flex"
      alignItems="center"
      flexDir="column"
      borderTop="4px solid #ca2b2b"
    >
      <Typography variant="display" color="white" textAlign="center">
        RESULTADO DE NOSSOS ALUNOS
      </Typography>
      <ResultSlider />
    </Box>
  )
}
