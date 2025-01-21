export type StatisticDataType = {
  PublicViewsStDate(PublicViewsStDate: any): unknown
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
    { comments: 2, date: 'December 1' },
    { comments: 3, date: 'December 2' },
    { comments: 5, date: 'December 3' },
    { comments: 10, date: 'December 4' },
    { comments: 4, date: 'December 5' },
    { comments: 4, date: 'December 6' },
    { comments: 19, date: 'December 7' },
    { comments: 30, date: 'December 8' },
    { comments: 23, date: 'December 9' },
    { comments: 0, date: 'December 10' },
    { comments: 3, date: 'December 11' },
    { comments: 14, date: 'December 12' },
    { comments: 19, date: 'December 13' },
    { comments: 55, date: 'December 14' },
    { comments: 24, date: 'December 15' },
    { comments: 75, date: 'December 16' },
    { comments: 84, date: 'December 17' },
    { comments: 50, date: 'December 18' },
    { comments: 90, date: 'December 19' },
    { comments: 23, date: 'December 20' },
    { comments: 17, date: 'December 21' },
    { comments: 3, date: 'December 22' },
    { comments: 9, date: 'December 23' },
    { comments: 13, date: 'December 24' },
    { comments: 55, date: 'December 25' },
    { comments: 15, date: 'December 26' },
    { comments: 200, date: 'December 27' },
    { comments: 180, date: 'December 28' },
    { comments: 22, date: 'December 29' },
    { comments: 300, date: 'December 30' },
    { comments: 1300, date: 'December 31' },
  ],
  likes: [
    { date: 'December 1', likes: 250 },
    { date: 'December 2', likes: 270 },
    { date: 'December 3', likes: 320 },
    { date: 'December 4', likes: 400 },
    { date: 'December 5', likes: 350 },
    { date: 'December 6', likes: 370 },
    { date: 'December 7', likes: 450 },
    { date: 'December 8', likes: 500 },
    { date: 'December 9', likes: 480 },
    { date: 'December 10', likes: 520 },
    { date: 'December 11', likes: 600 },
    { date: 'December 12', likes: 550 },
    { date: 'December 13', likes: 580 },
    { date: 'December 14', likes: 620 },
    { date: 'December 15', likes: 700 },
    { date: 'December 16', likes: 750 },
    { date: 'December 17', likes: 800 },
    { date: 'December 18', likes: 850 },
    { date: 'December 19', likes: 900 },
    { date: 'December 20', likes: 950 },
    { date: 'December 21', likes: 1000 },
    { date: 'December 22', likes: 1100 },
    { date: 'December 23', likes: 1200 },
    { date: 'December 24', likes: 1300 },
    { date: 'December 25', likes: 1400 },
    { date: 'December 26', likes: 150 },
    { date: 'December 27', likes: 200 },
    { date: 'December 28', likes: 180 },
    { date: 'December 29', likes: 220 },
    { date: 'December 30', likes: 300 },
    { date: 'December 31', likes: 300 },
  ],
  publicationViews: [
    { date: 'December 1', publicationViews: 2500 },
    { date: 'December 2', publicationViews: 2700 },
    { date: 'December 3', publicationViews: 3200 },
    { date: 'December 4', publicationViews: 4000 },
    { date: 'December 5', publicationViews: 3500 },
    { date: 'December 6', publicationViews: 3700 },
    { date: 'December 7', publicationViews: 4500 },
    { date: 'December 8', publicationViews: 5000 },
    { date: 'December 9', publicationViews: 4800 },
    { date: 'December 10', publicationViews: 5200 },
    { date: 'December 11', publicationViews: 6000 },
    { date: 'December 12', publicationViews: 5500 },
    { date: 'December 13', publicationViews: 5800 },
    { date: 'December 14', publicationViews: 6200 },
    { date: 'December 15', publicationViews: 7000 },
    { date: 'December 16', publicationViews: 7500 },
    { date: 'December 17', publicationViews: 8000 },
    { date: 'December 18', publicationViews: 8500 },
    { date: 'December 19', publicationViews: 9000 },
    { date: 'December 20', publicationViews: 9500 },
    { date: 'December 21', publicationViews: 1000 },
    { date: 'December 22', publicationViews: 1100 },
    { date: 'December 23', publicationViews: 12000 },
    { date: 'December 24', publicationViews: 13000 },
    { date: 'December 25', publicationViews: 14000 },
    { date: 'December 26', publicationViews: 1500 },
    { date: 'December 27', publicationViews: 2000 },
    { date: 'December 28', publicationViews: 1800 },
    { date: 'December 29', publicationViews: 2200 },
    { date: 'December 30', publicationViews: 3000 },
    { date: 'December 31', publicationViews: 3000 },
  ],
}
