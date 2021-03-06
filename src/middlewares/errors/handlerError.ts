import { error } from '../../utils/response'
import config from '../../config'
import { Request, Response } from 'express'
export async function errorHandler (err: any, req: Request, res: Response, next: any): Promise<void> {
  console.log('el error:', err)
  interface ErrorType {
    statusCode: number
    message: any
    error?: string
    stack?: any
  }

  let msnError: ErrorType
  if (Array.isArray(err)) {
    msnError = {
      statusCode: 500,
      message: err
    }
  } else {
    msnError = {
      statusCode: err.statusCode ?? 500,
      error: err.descStatus,
      message: err.message
    }
  }
  if (config.dev) {
    msnError.stack = err.stack
  }
  error(req, res, msnError, 500)
  next()
}
