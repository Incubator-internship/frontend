import { Typography } from '@/shared/ui/typography'
import { ContactType } from '@/views/messenger/ui/Messenger'
import { clsx } from 'clsx'
import Image from 'next/image'

import styles from './contact.module.scss'

interface Props {
  className?: string
  contact: ContactType
  handleClick: (id: string) => void
}

export default function Contact({ className, contact, handleClick }: Props) {
  return (
    <div
      className={clsx(styles.contactContainer, className)}
      onClick={() => handleClick(contact.id)}
    >
      <div className={styles.imageContainer}>
        <Image alt={'contact'} height={48} src={contact.img} width={48} />
      </div>
      <div className={styles.messageInfo}>
        <div className={styles.nameTimeContainer}>
          <Typography variant={'regularText14'}>{contact.name}</Typography>
          <span className={styles.messageColor}>{contact.time}</span>
        </div>
        <Typography className={styles.messageColor} variant={'smallText'}>
          {contact.message}
        </Typography>
      </div>
    </div>
  )
}
