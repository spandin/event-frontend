import { format } from 'date-fns'
import { ru, enUS, Locale } from 'date-fns/locale'

export const timestampToDate = (unixTimestamp: number, locale = 'ru-Ru') => {
  const milliseconds = unixTimestamp * 1000
  const date = new Date(milliseconds)
  const locales: { [key: string]: Locale } = {
    'ru-RU': ru,
    'en-US': enUS
  }
  const selectedLocale = locales[locale] || enUS
  const formattedDate = format(date, 'dd.MM.yyyy', { locale: selectedLocale })
  return formattedDate
}
