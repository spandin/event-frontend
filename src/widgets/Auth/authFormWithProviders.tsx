import { ReactNode } from 'react'
import { AuthAppleButton, AuthGoogleButton } from '@/features/Auth/ByOAuth/_index'
import { LoginForm, RegisterForm } from '@/features/Auth/ByEmail/_index'
import { TextDivider } from '@/shared/ui/_index'
import { VStack } from '@chakra-ui/react'
import { AUTH_FORMS } from '@/shared/types/types'

export const AuthFormWithProviders = ({ formActive }: { formActive: ReactNode }) => {
  return (
    <VStack gap={8} w={'full'}>
      {formActive === AUTH_FORMS.LOGIN ? <LoginForm /> : <RegisterForm />}
      <TextDivider>или</TextDivider>

      <VStack gap={4} w={{ base: '100%', lg: '80%' }}>
        <AuthGoogleButton />
        <AuthAppleButton />
      </VStack>
    </VStack>
  )
}
