import { AxiosError } from 'axios'
import { useToast } from '@chakra-ui/react'

export const useAuthError = () => {
  const toast = useToast()

  return (error: unknown) => {
    if (error instanceof AxiosError) {
      toast({
        title: 'Authentication error',
        description: error.response?.data.message || error.message,
        status: 'error',
        position: 'bottom-right'
      })
    }
  }
}
