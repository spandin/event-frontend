import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  h: 12,
  px: 4,
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
  px: 4,
  borderRadius: 10,
  fontSize: 'md',
  fontWeight: 500,
  background: 'brand.900',
  color: 'white',

  _hover: {
    background: 'brand.800',
    color: 'white'
  },
  _active: {
    background: 'brand.900',
    color: 'white'
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { outline, solid }
})
