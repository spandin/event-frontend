import { ICONS } from '@/shared/assets'
import { useAuth } from '@/shared/hooks'
import { AuthButton } from '@/shared/ui'

export const AuthAppleButton: React.FC = () => {
  const { authenticateWithGoogle, isLoading } = useAuth()

  return (
    <AuthButton isLoading={isLoading} authenticate={authenticateWithGoogle} icon={ICONS.APPLE_LOGO}>
      Войти через Apple
    </AuthButton>
  )
}
