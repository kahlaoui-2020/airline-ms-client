<template>
  <v-card
    title="Airport"
    subtitle="This is the Airports page."
    class="fill-height d-flex flex-column"
    flat
  >
    <AirportTable :items="airports" :loading="loading" />
  </v-card>
</template>
<script setup lang="ts">
import AirportTable from '../components/AirportTable.vue'
import { useAirport } from '../store/airport.ts'
import { onMounted, toRefs } from 'vue'

const store = useAirport()
const { airports, loading } = toRefs(store)
onMounted(() => {
  store.loadAircrafts()
})
</script>
