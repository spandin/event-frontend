import { FiCalendar, FiHome, FiPieChart, FiPlusCircle, FiSettings, FiUsers } from 'react-icons/fi'
import { chakra, Flex, Image } from '@chakra-ui/react'
import { NavIcon } from '@/shared/ui/_index'
import { ICONS } from '@/shared/assets/_index'

export function Navbar() {
  return (
    <chakra.nav
      h={'full'}
      w={'full'}
      display={'flex'}
      flexDirection={{ base: 'row', lg: 'column' }}
      alignItems={'center'}
      justifyContent={{ base: 'center', lg: 'flex-start' }}
      gap={8}
    >
      <Image src={ICONS.APP_LOGO} boxSize={10} display={{ base: 'none', lg: 'flex' }} />

      <Flex
        w={'full'}
        direction={{ base: 'row', lg: 'column' }}
        align={'center'}
        justify={{ base: 'center', lg: 'flex-start' }}
        py={{ base: 2, lg: 2 }}
        px={{ base: 4, lg: 2 }}
        gap={8}
        bg={'lightHover'}
        rounded={'20px'}
      >
        <NavIcon to="/events/create" icon={FiPlusCircle} />
        <NavIcon to="/" icon={FiHome} />
        <NavIcon to="/events" icon={FiCalendar} />
        <NavIcon to="/contacts" icon={FiUsers} />
        <NavIcon to="/statistics" icon={FiPieChart} />
        <NavIcon to="/settings" icon={FiSettings} display={{ base: 'none', lg: 'flex' }} />
      </Flex>
    </chakra.nav>
  )
}
