import { Box, Button, Image, useMediaQuery } from '@chakra-ui/react'
import { useWhats } from 'common/hooks/useWhats'
import { Typography } from 'components/Typography'

type CardPlansProps = {
  title: string
  items: { text: string; subtext: string }[]
}

type ItemProps = { text: string; subtext: string }

const Item = ({ text, subtext }: ItemProps) => {
  return (
    <Box display="flex" gap="0.4rem">
      <Image src="img/accept.svg" />
      <Box>
        <Typography variant="body" color="black.500">
          {text}
        </Typography>
        <Typography variant="caption" color="black.50">
          {subtext}
        </Typography>
      </Box>
    </Box>
  )
}

export const CardPlans = ({ title, items }: CardPlansProps) => {
  const { sendToWhats } = useWhats()
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Box
      maxW="380px"
      minH="636.94px"
      borderRadius="8px"
      borderColor="red.500"
      borderWidth="2px"
      padding="16px"
      backgroundColor="white"
      display="flex"
      flexDir="column"
      alignItems="center"
      position="relative"
      mt={isDesktop ? '0' : '1rem'}
    >
      <Typography
        uppercase
        variant="display"
        color={
          title.localeCompare('trimestral') === 0 ? 'red.900' : 'black.500'
        }
      >
        {title}
      </Typography>
      <Box pt="2rem" pb="3rem" display="flex" flexDir="column" gap="1rem">
        {items.map(({ text, subtext }) => (
          <Item key={text + title} text={text} subtext={subtext} />
        ))}
      </Box>
      <Button
        onClick={() => sendToWhats()}
        position="absolute"
        bottom="10px"
        width="97%"
        colorScheme="red"
      >
        COMECE AGORA!
      </Button>
    </Box>
  )
}
