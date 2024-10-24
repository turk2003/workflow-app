// roles.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Role } from '../models/logged-in-user';

export function rolesGuard(roles: Role[]): CanActivateFn {
  return (route, state) => {
    const loggedInUser = inject(AuthService).loggedInUser;

    if (loggedInUser && roles.includes(loggedInUser?.userProfile.role)) {
      return true;
    }

    inject(Router).navigate(['/']);
    return false;
  };
}
