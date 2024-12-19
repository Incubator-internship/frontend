import s from './comment.module.scss'
type CommentProps = {
  text?: string
}

export const Comment = ({ text }: CommentProps) => {
  return <span className={s.comment}>{text}</span>
}
