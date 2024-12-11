import s from './comment.module.scss'
export const Comment = () => {
  return (
    <div className={s.commentContainer}>
      <img className={s.image} />
      <div className={s.commentWithoutImg}>
        <span className={s.urlProfile}>URL PROFILE</span>
        <span className={s.comment}>
          Comment Text-Comment Text-Comment Text-Comment Text-Comment Text-Comment Text
        </span>
        <div className={s.date}>Date ago</div>
      </div>
    </div>
  )
}
