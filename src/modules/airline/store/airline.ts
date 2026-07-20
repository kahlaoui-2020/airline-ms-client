import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getErrorMessage } from '@/shared/api/api-error'
import airlineService from '../api/airline.service'
import type { Airline } from '../types'

export const useAirline = defineStore('airline', () => {
  const airlines = ref<Airline[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  async function loadAirlines() {
    loading.value = true
    try {
      const response = await airlineService.findAll()
      airlines.value = response.data ?? []
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  async function createAirline(data: Partial<Airline>) {
    loading.value = true
    error.value = null
    try {
      const response = await airlineService.create(data)
      airlines.value.push(response.data)
      return response.data
    } catch (err) {
      error.value = getErrorMessage(err)
      return null
    } finally {
      loading.value = false
    }
  }
  async function removeAirline(id: string) {
    loading.value = true
    try {
      await airlineService.delete(id)
      airlines.value = airlines.value.filter((a) => a.id !== id)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return {
    airlines,
    loading,
    error,
    loadAirlines,
    createAirline,
    removeAirline,
  }
})
