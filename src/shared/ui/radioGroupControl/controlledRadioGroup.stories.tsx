import type { Meta, StoryObj } from '@storybook/react'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { ControlledRadioGroup } from '@/shared/ui/radioGroupControl/ControlledRadioGroup'

type FormValues = {
  gender: string
}

const meta = {
  component: ControlledRadioGroup,
  decorators: Story => {
    const methods = useForm<FormValues>({
      defaultValues: {
        gender: 'male',
      },
    })

    const onSubmit: SubmitHandler<FormValues> = data => {
      console.log('Form submitted with:', data)
    }

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Story control={methods.control} />
          <Button type={'submit'}>Submit</Button>
        </form>
      </FormProvider>
    )
  },
  tags: ['autodocs'],
  title: 'Components/ControlledRadioGroup',
} satisfies Meta<typeof ControlledRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'gender',
    options: [
      { label: 'Female', value: 'female' },
      { label: 'Male', value: 'male' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    name: 'gender',
    options: [
      { label: 'Female', value: 'female' },
      { label: 'Male', value: 'male' },
    ],
  },
}
