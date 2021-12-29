import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { handleRetry } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private UsersService: UsersService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session || {};

    if (userId) {
      const user = await this.UsersService.findOne(userId);
      request.currentUser = user;
    }

    return next.handle();
  }
}
