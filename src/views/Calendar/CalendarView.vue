<template>
  <UCard
    variant="outline"
    class="calendar-card">
    <template #header>
      <div
        class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <UButton
            color="primary"
            variant="outline"
            size="sm"
            square
            icon="i-lucide-chevron-left"
            aria-label="Previous"
            @click="goPrev" />
          <UButton
            color="primary"
            variant="outline"
            size="sm"
            square
            icon="i-lucide-chevron-right"
            aria-label="Next"
            @click="goNext" />
          <span>{{ calendarTitle }}</span>
        </div>
        <div class="flex items-center gap-3">
          <UTabs
            v-model="activeView"
            :items="viewTabItems"
            size="sm"
            color="primary"
            variant="pill"
            :content="false"
            @update:model-value="onViewChange" />
          <UButton
            label="Add Event"
            color="primary"
            size="md"
            leading-icon="i-lucide-plus"
            @click="openModal" />
        </div>
      </div>
    </template>
    <div class="custom-calendar">
      <FullCalendar
        ref="calendarRef"
        class="min-h-screen"
        :options="calendarOptions" />
    </div>

    <!-- Modal -->
    <UModal
      v-model:open="isOpen"
      :title="
        selectedEvent ? 'Edit Event' : 'Add Event'
      "
      description="Plan your next big moment: schedule or edit an event to stay on track"
      @update:open="
        (v: boolean) => {
          if (!v) resetModalFields()
        }
      ">
      <template #body>
        <div class="space-y-6">
          <UFormField label="Event Title">
            <UInput
              v-model="eventTitle"
              placeholder="Enter event title"
              variant="outline"
              color="primary"
              class="w-full" />
          </UFormField>

          <UFormField label="Event Color">
            <UTabs
              v-model="eventLevel"
              :items="colorTabItems"
              size="sm"
              variant="pill"
              class="w-fit" />
          </UFormField>

          <UFormField label="Enter Start Date">
            <UInput
              v-model="eventStartDate"
              type="date"
              variant="outline"
              color="primary"
              class="w-full" />
          </UFormField>

          <UFormField label="Enter End Date">
            <UInput
              v-model="eventEndDate"
              type="date"
              variant="outline"
              color="primary"
              class="w-full" />
          </UFormField>
        </div>
      </template>

      <template #footer>
        <div
          class="flex flex-wrap items-center justify-end gap-3">
          <UButton
            label="Close"
            color="primary"
            variant="outline"
            @click="closeModal" />
          <UButton
            :label="
              selectedEvent
                ? 'Update Changes'
                : 'Add Event'
            "
            color="primary"
            @click="handleAddOrUpdateEvent" />
          <UButton
            v-if="selectedEvent"
            label="Delete Event"
            color="error"
            variant="solid"
            @click="handleDeleteEvent" />
        </div>
      </template>
    </UModal>
  </UCard>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

type CalendarEvent = {
  id: string
  title: string
  start: string
  end?: string
  allDay?: boolean
  extendedProps: { calendar: string }
}

const isOpen = ref(false)
const selectedEvent = ref<{
  id?: string
  title: string
  start?: Date | null
  end?: Date | null
  extendedProps?: { calendar?: string }
} | null>(null)
const eventTitle = ref('')
const eventStartDate = ref('')
const eventEndDate = ref('')
const eventLevel = ref('')
const events = ref<CalendarEvent[]>([])

const colorTabItems = [
  { label: 'Danger', value: 'Danger' },
  { label: 'Success', value: 'Success' },
  { label: 'Primary', value: 'Primary' },
  { label: 'Warning', value: 'Warning' },
]

const calendarRef = ref<InstanceType<
  typeof FullCalendar
> | null>(null)
const calendarTitle = ref('')
const activeView = ref('dayGridMonth')

const viewTabItems = [
  { label: 'Month', value: 'dayGridMonth' },
  { label: 'Week', value: 'timeGridWeek' },
  { label: 'Day', value: 'timeGridDay' },
]

const goPrev = () => {
  calendarRef.value?.getApi()?.prev()
}

