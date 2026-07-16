<template>
  <v-card
    title="Aircraft models"
    subtitle="This is the Aircrafts models page."
    class="fill-height d-flex flex-column"
    flat
  >
    <ModelTable :items="models" :loading="loading" />
  </v-card>
</template>
<script setup lang="ts">
import ModelTable from '../components/model/ModelTable.vue'
import { onMounted, toRefs } from 'vue'
import { useAircraftModel } from '../store/model.ts'

const store = useAircraftModel()
const { models, loading } = toRefs(store)
onMounted(() => {
  store.loadModels()
})
</script>
