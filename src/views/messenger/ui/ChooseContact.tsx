import { Typography } from '@/shared/ui/typography'

import styles from './chooseContact.module.scss'

export default function ChooseContact() {
  return (
    <div className={styles.modal}>
      <Typography variant={'boldText14'}>Who you would like to talk to</Typography>
    </div>
  )
}
