'use client'

import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  TooltipItem,
} from 'chart.js'
import { useTranslations } from 'next-intl'

import s from './statisticScreen.module.scss'

import { Toggle } from '../toggle'
import { Typography } from '../typography'
import { StatisticData } from './generatedDate/StatisticData'

type StatisticScreenProps = {
  category:
    | 'Comments'
    | 'Like'
    | 'Publication views'
    | 'Комментарии'
    | 'Нравится'
    | 'Просмотры публикаций'
}

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip)
const LikesStLike = StatisticData.likes.map(item => item.likes)
const LikesStDate = StatisticData.likes.map(item => item.date)
const CommentsStComment = StatisticData.comments.map(item => item.comments)
const CommentsStDate = StatisticData.comments.map(item => item.date)
const PublicViewsStPublication = StatisticData.publicationViews.map(item => item.publicationViews)
const PublicViewsStDate = StatisticData.publicationViews.map(item => item.date)

const StatisticScreen = ({ category }: StatisticScreenProps) => {
  const [borderColor, setBorderColor] = useState('')
  const [lineColor, setLineColor] = useState('')
  const [dataSt, setDataSt] = useState<number[]>([])
  const [labels, setLabels] = useState<string[]>([])
  const [toggle, setToggle] = useState<'Month' | 'Week'>('Week')
  const t = useTranslations('StatisticPage')

  useEffect(() => {
    const root = getComputedStyle(document.documentElement)

    switch (category) {
      case 'Like':
      case 'Нравится':
        setBorderColor(root.getPropertyValue('--color-danger-500'))
        setLineColor(root.getPropertyValue('--color-dark-300'))
        setDataSt(LikesStLike)
        setLabels(LikesStDate)
        break
      case 'Comments':
      case 'Комментарии':
        setBorderColor(root.getPropertyValue('--color-accent-500'))
        setLineColor(root.getPropertyValue('--color-dark-300'))
        setDataSt(CommentsStComment)
        setLabels(CommentsStDate)
        break
      case 'Publication views':
      case 'Просмотры публикаций':
        setBorderColor(root.getPropertyValue('--color-success-500'))
        setLineColor(root.getPropertyValue('--color-dark-300'))
        setDataSt(PublicViewsStPublication)
        setLabels(PublicViewsStDate)
        break
    }
  }, [category])

  const data = {
    datasets: [
      {
        borderColor: borderColor,
        borderWidth: 2,
        data: toggle === 'Week' ? dataSt.slice(-7) : dataSt,
        fill: false,
        label: 'Quantity',
        pointRadius: 0,
      },
    ],
    labels: toggle === 'Week' ? labels.slice(-7) : labels,
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: 'rgb(51, 51, 51)',
        callbacks: {
          label: (context: TooltipItem<'line'>) => {
            const index = context.dataIndex

            switch (category) {
              case 'Like':
              case 'Нравится':
                return LikesStLike[index] + ' ' + t('Like')
              case 'Comments':
              case 'Комментарии':
                return CommentsStComment[index] + ' ' + t('Comments')
              case 'Publication views':
              case 'Просмотры публикаций':
                return PublicViewsStPublication[index] + ' ' + t('Publication views')
              default:
                return ''
            }
          },
          title: () => {
            return []
          },
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        border: {
          color: lineColor,
        },
        grid: {
          display: false,
        },
        ticks: {
          callback: (value: number | string, index: number) => {
            const currentLabels = toggle === 'Week' ? labels.slice(-7) : labels

            if (index === 0 || index === currentLabels.length - 1) {
              return currentLabels[index]
            }

            return ''
          },
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        border: {
          color: lineColor,
        },
        grid: {
          display: false,
        },
        ticks: {},
      },
    },
  }

  return (
    <>
      <div className={s.header}>
        <Typography variant={'body1'}>{category}</Typography>
        <Toggle setToggle={setToggle} toggle={toggle} />
      </div>
      <div className={s.statisticScreen}>
        <Line data={data} options={options} />
      </div>
    </>
  )
}

export default StatisticScreen
