import { EventsCard } from '@/entities/Events/_index'
import { events } from '@/shared/api/mock'
import { sortEventsByActiveAndDate } from '@/shared/helpers/sort'
import { CardsList, CustomLink as Link } from '@/shared/ui/_index'
import { Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { FiClock } from 'react-icons/fi'

export const EventsList = () => {
  return (
    <VStack w={'full'} gap={2}>
      <HStack w={'full'} justify={'space-between'} align={'center'} px={1}>
        <HStack gap={2} justify={'center'} align={'center'}>
          <Icon w={'20px'} h={'20px'} as={FiClock} strokeWidth={3} />
          <Heading variant={'h4'} pt={0.5}>
            Встречи
          </Heading>
        </HStack>

        <Link to={'/events'}>
          <Text fontSize={16} color={'gray.500'}>
            подробнее
          </Text>
        </Link>
      </HStack>

      <CardsList array={sortEventsByActiveAndDate(events)}>
        {(item) => <EventsCard key={item.id} event={item} />}
      </CardsList>
    </VStack>
  )
}
