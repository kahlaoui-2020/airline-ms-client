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
    <v-text-field v-model="form.description" label="Description" />
  </Form>
</template>
<script setup lang="ts">
import { DIALOG_DATA, DIALOG_REF, type DialogRef } from '@/plugins/dialog'

import { inject, reactive } from 'vue'
import type { ConfirmData } from '@/shared/types/api'
import type { AircraftModel } from '../../types'
import { useAircraftModel } from '../../store/model'
import Form from '@/shared/components/Form.vue'

const rules = {
  required: (v: unknown) => !!v,
}
const data = inject<ConfirmData>(DIALOG_DATA)
const dialogRef = inject<DialogRef<boolean>>(DIALOG_REF)
const form = reactive<Partial<AircraftModel>>({})
const st = useAircraftModel()

async function confirm() {
  const created = await st.createModel(form)
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
