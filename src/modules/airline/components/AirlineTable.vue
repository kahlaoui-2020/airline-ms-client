<template>
  <v-data-table :headers="headers" :items="items" class="fill-height" :loading="loading">
    <template #top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title>Airlines</v-toolbar-title>
        <v-spacer />
        <v-btn
          color="white"
          text="Add Airline"
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
import AirlineForm from './AirlineForm.vue'
import type { Airline } from '../types.ts'

defineProps<{ items: Airline[]; loading: boolean }>()
const headers = [
  { title: 'ID', value: 'id' },
  { title: 'IATA Code', value: 'iataCode' },
  { title: 'Name', value: 'name' },
  { title: 'Country', value: 'country' },
]

const dialog = useDialog()
async function add() {
  const dialogRef = dialog.open(AirlineForm, {
    data: { title: 'Create Airline' },
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
