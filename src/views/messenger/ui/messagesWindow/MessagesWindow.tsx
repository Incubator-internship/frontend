import ImageIcon from '@/shared/assets/icons/ImageIcon'
import Microphone from '@/shared/assets/icons/Microphone'
import { Input } from '@/shared/ui/input'

import styles from './messagesWindow.module.scss'

export default function MessagesWindow() {
  return (
    <div className={styles.messageWindow}>
      <div className={styles.inputContainer}>
        <Input placeholder={'Type Message|'} />
        <div className={styles.buttons}>
          <button type={'button'}>
            <Microphone />
          </button>
          <label>
            <ImageIcon />
            <input className={styles.inputFile} type={'file'} />
          </label>
        </div>
      </div>
    </div>
  )
}
