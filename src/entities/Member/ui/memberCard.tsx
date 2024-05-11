import { Avatar, Card, Heading, HStack } from '@chakra-ui/react'
import { CustomLink as Link } from '@/shared/ui/_index'

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
      color={'white'}
      shadow={'none'}
    >
      <HStack gap={3}>
        <Avatar src={member.img} boxSize={8} name={member.name} />
        <Link to={`users/${member.id}`}>
          <Heading variant={'h4'}>{member.name}</Heading>
        </Link>
      </HStack>
    </Card>
  )
}
