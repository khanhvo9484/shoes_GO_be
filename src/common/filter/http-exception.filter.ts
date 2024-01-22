import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception?.message;

    const exceptionResponse = exception.getResponse();

    let exceptionResponseMessage: ExceptionOptions =
      exceptionResponse as ExceptionOptions;

    response.status(status).json({
      error: exceptionResponseMessage?.error || '#000000',
      statusCode: status,
      message: exceptionResponseMessage.message || message,
      timestamp: new Date().toISOString(),
      path: request?.url,
      method: request?.method,
    });
  }
}
