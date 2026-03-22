import { graphqlClient } from '@/api/graphql'
import GetPostsQuery from '@/graphql/queries/posts.graphql?raw'
import { ref, type Ref } from 'vue'

export interface GraphqlPost {
  id: string
  title: string
  body: string
}

interface PostsResponse {
  posts: {
    data: GraphqlPost[]
    meta: { totalCount: number }
  }
}

export function useGraphqlPosts(): {
  posts: Ref<GraphqlPost[]>
  totalCount: Ref<number>
  loading: Ref<boolean>
  error: Ref<Error | null>
  fetchPosts: () => Promise<void>
} {
  const posts = ref<GraphqlPost[]>([])
  const totalCount = ref(0)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchPosts() {
    loading.value = true
    error.value = null
    try {
      const data =
        await graphqlClient.request<PostsResponse>(
          GetPostsQuery,
          {
            options: {
              paginate: { page: 1, limit: 10 },
            },
          },
        )
      posts.value = data.posts.data ?? []
      totalCount.value =
        data.posts.meta?.totalCount ?? 0
    } catch (e) {
      error.value =
        e instanceof Error
          ? e
          : new Error(String(e))
      posts.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    posts,
    totalCount,
    loading,
    error,
    fetchPosts,
  }
}
