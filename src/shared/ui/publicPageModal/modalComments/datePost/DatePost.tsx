import s from './datePost.module.scss'

type DatePostProps = {
  datePost: string
}

export const DatePost = ({ datePost }: DatePostProps) => {
  return <div className={s.date}>{datePost}</div>
}
