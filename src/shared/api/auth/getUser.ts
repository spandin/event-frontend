import { axiosInstance } from '../axiosInstance'

export const getUser = async () => {
  const { data } = await axiosInstance.get('auth/user')
  const user = data.data.user
  return user
}
