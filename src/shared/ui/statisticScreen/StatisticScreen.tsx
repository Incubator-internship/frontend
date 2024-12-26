'use client'

import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Ticks,
} from 'chart.js'

import s from './statisticScreen.module.scss'

import { StatisticData } from './StatisticData'

type StatisticScreenProps = {
  category: 'Comments' | 'Like' | 'Publication views'
}

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)
const LikesStLike = StatisticData.likes.map(item => item.likes)
const LikesStDate = StatisticData.likes.map(item => item.date)
const CommentsStComment = StatisticData.comments.map(item => item.comments)
const CommentsStDate = StatisticData.comments.map(item => item.date)
const PublicViewsStPublication = StatisticData.publicationViews.map(item => item.publicationViews)
const PublicViewsStDate = StatisticData.publicationViews.map(item => item.date)

const StatisticScreen = ({ category }: StatisticScreenProps) => {
  const [borderColor, setBorderColor] = useState('')
  const [dataSt, setDataSt] = useState<number[]>([])
  const [labels, setLabels] = useState<string[]>([])

  useEffect(() => {
    const root = getComputedStyle(document.documentElement)

    switch (category) {
      case 'Like':
        setBorderColor(root.getPropertyValue('--color-danger-500'))
        setDataSt(LikesStLike)
        setLabels(LikesStDate)
        break
      case 'Comments':
        setBorderColor(root.getPropertyValue('--color-accent-500'))
        setDataSt(CommentsStComment)
        setLabels(CommentsStDate)
        break
      case 'Publication views':
        setBorderColor(root.getPropertyValue('--color-success-500'))
        setDataSt(PublicViewsStPublication)
        setLabels(PublicViewsStDate)
        break
    }
  }, [
    category,
    LikesStLike,
    LikesStDate,
    CommentsStComment,
    CommentsStDate,
    PublicViewsStPublication,
    PublicViewsStDate,
  ])

  const data = {
    datasets: [
      {
        borderColor: borderColor,
        borderWidth: 2,
        data: dataSt,
        fill: false,
        label: 'Quantity',
        pointRadius: 0,
      },
    ],
    labels: labels,
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {},
      },
    },
  }

  return (
    <>
      <div className={s.header}>
        <div>{category}</div>
        <div>Week | Month</div>
      </div>
      <div className={s.statisticScreen}>
        <Line data={data} options={options} />
      </div>
    </>
  )
}

export default StatisticScreen
