import type { Meta, StoryObj } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { ControlledRadioGroup } from '@/shared/ui/radioGroup/ControlledRadioGroup'

const meta = {
  component: ControlledRadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup/ControlledRadioGroup',
} satisfies Meta<typeof ControlledRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

type FormValues = {
  email: string
  gender: string
}

export const Primary: Story = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>()

  const onsubmit = (data: { gender: string }) => {
    console.log('data', data)
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <ControlledRadioGroup
        control={control}
        defaultValue={'female'}
        name={'gender'}
        options={[
          { label: 'Female', value: 'female' },
          { label: 'Male', value: 'male' },
        ]}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}

export const Disabled: Story = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>()

  const onsubmit = (data: { gender: string }) => {
    console.log('data', data)
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <ControlledRadioGroup
        control={control}
        defaultValue={'female'}
        disabled
        name={'gender'}
        options={[
          { label: 'Female', value: 'female' },
          { label: 'Male', value: 'male' },
        ]}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
