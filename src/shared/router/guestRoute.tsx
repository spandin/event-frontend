import { useAuth } from '@/shared'
import { Navigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'

export const GuestRoute = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }

  return children
}
