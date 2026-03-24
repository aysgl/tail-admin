import GetPostsQuery from '@/graphql/queries/posts.graphql?raw'
import { GraphQLClient } from 'graphql-request'

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

export async function getPostsWith(
  page = 1,
  limit = 10,
) {
  const client = new GraphQLClient(
    'https://graphqlzero.almansi.me/api',
  )
  const { posts: payload } =
    await client.request<PostsResponse>(
      GetPostsQuery,
      {
        options: {
          paginate: { page, limit },
        },
      },
    )
  return {
    data: payload.data ?? [],
    totalCount: payload.meta?.totalCount ?? 0,
  }
}
