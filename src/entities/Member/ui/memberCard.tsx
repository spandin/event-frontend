import { Avatar, Card, HStack, Text } from '@chakra-ui/react'
import { CustomLink } from '@/shared/ui/_index'

interface Props {
  id: string
  name: string
  img: string
}

export const MemberCard = ({ member }: { member: Props }) => {
  return (
    <Card
      w={'full'}
      direction={'row'}
      align={'center'}
      justify={'space-between'}
      bg={'transparent'}
      shadow={'none'}
    >
      <HStack gap={3}>
        <Avatar src={member.img} boxSize={8} name={member.name} />
        <CustomLink to={`users/${member.id}`}>
          <Text fontFamily={'Jost'} fontSize={'md'} fontWeight={500} color={'white'}>
            {member.name}
          </Text>
        </CustomLink>
      </HStack>
    </Card>
  )
}
