import { Box, Container, useMediaQuery } from '@chakra-ui/react'
import { Benefits } from 'components/Benefits'
import { EvaluationSection } from 'components/EvaluationSection'
import { Footer } from 'components/Footer'
import { Hero } from 'components/Hero'
import { HeroMobile } from 'components/HeroMobile'
import { Plans } from 'components/Plans'
import { ProfSection } from 'components/ProfSection'
import { ResultSection } from 'components/ResultSection'

export const Main = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Box bgColor="black.500" width="100%" p="0rem">
      <Container maxWidth="1366px" px="0">
        {isDesktop ? <Hero /> : <HeroMobile />}
        <Benefits />
        <Plans />
        <ProfSection />
        <ResultSection />
        <EvaluationSection />
        <Footer />
      </Container>
    </Box>
  )
}
