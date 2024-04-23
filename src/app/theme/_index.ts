import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

import colors from './colors'
import { buttonTheme, dividerTheme, headingTheme, inputTheme } from './components/_index'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  colors,

  styles: {
    global: (props: StyleFunctionProps) => ({
      '*': {
        WebkitTapHighlightColor: 'transparent'
      },
      body: {
        color: mode('black.900', 'white.900')(props),
        bg: mode('white', 'dark.900')(props)
      }
    })
  },

  components: {
    Text: {
      baseStyle: {
        fontWeight: 300
      }
    },
    Input: inputTheme,
    Button: buttonTheme,
    Divider: dividerTheme,
    Heading: headingTheme,
    FormLabel: {
      baseStyle: {
        fontSize: 'md',
        fontWeight: 500,
        lineHeight: 1
      }
    }
  },

  fonts: {
    heading: 'Jost, sans-serif',
    body: 'Inter, sans-serif'
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
