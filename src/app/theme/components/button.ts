import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  h: 12,
  borderRadius: 10,
  borderColor: 'black',
  borderWidth: '2px',
  fontSize: 'md',
  fontWeight: 500,
  color: 'black',

  _hover: {
    backgroundColor: 'gray.100'
  }
})

const solid = defineStyle({
  h: 12,
  borderRadius: 10,
  fontSize: 'md',
  fontWeight: 500,
  background: 'brand.900',
  color: 'white',

  _hover: {
    background: 'brand.800'
  },
  _active: {
    background: 'brand.900'
  },
  _loading: {
    opacity: 1,
    background: 'brand.700',

    _hover: {
      background: 'brand.900'
    }
  }
})

const circle = defineStyle({
  minW: 10,
  minH: 10,
  p: 0,
  rounded: 'full',
  borderWidth: '2px',
  borderColor: 'lightStroke',

  _hover: { backgroundColor: 'lightHover' }
})

export const buttonTheme = defineStyleConfig({
  defaultProps: {},
  variants: { outline, solid, circle }
})
