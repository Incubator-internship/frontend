import ImageIcon from '@/shared/assets/icons/ImageIcon'
import Microphone from '@/shared/assets/icons/Microphone'
import { Input } from '@/shared/ui/input'

import styles from './typeMessage.module.scss'

export default function TypeMessage() {
  const handleClick = () => {}

  return (
    <div className={styles.inputContainer}>
      <Input placeholder={'Type Message|'} />
      <div className={styles.buttons}>
        <button onClick={handleClick} type={'button'}>
          <Microphone />
        </button>
        <label>
          <ImageIcon />
          <input className={styles.inputFile} type={'file'} />
        </label>
      </div>
    </div>
  )
}
