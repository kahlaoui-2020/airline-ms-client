import { BaseService } from '@/shared/api/base.service'
import { http } from '@/shared/api/http'
import type { AircraftModel } from '../types'

export class AircraftModelService extends BaseService<AircraftModel> {
  constructor() {
    super('/aircraftModel')
  }
  // aircraft specific operations
  search(query: string) {
    return http.get<AircraftModel[]>(`${this.endpoint}?search=${query}`)
  }
}

export default new AircraftModelService()
