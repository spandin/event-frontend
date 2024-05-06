import { Avatar, Card, HStack, Text } from '@chakra-ui/react'
import { DeleteMemberButton } from './deleteMemberButton'
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
        <Avatar src={member.img} boxSize={9} name="Stanislau" />
        <CustomLink to={`users/${member.id}`}>
          <Text fontFamily={'Jost'} fontWeight={500} color={'white'}>
            {member.name}
          </Text>
        </CustomLink>
      </HStack>
      <DeleteMemberButton member={member} />
    </Card>
  )
}
