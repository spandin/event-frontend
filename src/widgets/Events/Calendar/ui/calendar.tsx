import { useState } from 'react'
import { Flex, Text, Button, Grid, HStack, VStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Event } from '@/shared/types/events'
import { events } from '@/shared/api/mock'
import { formatDate } from '../helpers/formatDate'
import { CalendarDrawer } from './compose/calendarDrawer'
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  isSameDay,
  isToday,
  startOfMonth,
  subMonths
} from 'date-fns'
import { motion, AnimatePresence } from 'framer-motion'

export const Calendar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | null>(null)

  const isEventDate = (date: Date): boolean => {
    return events.some((event) => isSameDay(new Date(event.date), date))
  }

  const isCurrentDate = (date: Date): boolean => {
    return isToday(date)
  }

  const handleDateClick = (date: Date) => {
    const clickedEvent = events.find((event) => isSameDay(new Date(event.date), date))

    setSelectedEvent(clickedEvent || null)
    setIsDrawerOpen(true)
  }

  const previousMonth = () => {
    setAnimationDirection('left')
    setSelectedDate((prevDate) => subMonths(prevDate, 1))
  }

  const nextMonth = () => {
    setAnimationDirection('right')
    setSelectedDate((prevDate) => addMonths(prevDate, 1))
  }

  const renderCalendar = () => {
    const startOfMonthDate = startOfMonth(selectedDate)
    const endOfMonthDate = endOfMonth(selectedDate)
    const dates = eachDayOfInterval({ start: startOfMonthDate, end: endOfMonthDate })

    return (
      <Grid templateColumns="repeat(7, 1fr)" w={'full'} gap={2} className="calendar">
        {dates.map((date) => (
          <Button
            key={date.toISOString()}
            variant="outline"
            borderWidth={isCurrentDate(date) ? '2px' : '0'}
            borderColor={'lightBrand.900'}
            bg={isEventDate(date) ? 'lightBrand.200' : 'gray.50'}
            _hover={{ bg: 'darkBrand.50', color: 'white' }}
            onClick={() => handleDateClick(date)}
          >
            {date.getDate()}
          </Button>
        ))}
      </Grid>
    )
  }

  return (
    <VStack w={'full'} p={4} gap={4} borderWidth={'2px'} borderColor={'gray.100'} rounded={20}>
      <Flex w={'full'} align="center" justify="space-between">
        <HStack maxH={'24px'}>
          <Text fontFamily={'Jost'} fontWeight={500}>
            {formatDate(selectedDate, 'MMMM yyyy')}
          </Text>
        </HStack>

        <HStack>
          <Button variant={'outline'} onClick={previousMonth} minW={'32px'} maxH={'32px'}>
            <ChevronLeftIcon />
          </Button>
          <Button variant={'outline'} onClick={nextMonth} minW={'32px'} maxH={'32px'}>
            <ChevronRightIcon />
          </Button>
        </HStack>
      </Flex>
      <AnimatePresence custom={animationDirection} mode="wait">
        <motion.div
          key={selectedDate.toISOString()}
          initial={{
            opacity: 0,
            x: animationDirection === 'left' ? '-100%' : '100%',
            width: '100%'
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: animationDirection === 'left' ? '100%' : '-100%'
          }}
          transition={{ duration: 0.3 }}
        >
          {renderCalendar()}
        </motion.div>
      </AnimatePresence>
      <CalendarDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
    </VStack>
  )
}
