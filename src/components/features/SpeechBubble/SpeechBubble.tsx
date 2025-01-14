import { DateForUse, TimeForUse } from '@/hooks/useFormatDateAndTime'
import styles from './SpeechBubble.module.scss'
import { useEffect } from 'react'
import Container from '@/components/atoms/Container/Container'

interface SpeechBubbleProps {
  fromMe: boolean
  text: string
  nickname: string
  createdAt: string
}

function SpeechBubble({ fromMe = false, text, nickname, createdAt }: SpeechBubbleProps) {
  const month = DateForUse(createdAt?.split(' ')[0]!)[1]
  const date = DateForUse(createdAt?.split(' ')[0]!)[2]
  const hour = TimeForUse(createdAt?.split(' ')[1]!)[0]
  const minute = TimeForUse(createdAt?.split(' ')[1]!)[1]

  return fromMe ? (
    <div className={`${styles.speechBubble} ${styles.fromMe}`}>
      <div className={styles.text}>{text}</div>
      <Container justify="space-between">
        <div className={styles.information}>{nickname}</div>
        <div className={styles.information}>
          {month}/{date} {hour}:{minute}
        </div>
      </Container>
    </div>
  ) : (
    <div className={`${styles.speechBubble} ${styles.fromThem}`}>
      <div className={styles.text}>{text}</div>
      <Container justify="space-between">
        <div className={styles.information}>{nickname}</div>
        <div className={styles.information}>
          {month}/{date} {hour}:{minute}
        </div>
      </Container>
    </div>
  )
}

export default SpeechBubble
