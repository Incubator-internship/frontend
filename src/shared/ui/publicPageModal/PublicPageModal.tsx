import s from './publicPageModal.module.scss'

import { ModalComments } from './modalComments'
import { ModalSlider } from './modalSlider'
export const PublicPageModal = () => {
  return (
    <div className={s.publicPageModule}>
      <div className={s.publicPageModule}>
        <ModalSlider />
        <ModalComments />
      </div>
    </div>
  )
}
