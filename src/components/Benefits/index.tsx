import { Box } from '@chakra-ui/react'
import { CardBenefits } from 'components/CardBenefits'
import { data } from './data'

export const Benefits = () => {
  return (
    <Box
      width="100%"
      maxH="862px"
      padding="10px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="2rem"
      borderTop="4px solid #ca2b2b"
      flexWrap="wrap"
    >
      {data.map(({ title, src, alt, children }) => (
        <CardBenefits key={title} title={title} src={src} alt={alt}>
          {children}
        </CardBenefits>
      ))}
    </Box>
  )
}
