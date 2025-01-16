'use client'
import { ChangeEvent, useState } from 'react'

import { useGetMeQuery } from '@/app/api/auth/authApi'
import { Input } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'
import Contact from '@/views/messenger/ui/contact/Contact'
import SelectedContact from '@/views/messenger/ui/contact/SelectedContact'
import ChooseContact from '@/views/messenger/ui/messagesWindow/chooseContact/ChooseContact'
import MessagesWindow from '@/views/messenger/ui/messagesWindow/messagesWindow/MessagesWindow'
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
  isSelected: boolean
}

const contacts: UIContactType[] = [
  {
    id: '1',
    img: '/#',
    isSelected: false,
    message: 'last message',
    name: 'Ekaterina Ivanova',
    time: 'time',
  },
  { id: '2', img: '/#', isSelected: false, message: 'last message', name: 'Ivan', time: 'time' },
  { id: '3', img: '/#', isSelected: false, message: 'last message', name: 'Petr', time: 'time' },
  { id: '4', img: '/#', isSelected: false, message: 'last message', name: 'Mariya', time: 'time' },
  {
    id: '5',
    img: '/#',
    isSelected: false,
    message: 'last message',
    name: 'Nataliya',
    time: 'time',
  },
  { id: '6', img: '/#', isSelected: false, message: 'last message', name: 'Anna', time: 'time' },
  { id: '7', img: '/#', isSelected: false, message: 'last message', name: 'Alex', time: 'time' },
  { id: '8', img: '/#', isSelected: false, message: 'last message', name: 'Kseniya', time: 'time' },
  { id: '9', img: '/#', isSelected: false, message: 'last message', name: 'Anatoli', time: 'time' },
  { id: '10', img: '/#', isSelected: false, message: 'last message', name: 'Timyr', time: 'time' },
  { id: '11', img: '/#', isSelected: false, message: 'last message', name: 'Daniil', time: 'time' },
  { id: '12', img: '/#', isSelected: false, message: 'last message', name: 'Nikita', time: 'time' },
]

export default function Messenger() {
  const { data, isSuccess } = useGetMeQuery()
  const [uiContacts, setUiContacts] = useState(contacts)
  const [selectedContact, setSelectedContact] = useState<UIContactType | undefined>(undefined)

  const selectContact = (id: string) => {
    setUiContacts(
      contacts.map(contact =>
        contact.id === id ? { ...contact, isSelected: true } : { ...contact, isSelected: false }
      )
    )

    setSelectedContact(contacts.find(contact => contact.id === id))
  }

  const contactList = uiContacts.map((contact: UIContactType) => {
    return (
      <Contact
        className={contact.isSelected ? styles.selectedContact : ''}
        contact={contact}
        handleClick={selectContact}
        key={contact.name}
      />
    )
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
              <div className={clsx(styles.contactsContainer, styles.tableItem)}>
                <Input
                  className={styles.search}
                  onChange={handlerSearch}
                  placeholder={'Input search'}
                  variant={'search'}
                />
              </div>
              <div className={clsx(styles.messagesContainer, styles.tableItem)}>
                {selectedContact && (
                  <SelectedContact img={selectedContact.img} name={selectedContact.name} />
                )}
              </div>
              <div className={clsx(styles.tableItem)}>{contactList}</div>
              <div className={clsx(styles.messagesColumn)}>
                {selectedContact ? <MessagesWindow /> : <ChooseContact />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
