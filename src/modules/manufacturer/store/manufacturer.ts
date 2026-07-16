import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Manufacturer } from '../types'
import manufacturerService from '../api/manufacturer.service'

export const useManufacturer = defineStore('manufacturer', () => {
  const manufacturers = ref<Manufacturer[]>([])
  const loading = ref(false)
  async function loadManufacturers() {
    loading.value = true
    try {
      const response = await manufacturerService.findAll()
      manufacturers.value = response.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  async function removeManufacturer(id: string) {
    loading.value = true
    try {
      await manufacturerService.delete(id)
      manufacturers.value = manufacturers.value.filter((a) => a.id !== id)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return {
    manufacturers,
    loading,
    loadManufacturers,
    removeManufacturer,
  }
})
