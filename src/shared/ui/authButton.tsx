import { Button, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  isLoading: boolean
  authenticate: () => void
  icon: string
  children: ReactNode
}

export const AuthButton = ({ authenticate, isLoading, icon, children }: Props) => {
  return (
    <Button
      onClick={authenticate}
      w={'full'}
      variant={'outline'}
      whiteSpace={'wrap'}
      leftIcon={<Image w={'20px'} h={'20px'} src={icon} />}
      isDisabled={isLoading}
    >
      {children}
    </Button>
  )
}
