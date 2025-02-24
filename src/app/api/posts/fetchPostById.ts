import { PostsDataByPostId } from './postsApi.types'

export default async function fetchPostById(postId: number): Promise<PostsDataByPostId | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts/${postId}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`)
    }

    const data: PostsDataByPostId = await res.json()

    return data
  } catch (err) {
    console.error('Error fetching post:', err)

    return null
  }
}
