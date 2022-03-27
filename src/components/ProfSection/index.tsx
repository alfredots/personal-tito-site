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
    >
      <Typography variant="display" color="white">
        CONHEÇA NOSSO INSTRUTOR
      </Typography>
      <CardProf />
    </Box>
  )
}
