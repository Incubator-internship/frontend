export type AllPostsOrPostDataByUserId = PostsDataByPostId[]

export type PostsDataByPostId = {
  content: string
  createdAt: string
  id: number
  photos: Photos[]
  userId: number
}

export type Photos = {
  id: number
  postId: number
  url: string
}

export type DeleteOrChangePost = {
  content?: string
  postId: number
}

export type CreatePost = {
  content: string
  photos: string[]
}

export type Error = {
  errorsMessages: ErrorData[]
}

export type ErrorData = {
  field: string
  message: string
}
