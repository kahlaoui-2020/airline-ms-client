<template>
  <v-data-table :headers="headers" :items="items" class="fill-height" :loading="loading">
    <template #top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title>Aircraft Model</v-toolbar-title>
        <v-spacer />
        <v-btn color="white" text="Add Model" prepend-icon="mdi-plus" variant="flat" @click="add" />
      </v-toolbar>
    </template>
  </v-data-table>
</template>
<script setup lang="ts">
import { useDialog } from '@/plugins/dialog'
import type { AircraftModel } from '../../types'
import ModelForm from './ModelForm.vue'

defineProps<{ items: AircraftModel[]; loading: boolean }>()
const headers = [
  { title: 'ID', value: 'id' },
  { title: 'Name', value: 'name' },
  { title: 'Description', value: 'description' },
]

const dialog = useDialog()
async function add() {
  const dialogRef = dialog.open(ModelForm, {
    data: { title: 'Create Aircraft model' },
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
