import React, { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import styles from './dropdownMenu.module.scss'

type Item = {
  icon: ReactNode
  label: string
  onSelect: (event: Event) => void
}

type Props = {
  content: Item[]
  isModal?: boolean
}

const DropdownMenuDemo = ({ content, isModal }: Props) => {
  const contentItems = content.map(item => {
    return (
      <DropdownMenu.Item className={styles.Item} key={item.label} onSelect={item.onSelect}>
        <div className={styles.LeftSlot}>{item.icon}</div>
        {item.label}
      </DropdownMenu.Item>
    )
  })

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={styles.IconButton} type={'button'}>
          <DotsHorizontalIcon height={25} width={25} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={clsx(styles.Content, { [styles.ifUseModal]: isModal })}
          sideOffset={5}
        >
          {contentItems}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
