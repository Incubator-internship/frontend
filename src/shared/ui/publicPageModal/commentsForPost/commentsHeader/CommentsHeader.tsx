import Close from '@/shared/assets/icons/Close'
import { Typography } from '@/shared/ui/typography'

import s from './commentsHeader.module.scss'
export const CommentsHeader = () => {
  return (
    <>
      <div className={s.head}>
        <Typography as={'h2'}>title</Typography>
        <button onClick={() => {}} type={'button'}>
          <Close className={s.close}></Close>
        </button>
      </div>
    </>
  )
}
