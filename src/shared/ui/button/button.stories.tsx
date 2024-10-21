import type { Meta, StoryObj } from '@storybook/react'

import Image from 'next/image'

import russianFlag from '../../assets/svg/Flag Russia.svg'
import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Transparent: Story = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'transparent',
  },
}

export const ButtonWithIcon: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          alt={'English Flag'}
          height={24}
          src={russianFlag}
          style={{ marginRight: '8px' }}
          width={24}
        />
        English
      </div>
    ),
    disabled: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    disabled: false,
    fullWidth: false,
    variant: 'primary',
  },
}
