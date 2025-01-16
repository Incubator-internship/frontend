import IncomingMessage from '@/views/messenger/ui/messagesWindow/incomingMessage/IncomingMessage'
import OutgoingMessage from '@/views/messenger/ui/messagesWindow/outgoingMessage/OutgoingMessage'
import TypeMessage from '@/views/messenger/ui/messagesWindow/typeMessage/TypeMessage'

import styles from './messagesWindow.module.scss'

export default function MessagesWindow() {
  return (
    <div className={styles.messageWindow}>
      <div className={styles.messages}>
        <IncomingMessage img={'/#'} message={'Hello!'} time={'time'} />
        <OutgoingMessage
          message={'Hi! I’m fine!\n' + 'Did you go into space yesterday? :D'}
          time={'time'}
        />
        <IncomingMessage img={'/#'} message={'Hello!'} time={'time'} />
        <OutgoingMessage
          message={'Hi! I’m fine!\n' + 'Did you go into space yesterday? :D'}
          time={'time'}
        />
        <IncomingMessage img={'/#'} message={'Hello!'} time={'time'} />
        <OutgoingMessage
          message={'Hi! I’m fine!\n' + 'Did you go into space yesterday? :D'}
          time={'time'}
        />
        <IncomingMessage img={'/#'} message={'Hello!'} time={'time'} />
        <OutgoingMessage
          message={'Hi! I’m fine!\n' + 'Did you go into space yesterday? :D'}
          time={'time'}
        />
      </div>

      <TypeMessage />
    </div>
  )
}
