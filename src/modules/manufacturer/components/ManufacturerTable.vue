<template>
  <v-data-table :headers="headers" :items="items" class="fill-height" :loading="loading">
    <template #top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title>Manufacturers</v-toolbar-title>
        <v-spacer />
        <v-btn
          color="white"
          text="Add Manufacturer"
          prepend-icon="mdi-plus"
          variant="flat"
          @click="add"
        />
      </v-toolbar>
    </template>
  </v-data-table>
</template>
<script setup lang="ts">
import { useDialog } from '@/plugins/dialog'
import type { Manufacturer } from '../types'
import ManufacturerForm from './ManufacturerForm.vue'

defineProps<{ items: Manufacturer[]; loading: boolean }>()
const headers = [
  { title: 'ID', value: 'id' },
  { title: 'Model', value: 'model' },
  { title: 'Registration', value: 'registrationNo' },
]

const dialog = useDialog()
async function add() {
  const dialogRef = dialog.open(ManufacturerForm, {
    data: { title: 'Delete' },
    width: '400px',
    disableClose: false,
  })
  const confirmed = await dialogRef.afterClose()
  if (confirmed) {
    console.log('success')
  } else {
    console.log('error')
  }
}
</script>
