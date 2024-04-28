import { EventsCard } from '@/entities/Events'
import { CustomLink as Link } from '@/shared/ui'
import { Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { FiClock } from 'react-icons/fi'

export const EventsList = () => {
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

      <EventsCard />
    </VStack>
  )
}
