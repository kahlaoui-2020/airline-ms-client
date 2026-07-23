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
      v-model="form.iataCode"
      label="IATA Code"
      :items="['']"
      item-title="name"
      item-value="id"
      :rules="[rules.required]"
    />
    <v-text-field v-model="form.name" label="Name" :rules="[rules.required]" />
    <v-autocomplete
      v-model="form.country"
      label="Country"
      :items="['']"
      item-title="name"
      item-value="id"
      :rules="[rules.required]"
    />
    <v-autocomplete
      v-model="form.city"
      label="City"
      :items="['']"
      item-title="name"
      item-value="id"
      :rules="[rules.required]"
    />
  </Form>
</template>
<script setup lang="ts">
import { DIALOG_DATA, DIALOG_REF, type DialogRef } from '@/plugins/dialog'

import { inject, reactive } from 'vue'
import type { Airport } from '../types'
import type { ConfirmData } from '@/shared/types/api'
import { useAirport } from '../store/airport'
import Form from '@/shared/components/Form.vue'

const rules = {
  required: (v: unknown) => !!v,
}
const data = inject<ConfirmData>(DIALOG_DATA)
const dialogRef = inject<DialogRef<boolean>>(DIALOG_REF)
const form = reactive<Partial<Airport>>({})
const st = useAirport()

async function confirm() {
  const created = await st.createAirport(form)
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
