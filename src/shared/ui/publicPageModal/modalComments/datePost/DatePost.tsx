import dayjs from 'dayjs'

import s from './datePost.module.scss'

type DatePostProps = {
  datePost?: string
}

export const DatePost = ({ datePost }: DatePostProps) => {
  const formattedDate = dayjs(datePost).format('MMMM D, YYYY')

  return <div className={s.date}>{formattedDate}</div>
}
