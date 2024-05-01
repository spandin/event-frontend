import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  h: 12,
  borderRadius: 10,
  borderColor: 'gray.100',
  borderWidth: '2px',
  fontSize: 'md',
  fontWeight: 500,
  fontFamily: 'Jost',
  color: 'black',
  _hover: {
    borderColor: 'gray.200',
    bg: 'gray.200'
  },
  _disabled: {
    borderColor: 'gray.50',
    bg: 'gray.50'
  },
  transition: 'all 0.3s ease-in-out'
})

const solid = defineStyle({
  h: 12,
  borderRadius: 10,
  fontSize: 'md',
  fontWeight: 500,
  fontFamily: 'Jost',
  background: 'lightBrand.900',
  color: 'white',
  _hover: {
    background: 'darkBrand.400'
  },
  _active: {
    background: 'darkBrand.900'
  },
  _loading: {
    opacity: 1,
    background: 'darkBrand.50',
    _hover: {
      background: 'darkBrand.100'
    }
  },
  _disabled: {
    bg: 'gray.50',
    color: 'white'
  },
  transition: 'all 0.3s ease-in-out'
})

const circle = defineStyle({
  size: 10,
  p: 0,
  rounded: 'full',
  borderWidth: '2px',
  borderColor: 'gray.100',
  _hover: {
    backgroundColor: 'gray.200',
    borderColor: 'gray.200'
  },
  transition: 'all 0.3s ease-in-out'
})

export const buttonTheme = defineStyleConfig({
  defaultProps: {},
  variants: { outline, solid, circle }
})
