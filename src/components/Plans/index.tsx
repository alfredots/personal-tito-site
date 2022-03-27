import { Box } from '@chakra-ui/react'
import { CardPlans } from 'components/CardPlans'
import { Typography } from 'components/Typography'
import { data } from './data'

export const Plans = () => {
  return (
    <Box
      width="100%"
      padding="10px"
      gap="2rem"
      backgroundColor="black.50"
      display="flex"
      alignItems="center"
      flexDir="column"
    >
      <Typography variant="display" color="white">
        ESCOLHA O MELHOR PLANO PARA VOCÊOS
      </Typography>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {data.map(({ items, title }) => (
          <CardPlans key={title} title={title} items={items} />
        ))}
      </Box>
    </Box>
  )
}
