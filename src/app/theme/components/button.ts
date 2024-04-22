import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  h: 12,
  borderColor: '#e3e3e4',
  borderRadius: 10,
  border: '2px solid',
  fontSize: 'md',
  fontWeight: 300,
  fontFamily: 'Inter',
  color: 'white'
})

const solid = defineStyle({
  h: 12,
  borderRadius: 10,
  fontSize: 'md',
  fontWeight: 500,
  fontFamily: 'Inter',
  background: 'brand.900',
  color: 'white',

  _hover: {
    background: 'brand.800',
    color: 'white'
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { outline, solid }
})
