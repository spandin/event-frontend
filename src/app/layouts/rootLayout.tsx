import { Outlet } from 'react-router-dom'
import { chakra, Flex } from '@chakra-ui/react'
import { Navbar } from '@/widgets/navBar'
import { useAuth } from '@/shared/hooks'
import { AuthProvider } from '../providers/authProvider'
import { Loader } from '@/shared/ui'

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
          h={'100dvh'}
          w={{ base: '100dvw', lg: '500px' }}
          pt={{ base: 6, lg: 8 }}
          borderRightWidth={{ base: '0px', lg: '2px' }}
          borderRightColor={'lightStroke'}
        >
          <Outlet />
        </chakra.main>

        <Flex
          w={{ base: 'full', lg: 'auto' }}
          direction={{ base: 'row', lg: 'column' }}
          position={{ base: 'absolute', lg: 'initial' }}
          bottom={0}
          py={{ base: 4, lg: 8 }}
          px={{ base: 4 }}
        >
          <Navbar />
        </Flex>
      </Flex>
    </AuthProvider>
  )
}

export default RootLayout
