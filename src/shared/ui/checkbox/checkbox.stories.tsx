import { Checkbox } from '@/shared/ui/checkbox/Checkbox'
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
