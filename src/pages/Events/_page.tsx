import { VStack } from '@chakra-ui/react'
import { Calendar } from '@/widgets/Events/Calendar/_index'
import { EventsList } from '@/widgets/Events/eventsList'

export const EventPage = () => {
  return (
    <VStack
      h={'full'}
      w={'full'}
      py={{ base: 4, lg: 6 }}
      overflowY={'scroll'}
      gap={{ base: 4, lg: 12 }}
    >
      <VStack w={'full'} gap={4}>
        <Calendar />
        <EventsList />
      </VStack>
    </VStack>
  )
}
