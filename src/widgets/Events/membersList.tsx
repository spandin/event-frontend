import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { MemberCard } from '../../entities/Member/ui/memberCard'
import { members } from '@/shared/api/mock'
import { gradientAnimation } from '@/shared/styles/keyframes'
import { DeleteMemberButton } from '@/features/Events/DeleteMember/_index'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AddMemberButton } from '@/features/Events/AddMember/_index'

export const MembersList = () => {
  const initialLengthCards = 3
  const addCards = 3
  const [visibleCards, setVisibleCards] = useState(initialLengthCards)

  const loadMoreMembers = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + addCards)
  }

  const sortedMembersByAlphabetic = [...members].sort((a, b) => {
    if (a.isOwner && !b.isOwner) {
      return -1
    } else if (!a.isOwner && b.isOwner) {
      return 1
    } else {
      return a.name.localeCompare(b.name)
    }
  })

  return (
    <VStack w={'full'}>
      <VStack
        w={'full'}
        p={4}
        rounded={20}
        gap={4}
        bg={'linear-gradient(135deg, #0866F8, #3A1891)'}
        bgSize={'10% 100%'}
        animation={`${gradientAnimation} 20s ease infinite`}
      >
        <HStack w={'full'} justify={'space-between'} align={'center'}>
          <Heading color={'white'} variant={'h3'}>
            Участники
          </Heading>

          <AddMemberButton />
        </HStack>

        <VStack w={'full'} gap={4}>
          <AnimatePresence>
            {sortedMembersByAlphabetic.slice(0, visibleCards).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -50, width: '100%' }}
                animate={{ opacity: 1, y: 0, width: '100%' }}
                exit={{ opacity: 0, y: -500 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {member.isOwner ? (
                  <HStack key={member.id} w={'full'}>
                    <MemberCard member={member} />
                  </HStack>
                ) : (
                  <HStack key={member.id} w={'full'}>
                    <MemberCard member={member} /> <DeleteMemberButton member={member} />
                  </HStack>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {members.length >= visibleCards && (
            <Text color={'gray.100'} fontFamily={'Jost'} fontWeight={400} fontSize={'sm '}></Text>
          )}
        </VStack>
        <HStack w={'full'} justify={'flex-start'}>
          {visibleCards >= members.length && (
            <Button
              w={'full'}
              h={10}
              variant={'solidDark'}
              rounded={'full'}
              onClick={() => setVisibleCards(initialLengthCards)}
            >
              Свернуть
            </Button>
          )}

          {visibleCards < members.length && (
            <Button
              w={'full'}
              h={10}
              variant={'solidDark'}
              rounded={'full'}
              onClick={loadMoreMembers}
            >
              Ещё +{members.length - visibleCards}
            </Button>
          )}
        </HStack>
      </VStack>
    </VStack>
  )
}
