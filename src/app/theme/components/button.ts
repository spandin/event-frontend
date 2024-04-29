import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  h: 12,
  borderRadius: 10,
  borderColor: 'lightStroke',
  borderWidth: '2px',
  fontSize: 'md',
  fontWeight: 500,
  color: 'black',
  _hover: {
    borderColor: 'lightHover',
    bg: 'lightHover'
  },
  transition: 'all 0.3s ease-in-out'
})

const solid = defineStyle({
  h: 12,
  borderRadius: 10,
  fontSize: 'md',
  fontWeight: 500,
  background: 'brand.900',
  color: 'white',

  _hover: {
    background: 'darkBrand'
  },
  _active: {
    background: 'brand.900'
  },
  _loading: {
    opacity: 1,
    background: 'darkBrand',
    _hover: {
      background: 'darkBrand',
      opacity: 0.9
    }
  },
  transition: 'all 0.3s ease-in-out'
})

const circle = defineStyle({
  minW: 10,
  minH: 10,
  p: 0,
  rounded: 'full',
  borderWidth: '2px',
  borderColor: 'lightStroke',
  _hover: { backgroundColor: 'lightHover' },
  transition: 'all 0.3s ease-in-out'
})

export const buttonTheme = defineStyleConfig({
  defaultProps: {},
  variants: { outline, solid, circle }
})
