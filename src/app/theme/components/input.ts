import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys)

const base = definePartsStyle({
  field: {
    h: 12,
    borderRadius: 10,
    border: '1px solid',
    fontSize: 'md',
    fontFamily: 'Inter',

    _light: {
      backgroundColor: '#F8F8F8',
      borderColor: '#e3e3e4',
      _focusVisible: {
        border: '2px solid',
        borderColor: 'brand.900'
      },
      _invalid: {
        border: '2px solid',
        borderColor: 'invalid'
      },
      _placeholder: {
        color: 'gray.500'
      }
    }
  }
})

export const inputTheme = defineMultiStyleConfig({ variants: { base } })
