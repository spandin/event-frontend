import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
)

const base = definePartsStyle({
  field: {
    h: 12,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: '2px',
    fontSize: 'md',
    fontFamily: 'Inter',
    backgroundColor: 'white',

    _focusVisible: {
      borderColor: 'brand.900',
      backgroundColor: 'gray.100'
    },
    _invalid: {
      borderColor: 'invalid'
    },
    _placeholder: {
      color: 'gray.500'
    }
  }
})

export const inputTheme = defineMultiStyleConfig({ variants: { base } })
