import { Box, Image, Link, useMediaQuery } from '@chakra-ui/react'
import { Typography } from 'components/Typography'

export const Footer = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

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
        alignItems={isDesktop ? 'none' : 'center'}
        justifyContent="space-around"
        flexDir={isDesktop ? 'row' : 'column'}
        gap={isDesktop ? '0rem' : '0.5rem'}
      >
        <Box display="flex" gap="0.6rem" alignItems="center">
          <Link href="https://www.instagram.com/titoadk/">
            <Image
              width={isDesktop ? '50px' : '30px'}
              src="img/instagram-logo.svg"
              alt="instagram logo"
            />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5582987347452">
            <Image
              width={isDesktop ? '50px' : '30px'}
              src="img/whats-logo.svg"
              alt="whats logo"
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCm5sUaRfFNcurOyBSJ67rwQ">
            <Image
              width={isDesktop ? '50px' : '30px'}
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
