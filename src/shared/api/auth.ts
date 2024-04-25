import { axiosInstance } from '@/shared/api/axiosInstance'

export const getUser = async () => {
  const { data } = await axiosInstance.get('auth/user')
  const user = data.data.user
  return user
}

export const login = async (email: string, password: string) => {
  await axiosInstance.post('auth/login', { email, password })
}

export const register = async (email: string, password: string) => {
  await axiosInstance.post('auth/register', { email, password })
}

export const logout = async () => {
  await axiosInstance.delete('auth/logout')
}
