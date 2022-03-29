import { Box, Image, Link } from '@chakra-ui/react'
import { Typography } from 'components/Typography'
import { useQuery } from './../../common/hooks/useQuery'

export const Footer = () => {
  const { isMinWidthLg } = useQuery()

  return (
    <Box
      width="100%"
      padding="10px"
      gap="2rem"
      display="flex"
      alignItems="center"
      flexDir="column"
      backgroundColor="gray.100"
    >
      <Box
        px="2rem"
        display="flex"
        w="100%"
        alignItems={isMinWidthLg ? 'none' : 'center'}
        justifyContent="space-around"
        flexDir={isMinWidthLg ? 'row' : 'column'}
        gap={isMinWidthLg ? '0rem' : '0.5rem'}
      >
        <Box display="flex" gap="0.6rem" alignItems="center">
          <Link href="https://www.instagram.com/titoadk/">
            <Image
              width={isMinWidthLg ? '50px' : '30px'}
              src="img/instagram-logo.svg"
              alt="instagram logo"
            />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5582987347452">
            <Image
              width={isMinWidthLg ? '50px' : '30px'}
              src="img/whats-logo.svg"
              alt="whats logo"
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCm5sUaRfFNcurOyBSJ67rwQ">
            <Image
              width={isMinWidthLg ? '50px' : '30px'}
              src="img/youtube-logo.svg"
              alt="youtube logo"
            />
          </Link>
        </Box>
        <Box>
          <Image src="img/footer-logo.svg" alt="logo" />
        </Box>
      </Box>
      <Typography variant="body" color="black.500">
        2022 – Todos os direitos reservados
      </Typography>
    </Box>
  )
}
