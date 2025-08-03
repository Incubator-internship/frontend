import { ComponentPropsWithoutRef } from 'react'

import { useGetPaymentsQuery } from '@/app/api/payments/paymentsApi'
import { PaymentTable, Subscription } from '@/shared/ui/paymentTable/paymentTable'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const AccountPayments = ({ className, ...rest }: Props) => {
  const { data, isLoading, error } = useGetPaymentsQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error loading payments</div>
  }
  if (!data) {
    return <div>No payments data available</div>
  }

  console.log('data:', data)

  // const calculateEndDate = (startDate: string, term: string): string => {
  //   const date = new Date(startDate)
  //   const termValue = parseInt(term.match(/\d+/)?.[0] || '0')

  //   if (term.includes('day')) {
  //     date.setDate(date.getDate() + termValue)
  //   } else if (term.includes('month')) {
  //     date.setMonth(date.getMonth() + termValue)
  //   }

  //   const day = String(date.getDate()).padStart(2, '0')
  //   const month = String(date.getMonth() + 1).padStart(2, '0')
  //   const year = date.getFullYear()

  //   return `${day}.${month}.${year}`
  // }
  const calculateEndDate = (
    startDate: string | null | undefined,
    term: string | null | undefined
  ): string => {
    // 1. Проверяем startDate
    if (!startDate) {
      console.error('startDate is missing')

      return '' // или возвращаем дефолтную дату, например: return new Date().toISOString().split('T')[0];
    }

    // 2. Создаем объект Date и проверяем его валидность
    const date = new Date(startDate)

    if (isNaN(date.getTime())) {
      console.error('Invalid startDate format:', startDate)

      return startDate.split('T')[0] // Если невалидная дата, но строка имеет формат ISO
    }

    // 3. Обрабатываем term
    if (!term) {
      return date.toISOString().split('T')[0]
    }

    // 4. Извлекаем числовое значение из term
    const termMatch = term.match(/\d+/)
    const termValue = termMatch ? parseInt(termMatch[0], 10) : 0

    // 5. Вычисляем новую дату
    if (term.includes('day')) {
      date.setDate(date.getDate() + termValue)
    } else if (term.includes('month')) {
      date.setMonth(date.getMonth() + termValue)
    }

    // 6. Возвращаем результат в формате YYYY-MM-DD
    return date.toISOString().split('T')[0]
  }

  const payments: Subscription[] = data.map(payment => ({
    paymentDate: payment.subscriptionStart,
    endDate: calculateEndDate(payment.subscriptionStart, payment.subscriptionTerm),
    price: payment.amount,
    subscriptionType: payment.subscriptionTerm,
    paymentType: payment.IPaymentMethodData,
  }))

  return <PaymentTable data={payments} />
}
