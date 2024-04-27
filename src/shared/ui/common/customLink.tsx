import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  to: string
}

export const CustomLink = ({ children, to }: Props) => {
  return (
    <ChakraLink as={ReactRouterLink} to={to} unstable_viewTransition>
      <Text>{children}</Text>
    </ChakraLink>
  )
}
