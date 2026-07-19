import { defineStore } from 'pinia'
import { ref } from 'vue'
import airportService from '../api/airport.service'
import type { Airport } from '../types'

export const useAirport = defineStore('airport', () => {
  const airports = ref<Airport[]>([])
  const loading = ref(false)
  async function loadAircrafts() {
    loading.value = true
    try {
      const response = await airportService.findAll()
      airports.value = response.data ?? []
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  async function removeAircraft(id: string) {
    loading.value = true
    try {
      await airportService.delete(id)
      airports.value = airports.value.filter((a) => a.id !== id)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return {
    airports,
    loading,
    loadAircrafts,
    removeAircraft,
  }
})
