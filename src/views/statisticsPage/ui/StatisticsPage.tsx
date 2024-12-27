'use client'
import StatisticScreen from '@/shared/ui/statisticScreen/StatisticScreen'
import { Typography } from '@/shared/ui/typography'
import { useTranslations } from 'next-intl'

import s from './statisticsPage.module.scss'

export default function StatisticsPage() {
  const t = useTranslations('StatisticPage')
  const categories = {
    comments: 'Comments' as const,
    like: 'Like' as const,
    publicationViews: 'Publication views' as const,
  }

  return (
    <div className={s.statisticsPage}>
      <Typography className={s.header}>{t('Statistics')}</Typography>
      <StatisticScreen category={categories.like} />
      <StatisticScreen category={categories.comments} />
      <StatisticScreen category={categories.publicationViews} />
    </div>
  )
}
