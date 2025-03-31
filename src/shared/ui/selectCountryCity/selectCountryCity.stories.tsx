import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Meta, StoryObj } from '@storybook/react'

import SelectCountryCity from './SelectCountryCity'

const meta: Meta<typeof SelectCountryCity> = {
  component: SelectCountryCity,
  decorators: [
    Story => {
      const methods = useForm({
        defaultValues: {
          city: '',
          country: '',
        },
      })

      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      )
    },
  ],
  tags: ['autodocs'],
  title: 'Components/SelectCountryCity',
}

export default meta

type Story = StoryObj<typeof SelectCountryCity>

export const SelectDefault: Story = {
  args: {
    cityLabel: 'Select your city',
    countryLabel: 'Select your country',
  },
}
