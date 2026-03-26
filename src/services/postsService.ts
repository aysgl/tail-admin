import { CREATE_POST_DOCUMENT } from '@/graphql/documents/create-post'
import { POSTS_GRAPHQL_DOCUMENT } from '@/graphql/documents/posts-list'
import { requestGraphql } from '@/services/graphqlZeroClient'

export interface PostItem {
  id: string
  title: string
  body: string
}

interface PostsQueryData {
  posts?: {
    data: PostItem[]
    meta: { totalCount: number }
  }
}

export interface FetchPostsResult {
  data: PostItem[]
  totalCount: number
}

export interface CreatePostInput {
  title: string
  body: string
}

interface CreatePostMutationData {
  createPost?: PostItem | null
}

export async function fetchPosts(
  page = 1,
  limit = 10,
): Promise<FetchPostsResult> {
  const data =
    await requestGraphql<PostsQueryData>(
      POSTS_GRAPHQL_DOCUMENT,
      {
        options: {
          paginate: { page, limit },
        },
      },
    )

  const posts = data.posts
  if (!posts) {
    throw new Error('Invalid posts response')
  }

  return {
    data: posts.data ?? [],
    totalCount: posts.meta?.totalCount ?? 0,
  }
}

/** Mutation örneği: demo API’de yeni post oluşturur. */
export async function createPost(
  input: CreatePostInput,
): Promise<PostItem> {
  const data =
    await requestGraphql<CreatePostMutationData>(
      CREATE_POST_DOCUMENT,
      { input },
    )

  const created = data.createPost
  if (!created) {
    throw new Error('createPost returned no data')
  }

  return created
}
