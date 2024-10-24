import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { SelectItem } from '@/shared/ui/select/selectItem/SelectItem'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

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
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>
export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
  ({ className, disabled, items, label, placeholder, ...rest }: SelectProps, ref) => {
    const id = useId()

    return (
      <div className={clsx(s.SelectWrapper, className)}>
        {label && (
          <Typography
            as={'label'}
            className={clsx(s.SelectLabel, disabled ? s.SelectLabelDisabled : '')}
            htmlFor={id}
            variant={'body1'}
          >
            {label}
          </Typography>
        )}
        <RadixSelect.Root disabled={disabled} {...rest}>
          <RadixSelect.Trigger className={clsx(s.SelectTrigger, className)} id={id}>
            <RadixSelect.Value className={className} placeholder={'Hello'} />
            <RadixSelect.Icon />
            {/* <ArrowDown/> */}
          </RadixSelect.Trigger>
          <RadixSelect.Portal>
            <RadixSelect.Content position={'popper'} sideOffset={0}>
              <RadixSelect.Viewport className={s.SelectViewport}>
                <RadixSelect.Group className={s.SelectGroup}>
                  {items.map((item, index) => (
                    <SelectItem
                      className={className}
                      key={`${item.value}-${index}`}
                      ref={ref}
                      value={item.value}
                    >
                      {item.title}
                    </SelectItem>
                  ))}
                </RadixSelect.Group>
              </RadixSelect.Viewport>
              {/* <ArrowUp /> */}
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </div>
    )
  }
)
