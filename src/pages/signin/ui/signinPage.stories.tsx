import type { Meta, StoryObj } from '@storybook/react'

import SignInPage from './page'

const meta = {
  component: SignInPage,
  tags: ['autodocs'],
  title: 'Pages/SignIn',
} satisfies Meta<typeof SignInPage>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {}
