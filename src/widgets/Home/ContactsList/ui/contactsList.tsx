import { CustomLink as Link } from '@/shared/ui/_index'
import { Avatar, Flex, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import { usePreventBodyScroll } from '../helpers/hooks'
import { onWheel } from '../helpers/utils'

export const ContactsList = () => {
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' },
    { id: 6, name: 'User 6' },
    { id: 7, name: 'User 7' },
    { id: 8, name: 'User 8' },
    { id: 9, name: 'User 9' },
    { id: 10, name: 'User 10' },
    { id: 11, name: 'User 11' },
    { id: 12, name: 'User 12' },
    { id: 13, name: 'User 13' }
  ]

  const [items] = useState(users)
  const { disableScroll, enableScroll } = usePreventBodyScroll()

  const styles = {
    scrollMenuWrapper: {
      width: '100%'
    },
    scrollMenuContainer: {
      gap: '10px'
    }
  }

  return (
    <VStack w={'full'}>
      <HStack w={'full'} justify={'space-between'} align={'center'} px={1}>
        <HStack gap={2} justify={'center'} align={'flex-start'}>
          <Icon boxSize={5} as={FiUsers} strokeWidth={3} />
          <Heading variant={'h4'}>Контакты</Heading>
        </HStack>

        <Link to={'/contacts'}>
          <Text color={'gray.500'}>все</Text>
        </Link>
      </HStack>

      <Flex w={'full'} onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
        <ScrollMenu
          wrapperClassName={styles.scrollMenuWrapper.width}
          scrollContainerClassName={styles.scrollMenuContainer.gap}
          onWheel={onWheel}
        >
          {items.map(({ id, name }) => (
            <Avatar key={id} name={name} />
          ))}
        </ScrollMenu>
      </Flex>
    </VStack>
  )
}
