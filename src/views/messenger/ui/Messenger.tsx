'use client'
import { useGetMeQuery } from '@/app/api/auth/authApi'
import { Input } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'
import ChooseContact from '@/views/messenger/ui/chooseContact/ChooseContact'
import Contact from '@/views/messenger/ui/contact/Contact'
import { clsx } from 'clsx'
import { string } from 'zod'

import styles from './messenger.module.scss'

interface ContactType {
  img: string
  message: string
  name: string
  time: string
}

const contacts: ContactType[] = [
  { img: '/#', message: 'last message', name: 'Ekaterina Ivanova', time: 'time' },
  { img: '/#', message: 'last message', name: 'Ivan', time: 'time' },
  { img: '/#', message: 'last message', name: 'Petr', time: 'time' },
  { img: '/#', message: 'last message', name: 'Mariya', time: 'time' },
  { img: '/#', message: 'last message', name: 'Nataliya', time: 'time' },
  { img: '/#', message: 'last message', name: 'Anna', time: 'time' },
  { img: '/#', message: 'last message', name: 'Alex', time: 'time' },
  { img: '/#', message: 'last message', name: 'Kseniya', time: 'time' },
  { img: '/#', message: 'last message', name: 'Anatoli', time: 'time' },
  { img: '/#', message: 'last message', name: 'Timyr', time: 'time' },
  { img: '/#', message: 'last message', name: 'Daniil', time: 'time' },
  { img: '/#', message: 'last message', name: 'Nikita', time: 'time' },
]

export default function Messenger() {
  const { data, isSuccess } = useGetMeQuery()
  const contactList = contacts.map((contact: ContactType) => {
    return (
      <Contact
        img={contact.img}
        key={contact.name}
        message={contact.message}
        name={contact.name}
        time={contact.time}
      />
    )
  })

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
              <div className={clsx(styles.tableCell)}>{contactList}</div>
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
