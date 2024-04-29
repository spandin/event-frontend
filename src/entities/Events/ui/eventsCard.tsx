import { timestampToDate } from '@/shared/helpers/parseDate'
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

export const EventsCard = ({ event }: { event: Event }) => {
  return (
    <Card
      w={'full'}
      p={4}
      borderColor={'lightStroke'}
      borderWidth={event.isActive ? '0px' : '2px'}
      shadow={'none'}
      rounded={20}
      gap={4}
      bg={event.isActive ? 'darkBrand' : 'transparent'}
      color={event.isActive ? 'white' : 'black'}
      _hover={{
        bg: event.isActive ? 'brand.900' : 'lightHover'
      }}
      transition={'background-color 0.3s ease-in-out'}
    >
      <CardHeader w={'full'} p={0}>
        <HStack w={'full'} justify={'space-between'}>
          <Link to={`/events/${event.id}`}>
            <Heading variant={'h5'}>{event.title}</Heading>
          </Link>

          <Text fontSize={'sm'} color={event.isActive ? 'gray.200' : 'black'}>
            {timestampToDate(event.date)}
          </Text>
        </HStack>
        <Text
          fontSize={'sm'}
          color={event.isActive ? 'gray.200' : 'black'}
          alignSelf={'flex-start'}
        >
          {event.location}
        </Text>
      </CardHeader>

      <CardFooter w={'full'} p={0}>
        <HStack w={'full'} justify={'space-between'}>
          <AvatarGroup color={'darkBrand'} size="sm" max={2}>
            <Avatar name="Segun Adebayo" bg={'brand.900'} />
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
