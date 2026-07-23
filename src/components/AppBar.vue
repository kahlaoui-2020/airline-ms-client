<template>
  <v-app-bar>
    <template #prepend>
      <v-app-bar-nav-icon @click="emit('toggle-drawer')" />
    </template>

    <v-toolbar-title>My App</v-toolbar-title>

    <v-spacer />

    <v-btn icon @click="toggleTheme">
      <v-icon>{{ themeIcon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useTheme } from 'vuetify'

const emit = defineEmits<{
  (e: 'toggle-drawer'): void
}>()

const theme = useTheme()
const currentTheme = ref('dark')

onMounted(() => {
  const stored = localStorage.getItem('theme')
  currentTheme.value = stored === 'light' ? 'light' : 'dark'
  theme.global.name.value = currentTheme.value
})

const isDark = computed(() => currentTheme.value === 'dark')
const themeIcon = computed(() => (isDark.value ? 'mdi-weather-night' : 'mdi-weather-sunny'))

const toggleTheme = () => {
  currentTheme.value = isDark.value ? 'light' : 'dark'
  theme.global.name.value = currentTheme.value
  localStorage.setItem('theme', currentTheme.value)
}
</script>
