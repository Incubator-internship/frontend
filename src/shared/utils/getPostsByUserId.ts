export async function getPostsByUserId(userId: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts/user-posts/${userId}`,
      {
        method: 'GET',
      }
    )
    const data = await res.json()

    return { posts: Array.isArray(data) ? data : [] }
  } catch (err) {
    console.error('Auth check failed:', err)

    return { posts: [] }
  }
}
