<template>
  <v-snackbar-queue v-model="messages" v-bind="options"/>
</template>
<script setup lang="ts">
 import { messages } from './state'
import type { SnackbarQueueOptions } from './types'
defineProps<{ options?: SnackbarQueueOptions }>()

</script>
