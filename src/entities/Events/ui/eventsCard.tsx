import { gradientAnimation } from '@/shared/styles/keyframes'
import { Event } from '@/shared/types/events'
import { CustomLink as Link } from '@/shared/ui/_index'
import {
  Card,
  HStack,
  Text,
  CardHeader,
  CardFooter,
  AvatarGroup,
  Avatar,
  AvatarBadge,
  Heading
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export const EventsCard = ({ event }: { event: Event }) => {
  return (
    <Card
      w={'full'}
      p={4}
      borderColor={'gray.100'}
      borderWidth={event.isActive ? 0 : 2}
      shadow={'none'}
      rounded={20}
      gap={4}
      bg={event.isActive ? 'linear-gradient(90deg, #3a1891, #480e46)' : 'white'}
      bgSize={'200% 200%'}
      color={event.isActive ? 'white' : 'black'}
      animation={`${gradientAnimation} 10s ease infinite`}
      transition={'all 0.3s ease-in-out'}
    >
      <CardHeader w={'full'} p={0}>
        <HStack w={'full'} justify={'space-between'}>
          <Link to={`/events/${event.id}`}>
            <Heading variant={'h4'}>{event.title}</Heading>
          </Link>

          <Text fontSize={'sm'} color={event.isActive ? 'gray.100' : 'gray.500'}>
            {format(event.date, 'dd.MM.yyyy', { locale: ru })}
          </Text>
        </HStack>
        <Text
          fontSize={'sm'}
          color={event.isActive ? 'gray.100' : 'gray.500'}
          alignSelf={'flex-start'}
        >
          {event.location}
        </Text>
      </CardHeader>

      <CardFooter w={'full'} p={0}>
        <HStack w={'full'} justify={'space-between'}>
          <AvatarGroup color={'lightBrand.900'} size="sm" max={2}>
            <Avatar name="Segun Adebayo" bg={'lightBrand.900'} />
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence">
              <AvatarBadge boxSize={3} bg="green.500" />
            </Avatar>
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds">
              <AvatarBadge boxSize={3} bg="green.500" />
            </Avatar>
          </AvatarGroup>

          <HStack gap={2}>
            {event.isActive ? (
              <Text>активная</Text>
            ) : (
              <>
                <Text fontWeight={500}>{event.totalCost}BYN</Text>
                <Text fontWeight={500} color={'orange'}>
                  {event.myPercentage}%
                </Text>
              </>
            )}
          </HStack>
        </HStack>
      </CardFooter>
    </Card>
  )
}
