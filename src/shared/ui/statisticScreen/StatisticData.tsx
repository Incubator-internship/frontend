export type StatisticDataType = {
  comments: CommentsStat[]
  likes: LikesStat[]
  publicationViews: PublicationViewsStat[]
}
export type CommentsStat = {
  comments: number
  date: string
}
export type LikesStat = {
  date: string
  likes: number
}
export type PublicationViewsStat = {
  date: string
  publicationViews: number
}

export const StatisticData: StatisticDataType = {
  comments: [
    { comments: 2, date: '2024-12-01' },
    { comments: 3, date: '2024-12-02' },
    { comments: 5, date: '2024-12-03' },
    { comments: 10, date: '2024-12-04' },
    { comments: 4, date: '2024-12-05' },
    { comments: 4, date: '2024-12-06' },
    { comments: 19, date: '2024-12-07' },
    { comments: 30, date: '2024-12-08' },
    { comments: 23, date: '2024-12-09' },
    { comments: 0, date: '2024-12-10' },
    { comments: 3, date: '2024-12-11' },
    { comments: 14, date: '2024-12-12' },
    { comments: 19, date: '2024-12-13' },
    { comments: 55, date: '2024-12-14' },
    { comments: 24, date: '2024-12-15' },
    { comments: 75, date: '2024-12-16' },
    { comments: 84, date: '2024-12-17' },
    { comments: 50, date: '2024-12-18' },
    { comments: 90, date: '2024-12-19' },
    { comments: 23, date: '2024-12-20' },
    { comments: 17, date: '2024-12-21' },
    { comments: 3, date: '2024-12-22' },
    { comments: 9, date: '2024-12-23' },
    { comments: 13, date: '2024-12-24' },
    { comments: 55, date: '2024-12-25' },
    { comments: 15, date: '2024-12-26' },
    { comments: 200, date: '2024-12-27' },
    { comments: 180, date: '2024-12-28' },
    { comments: 22, date: '2024-12-29' },
    { comments: 300, date: '2024-12-30' },
    { comments: 1300, date: '2024-12-31' },
  ],
  likes: [
    { date: '2024-12-01', likes: 250 },
    { date: '2024-12-02', likes: 270 },
    { date: '2024-12-03', likes: 320 },
    { date: '2024-12-04', likes: 400 },
    { date: '2024-12-05', likes: 350 },
    { date: '2024-12-06', likes: 370 },
    { date: '2024-12-07', likes: 450 },
    { date: '2024-12-08', likes: 500 },
    { date: '2024-12-09', likes: 480 },
    { date: '2024-12-10', likes: 520 },
    { date: '2024-12-11', likes: 600 },
    { date: '2024-12-12', likes: 550 },
    { date: '2024-12-13', likes: 580 },
    { date: '2024-12-14', likes: 620 },
    { date: '2024-12-15', likes: 700 },
    { date: '2024-12-16', likes: 750 },
    { date: '2024-12-17', likes: 800 },
    { date: '2024-12-18', likes: 850 },
    { date: '2024-12-19', likes: 900 },
    { date: '2024-12-20', likes: 950 },
    { date: '2024-12-21', likes: 1000 },
    { date: '2024-12-22', likes: 1100 },
    { date: '2024-12-23', likes: 1200 },
    { date: '2024-12-24', likes: 1300 },
    { date: '2024-12-25', likes: 1400 },
    { date: '2024-12-26', likes: 150 },
    { date: '2024-12-27', likes: 200 },
    { date: '2024-12-28', likes: 180 },
    { date: '2024-12-29', likes: 220 },
    { date: '2024-12-30', likes: 300 },
    { date: '2024-12-31', likes: 300 },
  ],
  publicationViews: [
    { date: '2024-12-01', publicationViews: 2500 },
    { date: '2024-12-02', publicationViews: 2700 },
    { date: '2024-12-03', publicationViews: 3200 },
    { date: '2024-12-04', publicationViews: 4000 },
    { date: '2024-12-05', publicationViews: 3500 },
    { date: '2024-12-06', publicationViews: 3700 },
    { date: '2024-12-07', publicationViews: 4500 },
    { date: '2024-12-08', publicationViews: 5000 },
    { date: '2024-12-09', publicationViews: 4800 },
    { date: '2024-12-10', publicationViews: 5200 },
    { date: '2024-12-11', publicationViews: 6000 },
    { date: '2024-12-12', publicationViews: 5500 },
    { date: '2024-12-13', publicationViews: 5800 },
    { date: '2024-12-14', publicationViews: 6200 },
    { date: '2024-12-15', publicationViews: 7000 },
    { date: '2024-12-16', publicationViews: 7500 },
    { date: '2024-12-17', publicationViews: 8000 },
    { date: '2024-12-18', publicationViews: 8500 },
    { date: '2024-12-19', publicationViews: 9000 },
    { date: '2024-12-20', publicationViews: 9500 },
    { date: '2024-12-21', publicationViews: 1000 },
    { date: '2024-12-22', publicationViews: 1100 },
    { date: '2024-12-23', publicationViews: 12000 },
    { date: '2024-12-24', publicationViews: 13000 },
    { date: '2024-12-25', publicationViews: 14000 },
    { date: '2024-12-26', publicationViews: 1500 },
    { date: '2024-12-27', publicationViews: 2000 },
    { date: '2024-12-28', publicationViews: 1800 },
    { date: '2024-12-29', publicationViews: 2200 },
    { date: '2024-12-30', publicationViews: 3000 },
    { date: '2024-12-31', publicationViews: 3000 },
  ],
}
