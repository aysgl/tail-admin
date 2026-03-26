import postFields from '../fragments/post-fields.graphql?raw'
import createPostMutation from '../mutations/create-post.graphql?raw'

export const CREATE_POST_DOCUMENT = `${postFields}\n${createPostMutation}`
