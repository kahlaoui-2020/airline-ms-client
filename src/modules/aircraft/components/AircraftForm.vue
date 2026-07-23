<template>
  <Form
    :title="data?.title"
    :subtitle="data?.subtitle"
    :message="data?.message"
    :error="st.error"
    @submit="confirm"
    @reset="reset"
    @close="close"
  >
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
  </Form>
</template>
<script setup lang="ts">
import { DIALOG_DATA, DIALOG_REF, type DialogRef } from '@/plugins/dialog'

import { inject, reactive } from 'vue'
import type { Aircraft } from '../types'
import type { ConfirmData } from '@/shared/types/api'
import { useAircraft } from '../store/aircraft'

const rules = {
  required: (v: unknown) => !!v,
}
const data = inject<ConfirmData>(DIALOG_DATA)
const dialogRef = inject<DialogRef<boolean>>(DIALOG_REF)
const form = reactive<Partial<Aircraft>>({})
const st = useAircraft()
async function confirm() {
  const created = await st.createAircraft(form)
  if (created) {
    dialogRef?.close(true)
  }
}

function reset() {
  for (const key of Object.keys(form)) {
    delete form[key as keyof typeof form]
  }
}

function close() {
  dialogRef?.close(false)
}
</script>
