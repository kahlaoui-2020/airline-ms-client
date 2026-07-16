<template>
  <v-card :title="data?.title" :text="data?.message">
    <v-card-actions>
      <v-btn color="error" @click="cancel">Cancel</v-btn>
      <v-btn color="primary" @click="confirm">Confirm</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import type { ConfirmData } from '@/modules/aircrafts/types'
import { DIALOG_DATA, DIALOG_REF, type DialogRef } from '@/plugins/dialog'
import { inject } from 'vue'

const data = inject<ConfirmData>(DIALOG_DATA)
const dialogRef = inject<DialogRef<boolean>>(DIALOG_REF)
function confirm() {
  dialogRef?.close({ a: 'yes', b: 'no' })
}
function cancel() {
  dialogRef?.close(false)
}
</script>
