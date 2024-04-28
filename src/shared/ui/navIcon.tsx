import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { Link as ChakraLink, ResponsiveValue } from '@chakra-ui/react'
import { createIcon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
  icon: IconType
  to?: string
  size?: number
  display?: ResponsiveValue<string | (string & object)>
}

export const NavIcon = ({ to, icon, size, display }: Props) => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const NavIconMobile = createIcon({
    displayName: 'NavIcon',
    defaultProps: {
      boxSize: size || 9,
      rounded: '10px',
      padding: '6px',
      _hover: { background: 'darkBrand', color: 'white' },
      _focus: { background: 'white', color: 'black' }
    }
  })

  return (
    <ChakraLink
      as={ReactRouterLink}
      display={display || 'flex'}
      boxSize={size || 9}
      rounded={'10px'}
      background={isActive(`${to}`) ? 'darkBrand' : 'transparent'}
      color={isActive(`${to}`) ? 'lightHover' : 'darkBrand'}
      to={to}
      unstable_viewTransition
    >
      <NavIconMobile as={icon} />
    </ChakraLink>
  )
}