const goNext = () => {
  calendarRef.value?.getApi()?.next()
}

const onViewChange = (view: string | number) => {
  calendarRef.value
    ?.getApi()
    ?.changeView(String(view))
}

const handleDatesSet = (dateInfo: {
  view: { title: string }
}) => {
  calendarTitle.value = dateInfo.view.title
}

onMounted(() => {
  events.value = [
    {
      id: '1',
      title: 'Event Conf.',
      start: new Date()
        .toISOString()
        .split('T')[0],
      extendedProps: { calendar: 'Danger' },
    },
    {
      id: '2',
      title: 'Meeting',
      start: new Date(Date.now() + 86400000)
        .toISOString()
        .split('T')[0],
      extendedProps: { calendar: 'Success' },
    },
    {
      id: '3',
      title: 'Workshop',
      start: new Date(Date.now() + 172800000)
        .toISOString()
        .split('T')[0],
      end: new Date(Date.now() + 259200000)
        .toISOString()
        .split('T')[0],
      extendedProps: { calendar: 'Primary' },
    },
  ]
})

const openModal = () => {
  if (!selectedEvent.value) {
    resetModalFields()
    eventLevel.value = 'Primary'
  }
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
  resetModalFields()
}

// Template'de @update:open ile kullanılıyor; ESLint SFC bağlantısını görmüyor
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onModalOpenChange(open: boolean) {
  if (!open) resetModalFields()
}

const resetModalFields = () => {
  eventTitle.value = ''
  eventStartDate.value = ''
  eventEndDate.value = ''
  eventLevel.value = ''
  selectedEvent.value = null
}

const handleDateSelect = (selectInfo: {
  startStr: string
  endStr?: string
}) => {
  resetModalFields()
  eventStartDate.value = selectInfo.startStr
  eventEndDate.value =
    selectInfo.endStr ?? selectInfo.startStr
  openModal()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleEventClick = (clickInfo: any) => {
  const event = clickInfo.event
  selectedEvent.value = event
  eventTitle.value = event.title
  eventStartDate.value =
    event.start?.toISOString().split('T')[0] || ''
  eventEndDate.value =
    event.end?.toISOString().split('T')[0] || ''
  eventLevel.value =
    event.extendedProps?.calendar ?? ''
  openModal()
}

const handleAddOrUpdateEvent = () => {
  const current = selectedEvent.value
  if (current?.id) {
    // Update existing event
    events.value = events.value.map((event) =>
      event.id === current.id
        ? {
            ...event,
            title: eventTitle.value,
            start: eventStartDate.value,
            end: eventEndDate.value,
            extendedProps: {
              calendar: eventLevel.value,
            },
          }
        : event,
    )
  } else {
    // Add new event
    const newEvent = {
      id: Date.now().toString(),
      title: eventTitle.value,
      start: eventStartDate.value,
      end: eventEndDate.value,
      allDay: true,
      extendedProps: {
        calendar: eventLevel.value,
      },
    }
    events.value.push(newEvent)
  }
  closeModal()
}
const handleDeleteEvent = () => {
  const current = selectedEvent.value
  if (current?.id) {
    events.value = events.value.filter(
      (event) => event.id !== current.id,
    )
    closeModal()
  }
}

const renderEventContent = (eventInfo: {
  event: {
    extendedProps: { calendar: string }
    title: string
  }
  timeText: string
}) => {
  const colorClass = `fc-bg-${eventInfo.event.extendedProps.calendar.toLowerCase()}`
  return {
    html: `
      <div class="event-fc-color flex fc-event-main ${colorClass} p-1 rounded-sm">
        <div class="fc-daygrid-event-dot"></div>
        <div class="fc-event-time">${eventInfo.timeText}</div>
        <div class="fc-event-title">${eventInfo.event.title}</div>
      </div>
    `,
  }
}

const calendarOptions = reactive({
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin,
  ],
  initialView: 'dayGridMonth',
  headerToolbar: false as const,
  events: events,
  selectable: true,
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventContent: renderEventContent,
  datesSet: handleDatesSet,
})
</script>
