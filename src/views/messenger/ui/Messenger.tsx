'use client'
import { useGetMeQuery } from '@/app/api/auth/authApi'
import { Typography } from '@/shared/ui/typography'
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
          <div className={styles.messengerContainer}>
            <div className={clsx(styles.contactsContainer, styles.tableCell)}>
              <div>Input search</div>
            </div>
            <div className={clsx(styles.messagesContainer, styles.tableCell)}>Messages Area</div>
            <div className={clsx(styles.tableCell)}>Contacts1</div>
            <div>Message Area 1</div>
          </div>
        </div>
      </div>
    </div>
  )
}
