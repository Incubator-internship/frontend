import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import { useTranslations } from 'next-intl'

import s from './addPhotoErrorModal.module.scss'

type Props = {
  errorText: string
  setTextErrorModal: (error: string) => void
}

export const AddPhotoErrorModal = ({ errorText, setTextErrorModal }: Props) => {
  const t = useTranslations('AddPostModal')

  return (
    <div>
      <Typography className={s.modalText} variant={'regularText16'}>
        {errorText}
      </Typography>
      <Button onClick={() => setTextErrorModal('')}>{t('AddPhotoErrorBtn')}</Button>
    </div>
  )
}
