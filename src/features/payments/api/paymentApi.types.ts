export type PaymentRequestType = {
  value: string
  description: string
  subscriptionTerm: string
}

export type ActiveSubscriptionType = {
  userId: number
  subscriptionStart: string
  subscription: string
  autoRenewal: boolean
}

export interface SubscriptionDetail {
  subscriptionTerm: string
  amount: string
}
