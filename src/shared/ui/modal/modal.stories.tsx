import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '../button'
import { Modal } from './modal'

const meta = {
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'onClose' },
  },
  component: Modal,
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(context.args.isOpen)

      const handleClose = () => {
        setIsOpen(false)
        context.args.onClose?.()
      }

      return <Story args={{ ...context.args, isOpen, onClose: handleClose }} />
    },
  ],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

export type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    message: 'We have sent a link to confirm your email to epam@epam.com',
    title: 'Email sent',
  },
}

export const ModalState: Story = {
  parameters: {
    group: 'Modal',
    title: 'Modal',
  },
  render: () => {
    const [state, setState] = useState<boolean>(false)

    return (
      <>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          <Button onClick={() => setState(!state)} style={{ maxWidth: '200px' }} type={'button'}>
            Open modal
          </Button>
          <Modal
            isOpen={state}
            message={'We have sent a link to confirm your email to epam@epam.com'}
            onClose={() => setState(!state)}
            title={'Email sent'}
          />
        </div>
      </>
    )
  },
}
