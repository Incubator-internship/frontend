import type { Preview } from '@storybook/react'
import enMessages from '../messages/en.json'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@/shared/styles/index.scss'

import { themes } from '@storybook/theming'
import { NextIntlClientProvider } from 'next-intl'

const preview: Preview = {
  decorators: [
    Story => (
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  initialGlobals: {
    locale: 'en',
    locales: {
      en: 'English',
      ru: 'Russian',
    },
  },
  parameters: {
    nextjs: { appDirectory: true },
    nextIntl: {
      locale: 'en',
      messages: enMessages,
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'Light',

          value: '#F7F9F2',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
