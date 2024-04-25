import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  h: 12,
  px: 4,
  borderRadius: 10,
  borderColor: 'black',
  borderWidth: '2px',
  fontSize: 'md',
  fontWeight: 600,
  color: 'black',

  _hover: {
    backgroundColor: 'gray.100'
  }
})

const solid = defineStyle({
  h: 12,
  px: 4,
  borderRadius: 10,
  fontSize: 'md',
  fontWeight: 600,
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

export const buttonTheme = defineStyleConfig({
  variants: { outline, solid }
})
