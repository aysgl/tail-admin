<template>
  <div class="space-y-6">
    <UPageCard
      title="graphql-request + graphql · fetch"
      variant="outline"
      class="bg-white dark:bg-gray-900/90">
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div
          class="space-y-2 rounded-lg border border-primary-200/80 bg-primary-50/40 p-4 dark:border-primary-800/50 dark:bg-primary-950/20">
          <h3
            class="text-sm font-semibold text-primary-800 dark:text-primary-200">
            graphql-request + graphql
          </h3>
          <ul
            class="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex gap-2">
              <span
                class="shrink-0 text-primary-600 dark:text-primary-400"
                >·</span
              >
              <span>
                <code
                  class="rounded bg-white/80 px-1 font-mono text-xs dark:bg-gray-900/80">
                  GraphQLClient
                </code>
                +
                <code
                  class="rounded bg-white/80 px-1 font-mono text-xs dark:bg-gray-900/80">
                  request()
                </code>
                : gövde ve değişkenler hazır
              </span>
            </li>
            <li class="flex gap-2">
              <span
                class="shrink-0 text-primary-600 dark:text-primary-400"
                >·</span
              >
              <span>
                <code
                  class="rounded bg-white/80 px-1 font-mono text-xs dark:bg-gray-900/80">
                  graphql
                </code>
                → peer dependency
              </span>
            </li>
            <li class="flex gap-2">
              <span
                class="shrink-0 text-primary-600 dark:text-primary-400"
                >·</span
              >
              <span
                >HTTP / GraphQL errors daha az
                kod</span
              >
            </li>
          </ul>
        </div>

        <div
          class="space-y-2 rounded-lg border border-gray-200 bg-gray-50/80 p-4 dark:border-gray-700 dark:bg-gray-800/40">
          <h3
            class="text-sm font-semibold text-gray-900 dark:text-white">
            Paket olmadan (fetch)
          </h3>
          <ul
            class="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex gap-2">
              <span class="shrink-0 text-gray-400"
                >·</span
              >
              <span>
                <code
                  class="rounded bg-white px-1 font-mono text-xs dark:bg-gray-900">
                  POST
                </code>
                +
                <code
                  class="rounded bg-white px-1 font-mono text-xs dark:bg-gray-900">
                  JSON.stringify
                </code>
                ({ query, variables })
              </span>
            </li>
            <li class="flex gap-2">
              <span class="shrink-0 text-gray-400"
                >·</span
              >
              <span>
                <code
                  class="rounded bg-white px-1 font-mono text-xs dark:bg-gray-900">
                  res.ok
                </code>
                ,
                <code
                  class="rounded bg-white px-1 font-mono text-xs dark:bg-gray-900">
                  data
                </code>
                /
                <code
                  class="rounded bg-white px-1 font-mono text-xs dark:bg-gray-900">
                  errors
                </code>
                elle
              </span>
            </li>
            <li class="flex gap-2">
              <span class="shrink-0 text-gray-400"
                >·</span
              >
              <span
                >Çok sorguda aynı kalıp
                tekrarlanır</span
              >
            </li>
          </ul>
        </div>
      </div>
    </UPageCard>

    <UPageCard
      title="Kaynak kod"
      description="Aynı posts.graphql?raw — iki ayrı dosya."
      variant="outline"
      class="min-w-0 bg-white dark:bg-gray-900/90">
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="min-w-0">
          <p
            class="mb-2 text-xs font-semibold text-primary-700 dark:text-primary-300">
            getPostsWith.ts
          </p>
          <pre
            class="rounded-lg border border-primary-900/40 bg-gray-950 p-4 text-[11px] leading-relaxed text-gray-100 dark:border-primary-800/50"><code
            class="whitespace-pre font-mono sm:text-xs">{{ getPostsWithSource }}</code></pre>
        </div>
        <div class="min-w-0">
          <p
            class="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
            getPostsWithout.ts
          </p>
          <pre
            class="rounded-lg border border-gray-700 bg-gray-950 p-4 text-[11px] leading-relaxed text-gray-100"><code
            class="whitespace-pre font-mono sm:text-xs">{{ getPostsWithoutSource }}</code></pre>
        </div>
      </div>
    </UPageCard>

    <UPageCard
      title="Canlı örnek"
      description="İki buton, aynı API."
      variant="outline"
      class="min-w-0 bg-white dark:bg-gray-900/90">
      <div class="space-y-4">
        <div
          class="flex flex-wrap items-center gap-2 sm:gap-3">
          <UButton
            size="sm"
            color="primary"
            :loading="
              loading && lastFetchMode === 'with'
            "
            :disabled="loading"
            @click="fetchPosts('with')">
            getPostsWith
          </UButton>
          <UButton
            size="sm"
            color="neutral"
            variant="outline"
            :loading="
              loading &&
              lastFetchMode === 'without'
            "
            :disabled="loading"
            @click="fetchPosts('without')">
            getPostsWithout
          </UButton>
          <span
            v-if="lastFetchMode && !loading"
            class="text-xs text-gray-500 dark:text-gray-400">
            Son istek:
            {{
              lastFetchMode === 'with'
                ? 'graphql-request'
                : 'fetch'
            }}
            · Toplam
            {{ totalCount }}
          </span>
        </div>

        <div
          v-if="error"
          class="rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-900/20 dark:text-red-400">
          {{ error.message }}
        </div>

        <ul
          v-else-if="posts.length"
          class="space-y-3">
          <li
            v-for="post in posts"
            :key="post.id"
            class="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800/60">
            <div class="flex items-start gap-3">
              <span
                class="flex shrink-0 rounded bg-primary-100 px-2 py-0.5 text-xs font-semibold text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                #{{ post.id }}
              </span>
              <div class="min-w-0 flex-1">
                <h4
                  class="font-semibold text-gray-900 dark:text-white">
                  {{ post.title }}
                </h4>
                <p
                  class="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {{ post.body }}
                </p>
              </div>
            </div>
          </li>
        </ul>

        <p
          v-else-if="loading"
          class="text-sm text-gray-500 dark:text-gray-400">
          Postlar yükleniyor…
        </p>

        <p
          v-else-if="!loading"
          class="text-gray-500 dark:text-gray-400">
          Liste boş veya yanıt beklenmiyor;
          sayfayı yenileyerek tekrar deneyin.
        </p>
      </div>
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useGraphqlPosts } from '@/composables/useGraphqlPosts'
import getPostsWithSource from '@/lib/getPostsWith.ts?raw'
import getPostsWithoutSource from '@/lib/getPostsWithout.ts?raw'

const {
  posts,
  totalCount,
  loading,
  error,
  lastFetchMode,
  fetchPosts,
} = useGraphqlPosts()

onMounted(() => {
  void fetchPosts('with')
})
</script>
