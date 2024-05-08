import { Navigate } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { useAuth } from '../hooks/_index'

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isAuthenticated, isInitialized } = useAuth()

  if (!isInitialized) {
    return
  }

  if (!isAuthenticated) {
    return <Navigate to={'/auth'} />
  }

  return children
}
