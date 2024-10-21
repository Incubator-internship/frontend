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
      'h1',
      'h2',
      'h3',
      'h4',
      'body1',
      'body2',
      'subtitle1',
      'subtitle2',
      'caption',
      'overline',
      'link1',
      'link2',
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
              style={{ marginBottom: '20px', maxWidth: '300px', textAlign: 'center' }}
            >
              {variant} Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
            </Typography>
          </div>
        ))}
      </div>
    )
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

export const H4: Story = {
  args: {
    as: 'p',
    children: 'H4  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'h4',
  },
}

export const Body1: Story = {
  args: {
    as: 'p',
    children: 'body 1  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'body1',
  },
}

export const Subtitle1: Story = {
  args: {
    as: 'p',
    children: 'Subtitle 1  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'subtitle1',
  },
}

export const Body2: Story = {
  args: {
    as: 'p',
    children: 'Body 2  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'body2',
  },
}

export const Subtitle2: Story = {
  args: {
    as: 'p',
    children: 'Subtitle  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    as: 'p',
    children: 'Caption  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    as: 'p',
    children: 'Overline  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'white',
    style: { maxWidth: '300px', textAlign: 'center' },
    variant: 'overline',
  },
}

export const Link1: Story = {
  args: {
    as: 'a',
    children: 'Link 1  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'link',
    href: 'https://example.com',
    style: { maxWidth: '140px', textAlign: 'center' },
    target: '_blank',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    as: 'a',
    children: 'Link 2  Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    color: 'link',
    href: 'https://example.com',
    style: { maxWidth: '300px', textAlign: 'center' },
    target: '_blank',
    variant: 'link2',
  },
}
