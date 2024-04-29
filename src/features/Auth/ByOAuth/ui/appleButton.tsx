import { ICONS } from '@/shared/assets/_index'
import { useAuth } from '@/shared/hooks/_index'
import { OAuthButtonLayout } from './_layout'

export const AuthAppleButton = () => {
  const { authenticateWithGoogle, isLoading } = useAuth()

  return (
    <OAuthButtonLayout
      isLoading={isLoading}
      authenticate={authenticateWithGoogle}
      icon={ICONS.APPLE_LOGO}
    >
      Войти через Apple
    </OAuthButtonLayout>
  )
}
