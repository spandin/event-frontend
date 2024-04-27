import { CircleButton } from '@/shared/ui'
import { ScrollableContactsList } from '@/widgets/ScrollableContactsList'
import { Avatar, Heading, HStack, VStack } from '@chakra-ui/react'
import { FiBell, FiSettings } from 'react-icons/fi'

export const HomePage = () => {
  const userName = 'John Wick'
  return (
    <VStack px={6} gap={4}>
      <HStack w={'full'} justify={'space-between'}>
        <CircleButton icon={FiBell} />
        <CircleButton icon={FiSettings} />
      </HStack>

      <VStack maxH={'full'} w={'full'}>
        <VStack py={4} gap={4}>
          <Avatar
            boxSize={36}
            name={userName}
            src={
              'https://www.slashfilm.com/img/gallery/lionsgate-has-struck-a-streaming-deal-with-roku-heres-what-that-means/l-intro-1651006484.jpg'
            }
          />
          <Heading variant={'h2'}>{userName}</Heading>
        </VStack>

        <VStack w={'full'} borderWidth={2} borderColor={'darkBrand'} rounded={20}>
          <ScrollableContactsList />
        </VStack>
      </VStack>
    </VStack>
  )
}
