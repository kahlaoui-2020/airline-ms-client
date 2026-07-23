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
      label="Airline"
      :items="['']"
      item-title="name"
      item-value="id"
      :rules="[rules.required]"
    />
    <v-text-field v-model="form.name" label="Name" :rules="[rules.required]" />
    <v-text-field v-model="form.country" label="Country" :rules="[rules.required]" />
  </Form>
</template>
<script setup lang="ts">
import { DIALOG_DATA, DIALOG_REF, type DialogRef } from '@/plugins/dialog'

import { inject, reactive } from 'vue'
import type { Airline } from '../types'
import type { ConfirmData } from '@/shared/types/api'
import { useAirline } from '../store/airline'
import Form from '@/shared/components/Form.vue'

const rules = {
  required: (v: unknown) => !!v,
}
const data = inject<ConfirmData>(DIALOG_DATA)
const dialogRef = inject<DialogRef<boolean>>(DIALOG_REF)
const form = reactive<Partial<Airline>>({})
const st = useAirline()

async function confirm() {
  const created = await st.createAirline(form)
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
