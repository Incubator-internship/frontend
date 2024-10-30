import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import Arrow from '@/shared/assets/icons/Arrow'
import { SelectItem } from '@/shared/ui/select/selectItem/SelectItem'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'
import sItem from './selectItem/selectItem.module.scss'

import FlagUk from '../..//assets/svg/Flag United Kingdom.svg'
import FlagRus from '../../assets/svg/Flag Russia.svg'
import { Typography } from '../typography'

type selectItem = {
  title: string
  value: string
}

export type SelectProps = {
  className?: string
  disabled?: boolean
  items: selectItem[]
  label?: string
  placeholder?: string
  variant?: 'narrow' | 'wide'
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  (
    { className, disabled, items, label, placeholder, variant = 'narrow', ...rest }: SelectProps,
    ref
  ) => {
    const id = useId()
    const languages = [
      { icon: FlagRus, title: 'Russian', value: '1' },
      { icon: FlagUk, title: 'English', value: '2' },
    ]

    const variantSelect = () => (variant === 'narrow' ? languages : items)

    return (
      <div className={clsx(s.SelectWrapper, className)}>
        {label && (
          <Typography
            as={'label'}
            className={clsx(disabled ? s.SelectLabelDisabled : '')}
            htmlFor={id}
            variant={'body1'}
          >
            {label}
          </Typography>
        )}
        <RadixSelect.Root disabled={disabled} {...rest}>
          <RadixSelect.Trigger
            className={clsx(
              s.SelectTrigger,
              variant === 'narrow' ? s.SelectVariantNarrow : '',
              className
            )}
            id={id}
          >
            <RadixSelect.Value placeholder={placeholder || 'Placeholder'} />
            <RadixSelect.Icon className={s.SelectArrowIcon}>
              <Arrow />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>
          <RadixSelect.Portal>
            <RadixSelect.Content position={'popper'} sideOffset={0}>
              <RadixSelect.Viewport className={s.SelectViewport}>
                <RadixSelect.Group>
                  {variantSelect().map((varS, index) => (
                    <SelectItem
                      className={className}
                      key={`${varS.value}-${index}`}
                      ref={ref}
                      value={varS.value}
                      variant={variant}
                    >
                      {variant === 'narrow' && (
                        <span className={sItem.SelectItemIconLanguage}>
                          <img src={languages[index].icon.src} />
                        </span>
                      )}
                      {varS.title}
                    </SelectItem>
                  ))}
                </RadixSelect.Group>
              </RadixSelect.Viewport>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </div>
    )
  }
)
