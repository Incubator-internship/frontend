import s from './statisticScreen.module.scss'

import { Typography } from '../typography'

type StatisticScreenProps = {
  category: 'Comments' | 'Like' | 'Publication views'
}
export const StatisticScreen = ({ category }: StatisticScreenProps) => {
  return (
    <div>
      <div>
        <div className={s.header}>
          <div>{category}</div>
          <div>Week | Month</div>
        </div>
        <div className={s.statisticScreen}>
          <div>TABLE</div>
          <div className={s.date}>
            <Typography>March 1</Typography>
            <Typography>March 31</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
