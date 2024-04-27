import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

import { buttonTheme, dividerTheme, headingTheme, inputTheme } from './components/_index'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

export const colors = {
  textDarkColor: '#101010',
  brand: {
    900: '#4329B5',
    800: '#5841bd',
    700: '#6d59c5',
    600: '#8270ce',
    500: '#9788d6',
    400: '#aba0de',
    300: '#c0b8e6',
    200: '#d5cfef',
    100: '#eae7f7'
  },
  darkBrand: '#0D0322',
  lightHover: '#F6F7FB',
  lightStroke: '#EAEBEF',
  darkStroke: '#0D0322',
  invalid: '#FC8181'
}

const theme = extendTheme({
  config,
  colors,

  styles: {
    global: (props: StyleFunctionProps) => ({
      '*': {
        WebkitTapHighlightColor: 'transparent'
      },
      '::selection': {
        background: 'brand.100',
        color: 'textDarkColor'
      },
      body: {
        color: mode('textDarkColor', 'white.900')(props),
        bg: mode('white', 'darkBrand')(props)
      }
    })
  },

  components: {
    Text: {
      baseStyle: {
        fontSize: '18px',
        fontWeight: 400
      }
    },
    Input: inputTheme,
    Button: buttonTheme,
    Divider: dividerTheme,
    Heading: headingTheme,
    FormLabel: {
      baseStyle: {
        fontSize: 'md',
        fontWeight: 600,
        lineHeight: 1
      }
    }
  },

  fonts: {
    heading: 'Jost, sans-serif',
    body: 'Jost, sans-serif'
  },

  breakpoints: {
    base: '0em',
    sm: '14em',
    md: '28em',
    lg: '42em',
    xl: '56em',
    '2xl': '70em'
  }
})

export default theme
