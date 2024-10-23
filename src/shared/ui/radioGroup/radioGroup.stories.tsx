import { FormRadioGroup } from '@/shared/ui/radioGroup/RadioGroup'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FormRadioGroup> = {
  argTypes: {
    // color: {
    //   control: 'select',
    //   description: 'Color',
    // },
  },
  component: FormRadioGroup,
  tags: ['autodocs'],
  title: 'Components/FormRadioGroup',
}

export default meta

type Story = StoryObj<typeof FormRadioGroup>

export const CustomFormRadioGroup: Story = {
  args: {},
}
