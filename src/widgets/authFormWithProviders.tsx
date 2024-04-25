import { AuthAppleButton } from '@/features/AuthByApple'
import { AuthGoogleButton } from '@/features/AuthByGoogle'
import { TextDivider } from '@/shared/ui'
import { VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const AuthFormWithProviders = ({ form }: { form: ReactNode }) => {
  return (
    <VStack gap={8} w={'full'}>
      {form}
      <TextDivider>или</TextDivider>

      <VStack gap={4} w={{ base: '100%', lg: '80%' }}>
        <AuthGoogleButton />
        <AuthAppleButton />
      </VStack>
    </VStack>
  )
}
