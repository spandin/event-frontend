import { Heading, HStack, VStack } from '@chakra-ui/react'
import { Calendar } from '@/widgets/Events/Calendar/_index'
import { EventsList } from '@/widgets/Events/eventsList'
import { Logo } from '@/shared/ui/logo'

export const EventPage = () => {
  return (
    <VStack h={'full'} overflowY={'scroll'} gap={{ base: 4, lg: 12 }}>
      <HStack w={'full'} minH={'40px'} justify={'flex-start'} gap={4}>
        <Logo display={{ base: 'flex', lg: 'none' }} />
        <Heading variant={'h2'}>Встречи</Heading>
      </HStack>

      <VStack w={'full'} gap={4}>
        <Calendar />
        <EventsList />
      </VStack>
    </VStack>
  )
}
