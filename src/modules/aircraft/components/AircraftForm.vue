<template>
  <v-form ref="formRef" v-model="valid" @submit.prevent="confirm">
    <v-card v-model="open" :subtitle="data?.subtitle" :text="data?.message">
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-headline-samll text-medium-emphasis ps-2">
          {{ data?.title }}
        </span>
        <v-btn icon="mdi-close" variant="text" @click="close" />
      </v-card-title>
      <v-divider class="mb-4" />
      <v-card-text>
        <v-alert v-if="errorMessage" type="error" variant="tonal" class="mb-4">
          {{ errorMessage }}
        </v-alert>
        <v-autocomplete
          v-model="form.airlineID"
          label="Airline"
          :items="['']"
          item-title="name"
          item-value="id"
          :rules="[rules.required]"
        />
        <v-text-field
          v-model="form.registrationNo"
          label="Registration number"
          :rules="[rules.required]"
        />
        <v-autocomplete
          v-model="form.modelID"
          label="Model"
          :items="['']"
          item-title="name"
          item-value="id"
          :rules="[rules.required]"
        />
        <v-autocomplete
          v-model="form.manufacturerID"
          label="Manufacturer"
          :items="['']"
          item-title="name"
          item-value="id"
          :rules="[rules.required]"
        />
        <v-number-input v-model="form.totalSeats" label="Total seats" :rules="[rules.required]" />
      </v-card-text>
      <v-divider class="mt-2" />
      <v-card-actions class="justify-end">
        <v-btn color="error" @click="reset">Reset</v-btn>
        <v-btn type="submit" color="primary">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
<script setup lang="ts">
import { DIALOG_DATA, DIALOG_REF, type DialogRef } from '@/plugins/dialog'

import { inject, reactive, ref } from 'vue'
import type { VForm } from 'vuetify/components'
import { getErrorMessage } from '@/shared/api/api-error'
import aircraftService from '../api/aircraft.service'
import type { Aircraft } from '../types'
import type { ConfirmData } from '@/shared/types/api'

const rules = {
  required: (v: unknown) => !!v,
}
const data = inject<ConfirmData>(DIALOG_DATA)
const dialogRef = inject<DialogRef<boolean>>(DIALOG_REF)
const valid = ref(false)
const formRef = ref<VForm>()
const form = reactive<Partial<Aircraft>>({})
const errorMessage = ref<string | null>(null)
async function confirm() {
  const isValid = (await formRef.value?.validate())?.valid
  if (!isValid) return
  errorMessage.value = null
  try {
    await aircraftService.create(form)
    dialogRef?.close(true)
  } catch (error) {
    errorMessage.value = getErrorMessage(error)
  }
}
function reset() {
  formRef.value?.reset()
  formRef.value?.resetValidation()
}
function close() {
  dialogRef?.close(false)
}
const open = ref(false)
</script>
