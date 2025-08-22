import { FormEvent } from 'react'
import s from '@/views/profileSettings/ui/accountManagement/accountManagement.module.scss'
import { Typography } from '@/shared/ui/typography'
import { FormRadioGroup } from '@/shared/ui/radioGroup'
import { RadioGroupBlockPropsType } from '@/features/payments'

export const RadioGroupBlockPayment = ({
  title,
  options,
  defaultValue,
  onChange,
  value,
}: RadioGroupBlockPropsType) => {
  const handleRadioChange = (value: string | FormEvent<HTMLDivElement>) => {
    if (typeof value === 'string') {
      onChange?.(value)
    }
  }
  return (
    <div className={s.block}>
      <Typography as={'label'} className={s.radioTitle} variant={'h3'}>
        {title}
      </Typography>
      <div className={s.radioGroupWrapp}>
        <FormRadioGroup
          onChange={handleRadioChange}
          className={s.radioGroup}
          defaultValue={defaultValue}
          value={value}
          options={options}
          orientation={'vertical'}
        />
      </div>
    </div>
  )
}
