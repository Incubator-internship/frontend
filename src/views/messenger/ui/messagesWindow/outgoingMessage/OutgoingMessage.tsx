import { Typography } from '@/shared/ui/typography'

import styles from './outgoingMessage.module.scss'

type Props = {
  message: string
  time: string
}

export default function OutgoingMessage({ message, time }: Props) {
  return (
    <div className={styles.message}>
      <Typography variant={'regularText14'}>{message}</Typography>
      <p className={styles.time}>{time}</p>
    </div>
  )
}
