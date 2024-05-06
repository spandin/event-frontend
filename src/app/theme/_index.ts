import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

import { buttonTheme, dividerTheme, headingTheme, inputTheme } from './components/_index'
import { colors } from './colors'
import { tabsTheme } from './components/tabs'

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
      '::selection': {
        background: 'lightBrand.100',
        color: 'black'
      },
      body: {
        color: mode('black', 'white')(props),
        bg: mode('white', 'black')(props)
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
    },
    Tabs: tabsTheme
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
