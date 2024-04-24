import { axiosInstance } from '../axiosInstance'

export const register = async (email: string, password: string) => {
  await axiosInstance.post('auth/register', { email, password })
}
