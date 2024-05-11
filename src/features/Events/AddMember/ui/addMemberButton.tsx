import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Icon,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { useCallback, useRef } from 'react'
import { FiPlus } from 'react-icons/fi'

export const AddMemberButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement | null>(null)

  const handleOpen = useCallback(() => {
    onOpen()
    if (cancelRef.current) {
      cancelRef.current.focus()
    }
  }, [onOpen])

  return (
    <>
      <Button
        h={8}
        maxW={8}
        minW={8}
        px={0}
        variant={'outlineLight'}
        color={'white'}
        onClick={handleOpen}
      >
        <Icon as={FiPlus} />
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent mx={8}>
            <AlertDialogHeader fontSize="2xl" fontFamily={'Jost'} fontWeight={500}>
              Добавление Участника
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>Логика добавления</Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                w={'full'}
                h={10}
                px={4}
                variant={'outline'}
                ref={cancelRef}
                onClick={onClose}
              >
                Добавить
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
