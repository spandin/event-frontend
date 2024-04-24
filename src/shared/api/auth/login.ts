import { axiosInstance } from '../axiosInstance'

export const login = async (email: string, password: string) => {
  await axiosInstance.post('auth/login', { email, password })
}
