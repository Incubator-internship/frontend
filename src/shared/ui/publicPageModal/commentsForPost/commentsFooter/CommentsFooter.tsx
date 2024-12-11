import s from './commentsFooter.module.scss'
export const CommentsFooter = () => {
  return (
    <div className={s.commentsFooter}>
      <div className={s.containerLikes}>
        <div>3IconsProfile</div>
        <div className={s.likes}>2 243 &quot;Like&quot;</div>
      </div>
      <div className={s.footerDate}>July 23, 2021</div>
    </div>
  )
}
