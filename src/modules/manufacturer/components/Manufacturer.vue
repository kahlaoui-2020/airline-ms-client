<template>
  <v-card
    title="Manufacturer"
    subtitle="This is the Manufacturers page."
    class="fill-height d-flex flex-column"
    flat
  >
    <ManufacturerTable :items="manufacturers" :loading="loading" />
  </v-card>
</template>
<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { useManufacturer } from '../store/manufacturer'
import ManufacturerTable from './ManufacturerTable.vue'
const store = useManufacturer()
const { manufacturers, loading } = toRefs(store)

onMounted(async () => {
  await store.loadManufacturers()
})
</script>
