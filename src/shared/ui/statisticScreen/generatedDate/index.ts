import dayjs from 'dayjs'
export const GeneratedDate = (label: string) => {
  const now = dayjs()
  const capital = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  switch (label) {
    case 'Week':
      return {
        end: now.endOf('week').format('DD.MM.YYYY'),
        start: now.startOf('week').format('DD.MM.YYYY'),
      }
    case 'Month':
      return {
        end: '',
        start: capital(now.startOf('month').format('MMMM')),
      }
    default:
      return {
        end: '',
        start: '',
      }
  }
}
