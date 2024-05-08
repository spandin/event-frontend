import { Button, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  isLoading: boolean
  authenticate: () => void
  icon: string
  size?: number | string
  children: ReactNode
}

export const OAuthButtonLayout = ({ authenticate, isLoading, icon, children, size }: Props) => {
  return (
    <Button
      onClick={authenticate}
      w={'full'}
      variant={'outline'}
      whiteSpace={'wrap'}
      leftIcon={<Image boxSize={size || 5} src={icon} />}
      isDisabled={isLoading}
    >
      {children}
    </Button>
  )
}
