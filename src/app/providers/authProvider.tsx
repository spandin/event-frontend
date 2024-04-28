import { useAuth } from '@/shared/hooks'
import { PropsWithChildren, ReactNode, useEffect } from 'react'

interface AuthProviderProps extends PropsWithChildren {
  fallback: ReactNode
}

export const AuthProvider = ({ children, fallback }: AuthProviderProps) => {
  const { authenticate, isLoading, isInitialized } = useAuth()

  useEffect(() => {
    authenticate()
  }, [])

  if (isLoading && !isInitialized) {
    return fallback
  }

  return children
}
