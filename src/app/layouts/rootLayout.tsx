import { Outlet } from 'react-router-dom'
import { chakra, Flex } from '@chakra-ui/react'
import { Navbar } from '@/widgets/navBar'
import { useAuth } from '@/shared/hooks'

const RootLayout = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Outlet />
  }

  return (
    <Flex
      maxH={'100dvh'}
      direction={{ base: 'column', lg: 'row-reverse' }}
      justify={{ base: 'flex-end' }}
      align={{ base: 'flex-start' }}
    >
      <chakra.main
        maxH={'100dvh'}
        h={'100dvh'}
        w={{ base: '100dvw', lg: '500px' }}
        px={4}
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
        py={4}
        px={{ base: 6 }}
      >
        <Navbar />
      </Flex>
    </Flex>
  )
}

export default RootLayout
