import { useAuth } from '@/shared/hooks'
import { Center, Spinner } from '@chakra-ui/react'
import { PropsWithChildren, useEffect, useRef } from 'react'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const isInitialized = useRef(false)
  const { authenticate, isLoading } = useAuth()

  useEffect(() => {
    const initialize = async () => {
      await authenticate()
      isInitialized.current = true
    }

    initialize()
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
