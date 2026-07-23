<template>
  <v-form ref="formRef" v-model="valid" @submit.prevent="submit">
    <v-card :subtitle="subtitle" :text="message">
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-headline-small text-medium-emphasis ps-2">
          {{ title }}
        </span>
        <v-btn icon="mdi-close" variant="text" @click="close" />
      </v-card-title>
      <v-divider />
      <v-card-text :class="contentClass">
        <v-alert v-if="error" type="error" variant="tonal" class="mb-4">
          {{ error }}
        </v-alert>
        <slot />
      </v-card-text>
      <v-divider />
      <v-card-actions class="justify-end">
        <v-btn color="error" @click="resetForm" variant="text">{{ resetLabel }}</v-btn>
        <v-btn type="submit" color="primary" variant="tonal">{{ submitLabel }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { VForm } from 'vuetify/components'

withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    message?: string
    error?: string | null
    submitLabel?: string
    resetLabel?: string
    contentClass?: string
  }>(),
  {
    submitLabel: 'Confirm',
    resetLabel: 'Reset',
    contentClass: 'overflow-y-auto',
  },
)

const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'reset'): void
  (e: 'close'): void
}>()

const valid = ref(false)
const formRef = ref<VForm>()

async function submit() {
  const isValid = (await formRef.value?.validate())?.valid
  if (!isValid) return

  emit('submit')
}

function resetForm() {
  formRef.value?.reset()
  formRef.value?.resetValidation()
  emit('reset')
}

function close() {
  emit('close')
}

defineExpose({
  async validate() {
    return formRef.value?.validate()
  },
  reset() {
    resetForm()
  },
})
</script>
