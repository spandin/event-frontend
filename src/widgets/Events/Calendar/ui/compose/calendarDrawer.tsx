import { CreateEventForm } from '@/features/Events/CreateEvent/_index'
import { Event } from '@/shared/types/events'
import {
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Drawer,
  DrawerOverlay,
  Heading,
  DrawerCloseButton,
  HStack
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

interface Props {
  selectedEvent: Event | null
  setSelectedEvent: React.Dispatch<React.SetStateAction<Event | null>>
  isDrawerOpen: boolean
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CalendarDrawer = ({
  selectedEvent,
  setSelectedEvent,
  setIsDrawerOpen,
  isDrawerOpen
}: Props) => {
  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedEvent(null)
  }

  return (
    <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer} size="md">
      <DrawerOverlay />
      {selectedEvent ? (
        <DrawerContent p={2}>
          <DrawerHeader>
            <HStack justify={'space-between'}>
              <Heading variant={'h2'}>{selectedEvent.title}</Heading>
              <DrawerCloseButton pos={'initial'} />
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <Text>
              <strong>Место:</strong> {selectedEvent.location}
            </Text>
            <Text>
              <strong>Дата:</strong> {format(selectedEvent.date, 'dd MMMM yyyy', { locale: ru })}
            </Text>
            <Text>
              <strong>Общая стоимость:</strong> {selectedEvent.totalCost}
            </Text>
            <Text>
              <strong>Моя доля:</strong> {selectedEvent.myPercentage}%
            </Text>
          </DrawerBody>
        </DrawerContent>
      ) : (
        <DrawerContent p={2}>
          <DrawerHeader>
            <HStack justify={'space-between'}>
              <Heading variant={'h2'}>Создание встречи</Heading>
              <DrawerCloseButton pos={'initial'} />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <CreateEventForm />
          </DrawerBody>
        </DrawerContent>
      )}
    </Drawer>
  )
}
