import { clear, showError, showInfo, showSnackbar, showSuccess, showWarning } from './snackbarService'
import type { SnackbarService } from './types'

export function useSnackbar():SnackbarService {
  return {
    show: showSnackbar,
    success: showSuccess,
    error: showError,
    warning:showWarning,
    info: showInfo,
    clear: clear,
  }
}
