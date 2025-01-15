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

export type UpdatePost = {
  content: string
  id: number
}

export type DeletePost = {
  id: number
}

export type CreatePost = {
  content: string
  photos: string[]
}

export type CreatePostResponse = {
  postId: number
}

export type Error = {
  errorsMessages: ErrorData[]
}

export type ErrorData = {
  field: string
  message: string
}
