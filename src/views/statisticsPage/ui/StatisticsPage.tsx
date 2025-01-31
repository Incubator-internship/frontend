'use client'
import { Sidebar } from '@/shared/ui/sidebar'
import StatisticScreen from '@/shared/ui/statisticScreen/StatisticScreen'
import { Typography } from '@/shared/ui/typography'
import { useTranslations } from 'next-intl'

import s from './statisticsPage.module.scss'

export default function StatisticsPage() {
  const t = useTranslations('StatisticPage')
  const categories = {
    comments: t('Comments') as 'Comments',
    like: t('Like') as 'Like',
    publicationViews: t('Publication views') as 'Publication views',
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className={s.statisticsPage}>
        <Typography className={s.header}>{t('Statistics')}</Typography>
        <StatisticScreen category={categories.like} />
        <StatisticScreen category={categories.comments} />
        <StatisticScreen category={categories.publicationViews} />
      </div>
    </div>
  )
}
