import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  h: 12,
  p: 0,
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

const outlineLight = defineStyle({
  borderRadius: 10,
  borderColor: 'gray.100',
  borderWidth: '2px',
  fontSize: 'md',
  fontWeight: 500,
  fontFamily: 'Jost',
  color: 'white',
  _hover: {
    borderColor: 'white',
    bg: 'white',
    color: 'black'
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
  bg: 'lightBrand.900',
  color: 'white',
  _hover: {
    bg: 'lightBrand.800'
  },
  _active: {
    bg: 'darkBrand.900'
  },
  _loading: {
    opacity: 1,
    bg: 'darkBrand.50',
    _hover: {
      bg: 'darkBrand.100'
    }
  },
  _disabled: {
    bg: 'gray.50',
    color: 'white'
  },
  transition: 'all 0.3s ease-in-out'
})

const solidDark = defineStyle({
  borderRadius: 10,
  fontSize: 'md',
  fontWeight: 500,
  fontFamily: 'Jost',
  bg: 'darkBrand.100',
  color: 'white',
  _hover: {
    bg: 'darkBrand.50'
  },
  _loading: {
    opacity: 1,
    bg: 'darkBrand.50',
    _hover: {
      bg: 'darkBrand.100'
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
  bg: 'white',
  _hover: {
    bg: 'gray.200',
    borderColor: 'gray.200'
  },
  transition: 'all 0.3s ease-in-out'
})

export const buttonTheme = defineStyleConfig({
  defaultProps: {},
  variants: { outline, outlineLight, solid, solidDark, circle }
})
