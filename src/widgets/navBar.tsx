import { FiCalendar, FiHome, FiPieChart, FiPlusCircle, FiSettings, FiUsers } from 'react-icons/fi'
import { Flex, Image } from '@chakra-ui/react'
import { NavIcon } from '@/shared/ui'
import { ICONS } from '@/shared/assets'

export function Navbar() {
  return (
    <Flex
      h={'full'}
      w={'full'}
      direction={{ base: 'row', lg: 'column' }}
      align={'center'}
      justify={{ base: 'center', lg: 'flex-start' }}
      py={{ base: 2, lg: 8 }}
      px={{ base: 4 }}
      gap={8}
    >
      <Image src={ICONS.APP_LOGO} boxSize={10} display={{ base: 'none', lg: 'flex' }} />

      <Flex
        direction={{ base: 'row', lg: 'column' }}
        align={'center'}
        justify={{ base: 'center', lg: 'flex-start' }}
        py={{ base: 2, lg: 2 }}
        gap={8}
        px={{ base: 4, lg: 2 }}
        bg={'brand.900'}
        rounded={'10px'}
      >
        <NavIcon to="/events/create" icon={FiPlusCircle} />
        <NavIcon to="/" icon={FiHome} />
        <NavIcon to="/events" icon={FiCalendar} />
        <NavIcon to="/contacts" icon={FiUsers} />
        <NavIcon to="/statistics" icon={FiPieChart} />
        <NavIcon to="/settings" icon={FiSettings} display={{ base: 'none', lg: 'flex' }} />
      </Flex>
    </Flex>
  )
}
