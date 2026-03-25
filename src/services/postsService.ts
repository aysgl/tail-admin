export interface PostItem {
  id: string
  title: string
  body: string
}

interface PostsResponse {
  posts: {
    data: PostItem[]
    meta: { totalCount: number }
  }
}

export interface FetchPostsResult {
  data: PostItem[]
  totalCount: number
}

const POSTS_QUERY = `
  query Posts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`

export async function fetchPosts(
  page = 1,
  limit = 10,
): Promise<FetchPostsResult> {
  const res = await fetch(
    'https://graphqlzero.almansi.me/api',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: POSTS_QUERY,
        variables: {
          options: {
            paginate: { page, limit },
          },
        },
      }),
    },
  )

  if (!res.ok) {
    throw new Error(
      `HTTP ${res.status}: ${res.statusText}`,
    )
  }

  const json = (await res.json()) as {
    data?: PostsResponse
    errors?: { message: string }[]
  }

  if (json.errors?.length) {
    throw new Error(
      json.errors[0]?.message ?? 'GraphQL error',
    )
  }

  const posts = json.data?.posts
  if (!posts) {
    throw new Error('Invalid posts response')
  }

  return {
    data: posts.data ?? [],
    totalCount: posts.meta?.totalCount ?? 0,
  }
}
