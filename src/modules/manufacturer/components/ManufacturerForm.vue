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
    <v-text-field v-model="form.name" label="Name" :rules="[rules.required]" />
    <v-autocomplete
      v-model="form.country"
      label="Country"
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
import type { Manufacturer } from '../types'
import type { ConfirmData } from '@/shared/types/api'
import { useManufacturer } from '../store/manufacturer'
import Form from '@/shared/components/Form.vue'

const rules = {
  required: (v: unknown) => !!v,
}
const data = inject<ConfirmData>(DIALOG_DATA)
const dialogRef = inject<DialogRef<boolean>>(DIALOG_REF)
const form = reactive<Partial<Manufacturer>>({})
const st = useManufacturer()

async function confirm() {
  const created = await st.createManufacturer(form)
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
