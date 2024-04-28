import {
  Card,
  Heading,
  HStack,
  Text,
  CardHeader,
  CardFooter,
  AvatarGroup,
  Avatar,
  AvatarBadge
} from '@chakra-ui/react'

export const EventsCard = () => {
  return (
    <Card
      w={'full'}
      p={4}
      borderColor={'lightStroke'}
      borderWidth={'2px'}
      shadow={'none'}
      rounded={20}
      gap={4}
    >
      <CardHeader w={'full'} p={0}>
        <HStack w={'full'} justify={'space-between'}>
          <Heading variant={'h5'}>Ресторан Ember</Heading>
          <Text fontSize={'sm'} color={'gray.500'}>
            24.05.2024
          </Text>
        </HStack>
        <Text fontSize={'sm'} color={'gray.500'} alignSelf={'flex-start'}>
          просп. Победителей, 9, Минск (этаж 7)
        </Text>
      </CardHeader>

      <CardFooter w={'full'} p={0}>
        <HStack w={'full'} justify={'space-between'}>
          <AvatarGroup size="sm" max={2}>
            <Avatar name="Segun Adebayo" bg={'brand.900'} />
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence">
              <AvatarBadge boxSize={3} bg="green.500" />
            </Avatar>
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds">
              <AvatarBadge boxSize={3} bg="green.500" />
            </Avatar>
          </AvatarGroup>

          <HStack gap={2}>
            <Text fontWeight={500}>130BYN</Text>
            <Text fontWeight={500} color={'orange'}>
              33%
            </Text>
          </HStack>
        </HStack>
      </CardFooter>
    </Card>
  )
}
