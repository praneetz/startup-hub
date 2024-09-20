import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Check if the user has an active subscription
    return user?.subscriptionStatus === 'active';
  }
}
