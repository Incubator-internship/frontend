import type { Meta, StoryObj } from '@storybook/react'

import StoreProvider from '@/app/config/store/storeProvider'
import { SignInForm } from '@/shared/ui/forms/signIn'
import { clsx } from 'clsx'

import s from '@/pages/signin/ui/signInPage.module.scss'

import SignInPage from './page'

const meta = {
  component: SignInPage,
  decorators: [
    Story => (
      <StoreProvider>
        <Story />
      </StoreProvider>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  title: 'Pages/SignIn',
} satisfies Meta<typeof SignInPage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {}

export const PageWithError: Story = () => {
  const isError = true

  const handleSubmit = () => {
    console.log('onSubmit')
  }

  return (
    <div className={clsx(s.formWrapper)}>
      <SignInForm isError={isError} onSubmit={handleSubmit} />
    </div>
  )
}
