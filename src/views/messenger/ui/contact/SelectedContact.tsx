import { Typography } from '@/shared/ui/typography'
import { clsx } from 'clsx'
import Image from 'next/image'

import styles from '@/views/messenger/ui/contact/contact.module.scss'

type Props = {
  img: string
  name: string
}

export default function SelectedContact({ img, name }: Props) {
  return (
    <div className={clsx(styles.contactContainer)}>
      <div className={styles.imageContainer}>
        <Image alt={'contact'} height={48} src={img} width={48} />
      </div>
      <div className={styles.messageInfo}>
        <div className={styles.nameTimeContainer}>
          <Typography variant={'regularText14'}>{name}</Typography>
        </div>
      </div>
    </div>
  )
}
