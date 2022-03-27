import { Box, Image } from '@chakra-ui/react'
import { Typography } from 'components/Typography'
import { ReactNode } from 'react'

type CardBenefitsProps = {
  src: string
  alt: string
  title: string
  children: ReactNode
}

export const CardBenefits = ({
  src,
  alt,
  title,
  children
}: CardBenefitsProps) => {
  return (
    <Box width="380px" borderRadius="8px">
      <Image width="100%" height="200px" src={src} alt={alt} />
      <Box
        backgroundColor="white"
        p="1rem"
        display="flex"
        flexDirection="column"
        gap="1rem"
        borderRadius="0 0 8px 8px"
        height="225px"
      >
        <Typography variant="title" color="black.500">
          {title}
        </Typography>
        <Typography variant="body" color="black.500">
          {children}
        </Typography>
      </Box>
    </Box>
  )
}
