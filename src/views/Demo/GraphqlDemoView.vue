<template>
  <div
    class="space-y-6 text-gray-900 dark:text-gray-100">
    <UPageCard
      variant="outline"
      class="min-w-0">
      <template #header>
        <div>
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-gray-50">
            GraphQL · fetch
          </h3>
          <p
            class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Ek GraphQL istemci paketi yok: tek
            <code
              class="mx-0.5 rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              requestGraphql
            </code>
            ile POST + JSON gövde
            <span
              v-pre
              class="font-mono text-gray-800 dark:text-gray-300">
              ({ query, variables })
            </span>
            .
          </p>
        </div>
      </template>
      <ul
        class="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
        <li class="flex gap-2">
          <span
            class="shrink-0 text-primary-600 dark:text-primary-400"
            >·</span
          >
          <span>
            Şema metinleri:
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              src/graphql/
            </code>
            — fragment,
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              queries/
            </code>
            ,
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              mutations/
            </code>
            ;
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              documents/*.ts
            </code>
            ham metni birleştirir.
          </span>
        </li>
        <li class="flex gap-2">
          <span
            class="shrink-0 text-primary-600 dark:text-primary-400"
            >·</span
          >
          <span>
            Okuma:
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              Posts
            </code>
            sorgusu · Yazma örneği:
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              CreatePost
            </code>
            mutation (
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              fetchPosts
            </code>
            /
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              createPost
            </code>
            servisleri).
          </span>
        </li>
        <li class="flex gap-2">
          <span
            class="shrink-0 text-primary-600 dark:text-primary-400"
            >·</span
          >
          <span>
            HTTP ve
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              errors
            </code>
            :
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              graphqlZeroClient.ts
            </code>
          </span>
        </li>
      </ul>
    </UPageCard>

    <UPageCard
      variant="outline"
      class="min-w-0">
      <template #header>
        <div>
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Kaynak kod
          </h3>
          <p
            class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Ortak istemci ve post servisi; sorgu
            belgesi
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              documents/posts-list.ts
            </code>
            , mutation
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              mutations/create-post.graphql
            </code>
            +
            <code
              class="rounded bg-gray-100 px-1 font-mono text-xs text-gray-900 dark:bg-gray-800 dark:text-gray-200">
              documents/create-post.ts
            </code>
            .
          </p>
        </div>
      </template>
      <div class="min-w-0 space-y-6">
        <div>
          <p
            class="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
            graphqlZeroClient.ts
          </p>
          <pre
            class="max-h-[320px] overflow-auto rounded-lg border border-gray-700 bg-gray-950 p-4 text-[11px] leading-relaxed text-gray-100"><code
            class="whitespace-pre font-mono sm:text-xs">{{ graphqlZeroClientSource }}</code></pre>
        </div>
        <div>
          <p
            class="mb-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
            postsService.ts
          </p>
          <pre
            class="max-h-[320px] overflow-auto rounded-lg border border-gray-700 bg-gray-950 p-4 text-[11px] leading-relaxed text-gray-100"><code
            class="whitespace-pre font-mono sm:text-xs">{{ postsServiceSource }}</code></pre>
        </div>
      </div>
    </UPageCard>

    <UPageCard
      variant="outline"
      class="min-w-0">
      <template #header>
        <div>
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Canlı örnek
          </h3>
          <p
            class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            GraphQL Zero: liste (query) ve yeni
            post (mutation); liste mutation
            sonrası yeniden yüklenir.
          </p>
        </div>
      </template>
      <div class="space-y-6">
        <div
          class="flex flex-wrap items-center gap-2 sm:gap-3">
          <UButton
            size="sm"
            color="primary"
            variant="outline"
            :loading="loading"
            :disabled="loading || creating"
            @click="fetchPosts">
            Listeyi yenile
          </UButton>
          <span
            v-if="!loading && totalCount > 0"
            class="text-xs text-gray-500 dark:text-gray-400">
            Toplam {{ totalCount }}
          </span>
        </div>

        <div
          class="border-t border-gray-200 pt-6 dark:border-gray-700">
          <h4
            class="mb-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
            Mutation: CreatePost
          </h4>
          <div class="max-w-xl space-y-4">
            <UFormField label="Başlık">
              <UInput
                v-model="draftTitle"
                placeholder="Örn. Demo başlık"
                class="w-full"
                :disabled="creating" />
            </UFormField>
            <UFormField label="İçerik">
              <UTextarea
                v-model="draftBody"
                placeholder="Gövde metni…"
                :rows="4"
                class="w-full"
                :disabled="creating" />
            </UFormField>
            <div class="flex flex-wrap gap-2">
              <UButton
                size="sm"
                color="primary"
                leading-icon="i-lucide-plus"
                :loading="creating"
                :disabled="
                  creating ||
                  !draftTitle.trim() ||
                  !draftBody.trim()
                "
                @click="onCreatePost">
                Post oluştur
              </UButton>
            </div>
          </div>
        </div>

        <div
          v-if="error"
          class="rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-900/20 dark:text-red-400">
          {{ error.message }}
        </div>

        <div
          v-if="createError"
          class="rounded-lg bg-amber-50 p-4 text-amber-900 dark:bg-amber-900/20 dark:text-amber-200">
          Mutation:
          {{ createError.message }}
        </div>

        <ul
          v-if="posts.length"
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
          v-else
          class="text-gray-500 dark:text-gray-400">
          Henüz liste yok; yukarıdan yenileyin
          veya bağlantıyı kontrol edin.
        </p>
      </div>
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGraphqlPosts } from '@/composables/useGraphqlPosts'
import graphqlZeroClientSource from '@/services/graphqlZeroClient.ts?raw'
import postsServiceSource from '@/services/postsService.ts?raw'

const {
  posts,
  totalCount,
  loading,
  error,
  creating,
  createError,
  fetchPosts,
  createPost,
} = useGraphqlPosts()

const draftTitle = ref('')
const draftBody = ref('')

async function onCreatePost() {
  const title = draftTitle.value.trim()
  const body = draftBody.value.trim()
  if (!title || !body) return
  await createPost({ title, body })
  if (!createError.value) {
    draftTitle.value = ''
    draftBody.value = ''
  }
}

onMounted(() => {
  void fetchPosts()
})
</script>
