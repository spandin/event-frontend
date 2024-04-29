import { ICONS } from '@/shared/assets/_index'
import { useAuth } from '@/shared/hooks/_index'
import { OAuthButtonLayout } from './_layout'

export const AuthGoogleButton = () => {
  const { authenticateWithGoogle, isLoading } = useAuth()

  return (
    <OAuthButtonLayout
      isLoading={isLoading}
      authenticate={authenticateWithGoogle}
      icon={ICONS.GOOGLE_LOGO}
    >
      Войти через Google
    </OAuthButtonLayout>
  )
}
