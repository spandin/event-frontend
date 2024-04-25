import { ICONS } from '@/shared/assets'
import { useAuth } from '@/shared/hooks'
import { AuthButton } from '@/shared/ui'

export const AuthGoogleButton: React.FC = () => {
  const { authenticateWithGoogle, isLoading } = useAuth()

  return (
    <AuthButton
      isLoading={isLoading}
      authenticate={authenticateWithGoogle}
      icon={ICONS.GOOGLE_LOGO}
    >
      Войти через Google
    </AuthButton>
  )
}
