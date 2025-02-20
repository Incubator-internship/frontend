export type AllPosts = {
  nextCursor: number
  posts: PostsDataByPostId[]
}

export type PostDataByUserId = PostsDataByPostId[]

export type PostsDataByPostId = {
  content: string
  createdAt: string
  id: number
  photos: Photos[]
  updatedAt: string
  userId: number
}

export type Photos = {
  id: string
  postId: string
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
