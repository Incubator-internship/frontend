import { ComponentPropsWithoutRef } from 'react'

import { FormRadioGroup } from '@/shared/ui/radioGroup'
import { Typography } from '@/shared/ui/typography'
import { clsx } from 'clsx'

import s from './accountManagement.module.scss'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const AccountManagement = ({ className, ...rest }: Props) => {
  return (
    <div className={clsx(s.profileManagement, className)}>
      <div className={s.block}>
        <Typography as={'label'} className={s.radioGroupTitle} variant={'h3'}>
          Account type:
        </Typography>
        <div className={s.radioGroupWrapp}>
          <FormRadioGroup
            className={s.radioGroup}
            defaultValue={'personal'}
            options={[
              { label: 'Personals', value: 'personal' },
              { label: 'Business', value: 'business' },
            ]}
            orientation={'vertical'}
          />
        </div>
      </div>
    </div>
  )
}
