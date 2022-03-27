import { Box } from '@chakra-ui/react'
import { EvaluationSlider } from 'components/EvaluationSlider'
import { Typography } from 'components/Typography'

export const EvaluationSection = () => {
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
        AVALIAÇÃO DOS NOSSOS ALUNOS
      </Typography>
      <EvaluationSlider />
    </Box>
  )
}
