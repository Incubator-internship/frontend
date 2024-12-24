'use client'
import { useGetMeQuery } from '@/app/api/auth/authApi'

export default function Messenger() {
  const { data, isSuccess } = useGetMeQuery()

  return <div>{isSuccess && <div>Messenger</div>}</div>
}
