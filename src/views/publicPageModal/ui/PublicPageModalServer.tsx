import { Photos } from '@/app/api/posts/postsApi.types'
import Close from '@/shared/assets/icons/Close'
import { Carousel } from '@/shared/ui/carousel'
import { ModalComments } from '@/shared/ui/modalComments'

import s from './publicPageModal.module.scss'

type PublicPageModalServerProps = {
  photos: Photos[]
  postData: any
  onClose: () => void
}

export const PublicPageModalServer = ({
  photos,
  postData,
  onClose,
}: PublicPageModalServerProps) => {
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose?.()
    }
  }

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.publicPageModule} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} type={'button'}>
          <Close className={s.close}></Close>
        </button>
        <Carousel photos={photos} />
        <ModalComments onClose={onClose} post={postData} />
      </div>
    </div>
  )
}
