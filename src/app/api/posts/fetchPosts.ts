import { AllPosts } from './postsApi.types' // замени путь при необходимости

export default async function fetchPosts(): Promise<AllPosts> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts/all-posts`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`)
    }

    const data: AllPosts = await res.json()

    return data
  } catch (err) {
    console.error('Error fetching posts:', err)

    return { nextCursor: 0, posts: [] }
  }
}
