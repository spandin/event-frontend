import { Navigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { useAuth } from '../hooks'

export const GuestRoute = ({ children }: PropsWithChildren) => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return
  }

  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }

  return children
}
