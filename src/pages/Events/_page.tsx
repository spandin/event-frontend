import { Heading, HStack, VStack } from '@chakra-ui/react'
import { Calendar } from '@/widgets/Events/Calendar/_index'
import { EventsList } from '@/widgets/Events/EventsList'

export const EventPage = () => {
  return (
    <VStack h={'full'} overflowY={'scroll'} py={6} gap={8}>
      <HStack w={'full'} minH={'40px'} justify={'flex-start'}>
        <Heading variant={'h2'}>Встречи</Heading>
      </HStack>

      <VStack w={'full'} gap={4}>
        <Calendar />
        <EventsList />
      </VStack>
    </VStack>
  )
}
