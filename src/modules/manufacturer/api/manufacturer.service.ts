import { BaseService } from '@/shared/api/base.service'
import { http } from '@/shared/api/http'
import type { Manufacturer } from '../types'

export class ManufacturerService extends BaseService<Manufacturer> {
  constructor() {
    super('/manufacturer')
  }
  // aircraft specific operations
  search(query: string) {
    return http.get<Manufacturer[]>(`${this.endpoint}?search=${query}`)
  }
}

export default new ManufacturerService()
