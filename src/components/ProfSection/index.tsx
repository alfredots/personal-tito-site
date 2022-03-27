import { Box } from '@chakra-ui/react'
import { Typography } from 'components/Typography'
import { CardProf } from './../CardProf/index'

export const ProfSection = () => {
  return (
    <Box
      width="100%"
      padding="10px"
      gap="2rem"
      display="flex"
      alignItems="center"
      flexDir="column"
      pb="2rem"
    >
      <Typography variant="display" color="white" textAlign="center">
        CONHEÇA NOSSO INSTRUTOR
      </Typography>
      <CardProf />
    </Box>
  )
}
