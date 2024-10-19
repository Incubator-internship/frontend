import React from 'react'

type TabsProps = {
  children: React.ReactNode
}

export const Tabs = (props: TabsProps) => {
  const { children } = props

  return <div>{children}</div>
}
