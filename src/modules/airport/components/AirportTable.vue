<template>
  <v-data-table :headers="headers" :items="items" class="fill-height" :loading="loading">
    <template #top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title>Airports</v-toolbar-title>
        <v-spacer />
        <v-btn
          color="white"
          text="Add Airport"
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
import AirportForm from './AirportForm.vue'
import type { Airport } from '../types.ts'

defineProps<{ items: Airport[]; loading: boolean }>()
const headers = [
  { title: 'ID', value: 'id' },
  { title: 'IATA Code', value: 'iataCode' },
  { title: 'Name', value: 'name' },
  { title: 'Country', value: 'country' },
  { title: 'City', value: 'city' },
]

const dialog = useDialog()
async function add() {
  const dialogRef = dialog.open(AirportForm, {
    data: { title: 'Create Airport' },
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
