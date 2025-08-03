export type cardType = {
  number: string
  csc: string
  expiry_year: string
  expiry_month: string
  cardholder: string
}

export type paymentsRequest = {
  value: string
  description: string
  type: string
  card: cardType
  subscriptionTerm: string
}

export type paymentsResponse = {
  userId: number
  payid: number
  payIdYoo: string
  status: string
  amount: string
  IPaymentMethodData: string
  subscriptionStart: string
  subscriptionTerm: string
}
