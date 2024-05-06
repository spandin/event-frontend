import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { MemberCard } from './memberCard'
import { members } from '@/shared/api/mock'
import { gradientAnimation } from '@/shared/styles/keyframes'

export const MembersList = () => {
  return (
    <VStack w={'full'}>
      <Heading alignSelf={'flex-start'} variant={'h4'}>
        Участники:
      </Heading>

      <VStack
        w={'full'}
        p={4}
        rounded={20}
        gap={4}
        bg={'linear-gradient(90deg, #3a1891, #480e46)'}
        bgSize={'200% 200%'}
        animation={`${gradientAnimation} 10s ease infinite`}
      >
        <VStack w={'full'} gap={4}>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}

          <Text color={'gray.100'} fontFamily={'Jost'} fontWeight={400} fontSize={'sm '}>
            Ещё +8 участников
          </Text>
        </VStack>
        <HStack w={'full'}>
          <Button w={'full'} h={10} variant={'outlineLight'}>
            Добавить
          </Button>
          <Button w={'full'} h={10} variant={'solidDark'}>
            Развернуть
          </Button>
        </HStack>
      </VStack>
    </VStack>
  )
}
