import { axiosInstance } from '../axiosInstance'

export const logout = async () => {
  await axiosInstance.delete('auth/logout')
}
