import {  ref } from 'vue'
import type { SnackbarMessage } from './types'

export const messages = ref<SnackbarMessage[]>([])
let uid = 0
export function nexId() {
  return ++uid
}
