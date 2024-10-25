import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { Arrow } from '@/shared/assets/icons'
import { SelectItem } from '@/shared/ui/select/selectItem/SelectItem'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

import FlagRus from '../../assets/svg/Flag Russia.svg'
import { Typography } from '../typography'
type selectItem = {
  title: string
  value: string
}
type variant = 'narrow' | 'wide'

export type SelectProps = {
  className?: string
  disabled?: boolean
  icon?: React.ReactNode
  items: selectItem[]
  label?: string
  placeholder?: string
  variant?: variant
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  (
    {
      className,
      disabled,
      icon,
      items,
      label,
      placeholder,
      variant = 'narrow',
      ...rest
    }: SelectProps,
    ref
  ) => {
    const id = useId()

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
                  {items.map((item, index) => (
                    <SelectItem
                      className={className}
                      icon={variant === 'narrow' && <Arrow />}
                      key={`${item.value}-${index}`}
                      ref={ref}
                      value={item.value}
                      variant={variant}
                    >
                      {item.title}
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
