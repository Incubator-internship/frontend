'use client'
import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import Arrow from '@/shared/assets/icons/Arrow'
import { SelectItem } from '@/shared/ui/select/selectItem/SelectItem'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

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
  onChange?: (value: string) => void
  placeholder?: string
  value?: string
  variant?: 'narrow' | 'wide'
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  (
    {
      className,
      disabled,
      items,
      label,
      onChange,
      placeholder,
      value,
      variant = 'narrow',
      ...rest
    }: SelectProps,
    ref
  ) => {
    const id = useId()
    const t = useTranslations('SelectLanguage')
    const languages = [
      { icon: FlagRus, title: t('Russian'), value: '1' },
      { icon: FlagUk, title: t('English'), value: '2' },
    ]

    const variantsSelect = () => (variant === 'narrow' ? languages : items)

    return (
      <div className={clsx(s.selectWrapper, className)}>
        {label && (
          <Typography
            as={'label'}
            className={clsx(disabled ? s.selectLabelDisabled : '')}
            htmlFor={id}
            variant={'body1'}
          >
            {label}
          </Typography>
        )}
        <RadixSelect.Root disabled={disabled} onValueChange={onChange} value={value} {...rest}>
          <RadixSelect.Trigger
            className={clsx(s.selectTrigger, variant === 'narrow' ? s.selectVariantNarrow : '')}
            id={id}
          >
            <RadixSelect.Value placeholder={placeholder || 'Placeholder'} />
            <RadixSelect.Icon className={s.selectArrowIcon}>
              <Arrow />
            </RadixSelect.Icon>
          </RadixSelect.Trigger>
          <RadixSelect.Portal>
            <RadixSelect.Content position={'popper'} sideOffset={0}>
              <RadixSelect.Viewport className={s.selectViewport}>
                <RadixSelect.Group>
                  {variantsSelect().map((variantSelect, index) => (
                    <SelectItem
                      className={className}
                      key={`${variantSelect.value}-${index}`}
                      ref={ref}
                      value={variantSelect.value}
                      variant={variant}
                    >
                      {variant === 'narrow' && (
                        <span className={sItem.selectItemIconLanguage}>
                          <img src={languages[index].icon.src} />
                        </span>
                      )}
                      {variantSelect.title}
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
