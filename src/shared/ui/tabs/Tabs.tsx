import React from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

export type Tab = {
  disabled?: boolean
  title: string
  value: string
}

type TabsProps = {
  defaultValue?: string
  onValueChange?: (value: string) => void
  style?: React.CSSProperties
  tabs: Tab[]
  value: string
}

export const Tabs = (props: TabsProps): React.JSX.Element => {
  const { defaultValue, onValueChange, style, tabs, value } = props

  return (
    <RadixTabs.Root
      className={s.flex}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      style={style}
      value={value}
    >
      <RadixTabs.List>
        {tabs?.map(tab => (
          <RadixTabs.Trigger
            className={s.tabsTrigger}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
    </RadixTabs.Root>
  )
}
