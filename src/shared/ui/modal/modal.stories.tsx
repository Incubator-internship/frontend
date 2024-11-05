import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '../button'
import { Typography } from '../typography'
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
  parameters: {
    group: 'Modal',
    title: 'Default',
  },
  render: () => {
    return (
      <div style={{ maxWidth: '380px' }}>
        <Modal title={'Email sent'}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography as={'p'} style={{}} variant={'body1'}>
              We have sent a link to confirm your email to epam@epam.com
            </Typography>
            <Button style={{ alignSelf: 'end', marginTop: '20px', padding: '6px 36px' }}>OK</Button>
          </div>
        </Modal>
      </div>
    )
  },
}

export const SuccessVariant: Story = {
  parameters: {
    group: 'Modal',
    title: 'Default',
  },
  render: () => {
    return (
      <div style={{ maxWidth: '380px' }}>
        <Modal title={'Success'}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography as={'p'} style={{}} variant={'body1'}>
              Payment was successfull
            </Typography>
            <Button style={{ marginTop: '50px' }}>OK</Button>
          </div>
        </Modal>
      </div>
    )
  },
}

export const ModalState: Story = {
  parameters: {
    group: 'Modal',
    title: 'Default',
  },
  render: () => {
    const [state, setState] = useState<boolean>(true)

    return (
      <div style={{ maxWidth: '380px' }}>
        <Modal isOpen={state} onClose={() => setState(!state)} title={'Unfollow'}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ alignItems: 'center', display: 'flex' }}>
              <img
                alt={'ava'}
                src={
                  'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo='
                }
                style={{ borderRadius: '50%', display: 'inline', height: '40px', width: '40px' }}
              />
              <Typography as={'p'} style={{ marginLeft: '15px' }} variant={'body1'}>
                Do you really want to unfollow from this user?
              </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
              <Button style={{ marginTop: '20px', padding: '6px 36px' }} variant={'transparent'}>
                Yes
              </Button>
              <Button style={{ marginLeft: '15px', marginTop: '20px', padding: '6px 36px' }}>
                No
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
}
