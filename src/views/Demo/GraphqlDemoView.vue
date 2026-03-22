<template>
  <div class="space-y-6">
    <UPageCard
      variant="outline"
      class="bg-white dark:bg-gray-900/90">
      <div class="space-y-4">
        <UButton
          color="primary"
          :loading="loading"
          @click="fetchPosts">
          {{
            loading
              ? 'Yükleniyor…'
              : 'Postları Getir'
          }}
        </UButton>

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
          v-else-if="!loading"
          class="text-gray-500 dark:text-gray-400">
          Veri yok. "Postları Getir" butonuna
          tıklayın.
        </p>
      </div>
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useGraphqlPosts } from '@/composables/useGraphqlPosts'

const { posts, loading, error, fetchPosts } =
  useGraphqlPosts()

onMounted(() => {
  void fetchPosts()
})
</script>
