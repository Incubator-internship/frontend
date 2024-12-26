'use client'
import { useGetMeQuery } from '@/app/api/auth/authApi'
import { Input } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'
import ChooseContact from '@/views/messenger/ui/ChooseContact'
import { clsx } from 'clsx'

import styles from './messenger.module.scss'

export default function Messenger() {
  // const { data, isSuccess } = useGetMeQuery()

  // return (
  //   <div className={styles.pageContainer}>
  //     {isSuccess && (
  //       <div>
  //         <Typography className={styles.title}>Messenger</Typography>
  //         <div className={styles.massagesAreaContainer}>
  //           <div className={styles.contactsContainer}>Contacts</div>
  //           <div className={styles.messagesContainer}>Messages Area</div>
  //           <div>Contacts1</div>
  //           <div>Message Area 1</div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // )

  return (
    <div style={{ display: 'flex', flexGrow: 1, margin: 0 }}>
      <div className={styles.sidebar}></div>
      <div className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          <Typography className={styles.title}>Messenger</Typography>
          <div className={styles.table}>
            <div className={clsx(styles.contactsContainer, styles.tableCell)}>
              <Input className={styles.search} placeholder={'Input search'} variant={'search'} />
            </div>
            <div className={clsx(styles.messagesContainer, styles.tableCell)}></div>
            <div className={clsx(styles.tableCell)}>Contacts1</div>
            <div>
              <ChooseContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
