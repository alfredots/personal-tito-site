import { Box, Container } from '@chakra-ui/react'
import { Benefits } from 'components/Benefits'
import { EvaluationSection } from 'components/EvaluationSection'
import { Footer } from 'components/Footer'
import { Hero } from 'components/Hero'
import { Plans } from 'components/Plans'
import { ProfSection } from 'components/ProfSection'
import { ResultSection } from 'components/ResultSection'

export const Main = () => (
  <Box bgColor="black.500" width="100%" p="0rem">
    <Container maxWidth="1366px">
      <Hero />
      <Benefits />
      <Plans />
      <ProfSection />
      <ResultSection />
      <EvaluationSection />
      <Footer />
    </Container>
  </Box>
)
