// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const loggedInUser = authService.loggedInUser;

  if (loggedInUser) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${loggedInUser.tokens.access_token}` }
    });
  }
  return next(req);
};
