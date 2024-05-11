import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { useCallback, useRef } from 'react'

interface Props {
  id: string
  name: string
  img: string
}

export const DeleteMemberButton = ({ member }: { member: Props }) => {
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
        px={3}
        rounded={'full'}
        border={'2px solid'}
        borderColor={'gray.100'}
        bg={'transparent'}
        fontSize={14}
        _hover={{
          borderColor: 'white',
          bg: 'white',
          color: 'black'
        }}
        onClick={handleOpen}
      >
        Удалить
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
              Удаление участника
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>
                Вы действительно хотети удалить{' '}
                <Text display={'inline'} fontWeight={600}>
                  {member.name}
                </Text>{' '}
                из участников?
              </Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button h={10} px={4} variant={'outline'} ref={cancelRef} onClick={onClose}>
                Отменить
              </Button>
              <Button
                h={10}
                px={4}
                bg={'white'}
                border={'2px solid'}
                borderColor={'red.200'}
                color={'black'}
                _hover={{ bg: 'red.200' }}
                onClick={onClose}
                ml={2}
              >
                Удалить
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
