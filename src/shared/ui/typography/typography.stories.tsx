import { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx'

import s from './typography.module.scss'

import { Typography } from './'

const meta: Meta<typeof Typography> = {
  argTypes: {
    color: {
      control: 'select',
      description: 'Color',
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
}

export default meta

type Story = StoryObj<typeof Typography>

export const AllTypographyVariants: Story = {
  parameters: {
    group: 'All',
  },
  render: args => {
    const variantNames = [
      'large',
      'h1',
      'h2',
      'h3',
      'regularText16',
      'boldText16',
      'regularText14',
      'mediumText14',
      'boldText14',
      'smallText',
      'semiBoldSmallText',
      'regularLink',
      'smallLink',
    ]

    return (
      <div>
        {variantNames.map(variant => (
          <div
            key={variant}
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography
              {...args}
              className={clsx(s[variant])}
              style={{ marginBottom: '20px', maxWidth: '350px', textAlign: 'center' }}
            >
              {variant} Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
            </Typography>
          </div>
        ))}
      </div>
    )
  },
}

export const Large: Story = {
  args: {
    as: 'p',
    children: 'Large Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    as: 'p',
    children: 'H1  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px' },
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    as: 'p',
    children: 'H2  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    as: 'p',
    children: 'H3  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'h3',
  },
}
export const RegularText16: Story = {
  args: {
    as: 'p',
    children: 'Regular Text 16 Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'regularText16',
  },
}

export const BoldText16: Story = {
  args: {
    as: 'p',
    children: 'Bold Text 16 Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'boldText16',
  },
}

export const RegularText14: Story = {
  args: {
    as: 'p',
    children: 'Regular Text 14 Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'regularText14',
  },
}

export const MediumText14: Story = {
  args: {
    as: 'p',
    children: 'Medium Text 14 Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'mediumText14',
  },
}

export const BoldText14: Story = {
  args: {
    as: 'p',
    children: 'Bold Text 14 Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'boldText14',
  },
}

export const SmallText: Story = {
  args: {
    as: 'p',
    children: 'Small Text Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'smallText',
  },
}

export const SemiBoldSmallText: Story = {
  args: {
    as: 'p',
    children:
      'Semi-Bold Small Text Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'semiBoldSmallText',
  },
}

export const RegularLink: Story = {
  args: {
    as: 'a',
    children: 'Regular Link Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'regularLink',
  },
}

export const SmallLink: Story = {
  args: {
    as: 'a',
    children: 'Small Link Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'smallLink',
  },
}
