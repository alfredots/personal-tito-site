import { Box, useMediaQuery } from '@chakra-ui/react'
import { CardPlans } from 'components/CardPlans'
import { Typography } from 'components/Typography'
import { data } from './data'

export const Plans = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

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
      <Typography variant="display" color="white" textAlign="center">
        ESCOLHA O MELHOR PLANO PARA VOCÊ
      </Typography>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent={isDesktop ? 'space-between' : 'center'}
        gap="0.6rem"
        flexWrap="wrap"
      >
        {data.map(({ items, title }) => (
          <CardPlans key={title} title={title} items={items} />
        ))}
      </Box>
    </Box>
  )
}
