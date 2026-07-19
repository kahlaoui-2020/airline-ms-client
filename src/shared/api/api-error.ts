export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly data?: unknown,
  ) {
    super(message)
    this.name = 'ApiError'
  }

  get isNotFound() {
    return this.status === 302 || this.status === 404
  }
}

export function getErrorMessage(error: unknown, fallback = 'Request failed'): string {
  if (error instanceof ApiError) {
    return error.message
  }

  if (error instanceof Error) {
    return error.message
  }

  if (typeof error === 'string') {
    return error
  }

  if (typeof error === 'object' && error !== null) {
    const candidate = error as {
      message?: unknown
      error?: unknown
      detail?: unknown
      response?: {
        data?: {
          message?: unknown
          error?: unknown
          detail?: unknown
        }
      }
    }

    if (typeof candidate.message === 'string') {
      return candidate.message
    }

    if (typeof candidate.error === 'string') {
      return candidate.error
    }

    if (typeof candidate.detail === 'string') {
      return candidate.detail
    }

    if (typeof candidate.response?.data?.message === 'string') {
      return candidate.response.data.message
    }

    if (typeof candidate.response?.data?.error === 'string') {
      return candidate.response.data.error
    }

    if (typeof candidate.response?.data?.detail === 'string') {
      return candidate.response.data.detail
    }
  }

  return fallback
}
