'use client'
import StatisticScreen from '@/shared/ui/statisticScreen/StatisticScreen'
import { Typography } from '@/shared/ui/typography'

import s from './statisticsPage.module.scss'

export default function StatisticsPage() {
  return (
    <div className={s.statisticsPage}>
      <Typography className={s.header}>Statistics</Typography>
      <StatisticScreen category={'Like'} />
      <StatisticScreen category={'Comments'} />
      <StatisticScreen category={'Publication views'} />
    </div>
  )
}
