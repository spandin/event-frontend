import { EventsCard } from '@/entities/Events'
import { events } from '@/shared/api/mockEvents'
import { Text } from '@chakra-ui/react'

export const EventsList = () => {
  const renderedEvents: JSX.Element[] = []

  const currentDateTime = new Date()

  const activeEvents = events.filter((event) => event.isActive)
  const futureEvents = events.filter(
    (event) => !event.isActive && new Date(event.date * 1000) > currentDateTime
  )
  const pastEvents = events.filter(
    (event) => !event.isActive && new Date(event.date * 1000) <= currentDateTime
  )

  if (activeEvents.length > 0) {
    renderedEvents.push(
      <Text key="activeText" w={'full'} fontWeight={600} fontSize={'sm'} textAlign={'start'}>
        Активные:
      </Text>
    )
    activeEvents
      .sort((a, b) => +new Date(b.date * 1000) - +new Date(a.date * 1000))
      .forEach((event) => {
        renderedEvents.push(<EventsCard key={event.id} event={event} />)
      })
  }

  if (futureEvents.length > 0) {
    renderedEvents.push(
      <Text key="futureText" w={'full'} fontWeight={600} fontSize={'sm'} textAlign={'start'}>
        Будущие:
      </Text>
    )
    futureEvents
      .sort((a, b) => +new Date(a.date * 1000) - +new Date(b.date * 1000))
      .forEach((event) => {
        renderedEvents.push(<EventsCard key={event.id} event={event} />)
      })
  }

  if (pastEvents.length > 0) {
    renderedEvents.push(
      <Text key="pastText" w={'full'} fontWeight={600} fontSize={'sm'} textAlign={'start'}>
        Прошедшие:
      </Text>
    )
    pastEvents
      .sort((a, b) => +new Date(b.date * 1000) - +new Date(a.date * 1000))
      .forEach((event) => {
        renderedEvents.push(<EventsCard key={event.id} event={event} />)
      })
  }

  return renderedEvents
}
