import { Event } from '../types/events'

export const sortEventsByActiveAndDate = (array: Array<Event>) => {
  return array.sort((a, b) => {
    if (a.isActive && !b.isActive) {
      return -1
    } else if (!a.isActive && b.isActive) {
      return 1
    } else {
      return +new Date(b.date) - +new Date(a.date)
    }
  })
}
