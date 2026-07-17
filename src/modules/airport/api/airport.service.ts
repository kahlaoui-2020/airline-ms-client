import { BaseService } from '@/shared/api/base.service'
import { http } from '@/shared/api/http'
import type { Airport } from '../types'

export class AirportService extends BaseService<Airport> {
  constructor() {
    super('/airport')
  }
  // aircraft specific operations
  search(query: string) {
    return http.get<Airport[]>(`${this.endpoint}?search=${query}`)
  }
}

export default new AirportService()
