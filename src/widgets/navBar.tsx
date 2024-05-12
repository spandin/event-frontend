import { FiCalendar, FiHome, FiPieChart, FiSettings, FiUsers } from 'react-icons/fi'
import { chakra, Flex } from '@chakra-ui/react'
import { Logo, NavIcon } from '@/shared/ui/_index'

export function Navbar() {
  return (
    <chakra.nav
      w={'full'}
      display={'flex'}
      flexDirection={{ base: 'row', lg: 'column' }}
      alignItems={'center'}
      justifyContent={{ base: 'center', lg: 'flex-start' }}
      gap={8}
      bg={{ base: 'gray.50', lg: 'transparent' }}
    >
      <Logo size={10} display={{ base: 'none', lg: 'flex' }} />

      <Flex
        w={'full'}
        direction={{ base: 'row', lg: 'column' }}
        align={'center'}
        justify={{ base: 'center', lg: 'flex-start' }}
        py={{ base: 2, lg: 4 }}
        px={{ base: 0, lg: 2 }}
        gap={8}
        rounded={'20px'}
      >
        <NavIcon to="/" icon={FiHome} />
        <NavIcon to="/events" icon={FiCalendar} />
        <NavIcon to="/contacts" icon={FiUsers} />
        <NavIcon to="/statistics" icon={FiPieChart} />
        <NavIcon to="/settings" icon={FiSettings} />
      </Flex>
    </chakra.nav>
  )
}
