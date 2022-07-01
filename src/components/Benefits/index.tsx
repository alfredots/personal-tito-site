import { Box } from '@chakra-ui/react'
import { CardBenefits } from 'components/CardBenefits'
import { data } from './data'
import { useQuery } from './../../common/hooks/useQuery'

export const Benefits = () => {
  const { isMinWidthLg } = useQuery()

  return (
    <Box
      width="100%"
      padding="10px"
      display="flex"
      alignItems="center"
      justifyContent={isMinWidthLg ? 'space-around' : 'center'}
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
