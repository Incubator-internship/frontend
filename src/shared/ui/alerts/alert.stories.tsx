import { Meta, StoryObj } from '@storybook/react'

import { Alert } from './Alert'

const meta = {
  component: Alert,
  tags: ['autodocs'],
  title: 'Components/Alert',
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const AlertVariant: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div>
          <Alert title={'Your settings are saved'} type={'success'} />
        </div>
        <div>
          <Alert title={'Error! Server is not available'} type={'error'} />
        </div>
      </div>
    )
  },
}

export const AlertSuccess: Story = {
  args: {
    title: 'Your settings are saved',
    type: 'success',
  },
}

export const AlertError: Story = {
  args: {
    title: 'Error! Server is not available',
    type: 'error',
  },
}
