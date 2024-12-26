'use client'
import { useGetMeQuery } from '@/app/api/auth/authApi'
import { Input } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'
import ChooseContact from '@/views/messenger/ui/chooseContact/ChooseContact'
import Contact from '@/views/messenger/ui/contact/Contact'
import { clsx } from 'clsx'

import styles from './messenger.module.scss'

export default function Messenger() {
  const { data, isSuccess } = useGetMeQuery()

  return (
    <div style={{ display: 'flex', flexGrow: 1, margin: 0 }}>
      <div className={styles.sidebar}></div>
      {isSuccess && (
        <div className={styles.pageContainer}>
          <div className={styles.contentWrapper}>
            <Typography className={styles.title}>Messenger</Typography>
            <div className={styles.table}>
              <div className={clsx(styles.contactsContainer, styles.tableCell)}>
                <Input className={styles.search} placeholder={'Input search'} variant={'search'} />
              </div>
              <div className={clsx(styles.messagesContainer, styles.tableCell)}></div>
              <div className={clsx(styles.tableCell)}>
                <Contact
                  img={'/#'}
                  message={'last message'}
                  name={'Ekaterina Ivanova'}
                  time={'time'}
                />
              </div>
              <div className={clsx(styles.center)}>
                <ChooseContact />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
