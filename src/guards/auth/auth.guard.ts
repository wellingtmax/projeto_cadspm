import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // Exemplo: verifica se existe um token de autenticação
    if (!request.headers.authorization) {
      throw new UnauthorizedException('Token não fornecido');
    }
    // Aqui você pode adicionar lógica para validar o token
    return true;
  }
}
