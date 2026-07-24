import type { Anchor } from 'vuetify'
import type { Variant } from 'vuetify/lib/composables/variant.mjs'

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SnackbarMessage {
  id?: number
  text?: string
  color?: string
  timeout?: number
  loccation?: string
  closable?: boolean
  [key: string]: any
}

export type SnackbarInput = string | SnackbarMessage

/** Default props forwarded straight to <v-snackbar-queue> */
export interface SnackbarQueueOptions {
  timeout?: number
  color?: string
  location: Anchor
  variant?: Variant
  totalVisible?: string | number
  displayStrategy?: 'hold' | 'overflow'
  timer?: boolean | 'top' | 'bottom'
  transition?: string
  [key: string]: any
}

export interface SnackbarService {
  /** Reactive queue, exposed mainly for debugging/devtools */
  messages?: SnackbarMessage[]
  show?: (text: string, opts?: Partial<SnackbarMessage>) => void
  success: (text: string, opts?: Partial<SnackbarMessage>) => void
  error: (text: string, opts?: Partial<SnackbarMessage>) => void
  warning: (text: string, opts?: Partial<SnackbarMessage>) => void
  info: (text: string, opts?: Partial<SnackbarMessage>) => void
  clear: () => void
}
