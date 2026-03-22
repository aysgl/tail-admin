import type { IGraphQLConfig } from 'graphql-config'

const config: IGraphQLConfig = {
  projects: {
    default: {
      schema:
        'https://graphqlzero.almansi.me/api',
      documents: ['src/graphql/**/*.graphql'],
    },
  },
}

export default config
