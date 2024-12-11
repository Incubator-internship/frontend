import s from './publicPageModal.module.scss'

import { ModalComments } from './modalComments'
import { ModalSlider } from './modalSlider'

export type PublicPageModalProps = {
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  title?: string
}
export const PublicPageModal = ({
  children,
  isOpen = true,
  onClose,
  title,
}: PublicPageModalProps) => {
  if (!isOpen) {
    return null
  }

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose?.()
    }
  }

  return (
    <div className={s.publicPageModule}>
      <div className={s.publicPageModule}>
        <ModalSlider />
        <ModalComments />
      </div>
    </div>
  )
}
