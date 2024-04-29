import { VStack } from '@chakra-ui/react'
import { EventsList } from '../../../widgets/Events/eventsList'

export const EventPage = () => {
  return (
    <VStack gap={0}>
      <EventsList />
    </VStack>
  )
}
