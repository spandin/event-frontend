import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const getMonthDeclension = (monthIndex: number) => {
  const months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
  ]
  return months[monthIndex]
}

export const formatDate = (date: Date, formatString: string) => {
  const monthIndex = date.getMonth()
  const monthDeclension = getMonthDeclension(monthIndex)
  const capitalizeMonth = capitalizeFirstLetter(monthDeclension)

  return format(date, formatString.replace('MMMM', capitalizeMonth), { locale: ru })
}
