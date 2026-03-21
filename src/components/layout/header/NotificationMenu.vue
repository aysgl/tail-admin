<template>
  <UPopover
    :content="{
      align: 'end',
      collisionPadding: 12,
    }"
    :ui="{
      content:
        'w-80 max-h-[480px] overflow-hidden flex flex-col p-0',
    }"
  >
    <UButton
      color="primary"
      variant="soft"
      square
      aria-label="Bildirimler"
      class="relative h-10 w-10 shrink-0 justify-center items-center"
    >
      <UIcon
        name="i-lucide-bell"
        class="size-5"
      />
      <span
        v-if="notifying"
        class="absolute right-2 top-2 size-2 rounded-full bg-orange-400"
      />
    </UButton>
    <template #content>
      <div
        class="flex items-center justify-between border-b border-muted p-3"
      >
        <h5
          class="font-semibold text-highlighted"
        >
          Notification
        </h5>
      </div>
      <div class="max-h-80 overflow-y-auto p-2">
        <a
          v-for="notification in notifications"
          :key="notification.id"
          href="#"
          class="flex gap-3 rounded-lg p-3 hover:bg-muted"
          @click.prevent
        >
          <UAvatar
            :src="notification.userImage"
            :alt="notification.userName"
            size="sm"
          />
          <div class="min-w-0 flex-1">
            <p class="text-sm text-muted">
              <span
                class="font-medium text-highlighted"
                >{{ notification.userName }}</span
              >
              {{ notification.action }}
              <span
                class="font-medium text-highlighted"
                >{{ notification.project }}</span
              >
            </p>
            <p class="mt-1 text-xs text-muted">
              {{ notification.type }} ·
              {{ notification.time }}
            </p>
          </div>
        </a>
      </div>
      <div class="border-t border-muted p-2">
        <UButton
          block
          color="primary"
          variant="outline"
          size="sm"
        >
          View All Notification
        </UButton>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const notifying = ref(true)

const notifications = ref([
  {
    id: 1,
    userName: 'Terry Franci',
    userImage: '/images/user/user-02.jpg',
    action: 'requests permission to change',
    project: 'Project - Nganter App',
    type: 'Project',
    time: '5 min ago',
    status: 'online',
  },
  {
    id: 2,
    userName: 'Terry Franci',
    userImage: '/images/user/user-03.jpg',
    action: 'requests permission to change',
    project: 'Project - Nganter App',
    type: 'Project',
    time: '5 min ago',
    status: 'offline',
  },
  {
    id: 3,
    userName: 'Terry Franci',
    userImage: '/images/user/user-04.jpg',
    action: 'requests permission to change',
    project: 'Project - Nganter App',
    type: 'Project',
    time: '5 min ago',
    status: 'online',
  },
])
</script>
