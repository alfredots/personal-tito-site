import { useBreakpointValue } from '@chakra-ui/react'

export const useQuery = () => {
  const isMinWidthXs = useBreakpointValue({ xs: true })
  const isMinWidthSm = useBreakpointValue({ sm: true })
  const isMinWidthMd = useBreakpointValue({ md: true })
  const isMinWidthLg = useBreakpointValue({ lg: true })
  const isMinWidthXl = useBreakpointValue({ xl: true })

  return {
    isMinWidthXs,
    isMinWidthSm,
    isMinWidthMd,
    isMinWidthLg,
    isMinWidthXl
  }
}
