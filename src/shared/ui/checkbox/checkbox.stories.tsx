import { useForm } from 'react-hook-form'

import { Checkbox } from '@/shared/ui/checkbox/Checkbox'
import { CheckboxControl } from '@/shared/ui/checkboxControl/CheckboxControl'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
    isRequired: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'components/Checkbox',
}

export default meta
type Story = StoryObj<typeof Checkbox>
type StoryControl = StoryObj<typeof CheckboxControl>

export const ControlStory: StoryControl = {
  args: {
    label: 'Checkbox Controlled',
  },
  name: 'Checkbox With Control',
  // render: () => {
  //   const { control } = useForm()

  //   return <CheckboxControl control={control} label={'Checkbox Control'} name={'checkboxControl'} />
  // },
}

export const DefaultStory: Story = {
  args: {
    isRequired: true,
    label: 'CheckBox label',
  },
  name: 'Default Checkbox',
}

export const ActiveStory: Story = {
  args: {
    checked: true,
    label: 'CheckBox label',
  },
  name: 'Active Checkbox',
}

export const DisabledStory: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Checkbox label',
  },
  name: 'Disabled Checkbox',
}

export const ErrorStory: Story = {
  args: {
    error: 'Some error occurred',
    label: 'Checkbox label',
  },
  name: 'Checkbox Error',
}
