import {
  createPost as createPostRemote,
  fetchPosts,
  type CreatePostInput,
  type PostItem,
} from '@/services/postsService'
import { ref, type Ref } from 'vue'

export type GraphqlPost = PostItem
export type { CreatePostInput }

export function useGraphqlPosts(): {
  posts: Ref<GraphqlPost[]>
  totalCount: Ref<number>
  loading: Ref<boolean>
  error: Ref<Error | null>
  creating: Ref<boolean>
  createError: Ref<Error | null>
  fetchPosts: () => Promise<void>
  createPost: (
    input: CreatePostInput,
  ) => Promise<void>
} {
  const posts = ref<GraphqlPost[]>([])
  const totalCount = ref(0)
  const loading = ref(false)
  const error = ref<Error | null>(null)
  const creating = ref(false)
  const createError = ref<Error | null>(null)

  async function load() {
    loading.value = true
    error.value = null
    try {
      const { data, totalCount: count } =
        await fetchPosts(1, 10)
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

  async function submitCreate(
    input: CreatePostInput,
  ) {
    creating.value = true
    createError.value = null
    try {
      await createPostRemote(input)
      await load()
    } catch (e) {
      createError.value =
        e instanceof Error
          ? e
          : new Error(String(e))
    } finally {
      creating.value = false
    }
  }

  return {
    posts,
    totalCount,
    loading,
    error,
    creating,
    createError,
    fetchPosts: load,
    createPost: submitCreate,
  }
}
