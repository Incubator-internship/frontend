import React from 'react'

import { Meta, StoryFn, StoryObj } from '@storybook/react'

import s from './scroll.module.scss'

import { Typography } from '../typography'
import { Scroll, ScrollProps, itemsArray } from './Scroll'

const meta = {
  argTypes: {
    height: { control: 'text' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    width: { control: 'text' },
  },
  component: Scroll,
  tags: ['autodocs'],
  title: 'Components/Scroll',
} satisfies Meta<typeof Scroll>

export default meta

type Story = StoryObj<typeof meta>

const ScrollItems: itemsArray[] = [
  { title: 'Option 1', value: '1' },
  { title: 'Option 2', value: '2' },
  { title: 'Option 3', value: '3' },
  { title: 'Option 4', value: '4' },
  { title: 'Option 5', value: '5' },
  { title: 'Option 6', value: '6' },
  { title: 'Option 7', value: '7' },
  { title: 'Option 8', value: '8' },
  { title: 'Option 9', value: '9' },
  { title: 'Option 10', value: '10' },
  { title: 'Option 11', value: '11' },
]

const ScrollStories: StoryFn<ScrollProps> = (args: ScrollProps) => (
  <div>
    <Scroll {...args}>
      {args.items.map((item: itemsArray, index: number) => (
        <Typography as={'div'} className={s.itemScroll} key={`${item.value}-${index}`}>
          {item.title}
        </Typography>
      ))}
    </Scroll>
  </div>
)

export const ScrollVertical: Story = {
  args: {
    height: '157px',
    items: ScrollItems,
    orientation: 'vertical',
    width: '200px',
  },
  render: ScrollStories,
}

export const ScrollHorizontal: Story = {
  args: {
    height: '157px',
    items: ScrollItems,
    orientation: 'horizontal',
    width: '200px',
  },
  render: ScrollStories,
}
