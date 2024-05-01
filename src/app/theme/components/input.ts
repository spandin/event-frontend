import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
)

const base = definePartsStyle({
  field: {
    h: 12,
    borderRadius: 10,
    borderColor: 'gray.100',
    borderWidth: '2px',
    fontSize: 'md',
    backgroundColor: 'white',
    _hover: {
      borderColor: 'gray.200',
      backgroundColor: 'gray.100'
    },
    _focusVisible: {
      borderColor: 'lightBrand.900',
      backgroundColor: 'gray.100'
    },
    _invalid: {
      borderColor: 'red.400',
      backgroundColor: 'red.50'
    },
    _placeholder: {
      color: 'gray.600'
    },
    transition: 'all 0.3s ease-in-out'
  }
})

export const inputTheme = defineMultiStyleConfig({ variants: { base } })
