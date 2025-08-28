import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermission = this.reflector.get<string>('permission', context.getHandler());
    if (!requiredPermission) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // Exemplo: verifica se o usuário tem a permissão necessária
    if (!user || !user.permissions || !user.permissions.includes(requiredPermission)) {
      throw new ForbiddenException('Permissão insuficiente');
    }
    return true;
  }
}
