<template>
  <Form :hideTitle="true" :message="data?.message" @submit="confirm" @reset="cancel"> </Form>
</template>
<script setup lang="ts">
import { DIALOG_DATA, DIALOG_REF, type DialogRef } from '@/plugins/dialog'
import { inject } from 'vue'
import type { ConfirmData } from '../types/api'

const data = inject<ConfirmData>(DIALOG_DATA)
const dialogRef = inject<DialogRef<boolean>>(DIALOG_REF)
function confirm() {
  dialogRef?.close(true)
}
function cancel() {
  dialogRef?.close(false)
}
</script>
