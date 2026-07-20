<template>
  <v-card
    title="Airline"
    subtitle="This is the Airlines page."
    class="fill-height d-flex flex-column"
    flat
  >
    <AirlineTable :items="airlines" :loading="loading" />
  </v-card>
</template>
<script setup lang="ts">
import AirlineTable from '../components/AirlineTable.vue'
import { useAirline } from '../store/airline.ts'
import { onMounted, toRefs } from 'vue'

const store = useAirline()
const { airlines, loading } = toRefs(store)
onMounted(() => {
  store.loadAirlines()
})
</script>
