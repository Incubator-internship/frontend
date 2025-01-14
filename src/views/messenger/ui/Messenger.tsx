'use client'
import { ChangeEvent, useState } from 'react'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { useGetUsersQuery } from '@/app/api/inctagramApi'
import { Input } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'
import ChooseContact from '@/views/messenger/ui/chooseContact/ChooseContact'
import Contact from '@/views/messenger/ui/contact/Contact'
import { clsx } from 'clsx'

import styles from './messenger.module.scss'

export interface ContactType {
  id: string
  img: string
  message: string
  name: string
  time: string
}

export interface UIContactType extends ContactType {
  isClicked: boolean
}

const contacts: UIContactType[] = [
  {
    id: '1',
    img: '/#',
    isClicked: false,
    message: 'last message',
    name: 'Ekaterina Ivanova',
    time: 'time',
  },
  { id: '2', img: '/#', isClicked: false, message: 'last message', name: 'Ivan', time: 'time' },
  { id: '3', img: '/#', isClicked: false, message: 'last message', name: 'Petr', time: 'time' },
  { id: '4', img: '/#', isClicked: false, message: 'last message', name: 'Mariya', time: 'time' },
  { id: '5', img: '/#', isClicked: false, message: 'last message', name: 'Nataliya', time: 'time' },
  { id: '6', img: '/#', isClicked: false, message: 'last message', name: 'Anna', time: 'time' },
  { id: '7', img: '/#', isClicked: false, message: 'last message', name: 'Alex', time: 'time' },
  { id: '8', img: '/#', isClicked: false, message: 'last message', name: 'Kseniya', time: 'time' },
  { id: '9', img: '/#', isClicked: false, message: 'last message', name: 'Anatoli', time: 'time' },
  { id: '10', img: '/#', isClicked: false, message: 'last message', name: 'Timyr', time: 'time' },
  { id: '11', img: '/#', isClicked: false, message: 'last message', name: 'Daniil', time: 'time' },
  { id: '12', img: '/#', isClicked: false, message: 'last message', name: 'Nikita', time: 'time' },
]

export default function Messenger() {
  const { data, isSuccess } = useGetMeQuery()
  const [uiContacts, setUiContacts] = useState(contacts)

  const contactClick = (id: string) => {
    const selectedContact = contacts.find(contact => contact.id === id)
  }
  const contactList = uiContacts.map((contact: ContactType) => {
    return <Contact contact={contact} handleClick={contactClick} key={contact.name} />
  })

  const handlerSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setUiContacts(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    )
  }

  return (
    <div style={{ display: 'flex', flexGrow: 1, margin: 0 }}>
      <div className={styles.sidebar}></div>
      {isSuccess && (
        <div className={styles.pageContainer}>
          <div className={styles.contentWrapper}>
            <Typography className={styles.title}>Messenger</Typography>
            <div className={styles.table}>
              <div className={clsx(styles.contactsContainer, styles.tableCell)}>
                <Input
                  className={styles.search}
                  onChange={handlerSearch}
                  placeholder={'Input search'}
                  variant={'search'}
                />
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
