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
