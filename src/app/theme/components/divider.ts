import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const thick = defineStyle({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 10
})

export const dividerTheme = defineStyleConfig({
  variants: { thick }
})
