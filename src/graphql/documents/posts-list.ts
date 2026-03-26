import postFields from '../fragments/post-fields.graphql?raw'
import postsListQuery from '../queries/posts-list.graphql?raw'

/**
 * fragment + query aynı istek gövdesinde olmalı; Vite ?raw dosyaları burada birleştirilir.
 */
export const POSTS_GRAPHQL_DOCUMENT = `${postFields}\n${postsListQuery}`
