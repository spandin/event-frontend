import { CircleButton } from '@/shared/ui/_index'
import { EventsList } from '@/widgets/Home/eventsList'
import { ContactsList } from '@/widgets/Home/ContactsList/_index'
import { Avatar, Heading, HStack, VStack } from '@chakra-ui/react'
import { FiBell, FiSettings } from 'react-icons/fi'

export const HomePage = () => {
  const userName = 'John Wick'
  return (
    <VStack gap={0}>
      <HStack w={'full'} justify={'space-between'} py={4}>
        <CircleButton icon={FiBell} />
        <CircleButton icon={FiSettings} />
      </HStack>

      <VStack w={'full'} overflowY={'scroll'} py={4} gap={8}>
        <VStack gap={4}>
          <Avatar
            boxSize={36}
            name={userName}
            src={
              'https://www.slashfilm.com/img/gallery/lionsgate-has-struck-a-streaming-deal-with-roku-heres-what-that-means/l-intro-1651006484.jpg'
            }
          />
          <Heading variant={'h2'}>{userName}</Heading>
        </VStack>

        <VStack w={'full'} gap={4} p={4} borderWidth={2} borderColor={'lightStroke'} rounded={20}>
          <ContactsList />
          <EventsList />
        </VStack>
      </VStack>
    </VStack>
  )
}
