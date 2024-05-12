import { CircleButton } from '@/shared/ui/_index'
import { EventsList } from '@/widgets/Home/eventsList'
import { ContactsList } from '@/widgets/Home/ContactsList/_index'
import { Avatar, Heading, HStack, VStack } from '@chakra-ui/react'
import { FiBell, FiSettings } from 'react-icons/fi'

export const HomePage = () => {
  const userName = 'John Wick'
  return (
    <VStack h={'full'} w={'full'} py={{ base: 4, lg: 6 }} overflowY={'scroll'} gap={0}>
      <HStack w={'full'} justify={'space-between'}>
        <CircleButton icon={FiBell} />
        <CircleButton icon={FiSettings} />
      </HStack>

      <VStack w={'full'} gap={0}>
        <VStack w={'full'} py={12} gap={4}>
          <Avatar
            boxSize={36}
            name={userName}
            src={
              'https://www.slashfilm.com/img/gallery/lionsgate-has-struck-a-streaming-deal-with-roku-heres-what-that-means/l-intro-1651006484.jpg'
            }
          />
          <Heading variant={'h2'}>{userName}</Heading>
        </VStack>

        <VStack w={'full'} p={4} borderWidth={2} borderColor={'gray.100'} rounded={20} gap={4}>
          <ContactsList />
          <EventsList />
        </VStack>
      </VStack>
    </VStack>
  )
}
