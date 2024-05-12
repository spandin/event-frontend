import { Outlet } from 'react-router-dom'
import { chakra, Flex } from '@chakra-ui/react'
import { Navbar } from '@/widgets/navBar'
import { useAuth } from '@/shared/hooks/_index'
import { AuthProvider } from '../providers/authProvider'
import { Loader } from '@/shared/ui/_index'

const RootLayout = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <AuthProvider fallback={<Loader />}>
        <Outlet />
      </AuthProvider>
    )
  }

  return (
    <AuthProvider fallback={<Loader />}>
      <Flex
        maxH={'100dvh'}
        direction={{ base: 'column', lg: 'row-reverse' }}
        justify={{ base: 'flex-end' }}
        align={{ base: 'flex-start' }}
      >
        <chakra.main
          maxH={'100dvh'}
          h={'100dvh'}
          w={{ base: '100dvw', lg: '460px' }}
          px={4}
          py={{ base: 4, lg: 6 }}
          borderRightWidth={{ base: '0px', lg: '2px' }}
          borderRightColor={'gray.100'}
        >
          <Outlet />
        </chakra.main>

        <Flex
          w={{ base: 'full', lg: 'auto' }}
          direction={{ base: 'row', lg: 'column' }}
          py={{ base: 0, lg: 6 }}
          px={{ base: 0, lg: 4 }}
        >
          <Navbar />
        </Flex>
      </Flex>
    </AuthProvider>
  )
}

export default RootLayout
