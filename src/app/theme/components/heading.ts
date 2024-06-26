import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const h1 = defineStyle({
  fontSize: '3xl',
  fontWeight: 500,
  fontFamily: 'Jost, sans-serif',
  letterSpacing: '-0.02em'
})

const h2 = defineStyle({
  fontSize: '2xl',
  fontWeight: 500,
  fontFamily: 'Jost, sans-serif',
  letterSpacing: '-0.02em'
})

const h3 = defineStyle({
  fontSize: 'xl',
  fontWeight: 500,
  fontFamily: 'Jost, sans-serif',
  letterSpacing: '-0.02em'
})

const h4 = defineStyle({
  fontSize: 'lg',
  fontWeight: 500,
  fontFamily: 'Jost, sans-serif',
  letterSpacing: '-0.02em'
})

export const headingTheme = defineStyleConfig({
  variants: { h1, h2, h3, h4 }
})
