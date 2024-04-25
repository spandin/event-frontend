import { ICONS } from '@/shared/assets'
import { useAuth } from '@/shared/hooks'
import { Button, Image } from '@chakra-ui/react'

export const AuthAppleButton: React.FC = () => {
  const { authenticateWithGoogle, isLoading } = useAuth()

  return (
    <Button
      onClick={authenticateWithGoogle}
      w={'full'}
      variant={'outline'}
      whiteSpace={'wrap'}
      leftIcon={<Image w={'20px'} h={'20px'} src={ICONS.APPLE_LOGO} />}
      isDisabled={isLoading}
    >
      Войти через Apple
    </Button>
  )
}
