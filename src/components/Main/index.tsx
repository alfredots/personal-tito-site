import { Box, Container, useMediaQuery } from '@chakra-ui/react'
import { Benefits } from 'components/Benefits'
import { EvaluationSection } from 'components/EvaluationSection'
import { Footer } from 'components/Footer'
import { Hero } from 'components/Hero'
import { HeroMobile } from 'components/HeroMobile'
import { Plans } from 'components/Plans'
import { ProfSection } from 'components/ProfSection'
import { ResultSection } from 'components/ResultSection'
import { useBreakpointValue } from '@chakra-ui/react'

export const Main = () => {
  const isMinWidthLg = useBreakpointValue({ lg: true })

  return (
    <Box bgColor="black.500" width="100%" p="0rem">
      <Container maxWidth="1366px" px="0">
        {isMinWidthLg ? <Hero /> : <HeroMobile />}
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
