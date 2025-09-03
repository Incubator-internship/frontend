import React, { ComponentPropsWithoutRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

export type Tab = {
  content?: React.ReactNode
  disabled?: boolean
  title: string
  value: string
}

type TabsProps = {
  tabs: Tab[]
} & ComponentPropsWithoutRef<typeof RadixTabs.Root>

export const Tabs = (props: TabsProps): React.JSX.Element => {
  const { className, tabs, ...rest } = props

  return (
    <RadixTabs.Root className={clsx(s.flex, className)} {...rest}>
      <RadixTabs.List>
        {tabs?.map((tab, index) => (
          <RadixTabs.Trigger
            className={s.tabsTrigger}
            disabled={tab.disabled}
            key={`${tab.value}-${index}`}
            value={tab.value}
          >
            {tab.title}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {tabs?.map((tab, index) => (
        <RadixTabs.Content key={`${tab.value}-${index}`} value={tab.value}>
          {tab.content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  )
}
