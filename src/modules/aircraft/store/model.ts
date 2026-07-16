import { defineStore } from 'pinia'
import { ref } from 'vue'

import modelService from '../api/model.service'
import type { AircraftModel } from '../types'

export const useAircraftModel = defineStore('aircraftModel', () => {
  const models = ref<AircraftModel[]>([])
  const loading = ref(false)
  async function loadModels() {
    loading.value = true
    try {
      const response = await modelService.findAll()
      models.value = response.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  async function removeModel(id: string) {
    loading.value = true
    try {
      await modelService.delete(id)
      models.value = models.value.filter((a) => a.id !== id)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return {
    models,
    loading,
    loadModels,
    removeModel,
  }
})
