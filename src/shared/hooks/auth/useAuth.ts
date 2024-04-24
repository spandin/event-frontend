import { useAuthStore } from '@/app/store/authStore'
import { useNavigate } from 'react-router-dom'
import { useAuthError } from './useAuthError'
import { getUser } from '../../api'
import { register } from '../../api'
import { login } from '../../api'
import { BASE_URL } from '../../config'

export const useAuth = () => {
  const user = useAuthStore((state) => state.user)
  const isLoading = useAuthStore((state) => state.isLoading)
  const setUser = useAuthStore((state) => state.setUser)
  const setIsLoading = useAuthStore((state) => state.setIsLoading)

  const navigate = useNavigate()
  const handleError = useAuthError()

  const isAuthenticated = Boolean(user)

  const authenticate = async () => {
    setIsLoading(true)
    try {
      const user = await getUser()
      setUser(user)
      navigate('/')
    } catch {
    } finally {
      setIsLoading(false)
    }
  }

  const registerAndAuthenticate = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      await register(email, password)
      await login(email, password)
      const user = await getUser()
      setUser(user)
      navigate('/')
    } catch (error) {
      handleError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const loginAndAuthenticate = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      await login(email, password)
      const user = await getUser()
      setUser(user)
      navigate('/')
    } catch (error) {
      handleError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const authenticateWithGoogle = () => {
    window.location.href = `${BASE_URL}/auth/google`
  }

  const logout = async () => {
    await logout()
    navigate('/')
  }

  return {
    authenticate,
    authenticateWithGoogle,
    registerAndAuthenticate,
    loginAndAuthenticate,
    logout,
    user,
    isLoading,
    isAuthenticated
  }
}
