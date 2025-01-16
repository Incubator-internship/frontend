import { Typography } from '@/shared/ui/typography'
import Image from 'next/image'

import styles from './incomingMessage.module.scss'

type Props = {
  img: string
  message: string
  time: string
}

export default function IncomingMessage({ img, message, time }: Props) {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.image}>
        <Image alt={'contact'} height={48} src={img} width={48} />
      </div>
      <div className={styles.message}>
        <Typography variant={'regularText14'}>{message}</Typography>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  )
}
