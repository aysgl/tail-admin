const GRAPHQL_ZERO_URL =
  'https://graphqlzero.almansi.me/api'

type GraphqlEnvelope<T> = {
  data?: T
  errors?: { message: string }[]
}

/**
 * Tek endpoint, tek gövde: HTTP + JSON + GraphQL hataları burada toplanır.
 */
export async function requestGraphql<TData>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<TData> {
  const res = await fetch(GRAPHQL_ZERO_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!res.ok) {
    throw new Error(
      `HTTP ${res.status}: ${res.statusText}`,
    )
  }

  const json =
    (await res.json()) as GraphqlEnvelope<TData>

  if (json.errors?.length) {
    throw new Error(
      json.errors[0]?.message ?? 'GraphQL error',
    )
  }

  if (json.data === undefined) {
    throw new Error('Invalid GraphQL response')
  }

  return json.data
}
