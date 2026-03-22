/**
 * no-business-logic-in-component
 *
 * Vue component'lerde doğrudan API / veri çağrılarını engeller.
 * Bu mantık composable veya service katmanına taşınmalıdır.
 *
 * Flaglenen pattern'ler:
 *   - fetch()
 *   - $fetch()
 *   - useFetch()
 *   - useAsyncData()
 *   - axios.get/post/put/delete/patch/request()
 */

const RESTRICTED_CALLEES = [
  'fetch',
  '$fetch',
  'useFetch',
  'useAsyncData',
]

const AXIOS_METHODS = [
  'get',
  'post',
  'put',
  'delete',
  'patch',
  'request',
]

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        "Component'te doğrudan API çağrısı yapma; composable veya service kullan",
    },
    schema: [],
    messages: {
      directApiCall:
        "{{ callee }} component içinde kullanılmamalı. Composable veya service'e taşı (örn. useXxx).",
    },
  },

  create(context) {
    return {
      CallExpression(node) {
        const callee = node.callee

        // fetch(), $fetch(), useFetch(), useAsyncData()
        if (
          callee.type === 'Identifier' &&
          RESTRICTED_CALLEES.includes(callee.name)
        ) {
          context.report({
            node: callee,
            messageId: 'directApiCall',
            data: { callee: callee.name },
          })
          return
        }

        // axios.get(), axios.post(), vb.
        if (callee.type === 'MemberExpression') {
          const obj = callee.object
          const prop = callee.property
          if (
            obj.type === 'Identifier' &&
            obj.name === 'axios' &&
            prop.type === 'Identifier' &&
            AXIOS_METHODS.includes(prop.name)
          ) {
            context.report({
              node: callee,
              messageId: 'directApiCall',
              data: {
                callee: `axios.${prop.name}`,
              },
            })
          }
        }
      },
    }
  },
}
