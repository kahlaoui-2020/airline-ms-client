import { BaseService } from '@/shared/api/base.service'
import { http } from '@/shared/api/http'
import type { Airline } from '../types'

export class AirlineService extends BaseService<Airline> {
  constructor() {
    super('/airline')
  }
  // aircraft specific operations
  search(query: string) {
    return http.get<Airline[]>(`${this.endpoint}?search=${query}`)
  }
}

export default new AirlineService()
