import { Typography } from '@/shared/ui/typography'
import Image from 'next/image'

import styles from './contact.module.scss'

interface Props {
  img: string
  message: string
  name: string
  time: string
}

export default function Contact({ img, message, name, time }: Props) {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.imageContainer}>
        <Image alt={'contact'} height={48} src={img} width={48} />
      </div>
      <div className={styles.messageInfo}>
        <div className={styles.nameTimeContainer}>
          <Typography variant={'regularText14'}>{name}</Typography>
          <span className={styles.messageColor}>{time}</span>
        </div>
        <Typography className={styles.messageColor} variant={'smallText'}>
          {message}
        </Typography>
      </div>
    </div>
  )
}
