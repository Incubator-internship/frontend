import { Meta, StoryObj } from '@storybook/react'

import { FormRadioGroup } from './'

const meta: Meta<typeof FormRadioGroup> = {
  component: FormRadioGroup,
  tags: ['autodocs'],
  title: 'Components/FormRadioGroup',
}

export default meta

type Story = StoryObj<typeof FormRadioGroup>

export const CustomFormRadioGroup: Story = {
  args: {
    defaultValue: 'Value Two',
    options: [
      { label: 'Value One', value: 'Value One' },
      { label: 'Value Two', value: 'Value Two' },
    ],
  },
}

export const DisabledFormRadioGroup: Story = {
  args: {
    defaultValue: 'Value One',
    disabled: true,
    options: [
      { label: 'Value One', value: 'Value One' },
      { label: 'Value Two', value: 'Value Two' },
      { label: 'Value Three', value: 'Value Three' },
    ],
    orientation: 'horizontal',
  },
}

export const VerticalFormRadioGroup: Story = {
  args: {
    defaultValue: 'Value One',
    options: [
      { label: 'Value One', value: 'Value One' },
      { label: 'Value Two', value: 'Value Two' },
      { label: 'Value Three', value: 'Value Three' },
    ],
    orientation: 'vertical',
  },
}
