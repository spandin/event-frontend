import { useAuth } from '@/shared/hooks/auth/useAuth'
import { Center, Spinner } from '@chakra-ui/react'
import { PropsWithChildren, useEffect, useRef } from 'react'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const isInitialized = useRef(false)
  const { authenticate, isLoading } = useAuth()

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true
      authenticate()
    }
  }, [])

  if (isLoading && !isInitialized.current) {
    return (
      <Center h="100dvh">
        <Spinner size="xl" />
      </Center>
    )
  }

  return children
}
