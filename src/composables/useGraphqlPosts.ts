import { getPostsWith } from '@/lib/getPostsWith'
import { getPostsWithout } from '@/lib/getPostsWithout'
import { ref, type Ref } from 'vue'

export interface GraphqlPost {
  id: string
  title: string
  body: string
}

export type GraphqlPostsFetchMode =
  | 'with'
  | 'without'

export function useGraphqlPosts(): {
  posts: Ref<GraphqlPost[]>
  totalCount: Ref<number>
  loading: Ref<boolean>
  error: Ref<Error | null>
  lastFetchMode: Ref<GraphqlPostsFetchMode | null>
  fetchPosts: (
    mode?: GraphqlPostsFetchMode,
  ) => Promise<void>
} {
  const posts = ref<GraphqlPost[]>([])
  const totalCount = ref(0)
  const loading = ref(false)
  const error = ref<Error | null>(null)
  const lastFetchMode =
    ref<GraphqlPostsFetchMode | null>(null)

  async function fetchPosts(
    mode: GraphqlPostsFetchMode = 'with',
  ) {
    loading.value = true
    error.value = null
    lastFetchMode.value = mode
    try {
      const loader =
        mode === 'without'
          ? getPostsWithout
          : getPostsWith
      const { data, totalCount: count } =
        await loader(1, 10)
      posts.value = data
      totalCount.value = count
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
    lastFetchMode,
    fetchPosts,
  }
}
