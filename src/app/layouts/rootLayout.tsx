import { Outlet } from 'react-router-dom'
import { Grid, GridItem } from '@chakra-ui/react'
import { Navbar } from '@/widgets/navBar'
import { useAuth } from '@/shared/hooks'
import { AuthProvider } from '../providers/authProvider'

const RootLayout = () => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    )
  }

  return (
    <AuthProvider>
      <Grid
        templateAreas={{
          base: `"main" "nav"`,
          lg: `"nav main"
              "nav main"`
        }}
        gridTemplateRows={{ base: '1fr 80px', lg: 'auto 1fr' }}
        gridTemplateColumns={{ base: '1fr', lg: '80px 1fr' }}
        h={'100dvh'}
      >
        <GridItem area={'nav'}>
          <Navbar />
        </GridItem>

        <GridItem
          area={'main'}
          maxH={'100dvh'}
          maxW={'30%'}
          py={{ base: 2, lg: 8 }}
          borderRightWidth={'2px'}
          borderRightColor={'lightStroke'}
        >
          <Outlet />
        </GridItem>
      </Grid>
    </AuthProvider>
  )
}

export default RootLayout
