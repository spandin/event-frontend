import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

const baseStyle = definePartsStyle({
  tab: {
    maxH: 9,
    bg: 'transparent',
    border: '2px solid',
    borderColor: 'gray.100',
    fontFamily: 'Jost',
    fontSize: 14,
    transition: 'all 0.3s ease-in-out'
  },
  tablist: {
    gap: 2
  },
  tabpanel: { p: 0, pt: 3 }
})

export const tabsTheme = defineMultiStyleConfig({ baseStyle })
