import { useForm } from 'react-hook-form'

import { Meta, StoryObj } from '@storybook/react'

import { SelectController } from './SelectController'

const meta = {
  component: SelectController,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof SelectController>

export default meta

type Story = StoryObj<typeof meta>

const SelectItems = [
  { title: 'Option 1', value: '1' },
  { title: 'Option 2', value: '2' },
  { title: 'Option 3', value: '3' },
]

const SelectItemsNarrow = [
  { title: 'Russian', value: '1' },
  { title: 'English', value: '2' },
]

export const SelectControllerDefault: Story = {
  args: {
    items: SelectItems,
    name: 'selectControllerDefault',
  },
  render: () => {
    const { control } = useForm()

    return (
      <SelectController
        control={control}
        items={SelectItems}
        name={'selectControllerDefault'}
        placeholder={'Select an option'}
        variant={'wide'}
      />
    )
  },
}

export const SelectControllerNarrow: Story = {
  args: {
    items: SelectItemsNarrow,
    name: 'selectControllerNarrow',
  },
  render: () => {
    const { control } = useForm()

    return (
      <SelectController
        control={control}
        items={SelectItemsNarrow}
        name={'selectControllerNarrow'}
        placeholder={'Language'}
        variant={'narrow'}
      />
    )
  },
}
