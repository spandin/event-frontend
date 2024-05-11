import { Box, Button, HStack, VStack } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props<T> {
  children: (item: T) => ReactNode
  array: T[]
}

export const CardsList = <T,>({ children, array }: Props<T>) => {
  const initialLengthCards = 2
  const addCards = 2
  const [visibleCards, setVisibleCards] = useState(initialLengthCards)

  const loadMoreEvents = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + addCards)
  }

  return (
    <Box w={'full'}>
      <VStack w={'full'} gap={2}>
        <AnimatePresence>
          {array.slice(0, visibleCards).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50, width: '100%' }}
              animate={{ opacity: 1, y: 0, width: '100%' }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {children(item)}
            </motion.div>
          ))}
        </AnimatePresence>

        <HStack w={'full'}>
          {visibleCards < array.length && (
            <Button h={9} w={'full'} variant={'outline'} onClick={loadMoreEvents}>
              Загрузить ещё
            </Button>
          )}

          {visibleCards > initialLengthCards && (
            <Button
              h={9}
              w={'full'}
              variant={'solidDark'}
              onClick={() => setVisibleCards(initialLengthCards)}
            >
              Скрыть
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  )
}
