import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    red: {
      '900': '#ca2b2b',
      '500': '#D84849',
      '50': '#e27878'
    },
    black: {
      '900': '#141414',
      '500': '#262626',
      '50': '#525252'
    },
    gray: {
      '900': '#171923',
      '800': '#1A202C',
      '700': '#2D3748',
      '300': '#CBD5E0',
      '200': '#E2E8F0',
      '100': '#EDF2F7'
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  fontWeights: {
    normal: 400,
    semibold: 600,
    bold: 700
  },
  styles: {
    global: {
      '*': {
        margin: '0',
        padding: '0',
        'box-sizing': 'border-box'
      },
      'html, body, #__next': {
        height: '100%'
      },
      body: {
        color: 'gray.50',
        'font-family':
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
      }
    }
  }
})
