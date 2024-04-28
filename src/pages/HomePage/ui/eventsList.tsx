import { EventsCard } from '@/entities/Events'
import { events } from '@/shared/api/mockEvents'
import { CustomLink as Link } from '@/shared/ui'
import { Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { FiClock } from 'react-icons/fi'

export const EventsList = () => {
  events.sort((a, b) => {
    if (a.isActive && !b.isActive) {
      return -1
    } else if (!a.isActive && b.isActive) {
      return 1
    } else {
      return +new Date(b.date) - +new Date(a.date)
    }
  })
  return (
    <VStack w={'full'}>
      <HStack w={'full'} justify={'space-between'} align={'center'} px={1}>
        <HStack gap={2} justify={'center'} align={'center'}>
          <Icon w={'20px'} h={'20px'} as={FiClock} strokeWidth={3} />
          <Heading variant={'h4'}>Встречи</Heading>
        </HStack>

        <Link to={'/events'}>
          <Text fontWeight={400} color={'gray.500'}>
            все
          </Text>
        </Link>
      </HStack>

      {events.map((event) => (
        <EventsCard key={event.id} event={event} />
      ))}
    </VStack>
  )
}
