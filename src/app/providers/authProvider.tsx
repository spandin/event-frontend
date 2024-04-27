import { useAuth } from '@/shared/hooks'
import { Center, Spinner } from '@chakra-ui/react'
import { PropsWithChildren, useEffect, useState } from 'react'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isInitialized, setIsInitilized] = useState(false)
  const { authenticate, isLoading } = useAuth()

  useEffect(() => {
    const initialize = async () => {
      await authenticate()
      setIsInitilized(true)
    }

    initialize()
  }, [])

  if (isLoading && !isInitialized) {
    return (
      <Center h="100dvh">
        <Spinner size="lg" thickness="3px" />
      </Center>
    )
  }

  return children
}
