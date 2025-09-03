export type PaymentRequestType = {
  value: string
  description: string
  subscriptionTerm: string
}

export type ActiveSubscriptionType = {
  userId: number
  subscriptionStart: string
  ExpireAt: string
  nextPayment: string
  autoPay: boolean
}

export interface SubscriptionDetail {
  subscriptionTerm: string
  amount: string
}
