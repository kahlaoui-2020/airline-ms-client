import { messages } from './state'
import type { SnackbarMessage } from './types'

export function showSnackbar(text: string, opts: Omit<SnackbarMessage, 'text'> = {}) {
  messages.value.push({ text, ...opts })
}

export function showSuccess(text: string, opts: Omit<SnackbarMessage, 'text' | 'color'> = {}) {
  showSnackbar(text, { color: 'success', ...opts })
}

export function showError(text: string, opts: Omit<SnackbarMessage, 'text' | 'color'> = {}) {
  showSnackbar(text, { color: 'error', ...opts })
}
export function showWarning(text: string, opts: Omit<SnackbarMessage, 'text' | 'color'> = {}) {
  showSnackbar(text, { color: 'warning', ...opts })
}
export function showInfo(text: string, opts: Omit<SnackbarMessage, 'text' | 'color'> = {}) {
  showSnackbar(text, { color: 'info', ...opts })
}

export function clear() {
  messages.value = []
}
