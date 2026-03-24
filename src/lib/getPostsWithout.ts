import GetPostsQuery from '@/graphql/queries/posts.graphql?raw'

interface PostsResponse {
  posts: {
    data: {
      id: string
      title: string
      body: string
    }[]
    meta: { totalCount: number }
  }
}

export async function getPostsWithout(
  page = 1,
  limit = 10,
) {
  const res = await fetch(
    'https://graphqlzero.almansi.me/api',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GetPostsQuery,
        variables: {
          options: {
            paginate: { page, limit },
          },
        },
      }),
    },
  )

  const json = (await res.json()) as {
    data?: PostsResponse
    errors?: { message: string }[]
  }

  if (!res.ok) {
    throw new Error(
      `HTTP ${res.status}: ${res.statusText}`,
    )
  }
  if (json.errors?.length) {
    throw new Error(
      json.errors[0]?.message ?? 'GraphQL errors',
    )
  }

  const payload = json.data?.posts
  if (!payload) {
    throw new Error('Yanıtta posts alanı yok')
  }

  return {
    data: payload.data ?? [],
    totalCount: payload.meta?.totalCount ?? 0,
  }
}
